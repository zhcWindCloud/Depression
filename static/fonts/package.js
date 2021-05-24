var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-css',
  summary : 'Semantic UI - CSS Release of Semantic UI',
  version : '2.4.1',
  git     : 'git://github.com/Semantic-Org/Semantic-UI-CSS.git',
});

Package.onUse(function(api) {

  api.versionsFrom('1.0');

  api.use('jquery', 'client');

  api.addFiles([
    // icons
    '/static/fonts/icons.eot',
    '/static/fonts/icons.svg',
    '/static/fonts/icons.ttf',
    '/static/fonts/icons.woff',
    '/static/fonts/icons.woff2',


    // release
    'semantic.css',
    'semantic.js'
  ], 'client');

});
