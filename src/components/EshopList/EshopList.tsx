import * as React from 'react'
import classnames from 'classnames'

import { Container } from '../Container'
import { Row } from '../Row'
import { Col } from '../Col'
import { FullScreenSection } from '../FullScreenSection'
import { RedditCreditBadge } from '../RedditCreditBadge'

import styles from './EshopList.module.scss'

import ToasterPlanckBuild from './ToasterPlanckBuild.jpg'

export const EshopList = () => (
  <FullScreenSection name="eshopList">
    <Container>
      <Row reverse style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <Col>
          <div className={styles.eshopListBox}>
            <h2>E-Shops:</h2>
            <h3>
              Europe:
            </h3>
            <ul>
              <li><a href="https://keygem.store/">Keygem</a></li>
              <li><a href="https://candykeys.com/">CandyKeys</a></li>
              <li><a href="https://mykeyboard.eu/">MyKeyboard</a></li>
              <li><a href="https://42keebs.eu/">42keebs</a> (Czech)</li>
              <li><a href="https://korabrand.xyz/">Korabrand</a> (Slovak)</li>
            </ul>
            <h3>
              China:
            </h3>
            <ul>
              <li><a href="https://kbdfans.com/">Kbdfans</a></li>
              <li><a href="https://kprepublic.com/">KP_Republic</a></li>
              <li><a href="https://www.banggood.com/">Banggood</a></li>
              <li><a href="https://www.aliexpress.com/">AliExpress</a></li>
            </ul>
            <h3>
              US:
            </h3>
            <ul>
              <li><a href="https://drop.com/">Drop</a></li>
              <li><a href="https://novelkeys.xyz/">NovelKeys</a></li>
              <li><a href="https://thekey.company/">The Key Company</a></li>
            </ul>
          </div>
        </Col>
        <Col>
          <div className={styles.eshopListImageBox}>
            <img alt="/u/toaster192" src={ToasterPlanckBuild} />
            <div className={styles.credit}>
              <RedditCreditBadge
                src="https://www.reddit.com/r/MechanicalKeyboards/comments/cq7ofk/photos_taking_another_20_off_my_productivity_i/"
                author="/u/toaster192"
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </FullScreenSection>
)
