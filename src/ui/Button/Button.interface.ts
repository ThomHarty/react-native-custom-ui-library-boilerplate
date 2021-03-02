export default interface IButtonProps {
    onPress: () => any
    title?: string
    fullWidth?: boolean
    buttonColor?: string
    textColor?: string
    buttonBorderColor?: string
    borderRadius?: string
    borderWidth?: number
    leftContent?: any
    rightContent?: any
    dashed?: boolean
}