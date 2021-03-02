import * as React from 'react'
import AnimatedAnimation from './Animation.animations'

import IAnimationProps from './Animation.interface'

const Animation: React.FC<IAnimationProps> = ({
    children,
    animationDelay,
    initialPose,
    pose,
}) => {
    return (
        <AnimatedAnimation
            initialPose={initialPose || 'opacityZero'}
            pose={pose || 'opacityOne'}
            withParent={false}
            animationDelay={animationDelay}
            poseKey={Math.random() + Date.now()}
        >
            {children}
        </AnimatedAnimation>
    )
}

export default Animation