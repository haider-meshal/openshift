import Link from 'next/link'
import Head from 'next/head'

//import stylesheet from '../styles/tailwind/app.css';
import stylesheet from '../styles/bootstrap/css/app.css';

export default ({ children, title = 'CMS' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      {process.env.NODE_ENV == 'production'
            ? <link rel="stylesheet" type="text/css" href={`/static/styles/app.css`} />
            : <style dangerouslySetInnerHTML={{ __html: stylesheet }} />}
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link href='/'><a>Home</a></Link> |
        <Link href='/about'><a>About</a></Link> |
        <Link href='/contact'><a>Contact</a></Link>
      </nav>
    </header>

    { children }

    <footer>
      {'I`m here to stay'}
    </footer>
  </div>
)

