export interface Photo {
  node: {
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

interface CSSModule {
  [className: string]: string
}

// type shims for CSS modules

declare module '*.module.scss' {
  const cssModule: CSSModule
  export = cssModule
}

declare module '*.module.css' {
  const cssModule: CSSModule
  export = cssModule
}
