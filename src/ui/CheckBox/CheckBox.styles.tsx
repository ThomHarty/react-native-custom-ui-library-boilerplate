import styled from 'styled-components/native'

import { TouchableOpacity, View } from 'react-native'

import ICheckBoxProps from './CheckBox.interface'

export const StyledCheckBoxContainer = styled(TouchableOpacity)`
    width: 22px
    height: 22px
    border-color: #DEDEDE
    border-width: 1px
    justify-content: center
    align-items: center
    background-color: white
`

export const StyledCheckBox = styled<any>(View)`
    display: flex
    transform: rotate(45deg)
    position: relative
    bottom: 2px
    height: 14px
    width: 6px
    border-bottom-width: 1px
    border-bottom-color: ${(props: ICheckBoxProps) => props.on ? '#000000' : 'rgba(0,0,0,0)'}
    border-right-width: 1px
    border-right-color: ${(props: ICheckBoxProps) => props.on ? '#000000' : 'rgba(0,0,0,0)'}
`