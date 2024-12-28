const notifications = document.querySelectorAll(".notification");
const countElement = document.querySelector(".count");
const markAllRead = document.querySelector("#mark");

const updateCount = () => {
  const activeNotifications = document.querySelectorAll(
    ".notification.active"
  ).length;
  countElement.textContent = activeNotifications;
};

notifications.forEach((notification) => {
  notification.addEventListener("click", () => {
    notification.classList.toggle("active");

    updateCount();
  });
});

updateCount();

markAllRead.addEventListener("click", () => {
  const activeNotifications = document.querySelectorAll(".notification.active");
  activeNotifications.forEach((notification) => {
    notification.classList.remove("active");
  });

  updateCount();
});
