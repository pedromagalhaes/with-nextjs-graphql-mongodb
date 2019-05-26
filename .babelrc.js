const isDev = process.env.NODE_ENV !== 'production'
const isDebug = process.env.x_app_debug === 'true'

module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
          debug: isDebug
        }
      }
    ]
  ],
  plugins: [
    [
      "babel-plugin-styled-components",
      {
        "minify": !isDev,
        "displayName": true,
        "preprocess": false
      }
    ],
  ].filter(Boolean)
}
