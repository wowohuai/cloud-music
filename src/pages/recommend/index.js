import React , { useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import Slider from '@/components/slider'
import Scroll from '@/components/scroll'
import List from './components/list'
import { actionCreators } from './store'
import {
  Wrapper
} from './style'
const Recommend  = (props) => {
  const {getBannerDataDispatch, getRecommendListDataDispatch, bannerList, recommendList} = props
  const scroll = useRef()

  useEffect(() => {
    getRecommendListDataDispatch()
    getBannerDataDispatch()
    //eslint-disable-next-line
  }, [])
  const bannerListJS = bannerList ? bannerList.toJS () : [];
  const recommendListJS = recommendList ? recommendList.toJS () :[];

  return (
    <Wrapper>
      <Scroll ref={scroll} >
        <div> 
          <Slider list={bannerListJS}/>
          <List list={recommendListJS}/>
        </div>
      </Scroll>
    </Wrapper>
    
  )
}


const mapState = state => ({
  bannerList: state.getIn(['recommend', 'bannerList']),
  recommendList: state.getIn(['recommend', 'recommendList']),
})

const mapDispatch = dispatch => ({
  getBannerDataDispatch () {
    dispatch (actionCreators.getBannerList())
  },
  getRecommendListDataDispatch () {
    dispatch (actionCreators.getRecommendList())
  },
})

export default connect(mapState, mapDispatch)( React.memo(Recommend))