import * as React from 'react'

import styles from './RedditCreditBadge.module.scss'

import Image from './img.svg'

interface RedditCreditBadgeProps {
  src: string
  author: string
}

export const RedditCreditBadge: React.SFC<RedditCreditBadgeProps> = ({ src, author }) => (
  <a
    className={styles.redditCreditBadge}
    href={src}
    target="_blank"
    rel="noopener noreferrer"
    title={`Photos by ${author} from Reddit`}
  >
    <span>
      <img alt="Visit Page" src={Image} />
    </span>
    <span>{author}</span>
  </a>
)
