import * as React from 'react'
import { Link as ScrollLink } from 'react-scroll'

import { Container } from '../Container'
import { RedditCreditBadge } from '../RedditCreditBadge'

import styles from './Intro.module.scss'

export const Intro = () => (
  <div className={styles.intro}>
    <div className={styles.introInner}>
      <Container>
        <h1>Keebs.</h1>
        <p>All you need to know for your clickity clackity needs.</p>
      </Container>
    </div>
    <ScrollLink className={styles.introScrollThingy} to="about" smooth offset={-60}>
      &#9660; scroll thingy &#9660;
    </ScrollLink>
    <div className={styles.credit}>
      <RedditCreditBadge
        src="https://www.reddit.com/r/MechanicalKeyboards/comments/4vh8ui/photo_its_getting_crowded_in_here/"
        author="/u/ctzn_voyager"
      />
    </div>
  </div>
)
