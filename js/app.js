var app = new Framework7({
    // App root element
    el: '#app',
    // App Name
    name: 'My App',
    // Enable swipe panel
    panel: {
      swipe: true,
    },
    // Add default routes
    routes: [
      {
        path: "/home/",
        url: 'index.html',
      },
      {
        path: "/location/",
        url: "location.html",
      },
      {
        path: "/contacto/",
        url: "contacto.html",
      }
     
    ],
    // ... other parameters
  });
  
  var mainView = app.views.create('.view-main');