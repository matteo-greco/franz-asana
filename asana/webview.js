module.exports = (Franz, options) => {
  function getMessages() {
    const inbox = document.querySelector('.topbar-notificationsButton.has-newNotifications');
    const count = inbox === null ? 0 : 1;

    Franz.setBadge(count);
  }

  Franz.loop(getMessages);
}
