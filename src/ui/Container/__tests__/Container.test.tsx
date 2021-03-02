import * as React from 'react'
import { cleanup, render } from '@testing-library/react-native'
import Container from '../Container'

describe('Container Component', () => {
    afterEach(cleanup)

    const testIsAnimated = false

    // initial render
    it('renders without crashing', () => {
        render(<Container />)
    })

    // flex prop
    it('handles the flex prop', () => {
        const testFlex = 2
        const { getByTestId } = render(<Container flexValue={testFlex} />)
        const container = getByTestId('container')

        expect(container.props.flex).toBe(testFlex)
    })

    // flexDirection prop
    it('handles the flexDirection prop', () => {
        const testFlexDirection = 'row'
        const { getByTestId } = render(<Container flexDirection={testFlexDirection} />)
        const container = getByTestId('container')

        expect(container.props.flexDirection).toBe(testFlexDirection)
    })

    // flexWrap prop
    it('handles the flexWrap prop', () => {
        const testFlexWrap = 'wrap'
        const { getByTestId } = render(<Container flexWrap={testFlexWrap} />)
        const container = getByTestId('container')

        expect(container.props.flexWrap).toBe(testFlexWrap)
    })

    // justifyContent prop
    it('handles the justifyContent prop', () => {
        const testJustifyContent = 'center'
        const { getByTestId } = render(<Container justifyContent={testJustifyContent} />)
        const container = getByTestId('container')

        expect(container.props.justifyContent).toBe(testJustifyContent)
    })

    // alignItems prop
    it('handles the alignItems prop', () => {
        const testAlignItems = 'center'
        const { getByTestId } = render(<Container alignItems={testAlignItems} />)
        const container = getByTestId('container')

        expect(container.props.alignItems).toBe(testAlignItems)
    })

    // width prop
    it('handles the width prop', () => {
        const testWidth = '200px'
        const { getByTestId } = render(<Container width={testWidth} />)
        const container = getByTestId('container')

        expect(container.props.width).toBe(testWidth)
    })

    // height prop
    it('handles the height prop', () => {
        const testHeight = '200px'
        const { getByTestId } = render(<Container height={testHeight} />)
        const container = getByTestId('container')

        expect(container.props.height).toBe(testHeight)
    })

    // pt prop
    it('handles the pt prop', () => {
        const testPaddingTop = 20
        const { getByTestId } = render(<Container pt={testPaddingTop} />)
        const container = getByTestId('container')

        expect(container.props.pt).toBe(testPaddingTop)
    })

    // pr prop
    it('handles the pr prop', () => {
        const testPaddingRight = 20
        const { getByTestId } = render(<Container pr={testPaddingRight} />)
        const container = getByTestId('container')

        expect(container.props.pr).toBe(testPaddingRight)
    })

    // pb prop
    it('handles the pb prop', () => {
        const testPaddingBottom = 20
        const { getByTestId } = render(<Container pb={testPaddingBottom} />)
        const container = getByTestId('container')

        expect(container.props.pb).toBe(testPaddingBottom)
    })

    // pl prop
    it('handles the pl prop', () => {
        const testPaddingLeft = 20
        const { getByTestId } = render(<Container pl={testPaddingLeft} />)
        const container = getByTestId('container')

        expect(container.props.pl).toBe(testPaddingLeft)
    })

    // mt prop
    it('handles the mt prop', () => {
        const testMarginTop = 20
        const { getByTestId } = render(<Container mt={testMarginTop} />)
        const container = getByTestId('container')

        expect(container.props.mt).toBe(testMarginTop)
    })

    // mr prop
    it('handles the mr prop', () => {
        const testMarginRight = 20
        const { getByTestId } = render(<Container mr={testMarginRight} />)
        const container = getByTestId('container')

        expect(container.props.mr).toBe(testMarginRight)
    })

    // mb prop
    it('handles the mb prop', () => {
        const testMarginBottom = 20
        const { getByTestId } = render(<Container mb={testMarginBottom} />)
        const container = getByTestId('container')

        expect(container.props.mb).toBe(testMarginBottom)
    })

    // ml prop
    it('handles the ml prop', () => {
        const testMarginLeft = 20
        const { getByTestId } = render(<Container ml={testMarginLeft} />)
        const container = getByTestId('container')

        expect(container.props.ml).toBe(testMarginLeft)
    })

    // backgroundColor prop
    it('handles the backgroundColor prop', () => {
        const testBackgroundColor = '#ebebeb'
        const { getByTestId } = render(<Container backgroundColor={testBackgroundColor} />)
        const container = getByTestId('container')

        expect(container.props.backgroundColor).toBe(testBackgroundColor)
    })
})