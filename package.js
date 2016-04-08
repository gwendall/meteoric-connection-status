Package.describe({
  name: "gwendall:meteoric-connection-status",
  summary: "Connection status in Meteoric",
  git: "https://github.com/gwendall/meteoric-connection-status.git",
  version: "0.2.0"
});

Package.onUse(function (api, where) {

  api.use([
    "jquery",
    "templating"
  ], "client");

  api.addFiles([
    "lib/status.html",
    "lib/status.css",
    "lib/status.js"
  ], "client");

});
