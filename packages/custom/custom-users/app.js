'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var CustomUsers = new Module('custom-users');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
CustomUsers.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  CustomUsers.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  CustomUsers.menus.add({
    title: 'customUsers example page',
    link: 'customUsers example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  CustomUsers.aggregateAsset('css', 'customUsers.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    CustomUsers.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    CustomUsers.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    CustomUsers.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return CustomUsers;
});
