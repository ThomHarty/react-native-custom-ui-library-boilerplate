import * as React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react-native'
import RadioButton from '../RadioButton'

describe('RadioButton Component', () => {
    afterEach(cleanup)

    const testOn = true
    const testOnPress = jest.fn()

    // initial render
    it('renders without crashing', () => {
        render(<RadioButton on={testOn} onPress={testOnPress} />)
    })

    // on prop
    it('handles the on prop', () => {
        const { getByTestId } = render(<RadioButton on={testOn} onPress={testOnPress} />)

        const radioButton = getByTestId('radio-button')

        expect(radioButton.props.on).toBe(testOn)
    })

    // onPress event
    it('fires the onPress function', () => {
        const { getByTestId } = render(<RadioButton on={testOn} onPress={testOnPress} />)

        const radioButton = getByTestId('radio')
    
        fireEvent.press(radioButton)
    
        expect(testOnPress).toHaveBeenCalledTimes(1)
    })
})