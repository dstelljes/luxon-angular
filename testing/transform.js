const compiler = require("typescript");
const configuration = require("../tsconfig.json");

module.exports = {
  process: (source, path) => path.endsWith('.ts')
    ? compiler.transpile(source, configuration.compilerOptions, path, [])
    : source
};
