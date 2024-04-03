function startCountdown(targetDate, elementId) {
    const targetTime = new Date(targetDate).getTime();
    const countdownElement = document.getElementById(elementId);

    function updateCountdown() {
        const now = new Date().getTime();
        const timeDifference = targetTime - now;

        if (timeDifference <= 0) {
            clearInterval(intervalId);
            countdownElement.textContent = 'Countdown expired!';
        } else {
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

            countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }

    updateCountdown(); // Initial update
    const intervalId = setInterval(updateCountdown, 1000);
}

// Start the countdowns when the page loads
window.onload = function () {
    startCountdown('March 15, 2024 14:00:00', 'countdown1');
    startCountdown('March 23, 2024 14:00:00', 'countdown2');
    startCountdown('March 26, 2024 14:00:00', 'countdown3');
    startCountdown('March 28, 2024 14:00:00', 'countdown4');
    startCountdown('March 30, 2024 14:00:00', 'countdown5');
};