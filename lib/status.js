Template.ionConnectionStatus.helpers({
  label: function() {
    var statuses = {
      offline: "You are offline.",
      connecting: "Connecting...",
      connected: "Back online!"
    }
    return statuses[Meteor.status().status];
  }
});

Meteor.startup(function() {
  Meteor.autorun(function() {
    var status = Meteor.status().status;
    if (status === "offline") return $(".ion-connection-status").removeClass("hiding").show();
    if (status === "connected") {
      Meteor.setTimeout(function() {
        $(".ion-connection-status").addClass("hiding");
      }, 1000);
      return;
    };
  });
});

$(document).delegate(".ion-connection-status", "webkitAnimationEnd", function(e) {
	var ev = e.originalEvent || e
	var evName = ev.animationName || null;
	if (evName === "hideConnectionStatus") $(".ion-connection-status").hide();
});
