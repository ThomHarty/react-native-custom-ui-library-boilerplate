export default interface IContainerProps {
    flexValue?: number | string
    flexDirection?: "row" | "column" | "row-reverse" | "column-reverse"
    flexWrap?: "nowrap" | "wrap" | "wrap-reverse"
    flexBasis?: string
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | string
    alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline" | string
    width?: string
    height?: string
    pt?: number
    pr?: number
    pb?: number
    pl?: number
    mt?: number
    mr?: number
    mb?: number
    ml?: number
    backgroundColor?: string
    borderRadius?: number
    borderWidth?: number
    borderColor?: string
}