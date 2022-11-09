import { MantineProvider } from '@mantine/core'
import Layout from '../components/Layout'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </MantineProvider>
  )
}

export default MyApp
