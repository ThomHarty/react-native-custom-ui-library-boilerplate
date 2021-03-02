import * as React from 'react'
import { StyledScrollContainer } from './ScrollContainer.styles'

import IScrollContainerProps from './ScrollContainer.interface'

const ScrollContainer: React.FC<IScrollContainerProps> = ({ 
    children, 
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems, 
    width, 
    height, 
    padding,
    backgroundColor,
    horizontal,
    showsHorizontalScrollIndicator, 
    showsVerticalScrollIndicator, 
    pt, 
    pr, 
    pb, 
    pl, 
    onScrollBeginDrag,
    onScrollEndDrag,
    onTouchStart,
    onTouchEnd,
    onMomentumScrollEnd,
    onScroll,
    scrollRef,
    contentOffset,
    onContentSizeChange,
    nestedScrollEnabled,
}) => {
    return (
        <StyledScrollContainer
            testID='scroll-container'
            flexDirection={flexDirection}
            flexWrap={flexWrap}
            backgroundColor={backgroundColor}
            width={width}
            height={height}
            horizontal={horizontal ? horizontal : 'false'}
            showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
            showsVerticalScrollIndicator={showsVerticalScrollIndicator}
            onScrollBeginDrag={onScrollBeginDrag}
            onScrollEndDrag={onScrollEndDrag}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            onMomentumScrollEnd={onMomentumScrollEnd}
            onScroll={onScroll}
            scrollEventThrottle={16}
            contentContainerStyle={{
                justifyContent: justifyContent || 'flex-start',
                alignItems: alignItems || 'stretch',
                padding: padding || 0,
                
            }}
            pt={pt}
            pr={pr}
            pb={pb}
            pl={pl}
            ref={scrollRef}
            contentOffset={contentOffset}
            onContentSizeChange={onContentSizeChange}
            nestedScrollEnabled={nestedScrollEnabled}
        >
            {children}
        </StyledScrollContainer>
    )
}

export default ScrollContainer