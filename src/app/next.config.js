/* eslint-disable max-len, no-param-reassign, no-console, no-underscore-dangle, global-require */
const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const withTM = require('next-plugin-transpile-modules')
const path = require('path')
const nanoid = require('nanoid')

const { environment = 'build' } = process.env
const runtimeId = nanoid()

const nextPlugins = []

let analyzeTarget = ''
if (process.argv.indexOf('--bundle=server') !== -1) analyzeTarget = 'server'
else if (process.argv.indexOf('--bundle=client') !== -1) analyzeTarget = 'client'
else if (process.argv.indexOf('--bundle=both') !== -1) analyzeTarget = 'both'

nextPlugins.push(require('@zeit/next-source-maps'))
nextPlugins.push([
  require('@zeit/next-bundle-analyzer'),
  {
    analyzeServer: analyzeTarget === 'server' || analyzeTarget === 'both',
    analyzeBrowser: analyzeTarget === 'client' || analyzeTarget === 'both',
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: 'static',
        reportFilename: '../bundles/server.html'
      },
      browser: {
        analyzerMode: 'static',
        reportFilename: '../bundles/client.html'
      }
    }
  }
])

const nextConfig = {
  transpileModules: ['theme'],
  useFileSystemPublicRoutes: false,
  publicRuntimeConfig:
  environment !== 'build' ? { ...global.next_publicRuntimeConfig, runtimeId } : { runtimeId },
  webpack: (config, options) => {
    const { isServer } = options

    config.resolve.alias = {
      ...config.resolve.alias,
      '@icons': path.resolve(__dirname, './components/Icons'),
      '@services': path.resolve(__dirname, './services'),
      '@utils': path.resolve(__dirname, './utils'),
      '@context': path.resolve(__dirname, './context'),
      '@hoc': path.resolve(__dirname, './hoc'),
      '@components': path.resolve(__dirname, './components'),
      '@constants': path.resolve(__dirname, './constants'),
      '@reducers': path.resolve(__dirname, './reducers'),
      '@static': path.resolve(__dirname, './static'),
      '@mutations': path.resolve(__dirname, './mutations'),
      '@theme': path.resolve(__dirname, '../theme'),
      '@server': path.resolve(__dirname, '../server')
    }

    const staticPath = isServer ? '../static/' : 'static'

    const urlLoader = {
      loader: 'url-loader',
      options: {
        limit: 100000, // in bytes
        publicPath: './',
        outputPath: staticPath,
        name: '[name]-[hash].[ext]'
      }
    }

    config.module.rules.push(
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: {
          test: /\.js?$/
        },
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: ['@babel/preset-react', ['@babel/preset-env', { modules: 'auto' }]]
            }
          },
          {
            loader: '@svgr/webpack',
            options: {
              babel: false,
              prettier: false
            }
          }
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: {
          test: /\.(css)$/
        },
        loader: urlLoader
      },
    )

    config.module.rules.push(
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: urlLoader
      },
      {
        test: /\.(woff|woff2?|[ot]tf|eot)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          publicPath: '../../static/fonts/',
          outputPath: `${staticPath}/fonts/`
        }
      },
    )

    return config
  }/* ,
  exportPathMap() {
    return {
      // public
      '/about': { page: '/public/about/' },
      '/projects': { page: '/public/projects' },
      '/services': { page: '/public/services' },
      '/blog': { page: '/public/blog' },
      '/contact': { page: '/public/contact' },
      '/privacy': { page: '/public/legal/privacy' },
      '/terms': { page: '/public/legal/terms' },
      '/templates/colors': { page: '/public/templates/colors' },
      '/confirmation': { page: '/public/authentication/confirmation' },
      '/changepassword': { page: '/public/authentication/changepassword' },
      '/forgotpassword': { page: '/public/authentication/forgotpassword' },
      '/login': { page: '/public/authentication/login' },
      '/register': { page: '/public/authentication/register' },
      '/search': { page: '/public/search' },
      // user
      '/dashboard': { page: '/dashboard' },
      '/dashboard/profile': { page: '/dashboard/profile' },
      // admin
      '/admin': { page: '/admin/login' },
      '/admin/menu': { page: '/admin/menu' },
      '/admin/tools': { page: '/admin/tools/modules' },
      '/admin/tools/labels': { page: '/admin/tools/labels' },
      '/admin/pages': { page: '/admin/pages/home' },
      '/admin/pages/about': { page: '/admin/pages/about' },
      '/admin/pages/changepassword': { page: '/admin/pages/changepassword' },
      '/admin/pages/contact': { page: '/admin/pages/contact' },
      '/admin/pages/forgotpassword': { page: '/admin/pages/forgotpassword' },
      '/admin/pages/login': { page: '/admin/pages/login' },
      '/admin/pages/register': { page: '/admin/pages/register' },
      '/admin/pages/privacy': { page: '/admin/pages/privacy' },
      '/admin/pages/terms': { page: '/admin/pages/terms' },
      '/admin/pages/projects': { page: '/admin/pages/projects' },
      '/admin/pages/dashboard': { page: '/admin/pages/dashboard' },
      '/admin/pages/dashboard/profile': { page: '/admin/pages/dashboard/profile' },
      '/admin/pages/blog': { page: '/admin/pages/blog' },
      '/admin/pages/blog/category': { page: '/admin/pages/blog/category' },
      '/admin/pages/blog/post': { page: '/admin/pages/blog/post' },
      '/admin/pages/blog/posts': { page: '/admin/pages/blog/posts' }
    }
  } */
}

module.exports = withPlugins(nextPlugins, withTM(withCSS(nextConfig)))
