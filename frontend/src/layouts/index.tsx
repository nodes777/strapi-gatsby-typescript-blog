import * as React from 'react'

import styles from '../styles/layoutIndex.module.css'

import LayoutRoot from '../components/LayoutRoot'
import Photos from '../components/Photos'
import { getSiteMetaDataAndPhotos } from './get-site-metadata'
import { useCallback, useState } from 'react'
import { useBottomScrollListener } from 'react-bottom-scroll-listener'

const IndexLayout: React.FC = () => {
  const queriedData = getSiteMetaDataAndPhotos()
  const indexToJumpTo = 3
  const firstTen = queriedData.allStrapiPhoto.edges.slice(0, indexToJumpTo)
  const allPhotosLength = queriedData.allStrapiPhoto.edges.length

  const [currentIndex, setCurrentIndex] = useState(0)
  const [photosData, setPhotosData] = useState(firstTen)

  const handleOnDocumentBottom = useCallback(() => {
    if (photosData.length < allPhotosLength) {
      let morePhotosData = queriedData.allStrapiPhoto.edges.slice(indexToJumpTo, currentIndex + indexToJumpTo)
      setCurrentIndex(currentIndex + indexToJumpTo)
      setPhotosData([...photosData, ...morePhotosData])
    }
  }, [photosData])

  useBottomScrollListener(handleOnDocumentBottom)
  return (
    <LayoutRoot>
      <div className={styles.bigHomeContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.indexHeading}>TayloredToTaylor's Wildlife Photos</h1>
        </div>
        <Photos photos={photosData} />
      </div>
    </LayoutRoot>
  )
}

export default IndexLayout
