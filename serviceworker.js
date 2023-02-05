

    self.addEventListener("fetch", (event) => {
        event.respondWith("Welcome to the Gotham Imperial Hotel.\n"+
        "There seems to be a problem with your connection.\n"+
        "We look forward to telling you about our hotel as soon as you go online.");
      });