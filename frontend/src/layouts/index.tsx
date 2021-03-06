import * as React from 'react'

import styles from '../styles/layoutIndex.module.css'

import LayoutRoot from '../components/LayoutRoot'
import Photos from '../components/Photos'
import { getSiteMetaDataAndPhotos } from './get-site-metadata'
import { useCallback, useState } from 'react'
import { useBottomScrollListener } from 'react-bottom-scroll-listener'

const IndexLayout: React.FC = () => {
  const queriedData = getSiteMetaDataAndPhotos()
  const indexToJumpTo = 3 // aka the intial num of photos to show
  const firstSetOfPhotosToShow = queriedData.allStrapiPhoto.edges.slice(0, indexToJumpTo)
  const allPhotosLength = queriedData.allStrapiPhoto.edges.length

  const [currentIndex, setCurrentIndex] = useState(indexToJumpTo)
  const [photosData, setPhotosData] = useState(firstSetOfPhotosToShow)

  const handleOnDocumentBottom = useCallback(() => {
    if (photosData.length < allPhotosLength) {
      let morePhotosData = queriedData.allStrapiPhoto.edges.slice(indexToJumpTo, currentIndex + indexToJumpTo)
      setCurrentIndex(currentIndex + indexToJumpTo)
      const photosSet = new Set([...photosData, ...morePhotosData])
      const photosArr = Array.from(photosSet)
      console.log(photosArr)

      setPhotosData(photosArr)
    }
  }, [photosData])

  useBottomScrollListener(handleOnDocumentBottom, { offset: 20 })

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
