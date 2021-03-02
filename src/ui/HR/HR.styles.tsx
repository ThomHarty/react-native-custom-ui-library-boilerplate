import styled from 'styled-components/native'

import { View } from 'react-native'

import IHRProps from './HR.interface'

import { COLORS } from '../../theme/colors'

export const StyledHR = styled<any>(View)`
    width: ${(props: IHRProps) => props.width ? props.width : '100%'}
    height: ${(props: IHRProps) => props.height ? props.height : '1px'}
    padding-top: ${(props: IHRProps) => props.pt ? props.pt + 'px' : 0}
    padding-right: ${(props: IHRProps) => props.pr ? props.pr + 'px' : 0}
    padding-bottom: ${(props: IHRProps) => props.pb ? props.pb + 'px' : 0}
    padding-left: ${(props: IHRProps) => props.pl ? props.pl + 'px' : 0}
    margin-top: ${(props: IHRProps) => props.mt ? props.mt + 'px' : 0}
    margin-right: ${(props: IHRProps) => props.mr ? props.mr + 'px' : 0}
    margin-bottom: ${(props: IHRProps) => props.mb ? props.mb + 'px' : 0}
    margin-left: ${(props: IHRProps) => props.ml ? props.ml + 'px' : 0}
    background-color: ${(props: IHRProps) => props.color ? props.color : COLORS.BLACK}
`