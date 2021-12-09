// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <title>IWANT</title>
            <meta charSet='utf-8' />
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script type="text/javascript" src="static/js/jquery.1.11.1.js"></script>
          <script type="text/javascript" src="static/js/bootstrap.js"></script>
          <script type="text/javascript" src="static/js/nivo-lightbox.js"></script>
          <script type="text/javascript" src="static/js/jqBootstrapValidation.js"></script>
          <script type="text/javascript" src="static/js/contact_me.js"></script>
          <script type="text/javascript" src="static/js/main.js"></script>
        </body>
      </Html>
    )
  }
}
