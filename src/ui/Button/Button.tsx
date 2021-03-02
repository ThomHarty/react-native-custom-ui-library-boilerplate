import * as React from 'react'

import {
    StyledButton,
    StyledButtonText,
} from './Button.styles'

import IButtonProps from './Button.interface'

const Button: React.FC<IButtonProps> = ({
    onPress,
    title,
    fullWidth,
    buttonColor,
    textColor,
    buttonBorderColor,
    borderRadius,
    leftContent,
    rightContent,
    dashed,
}) => {
    return (
        <StyledButton
            testID='button'
            onPress={onPress} 
            fullWidth={fullWidth}
            buttonColor={buttonColor}
            buttonBorderColor={buttonBorderColor}
            borderRadius={borderRadius}
            dashed={dashed}
        >
            {leftContent ? leftContent : null}
            {title ? (
                <StyledButtonText textColor={textColor}>
                    {title}
                </StyledButtonText>
            ) : null}
            {rightContent ? rightContent : null}
        </StyledButton>
    )
}

export default Button