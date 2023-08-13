const countdownElementV3 = document.querySelector('#countdownV3');

/**
 * Version 3 - With request animation frame
 * Cons:
 * - can be manipulated by changing system clock (affects Date.now())
 */
const countdownV3 = () => {
  const currentTime = Date.now();
  const timeLeft = countdownTo - currentTime;

  if (timeLeft < 0) {
    countdownElementV3.innerHTML = 'Liftoff! 🚀';
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

  countdownElementV3.innerHTML = `${daysLeft}d:${hoursLeft}h:${minutesLeft}m:${secondsLeft}s`;

  requestAnimationFrame(countdownV3);
};

requestAnimationFrame(countdownV3);
