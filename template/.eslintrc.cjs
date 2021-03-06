"use strict";
<% if (lang === "typescript") { %>
import { join } from "path";
<% } %>
module.exports = {
  root: true,
  extends: "plugin:@phanect/<%= lang === 'typescript' ? 'ts' : 'js' %>",

  env: {
    browser: true,
    node: true,
  },<% if (lang === "typescript") { %>
  parserOptions: {
    sourceType: "module",
    project: join(__dirname, "./tsconfig.json"),
  },<% } %>
  plugins: [ "@phanect" ],
};
