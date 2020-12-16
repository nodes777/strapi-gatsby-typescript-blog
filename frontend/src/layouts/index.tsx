import * as React from 'react'

import styles from '../styles/layoutIndex.module.css'

import LayoutRoot from '../components/LayoutRoot'
import Photos from '../components/Photos'
import { getSiteMetaDataAndTenPhotos } from './get-site-metadata'

const IndexLayout: React.FC = () => {
  const queriedData = getSiteMetaDataAndTenPhotos()

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
