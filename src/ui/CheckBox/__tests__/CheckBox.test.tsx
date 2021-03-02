import * as React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react-native'
import CheckBox from '../CheckBox'

describe('CheckBox Component', () => {
    afterEach(cleanup)

    const testOn = true
    const testOnPress = jest.fn()

    it('renders without crashing', () => {
        render(<CheckBox on={testOn} onPress={testOnPress} />)
    })

    it('handles the on prop', () => {
        const { getByTestId } = render(<CheckBox on={testOn} onPress={testOnPress} />)

        const checkBox = getByTestId('checkbox-button')

        expect(checkBox.props.on).toBe(testOn)
    })

    it('fires the onPress function', () => {
        const { getByTestId } = render(<CheckBox on={testOn} onPress={testOnPress} />)

        const checkBox = getByTestId('checkbox')
    
        fireEvent.press(checkBox)
    
        expect(testOnPress).toHaveBeenCalledTimes(1)
    })
})