import * as React from 'react'
import {
    StyledRadioButtonContainer,
    StyledRadioButton,
} from './RadioButton.styles'

import IRadioButtonProps from './RadioButton.interface'

const RadioButton: React.FC<IRadioButtonProps> = ({ onPress, on }) => {
    return (
        <StyledRadioButtonContainer
            testID='radio'
            onPress={onPress}
        >
            <StyledRadioButton testID='radio-button' on={on} />
        </StyledRadioButtonContainer>
    )
}

export default RadioButton