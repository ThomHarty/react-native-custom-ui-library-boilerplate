import * as React from 'react'
import { StyledStyledText } from './StyledText.styles'

import IStyledTextProps from './StyledText.interface'

const StyledText: React.FC<IStyledTextProps> = ({
    text,
    fontSize,
    letterSpacing,
    fontWeight,
    alignText,
    textColor,
    lineHeight,
    toUpper,
    textDecoration,
}) => {
    return (
        <StyledStyledText
            testID='styledText'
            alignText={alignText}
            textColor={textColor}
            lineHeight={lineHeight}
            fontWeight={fontWeight}
            fontSize={fontSize}
            toUpper={toUpper}
            letterSpacing={letterSpacing}
            textDecoration={textDecoration}
        >
            {text}
        </StyledStyledText>
    )
}

export default StyledText