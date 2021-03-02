import * as React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react-native'
import Toggle from '../Toggle'

describe('Toggle Component', () => {
    afterEach(cleanup)

    const testToggle = true
    const testOnPress = jest.fn()

    // initial render
    it('renders without crashing', () => {
        render(<Toggle toggle={testToggle} onPress={testOnPress} />)
    })

    // toggle prop
    it('handles the toggle prop', () => {
        const { getByTestId } = render(<Toggle toggle={testToggle} onPress={testOnPress} />)

        const toggleBar = getByTestId('toggleBar')

        expect(toggleBar.props.toggle).toBe(testToggle)
    })

    // toggle prop on button
    it('handles the toggle prop', () => {
        const { getByTestId } = render(<Toggle toggle={testToggle} onPress={testOnPress} />)

        const toggleBarButton = getByTestId('toggleBarButton')

        expect(toggleBarButton.props.toggle).toBe(testToggle)
    })

    // onPress event
    it('fires the onPress function', () => {
        const { getByTestId } = render(<Toggle toggle={testToggle} onPress={testOnPress} />)

        const toggleContainer = getByTestId('toggleContainer')
    
        fireEvent.press(toggleContainer)
    
        expect(testOnPress).toHaveBeenCalledTimes(1)
    })
})