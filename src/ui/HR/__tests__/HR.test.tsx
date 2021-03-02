import * as React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react-native'
import HR from '../HR'

describe('HR Component', () => {
    afterEach(cleanup)

    // initial render
    it('renders without crashing', () => {
        render(<HR />)
    })

    // width prop
    it('handles the width prop', () => {
        const testWidth = '200px'
        const { getByTestId } = render(<HR width={testWidth} />)
        const hr = getByTestId('hr')

        expect(hr.props.width).toBe(testWidth)
    })

    // height prop
    it('handles the height prop', () => {
        const testHeight = '200px'
        const { getByTestId } = render(<HR height={testHeight} />)
        const hr = getByTestId('hr')

        expect(hr.props.height).toBe(testHeight)
    })

    // pt prop
    it('handles the pt prop', () => {
        const testPaddingTop = 20
        const { getByTestId } = render(<HR pt={testPaddingTop} />)
        const hr = getByTestId('hr')

        expect(hr.props.pt).toBe(testPaddingTop)
    })

    // pr prop
    it('handles the pr prop', () => {
        const testPaddingRight = 20
        const { getByTestId } = render(<HR pr={testPaddingRight} />)
        const hr = getByTestId('hr')

        expect(hr.props.pr).toBe(testPaddingRight)
    })

    // pb prop
    it('handles the pb prop', () => {
        const testPaddingBottom = 20
        const { getByTestId } = render(<HR pb={testPaddingBottom} />)
        const hr = getByTestId('hr')

        expect(hr.props.pb).toBe(testPaddingBottom)
    })

    // pl prop
    it('handles the pl prop', () => {
        const testPaddingLeft = 20
        const { getByTestId } = render(<HR pl={testPaddingLeft} />)
        const hr = getByTestId('hr')

        expect(hr.props.pl).toBe(testPaddingLeft)
    })

    // mt prop
    it('handles the mt prop', () => {
        const testMarginTop = 20
        const { getByTestId } = render(<HR mt={testMarginTop} />)
        const hr = getByTestId('hr')

        expect(hr.props.mt).toBe(testMarginTop)
    })

    // mr prop
    it('handles the mr prop', () => {
        const testMarginRight = 20
        const { getByTestId } = render(<HR mr={testMarginRight} />)
        const hr = getByTestId('hr')

        expect(hr.props.mr).toBe(testMarginRight)
    })

    // mb prop
    it('handles the mb prop', () => {
        const testMarginBottom = 20
        const { getByTestId } = render(<HR mb={testMarginBottom} />)
        const hr = getByTestId('hr')

        expect(hr.props.mb).toBe(testMarginBottom)
    })

    // ml prop
    it('handles the ml prop', () => {
        const testMarginLeft = 20
        const { getByTestId } = render(<HR ml={testMarginLeft} />)
        const hr = getByTestId('hr')

        expect(hr.props.ml).toBe(testMarginLeft)
    })

    // color prop
    it('handles the color prop', () => {
        const testColor = '#ebebeb'
        const { getByTestId } = render(<HR color={testColor} />)
        const hr = getByTestId('hr')

        expect(hr.props.color).toBe(testColor)
    })
})  