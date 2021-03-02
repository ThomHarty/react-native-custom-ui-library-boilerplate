import styled from 'styled-components/native'

import { TouchableOpacity, View } from 'react-native'

import IRadioButtonProps from './RadioButton.interface'

import { COLORS } from '../../theme/colors'

export const StyledRadioButtonContainer = styled(TouchableOpacity)`
    width: 15px
    height: 15px
    border-radius: 7.5px
    border-color: #CCC
    border-width: 1px
    justify-content: center
    align-items: center
`

export const StyledRadioButton = styled<any>(View)`
    height: 7px
    width: 7px
    border-radius: 3.5px
    background-color: ${(props: IRadioButtonProps) => props.on ? COLORS.BLACK : 'rgba(0,0,0,0)'}
`