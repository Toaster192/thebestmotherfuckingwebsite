import * as React from 'react'

import { Container } from '../Container'

import styles from './Footer.module.scss'

export const Footer = () => (
  <footer className={styles.footer}>
    <Container>
      <hr className={styles.footerRule} />
      <p>
        <small>
          Template from {' '}
          <a href="https://thebestmotherfuckingwebsite.co/" target="_blank" rel="noopener noreferrer">
            The Best Motherfucking Website
          </a>
          .
        </small>
      </p>
      <p>
        <small>
          Images <strike>stolen</strike> from{' '}
          <a href="https://reddit.com/r/mechanicalkeyboards/" target="_blank" rel="noopener noreferrer">
            Reddit
          </a>
          . Built with{' '}
          <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
            Gatsby
          </a>
          .
        </small>
      </p>
    </Container>
  </footer>
)
