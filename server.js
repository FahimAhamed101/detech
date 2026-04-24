const { existsSync } = require("fs");
const { join } = require("path");
const { spawn } = require("child_process");

const port = process.env.PORT || "3000";
const host = process.env.HOST || "0.0.0.0";
const standaloneServer = join(process.cwd(), ".next", "standalone", "server.js");

const child = existsSync(standaloneServer)
  ? spawn(process.execPath, [standaloneServer], {
      stdio: "inherit",
      env: {
        ...process.env,
        PORT: port,
        HOSTNAME: host,
      },
    })
  : spawn(
      process.execPath,
      ["./node_modules/next/dist/bin/next", "start", "-H", host, "-p", port],
      {
        stdio: "inherit",
        env: process.env,
      }
    );

child.on("exit", (code) => {
  process.exit(code ?? 0);
});
