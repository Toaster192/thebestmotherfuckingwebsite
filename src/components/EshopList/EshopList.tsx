import * as React from 'react'
import classnames from 'classnames'

import { Container } from '../Container'
import { Row } from '../Row'
import { Col } from '../Col'
import { FullScreenSection } from '../FullScreenSection'
import { UnsplashCreditBadge } from '../UnsplashCreditBadge'

import styles from './EshopList.module.scss'

import RyanSearle from './ryan-searle-345035.jpg'

export const EshopList = () => (
  <FullScreenSection name="eshopList">
    <Container>
      <Row reverse style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <Col>
          <div className={styles.eshopListBox}>
            <h2>Keebs eshops.</h2>
            <p>
              <strong>Europe:</strong>
            </p>
            <ul>
              <li>https://keygem.store/</li>
              <li>https://candykeys.com/</li>
              <li>https://mykeyboard.eu/</li>
            </ul>
            <p>
              <strong>Czechia:</strong>
            </p>
            <ul>
              <li>https://42keebs.eu/</li>
            </ul>
            <p>
              <strong>China:</strong>
            </p>
            <ul>
              <li>https://kbdfans.com/</li>
              <li>https://kprepublic.com/</li>
              <li>https://www.banggood.com/</li>
              <li>https://www.aliexpress.com/</li>
            </ul>
            <p>
              <strong>US:</strong>
            </p>
            <ul>
              <li>https://drop.com/</li>
              <li>https://novelkeys.xyz/</li>
              <li>https://thekey.company/</li>
            </ul>
          </div>
        </Col>
        <Col>
          <div className={styles.eshopListImageBox}>
            <img alt="Ryan Searle" src={RyanSearle} />
            <div className={styles.credit}>
              <UnsplashCreditBadge
                src="https://unsplash.com/@ryansearle?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
                author="Ryan Searle"
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </FullScreenSection>
)
