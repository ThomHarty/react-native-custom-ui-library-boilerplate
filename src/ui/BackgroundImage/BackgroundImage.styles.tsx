import styled from 'styled-components/native'

import { ImageBackground } from 'react-native'

import IBackgroundImageProps from './BackgroundImage.interface'

export const StyledBackgroundImage = styled<any>(ImageBackground)`
    width: ${(props: IBackgroundImageProps) => props.imageWidth ? props.imageWidth : '100%'}
    height: ${(props: IBackgroundImageProps) => props.imageHeight ? props.imageHeight : '100%'}
    resizeMode: cover
`