import React, { forwardRef, useState, useRef, useEffect, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'
import {
  Wrapper
} from './style'

const Scroll = forwardRef((props, ref) => {
  const [bscroll, setBscroll] = useState()
  const wrapper = useRef()

  const { direction, click, refresh, bounceTop, bounceBottom } = props;
  const { pullUp, pullDown, onScroll } = props;

  useEffect(() => {
    const scroll = new BScroll(wrapper.current, {
      scrollX: direction === "horizental",
      scrollY: direction === "vertical",
      probeType: 3,  // 实时派发 scroll 事件
      click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom
      }
    })
    setBscroll(scroll)
    return () => {
      setBscroll(null)
    }
     // eslint-disable-next-line 
  }, [])
  //刷新
  useEffect (() => {
    if (refresh && bscroll){
      bscroll.refresh()
    }
  });
 // 监听滑动事件
  useEffect (() => {
    if (!bscroll || !onScroll) return
    bscroll.on ('scroll', (scroll) => {
      console.log('scroll', scroll)
      onScroll(scroll)
    })
    return () => {
      bscroll.off ('scroll')
    }
  }, [onScroll, bscroll])
  //上拉加载
  useEffect(() => {
    if(!bscroll || !pullUp) return 
    bscroll.on('scrollEnd', () => {
      // 判断是否滑动到了底部
      if (bscroll.y <= bscroll.maxScrollY + 100){
        pullUp ()
      }
    })
    return () => {
      bscroll.off('scrollEnd')
    }
  }, [bscroll, pullUp])
  //下拉刷新
  useEffect(() => {
    if(!bscroll || !pullDown) return 
    bscroll.on('touchEnd', (pos) => {
      // 判断用户的下拉动作
      if (pos.y > 50) {
        pullDown();
      }
    })
    return () => {
      bscroll.off('touchEnd')
    }
  }, [bscroll, pullDown])
  // 一般和 forwardRef 一起使用，ref 已经在 forWardRef 中默认传入
  useImperativeHandle (ref, () => ({
    // 给外界暴露 refresh 方法
    refresh () {
      if (bscroll) {
        bscroll.refresh ()
        bscroll.scrollTo (0, 0)
      }
    },
    // 给外界暴露 getBScroll 方法，提供 bs 实例
    getBScroll () {
      if (bscroll) {
        return bscroll
      }
    }
  }))
  return (
    <Wrapper ref={wrapper}>
      {props.children}
    </Wrapper>
  )
})
Scroll.defaultProps = {
  direction: "vertical",
  click: true,
  refresh: true,
  onScroll:null,
  pullUpLoading: false,
  pullDownLoading: false,
  pullUp: null,
  pullDown: null,
  bounceTop: true,
  bounceBottom: true
}
Scroll.propTypes = {
  direction: PropTypes.oneOf (['vertical', 'horizontal']),// 滚动的方向
  click:  PropTypes.bool,// 是否支持点击
  refresh: PropTypes.bool,// 是否刷新
  onScroll: PropTypes.func,// 滑动触发的回调函数
  pullUp: PropTypes.func,// 上拉加载逻辑
  pullDown: PropTypes.func,// 下拉加载逻辑
  pullUpLoading: PropTypes.bool,// 是否显示上拉 loading 动画
  pullDownLoading: PropTypes.bool,// 是否显示下拉 loading 动画
  bounceTop: PropTypes.bool,// 是否支持向上吸顶
  bounceBottom: PropTypes.bool// 是否支持向下吸底
};
export default Scroll