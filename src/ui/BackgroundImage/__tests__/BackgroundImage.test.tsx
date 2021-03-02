import * as React from 'react'
import { cleanup, render } from '@testing-library/react-native'
import BackgroundImage from '../BackgroundImage'

describe('Image Component', () => {
    afterEach(cleanup)

    const testSource = { uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }

    it('renders without crashing', () => {
        render(<BackgroundImage src={testSource} />)
    })

    it('renders the correct image', () =>{
        const {getByTestId} = render(<BackgroundImage src={testSource} />)

        expect(getByTestId('background-image').props.source).toBe(testSource)
    })
})