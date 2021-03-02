import styled from 'styled-components/native'

import { ScrollView } from 'react-native'

import IScrollContainerProps from './ScrollContainer.interface'

export const StyledScrollContainer = styled<any>(ScrollView)`
    flex-direction: ${(props: IScrollContainerProps) => props.flexDirection ? props.flexDirection : 'column'}
    flexWrap: ${(props: IScrollContainerProps) => props.flexWrap ? props.flexWrap : 'nowrap'}
    width: ${(props: IScrollContainerProps) => props.width ? props.width : 'auto'}
    height: ${(props: IScrollContainerProps) => props.height ? props.height : 'auto'}
    background-color: ${(props: IScrollContainerProps) => props.backgroundColor ? props.backgroundColor : 'rgba(0,0,0,0)'}
    padding-top: ${(props: IScrollContainerProps) => props.pt ? props.pt + 'px' : 0}
    padding-right: ${(props: IScrollContainerProps) => props.pr ? props.pr + 'px' : 0}
    padding-bottom: ${(props: IScrollContainerProps) => props.pb ? props.pb + 'px' : 0}
    padding-left: ${(props: IScrollContainerProps) => props.pl ? props.pl + 'px' : 0}
`