import * as React from 'react'

import styles from '../styles/layoutIndex.module.css'

import LayoutRoot from '../components/LayoutRoot'

import Photos from '../components/Photos'

import { useSiteMetadata } from './use-site-metadata'

interface Props {
  readonly title?: string
  readonly children: React.ReactNode
}

const IndexLayout: React.FC<Props> = ({ children }) => {
  const queriedData = useSiteMetadata()
  return (
    <LayoutRoot>
      <div className={styles.bigHomeContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.indexHeading}>TayloredToTaylor's Wildlife Photos</h1>
        </div>
        <Photos photos={queriedData.allStrapiPhoto} />
      </div>
    </LayoutRoot>
  )
}

export default IndexLayout
