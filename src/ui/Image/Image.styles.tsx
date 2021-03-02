import styled from 'styled-components/native'

import { Image } from 'react-native'

import IImageProps from './Image.interface'

export const StyledImage = styled<any>(Image)`
    width: ${(props: IImageProps) => props.imageWidth ? props.imageWidth : '100%'}
    height: ${(props: IImageProps) => props.imageHeight ? props.imageHeight : '100%'}
    resizeMode: contain
`