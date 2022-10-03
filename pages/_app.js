import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head";

const title = "#Week4 ChatRoom App - Z22096017";
const author = "Z22096017 0xm061i6";
const description = "a chat room";
function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
        <title>{title}</title>
        <meta name="author" content={author}/>
        <meta name="description" content={description} />
        <meta property="og:title" content={title}/>
        <meta property="og:image" content="./og_image.jpg"/>
        <meta property="og:description" content={description}/>
        <link rel="icon" href="./favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
    </Head>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
