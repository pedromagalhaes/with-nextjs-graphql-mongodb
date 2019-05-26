import qs from 'query-string'

const injectPolyfillIO = () => {
  const { host, params } = {
    host: 'https://polyfill.io/v3/polyfill.min.js',
    params: qs.stringify({
      flags: ['gated', 'always'].join(', '),
      features: ['Promise.prototype.finally'].join(', ')
    })
  }

  const url = `${host}?${params}`

  return (
    <React.Fragment>
      <link rel='preload' as='script' href={url} crossOrigin='crossorigin' />
      <script crossOrigin='anonymous' src={url} />
    </React.Fragment>
  )
}

export default injectPolyfillIO
