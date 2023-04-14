import { spawn } from "node:child_process";

export function $(pieces: TemplateStringsArray) {
  return new Promise((resolve, reject) => {
    const command = pieces[0];

    const child = spawn(command, {
      cwd: process.cwd(),
      shell: true,
      stdio: ["pipe", "pipe", "pipe"],
    });

    let stdout = "";

    child.stdout.on("data", (chunk) => {
      stdout += chunk;
    });

    child.on("close", () => {
      console.log(stdout);
      resolve(stdout);
    });
  });
}
