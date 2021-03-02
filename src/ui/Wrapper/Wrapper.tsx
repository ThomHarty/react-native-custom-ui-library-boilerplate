import * as React from 'react'
import { StyledWrapper } from './Wrapper.styles'

import IWrapperProps from './Wrapper.interface'

const Wrapper: React.FC<IWrapperProps> = ({
    children,
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
    zIndex,
}) => {
    return (
        <StyledWrapper
            testID='wrapper'
            pt={pt}
            pr={pr}
            pb={pb}
            pl={pl}
            mt={mt}
            mr={mr}
            mb={mb}
            ml={ml}
            zIndex={zIndex}
            width={width}
            height={height}
        >
            {children}
        </StyledWrapper>
    )
}

export default Wrapper