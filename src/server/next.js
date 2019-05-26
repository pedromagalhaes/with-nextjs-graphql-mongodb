/* eslint-disable global-require, no-param-reassign, max-len */
(function nextJs(moduleExports) {
  // Set up the proxy.
  moduleExports.init = (server, app) => {
    const handle = app.getRequestHandler()

    // Serve Static
    server.get(/^\/(_next|static)\/.+$/, (req, res) => handle(req, res))

    server.get('*', (req, res) => handle(req, res))
  }
}(module.exports))
