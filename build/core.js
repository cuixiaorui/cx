import { spawn } from "node:child_process";
export function $(pieces, ...args) {
    return new Promise((resolve, reject) => {
        const command = pieces[0];
        const child = spawn("set -euo pipefail; " + command + ` '${args}'`, {
            cwd: process.cwd(),
            shell: true,
            stdio: ["inherit", "pipe", "pipe"],
        });
        let stdout = "";
        let stderr = "";
        // child 正常执行的话 那么会走这个事件监听
        child.stdout.on("data", (data) => {
            log({ kind: "stdout", data });
            stdout += data;
        });
        // 如果 child 报错了 那么会走这个事件监听
        child.stderr.on("data", (data) => {
            log({ kind: "stderr", data });
            stderr += data;
        });
        child.on("close", (code) => {
            // 如何子进程出问题了 那么code 为1
            if (code !== 0) {
                reject(new ProcessOutput("reject"));
            }
            // 0 代表的是成功
            // 没问题的时候返回的是 0
            resolve({ stdout });
        });
    });
}
function log(entry) {
    switch (entry.kind) {
        case "stderr":
            process.stderr.write(entry.data);
            break;
        case "stdout":
            process.stdout.write(entry.data);
            break;
    }
}
class ProcessOutput extends Error {
    constructor(message) {
        super(message);
    }
    toString() {
        return this.message;
    }
}
