import styled from 'styled-components/native'

import { COLORS } from '../../theme/colors'

import { Text, TouchableOpacity } from 'react-native'

import IButtonProps from './Button.interface'

export const StyledButton = styled<any>(TouchableOpacity)`
    padding: 13px 15px
    background-color: ${(props: IButtonProps) => props.buttonColor ? props.buttonColor : COLORS.BLACK}
    width: ${(props: IButtonProps) => props.fullWidth ? '100%' : '139px'}
    border-color: ${(props: IButtonProps) => props.buttonBorderColor ? props.buttonBorderColor : props.buttonColor || COLORS.BLACK}
    border-width: ${(props: IButtonProps) => props.borderWidth ? props.borderWidth : '1px'}
    border-radius: ${(props: IButtonProps) => props.borderRadius ? props.borderRadius : '25px'}
    flexDirection: row
    justifyContent: center
    ${(props: IButtonProps) => props.dashed && `border-style: dashed`}
`

export const StyledButtonText = styled<any>(Text)`
    font-size: 18px
    color: ${(props: IButtonProps) => props.textColor ? props.textColor : COLORS.WHITE}
    textAlign: center
`