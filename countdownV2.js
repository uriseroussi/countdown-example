const countdownElementV2 = document.querySelector('#countdownV2');

/**
 * Version 2 - Simple setInterval
 * Cons:
 * - setInterval is not precise, time drifts over long periods
 * - can be manipulated by changing system clock (affects Date.now())
 */
const countdownV2 = () => {
  const currentTime = Date.now();
  const timeLeft = countdownTo - currentTime;

  if (timeLeft < 0) {
    countdownElementV2.innerHTML = 'Liftoff! 🚀';
    clearInterval(timer);
    return;
  }

  const daysLeft = Math.floor(timeLeft / DAY_IN_MILLISECONDS);
  const hoursLeft = Math.floor(
    (timeLeft % DAY_IN_MILLISECONDS) / HOUR_IN_MILLISECONDS
  ).toLocaleString('en-US', { minimumIntegerDigits: 2 });
  const minutesLeft = Math.floor(
    (timeLeft % HOUR_IN_MILLISECONDS) / MINUTE_IN_MILLISECONDS
  ).toLocaleString('en-US', { minimumIntegerDigits: 2 });
  const secondsLeft = Math.floor(
    (timeLeft % MINUTE_IN_MILLISECONDS) / SECOND_IN_MILLISECONDS
  ).toLocaleString('en-US', { minimumIntegerDigits: 2 });

  countdownElementV2.innerHTML = `${daysLeft}d:${hoursLeft}h:${minutesLeft}m:${secondsLeft}s`;
};

const timer = setInterval(countdownV2, 1000);
