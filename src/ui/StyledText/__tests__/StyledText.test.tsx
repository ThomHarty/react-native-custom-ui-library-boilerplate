import * as React from 'react'

import { cleanup, render } from '@testing-library/react-native'

import StyledText from '../StyledText'

describe('StyledText Component', () => {
    afterEach(cleanup)

    const testText = 'Test Text'

    it('renders without crashing', () => {
        render(<StyledText text={testText} />)
    })

    it('renders the text prop', () => {
        const { getByText } = render(<StyledText text={testText} />)

        expect(getByText('Test Text')).toBeTruthy()
    })
})