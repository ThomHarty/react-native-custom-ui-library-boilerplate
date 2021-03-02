import * as React from 'react'
import { StyledContainer } from './Container.styles'

import IContainerProps from './Container.interface'

const Container: React.FC<IContainerProps> = ({ 
    children, 
    flexValue, 
    flexDirection, 
    flexWrap, 
    flexBasis, 
    justifyContent, 
    alignItems, 
    width, 
    height, 
    pt, 
    pr, 
    pb, 
    pl, 
    mt, 
    mr, 
    mb, 
    ml, 
    backgroundColor, 
    borderRadius,
    borderWidth,
    borderColor,
}) => {
    return (
        <StyledContainer
            testID='container'
            flexValue={flexValue}
            flexDirection={flexDirection}
            flexBasis={flexBasis}
            flexWrap={flexWrap}
            backgroundColor={backgroundColor}
            justifyContent={justifyContent}
            alignItems={alignItems}
            width={width}
            height={height}
            pt={pt}
            pr={pr}
            pb={pb}
            pl={pl}
            mt={mt}
            mr={mr}
            mb={mb}
            ml={ml}
            borderRadius={borderRadius}
            borderWidth={borderWidth}
            borderColor={borderColor}
        >
            {children}
        </StyledContainer>
    )
}

export default Container