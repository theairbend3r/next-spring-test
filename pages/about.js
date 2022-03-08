import React from 'react'
import tw from 'twin.macro'
import { Button, Logo } from './../components'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}

const AboutPage = () => (
  <div css={styles.container({ hasBackground: true })}>
    <div tw="flex flex-col justify-center h-full gap-y-5">
      <p> About </p>
    </div>
    <Logo />
  </div>
)

export default AboutPage
