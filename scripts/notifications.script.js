let removeInterval = null;
const notificationsList = document.querySelector(".notifications");

export function createNotification(params) {
  const { text, type } = params;
  notificationsList.appendChild(createNotificationElement(text, type));
  //   remove interval if exist
  if (removeInterval) {
    clearInterval(removeInterval);
    removeInterval = null;
  }
  // create interval if doesn't exist
  if (!removeInterval) {
    removeInterval = setInterval(() => {
      removeNotification();
    }, 2000);
  }
}

// Removes first notification
function removeNotification() {
  notificationsList.removeChild(notificationsList.firstElementChild);

  if (!notificationsList.childNodes.length) {
    clearInterval(removeInterval);
    removeInterval = null;
  }
}

// removes notification when close button clicked
export function removeNotificationWithClick(notificationId) {
  notificationsList.removeChild(
    document.querySelector(`.notification[data-el_id='${notificationId}']`)
  );
  if (!notificationsList.childNodes.length) {
    clearInterval(removeInterval);
    removeInterval = null;
  }
}

// Generates notification element
function createNotificationElement(text, type) {
  // Create required elements for notification
  const newNotificationElement = document.createElement("li");
  const closeNotificationButton = document.createElement("button");
  const notificationTextElement = document.createElement("p");
  // Add required classes
  newNotificationElement.classList.add("notification", type);
  closeNotificationButton.classList.add("notification-close");
  notificationTextElement.classList.add("notification-text");
  // add text
  notificationTextElement.textContent = text;
  closeNotificationButton.textContent = "X";
  //   add button title
  closeNotificationButton.title = "Close notification";
  //   add Id to notification
  newNotificationElement.dataset.el_id = Date.now() + Math.random();
  //   append close button and text element to notification element
  newNotificationElement.appendChild(closeNotificationButton);
  newNotificationElement.appendChild(notificationTextElement);
  return newNotificationElement;
}
