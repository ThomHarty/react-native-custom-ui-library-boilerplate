import * as React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react-native'
import Button from '../Button'

describe('Button Component', () => {
    afterEach(cleanup)

    const testTitle = 'Submit'
    const testOnPress = jest.fn()

    it('renders without crashing', () => {
        render(<Button title={testTitle} onPress={testOnPress} />)
    })

    it('renders the title prop', () => {
        const { getByText } = render(<Button title={testTitle} onPress={testOnPress} />)

        expect(getByText('Submit')).toBeTruthy()
    })

    it('fires the onPress function', () => {
        const { getByTestId } = render(<Button title={testTitle} onPress={testOnPress} />)

        const button = getByTestId('button')
    
        fireEvent.press(button)
    
        expect(testOnPress).toHaveBeenCalledTimes(1)
    })
})