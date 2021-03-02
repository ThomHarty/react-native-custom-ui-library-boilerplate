import styled from 'styled-components/native'

import { View } from 'react-native'
import IContainerProps from './Container.interface'

export const StyledContainer = styled<any>(View)`
    flex: ${(props: IContainerProps) => props.flexValue ? props.flexValue : 'auto'}
    flex-direction: ${(props: IContainerProps) => props.flexDirection ? props.flexDirection : 'column'}
    flex-basis: ${(props: IContainerProps) => props.flexBasis ? props.flexBasis: 'auto'}
    flexWrap: ${(props: IContainerProps) => props.flexWrap ? props.flexWrap : 'nowrap'}
    justify-content: ${(props: IContainerProps) => props.justifyContent ? props.justifyContent : 'flex-start'}
    align-items: ${(props: IContainerProps) => props.alignItems ? props.alignItems : 'stretch'}
    width: ${(props: IContainerProps) => props.width ? props.width : '100%'}
    height: ${(props: IContainerProps) => props.height ? props.height : 'auto'}
    padding-top: ${(props: IContainerProps) => props.pt ? props.pt + 'px' : 0}
    padding-right: ${(props: IContainerProps) => props.pr ? props.pr + 'px' : 0}
    padding-bottom: ${(props: IContainerProps) => props.pb ? props.pb + 'px' : 0}
    padding-left: ${(props: IContainerProps) => props.pl ? props.pl + 'px' : 0}
    margin-top: ${(props: IContainerProps) => props.mt ? props.mt + 'px' : 0}
    margin-right: ${(props: IContainerProps) => props.mr ? props.mr + 'px' : 0}
    margin-bottom: ${(props: IContainerProps) => props.mb ? props.mb + 'px' : 0}
    margin-left: ${(props: IContainerProps) => props.ml ? props.ml + 'px' : 0}
    background-color: ${(props: IContainerProps) => props.backgroundColor ? props.backgroundColor : 'rgba(0,0,0,0)'}
    border-radius: ${(props: IContainerProps) => props.borderRadius ? `${props.borderRadius}px` : '0px'}
    border-width: ${(props: IContainerProps) => props.borderWidth ? `${props.borderWidth}px` : '0px'}
    border-color: ${(props: IContainerProps) => props.borderColor ? props.borderColor : 'rgba(0,0,0,0)'}
`