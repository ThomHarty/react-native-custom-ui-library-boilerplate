import * as React from 'react'
import { cleanup, render } from '@testing-library/react-native'
import Label from '../Label'

describe('Label Component', () => {
    afterEach(cleanup)

    const testLabel = 'Label Text'
    const testColor = '#FF0000'

    it('renders without crashing', () => {
        render(<Label text={testLabel} />)
    })

    it('renders the text prop', () => {
        const { getByText } = render(<Label text={testLabel} />)

        expect(getByText('Label Text')).toBeTruthy()
    })

    it('renders the text prop', () => {
        const { getByTestId } = render(<Label text={testLabel} textColor={testColor} />)

        expect(getByTestId('label').props.textColor).toBe(testColor)
    })
})