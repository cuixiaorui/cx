#!/usr/bin/env node
import { resolve } from "node:path";
import { createRequire } from "node:module";
import url from "node:url";

(async () => {
  const helloFilePath = "./hello.mjs";
  const origin = resolve(helloFilePath);
  const require = createRequire(origin);
  Object.assign(global, { require });
  await import(url.pathToFileURL(origin).toString());
})();

function $(command: string) {
  console.log("command: ", command);
}
