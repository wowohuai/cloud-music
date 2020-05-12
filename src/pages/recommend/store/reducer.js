import { fromJS } from 'immutable'
import * as types from './constants'

const defaultState  = fromJS({
  bannerList: [],
  recommendList: []
})


export default (state=defaultState, action) => {
  const { type, data } = action
  switch(type) {
    case types.SET_BANNER_LIST:
      console.log(data)
      return state.set('bannerList', data)
    case types.SET_RECOMMEND_LIST:
      console.log(data)
      return state.set('recommendList', data)
    default:
      return state
  }
}