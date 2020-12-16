import * as React from 'react'

import styles from '../styles/layoutIndex.module.css'

import LayoutRoot from '../components/LayoutRoot'

import Photos from '../components/Photos'

import { getSiteMetaDataAndTenPhotos, InitialQueryType } from './get-site-metadata'
import { useBottomScrollListener } from 'react-bottom-scroll-listener'
import { useEffect, useState } from 'react'
import { getTenPhotos } from './getTenPhotos'
import { useCallback } from 'react'

interface Props {
  readonly title?: string
  readonly children: React.ReactNode
}

const IndexLayout: React.FC<Props> = ({ children }) => {
  // const initialQueriedData = getSiteMetaDataAndTenPhotos()
  const [photosData, setPhotosData] = useState<InitialQueryType['allStrapiPhoto']>(getSiteMetaDataAndTenPhotos().allStrapiPhoto)

  const handleOnDocumentBottom = useCallback(() => {
    console.log('at bottom, make a call')
    // let morePhotosData = getTenPhotos(photosData.edges.length)
    // console.log(morePhotosData)

    // setPhotosData({ ...photosData, ...morePhotosData })
  }, [photosData])

  // useEffect(() => {
  //   setPhotosData(initialQueriedData.allStrapiPhoto)
  // }, [photosData])

  console.log(photosData)

  useBottomScrollListener(handleOnDocumentBottom)

  return (
    <LayoutRoot>
      <div className={styles.bigHomeContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.indexHeading}>TayloredToTaylor's Wildlife Photos</h1>
        </div>
        {photosData && <Photos photos={photosData} />}
      </div>
    </LayoutRoot>
  )
}

export default IndexLayout
