import * as React from 'react'

import { StyledImage } from './Image.styles'

import IImageProps from './Image.interface'

const Image: React.FC<IImageProps> = ({
    src,
    imageWidth,
    imageHeight,
}) => {
    return (
        <StyledImage 
            source={src} 
            imageWidth={imageWidth} 
            imageHeight={imageHeight} 
            testID='image'
        />
    )
}

export default Image