const countdownElementV1 = document.querySelector('#countdownV1');

/**
 * Version 1 - Simple setTimeout
 * Cons:
 * - setTimeout is not precise, time drifts over long periods
 * - can be manipulated by changing system clock (affects Date.now())
 */
const countdownV1 = () => {
  const currentTime = Date.now();
  const timeLeft = countdownTo - currentTime;

  if (timeLeft < 0) {
    countdownElementV1.innerHTML = 'Liftoff! 🚀';
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

  countdownElementV1.innerHTML = `${daysLeft}d:${hoursLeft}h:${minutesLeft}m:${secondsLeft}s`;

  setTimeout(countdownV1, 1000);
};

setTimeout(countdownV1, 1000);
