import posed from 'react-native-pose'

const AnimatedContainer = posed.View({
    opacityZero: { opacity: 0 },
    opacityOne: { 
        opacity: 1,
        delay: (props: any) => {
            return props.animationDelay || 0
          }
    },
})

export default AnimatedContainer