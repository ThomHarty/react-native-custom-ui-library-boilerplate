import styled from 'styled-components/native'

import { View, Text, TouchableOpacity } from 'react-native'

import { COLORS } from '../../theme/colors'

import IToggleProps from './Toggle.interface'

export const StyledToggleTextContainer = styled<any>(View)`
    width: 100%
    flex-direction: row
    justify-content: space-between
    ${(props: IToggleProps) => !props.multiline && 'align-items: flex-end'}
`

export const StyledToggleText = styled<any>(Text)`
    flex: 1
    flex-wrap: wrap
    margin-right: 20px
    font-size: 14px
    color: ${COLORS.BLACK}
    text-align: left
`

export const StyledToggleContainer = styled(TouchableOpacity)`
    width: 60px
    height: 28px
`

export const StyledToggleBar = styled<any>(View)`
    width: 60px
    height: 34px
    border-radius: 17px
    background-color: ${(props: IToggleProps) => !props.toggle ? COLORS.BLACK : COLORS.BLACK}
`

export const StyledToggle = styled<any>(View)`
    position: absolute
    top: 3px
    left: ${(props: IToggleProps) => !props.toggle ? '3px' : '29px'}
    width: 28px
    height: 28px
    border-radius: 14px
    background-color: ${COLORS.WHITE}
`