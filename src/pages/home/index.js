import React from 'react'
import { renderRoutes } from "react-router-config"
import { NavLink } from 'react-router-dom'
import {
  Top,
  Tab, TabItem
} from './style'

export default React.memo((props) => {
  const { route } = props
  return (
    <>
      <Top>
        <span className="iconfont menu">&#xe60b;</span>
        <span className="title">音悦台</span>
        <span className="iconfont search">&#xe7c4;</span>
      </Top>
      <Tab>
        <NavLink to={'/'} activeClassName="selected"><TabItem><span>推荐</span></TabItem></NavLink>
        <NavLink to={'/'} ><TabItem><span>歌手</span></TabItem></NavLink>
        <NavLink to={'/'} ><TabItem><span>排行榜</span></TabItem></NavLink>
      </Tab>
      {renderRoutes(route.routes)}
    </>
  )
})