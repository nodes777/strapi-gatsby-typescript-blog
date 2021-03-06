import React from 'react'
import Card from './Card'
import styles from '../styles/photos.module.css'

import { PhotoInterface } from '../typings'
interface PhotosProps {
  photos: PhotoInterface[]
}

const Photos: React.FC<PhotosProps> = ({ photos }) => {
  return (
    <div className={styles.photoListContainer}>
      {photos.map(photo => {
        return <Card photo={photo} key={`photo__${photo.node.id}`} />
      })}
    </div>
  )
}

export default Photos
