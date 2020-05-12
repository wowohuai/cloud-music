import { fromJS } from 'immutable'
import { _getBannerList, _getRecommendList} from '@/api/recommend'
import * as types from './constants'

export const setBannerList = list => ({
  type: types.SET_BANNER_LIST,
  data: fromJS(list)
})


export const setRecommendList = list => ({
  type: types.SET_RECOMMEND_LIST,
  data: fromJS(list)
})


export const getBannerList = () => {
  return async (dispatch) => {
    const data = await _getBannerList()
    const { banners } = data
    dispatch(setBannerList(banners))
  }
}

export const getRecommendList  = () => {
  return async (dispatch) => {
    const data = await _getRecommendList()
    const { result } = data
    dispatch(setRecommendList(result))
  }
}