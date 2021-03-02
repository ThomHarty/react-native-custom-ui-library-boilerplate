import * as React from 'react'
import { ActivityIndicator } from 'react-native'

import ILoadingSpinnerProps from './LoadingSpinner.interface'

const LoadingSpinner: React.FC<ILoadingSpinnerProps> = ({
    animating,
    color,
    hidesWhenStopped,
    size,
}) => {
    return (
        <ActivityIndicator 
            animating={animating}
            color={color}
            hidesWhenStopped={hidesWhenStopped}
            size={size}
            testID='spinner'
        />
    )
}

export default LoadingSpinner