export default interface ITextInputProps {
    value: string
    handleOnChangeText: (value: string) => void
    placeholder?: string
    autoCorrect?: boolean
    autoFocus?: boolean
    autoCapitalize?: "none" | "sentences" | "words" | "characters"
    defaultValue?: string
    keyboardType?: "default" | "email-address" | "numeric" | "phone-pad" | "visible-password" | "ascii-capable" | "numbers-and-punctuation" | "url" | "number-pad" | "name-phone-pad" | "decimal-pad" | "twitter" | "web-search" | undefined
    multiline?: boolean
    textAlignVertical?: "auto" | "top" | "bottom" | "center" | undefined
    numberOfLines?: number
    secureTextEntry?: boolean
    iconSrc?: object
    iconOnPress?: () => void
    borderDisabled?: boolean
    onFocus?: () => void
    onEndEditing?: () => void
}