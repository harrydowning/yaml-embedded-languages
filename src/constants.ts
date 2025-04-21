import packageJson from "@package";

export const SUB_INCLUDE_CONFIG = "include";
export const INCLUDE_CONFIG = `${packageJson.name}.${SUB_INCLUDE_CONFIG}`;
export const VERSION_STATE = "version";
export const PRE_RELEASE = process.env.PRE_RELEASE === "true";

export type Languages = {
  [key: string]: {
    name: string;
    scopeName: string;
    stripIndent: boolean;
  };
};

/* eslint sort-keys: ["error", "asc"] */
export const LANGUAGES = {
  bat: "source.batchfile",
  bibtex: "text.bibtex",
  c: "source.c",
  "c#": {
    name: "csharp",
    scopeName: "source.cs",
  },
  "c\\+\\+": {
    name: "cpp",
    scopeName: "source.cpp",
  },
  clojure: "source.clojure",
  coffee: {
    name: "coffeescript",
    scopeName: "source.coffee",
  },
  cpp: "source.cpp",
  csharp: "source.cs",
  css: "source.css",
  cuda: {
    name: "cuda-cpp",
    scopeName: "source.cuda-cpp",
  },
  dart: "source.dart",
  diff: {
    scopeName: "source.diff",
    stripIndent: true,
  },
  dockercompose: {
    scopeName: "source.yaml",
    stripIndent: true,
  },
  dockerfile: "source.dockerfile",
  "f#": {
    name: "fsharp",
    scopeName: "source.fsharp",
  },
  fsharp: "source.fsharp",
  go: "source.go",
  groovy: "source.groovy",
  handlebars: "text.html.handlebars",
  hlsl: "source.hlsl",
  html: "text.html.derivative",
  ini: "source.ini",
  jade: "text.pug",
  java: "source.java",
  javascript: "source.js",
  js: {
    name: "javascript",
    scopeName: "source.js",
  },
  json: "source.json",
  jsonc: "source.json.comments",
  jsonl: "source.json.lines",
  jsx: {
    name: "javascriptreact",
    scopeName: "source.js.jsx",
  },
  julia: "source.julia",
  latex: {
    scopeName: "text.tex.latex",
    stripIndent: true,
  },
  less: "source.css.less",
  log: "text.log",
  lua: "source.lua",
  make: {
    name: "makefile",
    scopeName: "source.makefile",
  },
  makefile: "source.makefile",
  markdown: {
    scopeName: "text.html.markdown",
    stripIndent: true,
  },
  math: {
    name: "markdown-math",
    scopeName: "text.html.markdown.math",
  },
  objc: {
    name: "objective-c",
    scopeName: "source.objc",
  },
  objcpp: {
    name: "objective-cpp",
    scopeName: "source.objcpp",
  },
  perl: "source.perl",
  php: "text.html.php",
  pip: {
    name: "pip-requirements",
    scopeName: "source.pip-requirements",
  },
  powerfx: {
    name: "javascript",
    scopeName: "source.js",
  },
  powershell: "source.powershell",
  properties: "source.ini",
  py: {
    name: "python",
    scopeName: "source.python",
  },
  python: "source.python",
  r: "source.r",
  raku: "source.perl.6",
  razor: "text.html.cshtml",
  regex: "source.js.regexp",
  requirements: {
    name: "pip-requirements",
    scopeName: "source.pip-requirements",
  },
  rst: {
    name: "restructuredtext",
    scopeName: "source.rst",
  },
  ruby: "source.ruby",
  rust: "source.rust",
  scss: "source.css.scss",
  shaderlab: "source.shaderlab",
  shell: {
    name: "shellscript",
    scopeName: "source.shell",
  },
  sql: "source.sql",
  swift: "source.swift",
  tex: "text.tex",
  ts: {
    name: "typescript",
    scopeName: "source.ts",
  },
  tsx: {
    name: "typescriptreact",
    scopeName: "source.tsx",
  },
  typescript: "source.ts",
  vb: "source.asp.vb.net",
  xml: "text.xml",
  xsl: "text.xml.xsl",
  yaml: {
    scopeName: "source.yaml",
    stripIndent: true,
  },
  helm: {
    scopeName: "source.helm",
    stripIndent: true,
  },
};
