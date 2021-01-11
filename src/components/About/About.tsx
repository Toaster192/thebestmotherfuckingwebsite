import * as React from 'react'

import { Container } from '../Container'
import { FullScreenSection } from '../FullScreenSection'

export const About = () => (
  <FullScreenSection name="about">
    <Container>
      <h1>WHAT ARE MECHANICAL KEYBOARDS?</h1>
      <p>
      idk
      </p>
      <p>
      Here's a TODO list tho:
      </p>
      <ul>
        <li>Differences between 40% / 60% / TKL etc.</li>
        <li>Why would you want less than a 100%?</li>
        <li>Split, Ortho and ergonomics?</li>
        <li>What makes a keyboard?</li>
        <li>1 section for each component - Case, PCB, keycaps (profiles -
        https://www.keycaps.info/), switches</li>
      </ul>
      <p>
      If there is any topic you'd want to write about / anything you want to
      change or add, let me know
      </p>
    </Container>
  </FullScreenSection>
)
