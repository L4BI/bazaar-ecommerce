import '@@/styles/globals.css'
import { StateContext } from '../../context/StateContext'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }) {

  return <StateContext>
   <>
   <Component {...pageProps} />
   <Toaster/>
   </>
  </StateContext>
}
