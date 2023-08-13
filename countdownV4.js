const countdownElementV4 = document.querySelector('#countdownV4');

/**
 * Version 4 - With requestAnimationFrame + performance.now() + API
 */
let today = Date.now();

const countdownV4 = () => {
  const currentTime = performance.now();
  const timeLeft = countdownTo - today - currentTime;

  if (timeLeft < 0) {
    countdownElementV4.innerHTML = 'Liftoff! 🚀';
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

  countdownElementV4.innerHTML = `${daysLeft}d:${hoursLeft}h:${minutesLeft}m:${secondsLeft}s`;

  requestAnimationFrame(countdownV4);
};

const main = async () => {
  try {
    const dateTimeRequest = await fetch(
      'http://worldtimeapi.org/api/timezone/Etc/UTC'
    );
    today = (await dateTimeRequest.json()).unixtime * 1000;
    countdownTo = today + DAY_IN_MILLISECONDS;
  } catch (err) {
    console.log(err);
  }
  requestAnimationFrame(countdownV4);
};

main();
