export interface PhotoInterface {
  node: {
    iNatData: {
      commonName: string
      dateTaken: string
      endemic: boolean
      introduced: true
      latinName: string
      native: boolean
      placeGuess: string
      qualityGrade: string
      threatened: boolean
      taxonAncestors: TaxonAncestorInterface[]
    }
    id: number
    strapiId: string
    image: {
      imageFile: {
        childImageSharp: {
          fixed: FixedImageSharpObject
          fluid: FluidObject
        }
      }
    }
    tag: {
      name: string
    }
    title: string
    content: string
  }
}

interface TaxonAncestorInterface {
  preferredCommonName: string
  name: string
  rank: string
}

type FixedImageSharpObject = {
  aspectRatio: number
  base64: string
  originalName: string
  src: string
  height: number
  srcSet: string
  srcSetWebp: string
  srcWebp: string
  tracedSVG: string
  width: number
}
