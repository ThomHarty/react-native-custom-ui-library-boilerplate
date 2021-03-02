import styled from 'styled-components/native'

import { Image, TextInput, TouchableOpacity, View } from 'react-native'

import ITextInputProps from './TextInput.interface'

export const StyledTextInputContainer = styled<any>(View)`
    background-color: white
    flex-direction: row
    justify-content: space-between
    border-width: 1px
    border-color: ${(props: ITextInputProps) => props.borderDisabled ? 'rgba(0,0,0,0)' : '#DEDEDE'}
    border-radius: 25px
`

export const StyledTextInput = styled(TextInput)`
    padding: 15px
    flex: 1
    color: #222
    height: 50px
`

export const StyledTextInputIconContainer = styled(TouchableOpacity)`
    padding: 10px
`

export const StyledTextInputIcon = styled(Image)`
    width: 18px
    height: 18px
    resizeMode: contain
`