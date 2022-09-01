chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("google.com")){
        print("you are now on ");
        console.log("you are now on google.com");
    }
})