import * as React from 'react'
import { StyledWrapperOnPress } from './WrapperOnPress.styles'

import IWrapperOnPressProps from './WrapperOnPress.interface'

const WrapperOnPress: React.FC<IWrapperOnPressProps> = ({
    children,
    onPress,
}) => {
    return (
        <StyledWrapperOnPress
            onPress={onPress}
            testID='wrapperOnPress'
        >
            {children}
        </StyledWrapperOnPress>
    )
}

export default WrapperOnPress