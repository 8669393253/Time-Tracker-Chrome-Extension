let activeTabId = null;
let activeDomain = null;
let startTime = null;
let timeSpent = {};
let updateInterval;

// Initialize storage with an empty timeSpent object if none exists
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ timeSpent: {} });
});

// Function to start tracking a new tab's time
function startTracking(tab) {
  if (tab.url) {
    const url = new URL(tab.url);
    activeTabId = tab.id;
    activeDomain = url.hostname;
    startTime = Date.now();
    startUpdatingTime(); // Start interval timer for active tab
  }
}

// Function to update time for the current active domain
async function updateCurrentTime() {
  if (activeDomain && startTime) {
    const elapsedTime = (Date.now() - startTime) / 1000; // Calculate elapsed time in seconds
    timeSpent[activeDomain] = (timeSpent[activeDomain] || 0) + elapsedTime;
    await chrome.storage.local.set({ timeSpent });
    startTime = Date.now(); // Reset start time for continuous tracking
  }
}

// Function to start an interval that updates the time every second for the active tab
function startUpdatingTime() {
  if (updateInterval) clearInterval(updateInterval);
  updateInterval = setInterval(updateCurrentTime, 1000); // Update every second
}

// Event listener when the active tab is changed
chrome.tabs.onActivated.addListener(async (activeInfo) => {
  await updateCurrentTime();
  const tab = await chrome.tabs.get(activeInfo.tabId);
  startTracking(tab);
});

// Event listener when the active tab is updated or reloaded
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.active) {
    await updateCurrentTime();
    startTracking(tab);
  }
});

// Event listener when the window focus changes
chrome.windows.onFocusChanged.addListener(async (windowId) => {
  if (windowId === chrome.windows.WINDOW_ID_NONE) {
    await updateCurrentTime();
    activeTabId = null;
    clearInterval(updateInterval); // Stop updating when no window is focused
  } else {
    const tabs = await chrome.tabs.query({ active: true, windowId });
    if (tabs.length > 0) {
      startTracking(tabs[0]);
    }
  }
});

// Event listener when a tab is closed
chrome.tabs.onRemoved.addListener(async (tabId) => {
  if (tabId === activeTabId) {
    await updateCurrentTime();
    activeTabId = null;
    activeDomain = null;
    clearInterval(updateInterval); // Stop updating when the tab is closed
  }
});
