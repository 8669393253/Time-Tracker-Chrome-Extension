let activeDomain = null;
let activeStartTime = Date.now();

document.addEventListener("DOMContentLoaded", async () => {
  // Fetch the initial time spent data
  const data = await chrome.storage.local.get("timeSpent");
  const timeSpent = data.timeSpent || {};

  // Get the active tab to identify the active domain
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab) {
    const url = new URL(tab.url);
    activeDomain = url.hostname;
    activeStartTime = Date.now();
  }

  // Function to render the time data
  function renderTime() {
    const container = document.getElementById("time-container");
    container.innerHTML = "";

    // Loop through each domain and display formatted time
    for (const [domain, seconds] of Object.entries(timeSpent)) {
      const timeEntry = document.createElement("div");
      
      // Calculate time for the active domain in real-time
      const timeForDomain = domain === activeDomain
        ? seconds + (Date.now() - activeStartTime) / 1000
        : seconds;

      timeEntry.textContent = `${domain}: ${formatTime(timeForDomain)}`;
      container.appendChild(timeEntry);
    }
  }

  // Function to format time in "hours:minutes:seconds"
  function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    const hrsDisplay = hrs > 0 ? `${hrs} hour${hrs > 1 ? "s" : ""}: ` : "";
    const minsDisplay = mins > 0 ? `${mins} min${mins > 1 ? "s" : ""}: ` : "";
    const secsDisplay = `${secs} sec${secs > 1 ? "s" : ""}`;

    return `${hrsDisplay}${minsDisplay}${secsDisplay}`;
  }

  // Update the display every second
  setInterval(renderTime, 1000);
});
