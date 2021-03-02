import * as React from 'react'
import {
    StyledToggleTextContainer,
    StyledToggleText,
    StyledToggleContainer,
    StyledToggleBar,
    StyledToggle,
} from './Toggle.styles'

import IToggleProps from './Toggle.interface'

const Toggle: React.FC<IToggleProps> = ({
    onPress,
    toggle,
    text,
    multiline,
}) => {
    return (
        <StyledToggleTextContainer multiline={multiline}>
            {text ? (
                <StyledToggleText>{text}</StyledToggleText>
            ) : null}
            <StyledToggleContainer testID='toggleContainer' onPress={onPress}>
                <StyledToggleBar testID='toggleBar' toggle={toggle} />
                <StyledToggle testID='toggleBarButton' toggle={toggle} />
            </StyledToggleContainer>
        </StyledToggleTextContainer>
    )
}

export default Toggle