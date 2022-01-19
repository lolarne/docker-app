const process = require("process");

setInterval(() => console.log("Hello BTS world!"), 1000);

process.on("SIGINT", () => {
  console.info("Interrupted");
  process.exit(0);
});
