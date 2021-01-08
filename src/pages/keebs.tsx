import * as React from 'react'
import Helmet from 'react-helmet'

import { EshopList } from '../components/EshopList'
import KeebsLayout from '../layouts'

const KeebsPage: React.FC = () => {
  return (
    <KeebsLayout>
      <Helmet meta={[{ property: 'og:url', content: 'https://toaster.name/keebs.html' }]} />
      <EshopList />
    </KeebsLayout>
  )
}

export default KeebsPage
