import React from 'react'
import styles from '../styles/photoPage.module.css'
import { PhotoInterface } from '../typings'
import ReactMarkdown from 'react-markdown'
interface PhotoDescProps {
  photoData: PhotoInterface['node']
}
const PhotoDesc: React.FC<PhotoDescProps> = ({ photoData }) => {
  return (
    <>
      <h1 className={styles.title}>{photoData.title}</h1>
      <div className={styles.iNatData}>
        <div>
          <p className={styles.commonName}>{photoData.iNatData.commonName}</p>
          <p className={styles.latinName}>{photoData.iNatData.latinName}</p>
        </div>
        <div>
          <p>{photoData.iNatData.placeGuess}</p>
          <p>
            {new Date(photoData.iNatData.dateTaken).toLocaleDateString('en-gb', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
      </div>
      <div className={styles.descriptionContent}>
        <ReactMarkdown source={photoData.content} />
      </div>
    </>
  )
}
export default PhotoDesc
