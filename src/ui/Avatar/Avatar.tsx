import * as React from 'react'

import { StyledAvatar } from './Avatar.styles'

import { IAvatarProps, IDefaultAvatarProps } from './Avatar.interface'

const defaultProps: IDefaultAvatarProps = {
    src: require('../../theme/assets/images/default-avatar.png')
}

const Avatar: React.FC<IAvatarProps> = ({ src }) => {
    return (
        <StyledAvatar 
            source={src || defaultProps.src}
            testID='avatar'
        />
    )
}

export default Avatar