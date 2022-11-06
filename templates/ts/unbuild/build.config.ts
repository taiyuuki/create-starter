const { defineBuildConfig } = require('unbuild')

export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  declaration: true,
  clean: true,
  rollup: { emitCJS: true },
})