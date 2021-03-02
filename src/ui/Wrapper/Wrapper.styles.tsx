import styled from 'styled-components/native'

import { View } from 'react-native'

import IWrapperProps from './Wrapper.interface'

export const StyledWrapper = styled<any>(View)`
    padding-top: ${(props: IWrapperProps) => props.pt ? props.pt + 'px' : 0}
    padding-right: ${(props: IWrapperProps) => props.pr ? props.pr + 'px' : 0}
    padding-bottom: ${(props: IWrapperProps) => props.pb ? props.pb + 'px' : 0}
    padding-left: ${(props: IWrapperProps) => props.pl ? props.pl + 'px' : 0}
    margin-top: ${(props: IWrapperProps) => props.mt ? props.mt + 'px' : 0}
    margin-right: ${(props: IWrapperProps) => props.mr ? props.mr + 'px' : 0}
    margin-bottom: ${(props: IWrapperProps) => props.mb ? props.mb + 'px' : 0}
    margin-left: ${(props: IWrapperProps) => props.ml ? props.ml + 'px' : 0}
    ${(props: IWrapperProps) => props.zIndex && `z-index: ${props.zIndex}`}
    ${(props: IWrapperProps) => props.width && `width: ${props.width}`}
`