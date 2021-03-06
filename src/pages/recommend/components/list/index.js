import React from 'react'
import { getCount } from '@/utils'
import {
  ListWrapper,
  List,
  ListItem
} from './style'

export default React.memo((props) => {
  const { list } = props
  
  return (
   <ListWrapper>
     <h1 className="title">推荐歌单</h1>
     <List>
      {list.map((item) => {
        return (
          <ListItem key={item.id}>
            <div className="img-wrapper">
              <div className="decorate"></div>
                  {/* 加此参数可以减小请求的图片资源大小 */}
              <img src={item.picUrl + "?param=300x300"} alt="music"/>
            </div>
            <div className="play-count">
              <i className="iconfont play">&#xe6bf;</i>
              <span className="count">{getCount(item.playCount)}</span>
            </div>
            <div className="desc">{item.name}</div>
          </ListItem>
        )
      })}
     </List>
   </ListWrapper>
  )
})