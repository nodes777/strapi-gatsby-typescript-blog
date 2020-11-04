import React from 'react'
import Card from './Card'

interface PhotosProps {
  photos: {
    edges: Photo[]
  }
}

const Photos: React.FC<PhotosProps> = ({ photos }) => {
  console.log(photos)

  const leftPhotosCount = Math.ceil(photos.edges.length / 5)
  const leftPhotos = photos.edges.slice(0, leftPhotosCount)
  const rightPhotos = photos.edges.slice(leftPhotosCount, photos.edges.length)

  return (
    <div>
      <div className="uk-child-width-1-2" data-uk-grid>
        <div>
          {leftPhotos.map(photo => {
            return <Card photo={photo} key={`photo__${photo.node.id}`} />
          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightPhotos.map(photo => {
              return <Card photo={photo} key={`photo__${photo.node.id}`} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Photos
