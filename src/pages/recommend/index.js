import React , { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Slider from '@/components/slider'
import Scroll from '@/components/scroll'
import List from './components/list'
import { actionCreators } from './store'
import {
  Wrapper
} from './style'
const Recommend  = (props) => {
  const scroll = useRef()
  const recommendList = useSelector(state => state.getIn(['recommend', 'recommendList']).toJS())
  const bannerList = useSelector(state => state.getIn(['recommend', 'bannerList']).toJS())
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(actionCreators.getRecommendList())
      dispatch(actionCreators.getBannerList())
    //eslint-disable-next-line
  }, [])

  return (
    <Wrapper>
      <Scroll ref={scroll} >
        <div> 
          <Slider list={bannerList}/>
          <List list={recommendList}/>
        </div>
      </Scroll>
    </Wrapper>
  )
}

export default React.memo(Recommend)