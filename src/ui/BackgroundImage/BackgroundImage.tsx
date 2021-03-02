import * as React from 'react'
import { StyledBackgroundImage } from './BackgroundImage.styles'

import IBackgroundImageProps from './BackgroundImage.interface'

const BackgroundImage: React.FC<IBackgroundImageProps> = ({
    src,
    imageHeight,
    imageWidth,
    children,
}) => {
    return (
        <StyledBackgroundImage
            source={src}
            imageHeight={imageHeight}
            imageWidth={imageWidth}
            testID='background-image'
        >
            {children}
        </StyledBackgroundImage>
    )
}

export default BackgroundImage