import Link from 'next/link'
import { useRouter } from 'next/router'
import GlobalStyles from './../styles/GlobalStyles'
import { useTransition, animated, config } from '@react-spring/web'

const Nav = () => {
  return (
    <div>
      <Link href="/">
        <a>home</a>
      </Link>
      <p> </p>
      <Link href="/about">
        <a>about</a>
      </Link>
    </div>
  )
}

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  const transition = useTransition(router.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    exitBeforeEnter: true,
  })
  return (
    <div>
      <GlobalStyles />
      <Nav />
      {transition(
        (style, item) =>
          item && (
            <animated.div style={style}>
              <Component {...pageProps} />
            </animated.div>
          ),
      )}
    </div>
  )
}
export default App
