function listenForClicks() {
    document.addEventListener("click", (e)) => {
        
    }
}

browser.tabs.executeScript({file: "/content_scripts/generate_sarcasm.js"})
.then(listenForClicks)
.catch(reportExecuteScriptError);