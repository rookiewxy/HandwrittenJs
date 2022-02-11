/*
 * @Description: 
 * @Autor: wxy
 * @Date: 2022-02-11 10:55:12
 * @LastEditors: wxy
 * @LastEditTime: 2022-02-11 11:54:56
 */
// register.js
const fs = require("fs");
const Module = require("module");
const { transformSync } = require("esbuild");

Module._extensions[".ts"] = function (module, filename) {
  const content = fs.readFileSync(filename, "utf8");
  const { code } = transformSync(content, {
    sourcefile: filename,
    sourcemap: "both",
    loader: "ts",
    format: "cjs",
  });
  console.log(code, 'code', filename, 'filename');
  module._compile(code, filename);
};