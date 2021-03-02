import * as React from 'react'
import { cleanup, render } from '@testing-library/react-native'
import LoadingSpinner from '../LoadingSpinner'

describe('LoadingSpinner Component', () => {
    afterEach(cleanup)

    
    it('renders without crashing', () => {
        render(<LoadingSpinner />)
    })

    // animating prop
    it('handles the animating prop', () => {
        const testAnimating = true
        const { getByTestId } = render(<LoadingSpinner animating={testAnimating} />)

        const spinner = getByTestId('spinner')

        expect(spinner.props.animating).toBe(testAnimating)
    })

    // color prop
    it('handles the color prop', () => {
        const testColor = '#ff3300'
        const { getByTestId } = render(<LoadingSpinner color={testColor} />)

        const spinner = getByTestId('spinner')

        expect(spinner.props.color).toBe(testColor)
    })

    // hidesWhenStopped prop
    it('handles the hidesWhenStopped prop', () => {
        const testHidesWhenStopped = true
        const { getByTestId } = render(<LoadingSpinner hidesWhenStopped={testHidesWhenStopped} />)

        const spinner = getByTestId('spinner')

        expect(spinner.props.hidesWhenStopped).toBe(testHidesWhenStopped)
    })

    // size prop
    it('handles the size prop', () => {
        const testSize = 'large'
        const { getByTestId } = render(<LoadingSpinner size={testSize} />)

        const spinner = getByTestId('spinner')

        expect(spinner.props.size).toBe(testSize)
    })
})