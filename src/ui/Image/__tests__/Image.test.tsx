import * as React from 'react'
import { cleanup, render } from '@testing-library/react-native'
import Image from '../Image'

describe('Image Component', () => {
    afterEach(cleanup)

    const testSource = { uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }
    const testImageWidth = '200px'
    const testImageHeight = '200px'

    it('renders without crashing', () => {
        render(<Image src={testSource} imageWidth={testImageWidth} imageHeight={testImageHeight} />)
    })

    it('renders the correct image', () =>{
        const { getByTestId } = render(<Image src={testSource} imageWidth={testImageWidth} imageHeight={testImageHeight} />)

        expect(getByTestId('image').props.source).toBe(testSource)
    })

    it('handles the imageWidth prop', () =>{
        const { getByTestId } = render(<Image src={testSource} imageWidth={testImageWidth} imageHeight={testImageHeight} />)

        expect(getByTestId('image').props.imageWidth).toBe(testImageWidth)
    })

    it('handles the imageHeight prop', () =>{
        const { getByTestId } = render(<Image src={testSource} imageWidth={testImageWidth} imageHeight={testImageHeight} />)

        expect(getByTestId('image').props.imageHeight).toBe(testImageHeight)
    })
})