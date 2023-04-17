#!/usr/bin/env node

import { resolve } from "node:path";
import { createRequire } from "node:module";
import url from "node:url";
import "./globals.js";

await (async () => {
  const helloFilePath = "./hello.mjs";
  const origin = resolve(helloFilePath);
  const require = createRequire(origin);
  Object.assign(global, { require });
  await import(url.pathToFileURL(origin).toString());
})().catch((processOutput) => {
  console.error(processOutput.message)
  process.exitCode = 1;
});
