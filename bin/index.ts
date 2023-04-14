#!/usr/bin/env node
import { resolve } from "node:path";
import { createRequire } from "node:module";
import { $ } from "./core.js";
import url from "node:url";

(async () => {
  const helloFilePath = "./hello.mjs";
  const origin = resolve(helloFilePath);
  const require = createRequire(origin);
  Object.assign(global, { require });
  await import(url.pathToFileURL(origin).toString());
})();

Object.assign(global, { $ });
