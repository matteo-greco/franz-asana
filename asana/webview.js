module.exports = (Franz, options) => {
  function getMessages() {
    const count = $(".topbar-notificationsButton.has-newNotifications").length;

    Franz.setBadge(count);
  }

  Franz.loop(getMessages);
}
