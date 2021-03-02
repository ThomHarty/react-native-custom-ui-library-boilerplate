import * as React from 'react'

import { cleanup, fireEvent, render } from '@testing-library/react-native'

import TextInput from '../TextInput'

describe('TextInput Component', () => {
    afterEach(cleanup)

    const testValue = ''
    const testOnChange = jest.fn()

    // initial render
    it('renders without crashing', () => {
        render(<TextInput value={testValue} handleOnChangeText={testOnChange} />)
    })

    // onChangeText event
    it('fires the onChangeText function', () => {
        const change = { target: { value: 'a' } }
        const { getByTestId } = render(<TextInput value={testValue} handleOnChangeText={testOnChange} />)
        const input = getByTestId('input')
    
        fireEvent.changeText(input, change)
    
        expect(testOnChange).toHaveBeenCalledTimes(1)
    })

    // placeholder prop
    it('handles the placeholder prop', () => {
        const testPlaceholder = 'Test placeholder...'

        const { getByTestId } = render(
            <TextInput
                value={testValue}
                handleOnChangeText={testOnChange}
                placeholder={testPlaceholder}
            />
        )

        const input = getByTestId('input')

        expect(input.props.placeholder).toBe(testPlaceholder)
    })

    // autoCorrect prop
    it('handles the autoCorrect prop', () => {
        const testAutoCorrect = true

        const { getByTestId } = render(
            <TextInput
                value={testValue}
                handleOnChangeText={testOnChange}
                autoCorrect={testAutoCorrect}
            />
        )

        const input = getByTestId('input')

        expect(input.props.autoCorrect).toBe(testAutoCorrect)
    })

    // autoFocus prop
    it('handles the autoFocus prop', () => {
        const testAutoFocus = true

        const { getByTestId } = render(
            <TextInput
                value={testValue}
                handleOnChangeText={testOnChange}
                autoFocus={testAutoFocus}
            />
        )

        const input = getByTestId('input')

        expect(input.props.autoFocus).toBe(testAutoFocus)
    })

    // defaultValue prop
    it('handles the defaultValue prop', () => {
        const testDefaultValue = 'Test default value...'

        const { getByTestId } = render(
            <TextInput
                value={testValue}
                handleOnChangeText={testOnChange}
                defaultValue={testDefaultValue}
            />
        )

        const input = getByTestId('input')

        expect(input.props.defaultValue).toBe(testDefaultValue)
    })

    // keyboardType prop
    it('handles the keyboardType prop', () => {
        const testKeyboardType = 'email-address'

        const { getByTestId } = render(
            <TextInput
                value={testValue}
                handleOnChangeText={testOnChange}
                keyboardType={testKeyboardType}
            />
        )

        const input = getByTestId('input')

        expect(input.props.keyboardType).toBe(testKeyboardType)
    })

    // multiline prop
    it('handles the multiline prop', () => {
        const testMultiline = true

        const { getByTestId } = render(
            <TextInput
                value={testValue}
                handleOnChangeText={testOnChange}
                multiline={testMultiline}
            />
        )

        const input = getByTestId('input')

        expect(input.props.multiline).toBe(testMultiline)
    })

    // textAlignVertical prop
    it('handles the textAlignVertical prop', () => {
        const testTextAlignVertical = 'top'

        const { getByTestId } = render(
            <TextInput
                value={testValue}
                handleOnChangeText={testOnChange}
                textAlignVertical={testTextAlignVertical}
            />
        )

        const input = getByTestId('input')

        expect(input.props.textAlignVertical).toBe(testTextAlignVertical)
    })

    // numberOfLines prop
    it('handles the numberOfLines prop', () => {
        const testNumberOfLines = 4

        const { getByTestId } = render(
            <TextInput
                value={testValue}
                handleOnChangeText={testOnChange}
                numberOfLines={testNumberOfLines}
            />
        )

        const input = getByTestId('input')

        expect(input.props.numberOfLines).toBe(testNumberOfLines)
    })

    // secureTextEntry prop
    it('handles the secureTextEntry prop', () => {
        const testSecureTextEntry = true

        const { getByTestId } = render(
            <TextInput
                value={testValue}
                handleOnChangeText={testOnChange}
                secureTextEntry={testSecureTextEntry}
            />
        )

        const input = getByTestId('input')

        expect(input.props.secureTextEntry).toBe(testSecureTextEntry)
    })

    // iconSrc prop
    it('handles the iconSrc prop', () => {
        const testIconSrc = { uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }

        const { getByTestId } = render(
            <TextInput
                value={testValue}
                handleOnChangeText={testOnChange}
                iconSrc={testIconSrc}
            />
        )

        const inputIcon = getByTestId('inputIcon')

        expect(inputIcon.props.source).toBe(testIconSrc)
    })

    // iconOnPress event
    it('fires the iconOnPress function', () => {
        const testIconSrc = { uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }
        const testIconOnPress = jest.fn()
        
        const { getByTestId } = render(
            <TextInput
                value={testValue}
                handleOnChangeText={testOnChange}
                iconSrc={testIconSrc}
                iconOnPress={testIconOnPress}
            />
        )

        const inputIconContainer = getByTestId('inputIconContainer')
    
        fireEvent.press(inputIconContainer)
    
        expect(testIconOnPress).toHaveBeenCalledTimes(1)
    })
})