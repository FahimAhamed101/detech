const { spawn } = require("child_process");
const { join } = require("path");

const port = process.env.PORT || "30005";
const host = process.env.HOST || "0.0.0.0";
const projectRoot = __dirname;

const child = spawn(
  process.execPath,
  [
    join(projectRoot, "node_modules", "next", "dist", "bin", "next"),
    "start",
    "-p",
    port,
    "-H",
    host,
  ],
  {
    cwd: projectRoot,
    stdio: "inherit",
    env: {
      ...process.env,
      PORT: port,
      HOST: host,
      NODE_ENV: process.env.NODE_ENV || "production",
    },
  }
);

child.on("exit", (code) => {
  process.exit(code ?? 0);
});
