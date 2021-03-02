import styled from 'styled-components/native'

import { COLORS } from '../../theme/colors'

import { Text, View } from 'react-native'

import ILabelProps from './Label.interface'

export const StyledLabelContainer = styled(View)`
    padding: 2px 10px
    width: 100%
`

export const StyledLabel = styled<any>(Text)`
    font-size: 12px
    color: ${(props: ILabelProps) => props.textColor ? props.textColor : COLORS.BLACK}
`