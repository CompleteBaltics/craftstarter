function router(path){
  var rout;
  const pathParams = path.split( '/' );
  // Dynamically Load Modules
  switch(pathParams[1]) {

      // Home Page
      case '':
        // Import the module
        rout = 'home.js';

        break;

      // Fallback Page
      default:
        // Import the module
        rout = 'base.js';
  }

  import('./routes/' + rout).then(module => {
    // const newPage = new module.default();
    // newPage.init();
  });
};

router(window.location.pathname);

module.exports = {
  init: router
}
