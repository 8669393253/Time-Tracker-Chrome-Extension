# Time-Tracker-Chrome-Extension

The **Time Tracker** Chrome extension helps you track how much time you spend on various websites as you browse. It records the time spent on active tabs and displays it in a clean, easy-to-read format. The extension also updates the time spent on the active domain in real-time, allowing you to stay mindful of your browsing habits.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [How It Works](#how-it-works)
   - [Manifest File](#manifest-file)
   - [Background Script](#background-script)
   - [Popup Display](#popup-display)
4. [Installation](#installation)
5. [Usage](#usage)
6. [How to Extend](#how-to-extend)
7. [Contributing](#contributing)
8. [License](#license)

## Introduction

The Time Tracker extension is designed to help you stay conscious of the time spent on different websites. It tracks the time spent on each site and displays the total time for each domain in the extension's popup. The extension is especially useful for users who want to monitor their productivity or reduce time spent on non-productive websites.

### Key Features:
- **Real-Time Time Tracking**: The extension updates the time spent on the currently active tab every second.
- **Persistent Tracking**: Time is stored in Chrome's local storage, so it persists across browser sessions.
- **Interactive Popup**: A simple and clean popup shows the time spent on each domain.
- **Motivational Footer**: A footer message to remind users to stay focused and mindful of their time.

## Features

- **Tracks Time on Active Tabs**: Automatically starts tracking when you switch to a new tab.
- **Stores Data Locally**: All time spent on different domains is saved in Chrome's local storage, making it accessible even after restarting the browser.
- **Real-Time Updates**: The popup updates every second to display the current time spent on the active domain.
- **Cross-Browser Compatibility**: Works seamlessly on Google Chrome and Chromium-based browsers.
- **Lightweight Design**: The extension doesn't consume much memory or processing power.

## How It Works

The extension consists of three key parts:

### 1. **Manifest File**
The **manifest file** defines the basic structure and settings for the Chrome extension. It includes essential details such as the name, version, description, required permissions, and the background script that will run in the background of the browser.

The manifest file also defines the popup HTML file that is displayed when the user clicks on the extension icon in the Chrome toolbar. It specifies the permissions needed to access browser tabs, local storage, and inject scripts into web pages.

### 2. **Background Script**
The **background script** is responsible for tracking the time spent on websites. It listens for events such as:
- The tab being activated or changed.
- The tab being updated or refreshed.
- The window focus changing (to determine if the user is still browsing or if the window has lost focus).

Whenever a new tab is focused or a tab is refreshed, the background script starts or resumes tracking the time spent on that website. It calculates the elapsed time in seconds and updates a data structure that stores the time spent for each domain.

The background script communicates with Chrome's local storage to save and retrieve time data, ensuring that the time spent on each website is stored even after the browser is closed and reopened.

### 3. **Popup Display**
The **popup HTML** file is shown when the user clicks on the extension icon. It displays the total time spent on each domain (website) that the user has visited. The popup dynamically updates to show real-time time tracking for the current active domain.

- **Time Display**: For each website (domain), the time is formatted in a human-readable form, showing hours, minutes, and seconds.
- **Real-Time Updates**: The time for the active tab is updated every second, so users can see how much time they’ve spent on the current site.
- **Footer Message**: The footer includes a motivational message reminding users to stay mindful of their time.

## Installation

To install the Time Tracker extension in your Chrome browser:

1. Download or clone the extension files to your local machine.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer Mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the folder containing the extension files.
5. The extension will be installed and appear in your browser’s extension toolbar.

Once installed, you can click on the extension icon to open the popup and start tracking your time.

## Usage

1. **Activate the Extension**: Click on the Time Tracker extension icon in your Chrome toolbar to open the popup.
2. **Time Tracking**: The extension will automatically start tracking the time spent on the active domain as soon as you navigate to a website. The time spent will update in real-time in the popup.
3. **View Time Data**: The popup shows a list of domains you’ve visited along with the time spent on each one.
4. **Reset or Close Tabs**: The extension tracks time continuously as long as the tab is open. If you close a tab, the time for that domain will be saved, and the extension will continue tracking time on new sites.
5. **Stay Focused**: The footer includes a motivational message to remind you to stay focused on your work or limit your time on non-productive websites.

## How to Extend

The Time Tracker extension can be further enhanced with additional features. Some potential ideas include:

1. **Daily/Weekly Summaries**: Add a summary of time spent each day or week, which can help users track their productivity over time.
2. **Time Goals**: Allow users to set time goals for specific domains, e.g., spending no more than 1 hour per day on social media.
3. **Categorized Time Tracking**: Allow users to categorize websites (e.g., social media, work, entertainment) and track the time spent in each category.
4. **Export Data**: Provide an option to export the time data to a file (e.g., CSV) for further analysis or record-keeping.

## Contributing

Contributions to the project are welcome! If you have suggestions for new features or improvements, feel free to fork the repository and submit a pull request. 

To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Implement the changes.
4. Open a pull request with a description of your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Summary

This **Time Tracker Chrome extension** is an effective tool to track the amount of time you spend on websites in real-time. It provides a user-friendly interface that allows users to view the time spent on various domains and encourages mindfulness when browsing. With features like real-time tracking, local storage, and a clean popup design, it's an excellent tool for improving productivity and staying focused.
