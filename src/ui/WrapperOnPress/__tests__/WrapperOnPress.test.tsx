import * as React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react-native'
import WrapperOnPress from '../WrapperOnPress'

describe('WrapperOnPress Component', () => {
    afterEach(cleanup)

    const testOnPress = jest.fn()

    // initial render
    it('renders without crashing', () => {
        render(<WrapperOnPress onPress={testOnPress} />)
    })

    it('fires the onPress function', () => {
        const { getByTestId } = render(<WrapperOnPress onPress={testOnPress} />)

        const wrapperOnPress = getByTestId('wrapperOnPress')
    
        fireEvent.press(wrapperOnPress)
    
        expect(testOnPress).toHaveBeenCalledTimes(1)
    })
  })
  