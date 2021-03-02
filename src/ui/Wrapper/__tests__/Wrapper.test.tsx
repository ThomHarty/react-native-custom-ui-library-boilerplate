import * as React from 'react'
import { cleanup, render } from '@testing-library/react-native'
import Wrapper from '../Wrapper'

describe('Wrapper Component', () => {
    afterEach(cleanup)

    // initial render
    it('renders without crashing', () => {
        render(<Wrapper />)
    })

    // pt prop
    it('handles the pt prop', () => {
        const testPaddingTop = 20
        const { getByTestId } = render(<Wrapper pt={testPaddingTop} />)
        const wrapper = getByTestId('wrapper')

        expect(wrapper.props.pt).toBe(testPaddingTop)
    })

    // pr prop
    it('handles the pr prop', () => {
        const testPaddingRight = 20
        const { getByTestId } = render(<Wrapper pr={testPaddingRight} />)
        const wrapper = getByTestId('wrapper')

        expect(wrapper.props.pr).toBe(testPaddingRight)
    })

    // pb prop
    it('handles the pb prop', () => {
        const testPaddingBottom = 20
        const { getByTestId } = render(<Wrapper pb={testPaddingBottom} />)
        const wrapper = getByTestId('wrapper')

        expect(wrapper.props.pb).toBe(testPaddingBottom)
    })

    // pl prop
    it('handles the pl prop', () => {
        const testPaddingLeft = 20
        const { getByTestId } = render(<Wrapper pl={testPaddingLeft} />)
        const wrapper = getByTestId('wrapper')

        expect(wrapper.props.pl).toBe(testPaddingLeft)
    })

    // mt prop
    it('handles the mt prop', () => {
        const testMarginTop = 20
        const { getByTestId } = render(<Wrapper mt={testMarginTop} />)
        const wrapper = getByTestId('wrapper')

        expect(wrapper.props.mt).toBe(testMarginTop)
    })

    // mr prop
    it('handles the mr prop', () => {
        const testMarginRight = 20
        const { getByTestId } = render(<Wrapper mr={testMarginRight} />)
        const wrapper = getByTestId('wrapper')

        expect(wrapper.props.mr).toBe(testMarginRight)
    })

    // mb prop
    it('handles the mb prop', () => {
        const testMarginBottom = 20
        const { getByTestId } = render(<Wrapper mb={testMarginBottom} />)
        const wrapper = getByTestId('wrapper')

        expect(wrapper.props.mb).toBe(testMarginBottom)
    })

    // ml prop
    it('handles the ml prop', () => {
        const testMarginLeft = 20
        const { getByTestId } = render(<Wrapper ml={testMarginLeft} />)
        const wrapper = getByTestId('wrapper')

        expect(wrapper.props.ml).toBe(testMarginLeft)
    })
  })
  