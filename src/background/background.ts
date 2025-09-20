chrome.runtime.onInstalled.addListener(() => {
  console.log("Split Soul Extension Installed!");
});

chrome.tabs.onCreated.addListener((tab) => {
  console.log("New Tab Created:", tab);
});
