#!/usr/bin/env cx
// $`cat ../package.json`
let name = "foo";
const r = await $`mkdir ${name}`;

const catResult = await $`cat ../package.json`;

// const r = await $`set -euo pipefail; mkdir foo; cat ../package.json`
// console.log(r)
