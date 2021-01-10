import * as React from 'react'
import Helmet from 'react-helmet'

import { Intro } from '../components/Intro'
import { EshopList } from '../components/EshopList'
import { Footer } from '../components/Footer'
import IndexLayout from '../layouts'

const IndexPage: React.FC = () => {
  return (
    <IndexLayout>
      <Helmet meta={[{ property: 'og:url', content: 'https://keebs.page/index.html' }]} />
      <Intro />
      <EshopList />
      <Footer />
    </IndexLayout>
  )
}

export default IndexPage
