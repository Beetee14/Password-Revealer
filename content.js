// First functionality
// alert("Hello from B Money");


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {
        // This jquery code has to be called by a content script because they
        // have access to the current page, unlike background scripts
        $("[type='password']").attr("type", "text");
    }
  }
);
