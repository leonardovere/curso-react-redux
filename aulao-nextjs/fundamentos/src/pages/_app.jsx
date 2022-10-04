import '../styles/globals.css'
/**
 * Todo css referenciado é passado de maneira global neste arquivo
 */
import '../styles/app.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
