Package.describe({
  name: 'samcorcos:cordova',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Simple package for integrating geolocation and camera from Cordova.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Cordova.depends({
  "org.apache.cordova.geolocation": "0.3.12",
  "org.apache.cordova.camera": "0.3.6"
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('cordova.js');
});
