Package.describe({
  name: "gwendall:meteoric-connection-status",
  summary: "Connection status in Meteoric",
  git: "https://github.com/gwendall/meteoric-connection-status.git",
  version: "0.1.1"
});

Package.onUse(function (api, where) {

  api.use([
    "jquery@1.11.3",
    "templating@1.0.11",
  ], "client");

  api.addFiles([
    "lib/status.html",
    "lib/status.css",
    "lib/status.js"
  ], "client");

});
