#!/usr/bin/env node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { resolve } from "node:path";
import { createRequire } from "node:module";
import { $ } from "./core.js";
import url from "node:url";
(() => __awaiter(void 0, void 0, void 0, function* () {
    const helloFilePath = "./hello.mjs";
    const origin = resolve(helloFilePath);
    const require = createRequire(origin);
    Object.assign(global, { require });
    yield import(url.pathToFileURL(origin).toString());
}))();
Object.assign(global, { $ });
