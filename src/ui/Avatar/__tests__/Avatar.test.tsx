import * as React from 'react'
import { cleanup, render } from '@testing-library/react-native'
import Avatar from '../Avatar'

describe('Avatar Component', () => {
    afterEach(cleanup)

    const testSource = { uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }
    const defaultSource = require('../../../theme/assets/images/default-avatar.png')

    it('renders without crashing', () => {
        render(<Avatar src={testSource} />)
    })

    it('renders the correct image', () =>{
        const { getByTestId } = render(<Avatar src={testSource} />)

        expect(getByTestId('avatar').props.source).toBe(testSource)
    })

    it('renders the default image', () => {
        const { getByTestId } = render(<Avatar />)

        expect(getByTestId('avatar').props.source).toBe(defaultSource)
    })
})