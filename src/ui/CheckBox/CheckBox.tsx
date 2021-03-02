import * as React from 'react'
import {
    StyledCheckBoxContainer,
    StyledCheckBox,
} from './CheckBox.styles'

import ICheckBoxProps from './CheckBox.interface'

const CheckBox: React.FC<ICheckBoxProps> = props => {
    const { onPress, on } = props
    return (
        <StyledCheckBoxContainer 
            testID='checkbox' 
            onPress={onPress}
        >
            <StyledCheckBox testID='checkbox-button' on={on} />
        </StyledCheckBoxContainer>
    )
}

export default CheckBox