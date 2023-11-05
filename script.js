document.querySelector(".primary-header__mark-button").addEventListener("click", () => {
    const newNotificationList = document.querySelectorAll(".notification-block--new");
    const notificationDisplay = document.querySelector(".notification-number__display");

    for (notificationBlock of newNotificationList) {
        notificationBlock.classList.toggle("notification-block--new");
        const notificationActionMessage = notificationBlock.querySelector(".notification-block__action");

        /* pseudo elemnent */
        notificationActionMessage.classList.add("remove-red-dot");
    }
    notificationDisplay.textContent = 0;
})