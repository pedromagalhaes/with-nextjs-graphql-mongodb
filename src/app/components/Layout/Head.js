import Head from 'next/head'
import 'semantic-ui-css/semantic.min.css'
import 'nprogress/nprogress.css'
import { injectPolyfillIO } from '../../utils'

export default React.memo(() => {
  const gtmScript = `
  window.addEventListener('load', function(event) {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-23725125-1');
  })`
  return (
    <Head>
      <title>Pedro Magalhães | Software Engineer</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=0' />
      {/* Open Graph Data */}
      <meta property='og:site_name' content='Pedro Magalhães' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Pedro Magalhães | Software Engineer' />
      <meta property='og:url' content='https://www.pedromagalhaes.com/' />
      <meta
        property='og:description'
        content='Pedro Magalhães is a software engineer based in Algarve.'
      />{' '}
      {/* eslint-disable-line max-len */}
      <meta property='og:image' content='' />
      {/* Twitter */}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content='Pedro Magalhães' />
      <meta name='twitter:site' content='Pedro Magalhães' />
      <meta
        name='twitter:description'
        content='Pedro Magalhães is a software engineer based in Algarve.'
      />{' '}
      {/* eslint-disable-line max-len */}
      <meta name='twitter:image:src' content='' />
      {/* Google, Bing and Facebook App Verification */}
      <meta
        name='google-site-verification'
        content='google-site-verification=-X2gefQLbXmhgn5D0gqu2-dCcabbK_OoXGh3OP3kR0A'
      />{' '}
      {/* eslint-disable-line max-len */}
      <meta name='msvalidate.01' content='' />
      <meta property='fb:app_id' content='' />
      <link href='https://fonts.googleapis.com/css?family=Ubuntu' rel='stylesheet' />
      {/* <!--[if IE]> */} <link rel='shortcut icon' href='/static/favicon/favicon.ico' /> {/* <![endif]--> */}
      <meta name='msapplication-TileImage' content='/static/favicon/mstile-150x150.png' />
      <link rel='apple-touch-icon' href='/static/favicon/apple-touch-icon.png' />
      <link rel='android-touch-icon' href='/static/favicon/apple-touch-icon.png' />
      <link rel='icon' type='image/png' href='/static/favicon/android-chrome-192x192.png' sizes='128x128' />
      <link rel='apple-touch-icon-precomposed' sizes='144x144' href='/static/favicon/android-chrome-192x192.png' />
      <link rel='apple-touch-icon-precomposed' sizes='114x114' href='/static/favicon/android-chrome-192x192.png' />
      <link rel='apple-touch-icon-precomposed' sizes='72x72' href='/static/favicon/android-chrome-192x192.png' />
      <link rel='apple-touch-icon-precomposed' sizes='57x57' href='/static/favicon/android-chrome-192x192.png' />
      <script async src='https://www.googletagmanager.com/gtag/js?id=UA-23725125-1' />
      {/* eslint-disable-next-line react/no-danger */}
      <script id='gtm-head' dangerouslySetInnerHTML={{ __html: gtmScript }} />
      {injectPolyfillIO()}
    </Head>
  )
})
