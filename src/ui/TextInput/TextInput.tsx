import * as React from 'react'

import {
    StyledTextInput,
    StyledTextInputContainer,
    StyledTextInputIconContainer,
    StyledTextInputIcon,
} from './TextInput.styles'

import ITextInputProps from './TextInput.interface'

const TextInput: React.FC<ITextInputProps> = ({ 
    value,
    handleOnChangeText,
    placeholder,
    autoCorrect,
    autoFocus,
    autoCapitalize,
    defaultValue,
    keyboardType,
    multiline,
    textAlignVertical,
    numberOfLines,
    secureTextEntry,
    iconSrc,
    iconOnPress,
    borderDisabled,
    onFocus,
    onEndEditing,
}) => {
    return (
        <StyledTextInputContainer
            borderDisabled={borderDisabled}
            testID='inputContainer'
        >
            <StyledTextInput 
                value={value}
                onChangeText={(value: string) => handleOnChangeText(value)}
                placeholder={placeholder}
                placeholderTextColor='#ADADAD'
                autoCorrect={autoCorrect}
                autoFocus={autoFocus}
                autoCapitalize={autoCapitalize}
                defaultValue={defaultValue}
                keyboardType={keyboardType}
                multiline={multiline}
                textAlignVertical={textAlignVertical}
                numberOfLines={numberOfLines}
                secureTextEntry={secureTextEntry}
                onFocus={onFocus}
                onEndEditing={onEndEditing}
                testID='input'
            />
            {iconSrc ? (
                <StyledTextInputIconContainer onPress={iconOnPress} testID='inputIconContainer'>
                    <StyledTextInputIcon source={iconSrc} testID='inputIcon' />
                </StyledTextInputIconContainer>
            ) : null}
        </StyledTextInputContainer>
    )
}

export default TextInput