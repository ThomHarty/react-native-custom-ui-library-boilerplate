import * as React from 'react'

import { StyledHR } from './HR.styles'

import IHRProps from './HR.interface'

const HR: React.FC<IHRProps> = ({
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
    color,
}) => {
    return (
        <StyledHR
            color={color}
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
            testID='hr'
        />
    )
}

export default HR