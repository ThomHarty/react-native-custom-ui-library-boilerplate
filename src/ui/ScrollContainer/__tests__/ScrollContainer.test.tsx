import * as React from 'react'
import { cleanup, render } from '@testing-library/react-native'
import ScrollContainer from '../ScrollContainer'

describe('ScrollContainer Component', () => {
    afterEach(cleanup)

    // initial render
    it('renders without crashing', () => {
        render(<ScrollContainer />)
    })

    // flexDirection prop
    it('handles the flexDirection prop', () => {
        const testFlexDirection = 'row'
        const { getByTestId } = render(<ScrollContainer flexDirection={testFlexDirection} />)
        const container = getByTestId('scroll-container')

        expect(container.props.flexDirection).toBe(testFlexDirection)
    })

    // width prop
    it('handles the width prop', () => {
        const testWidth = '200px'
        const { getByTestId } = render(<ScrollContainer width={testWidth} />)
        const container = getByTestId('scroll-container')

        expect(container.props.width).toBe(testWidth)
    })

    // height prop
    it('handles the height prop', () => {
        const testHeight = '200px'
        const { getByTestId } = render(<ScrollContainer height={testHeight} />)
        const container = getByTestId('scroll-container')

        expect(container.props.height).toBe(testHeight)
    })

    // backgroundColor prop
    it('handles the backgroundColor prop', () => {
        const testBackgroundColor = '#ebebeb'
        const { getByTestId } = render(<ScrollContainer backgroundColor={testBackgroundColor} />)
        const container = getByTestId('scroll-container')

        expect(container.props.backgroundColor).toBe(testBackgroundColor)
    })

    // horizontal prop
    it('handles the native horizontal prop', () => {
        const testHorizontal = true
        const { getByTestId } = render(<ScrollContainer horizontal={testHorizontal} />)
        const container = getByTestId('scroll-container')

        expect(container.props.horizontal).toBe(testHorizontal)
    })

    // showsHorizontalScrollIndicator prop
    it('handles the native showsHorizontalScrollIndicator prop', () => {
        const testShowsHorizontalScrollIndicator = true
        const { getByTestId } = render(<ScrollContainer showsHorizontalScrollIndicator={testShowsHorizontalScrollIndicator} />)
        const container = getByTestId('scroll-container')

        expect(container.props.showsHorizontalScrollIndicator).toBe(testShowsHorizontalScrollIndicator)
    })

    // showsVerticalScrollIndicator prop
    it('handles the native showsVerticalScrollIndicator prop', () => {
        const testShowsVerticalScrollIndicator = true
        const { getByTestId } = render(<ScrollContainer showsVerticalScrollIndicator={testShowsVerticalScrollIndicator} />)
        const container = getByTestId('scroll-container')

        expect(container.props.showsVerticalScrollIndicator).toBe(testShowsVerticalScrollIndicator)
    })
})
  