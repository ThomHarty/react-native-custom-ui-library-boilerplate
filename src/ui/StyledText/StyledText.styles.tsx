import styled from 'styled-components/native'

import { Text } from 'react-native'

import IStyledTextProps from './StyledText.interface'

export const StyledStyledText = styled<any>(Text)`
    font-size: ${(props: IStyledTextProps) => props.fontSize ?  `${props.fontSize}px` : '12px'}
    font-weight: ${(props: IStyledTextProps) => props.fontWeight ?  props.fontWeight : 'normal'}
    color: ${(props: IStyledTextProps) => props.textColor ? props.textColor : '#000'}
    text-align: ${(props: IStyledTextProps) => props.alignText ?  props.alignText : 'left'}
    text-transform: ${(props: IStyledTextProps) => props.toUpper ? 'uppercase' : 'none'}
    line-height: ${(props: IStyledTextProps) => props.lineHeight ? `${props.lineHeight}px` : `${props.fontSize ? props.fontSize * 1.5 : 18}px`}
    letter-spacing: ${(props: IStyledTextProps) => props.letterSpacing ? `${props.letterSpacing}px` : '0px'}
    text-decoration: ${(props: IStyledTextProps) => props.textDecoration ? props.textDecoration : 'none'}
`