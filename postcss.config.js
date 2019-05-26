module.exports = {
  plugins: [
    require('postcss-easy-import')({ prefix: '_' }), // keep this first
    // do not minify on dev env.
    process.env.NODE_ENV !== 'development' &&
      require('cssnano')({
        preset: ['default', { discardComments: { removeAll: true } }],
        zindex: false
      })
  ].filter(Boolean)
}
