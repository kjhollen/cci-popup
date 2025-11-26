let helloWindow;

// must click to open the popup, otherwise the browser will block it
window.addEventListener("click", (e) => {
  // open a tiny window with the html file loaded in it
  helloWindow = window.open("popup.html", "myPopup", "height=200,width=400");

  // close the window automatically after 3 seconds
  setTimeout(() => helloWindow.close(), 3000);
});

