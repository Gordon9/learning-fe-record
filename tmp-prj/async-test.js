import parallelLimit from "async/parallelLimit.js";

async function wait() {
  const amount0fTimeToWait = Math.floor(Math.random() * 2000);
  console.log("waiting", amount0fTimeToWait);
  return new Promise((resolve) =>
    setTimeout(() => resolve(amountOfTimeToWait), amountOfTimeToWait)
  );
}

async function go() {
  // Run them as fast as possible, but only ever 3 at a time
  console.log("starting a lot of work");
  const res = await parallelLimit(
    [
      wait,
      wait,
      wait,
      wait,
      wait,
      wait,
      wait,
      wait,
      wait,
      wait,
      wait,
      wait,
      wait,
      wait,
      wait,
      wait,
      wait,
    ],
    3
  );
  console.log("Done", res);
}

go();
