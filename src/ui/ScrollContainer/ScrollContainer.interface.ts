export default interface IScrollContainerProps {
    flexDirection?: "row" | "column" | "row-reverse" | "column-reverse"
    flexWrap?: string
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"
    alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline"
    width?: string
    height?: string
    padding?: number
    pt?: number
    pr?: number
    pb?: number
    pl?: number
    backgroundColor?: string
    // scrollview props - add more native props when required
    horizontal?: boolean
    showsHorizontalScrollIndicator?: boolean
    showsVerticalScrollIndicator?: boolean
    onScrollBeginDrag?: (event: any) => void
    onScrollEndDrag?: (event: any) => void
    onMomentumScrollEnd?: (event: any) => void
    onScroll?: (event:any) => void
    onTouchStart?: (event: any) => void
    onTouchEnd?: (event: any) => void
    scrollRef?: any
    contentOffset?: any
    onContentSizeChange?: (event: any) => void
    nestedScrollEnabled?: boolean
}