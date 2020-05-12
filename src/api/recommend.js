import request from '@/utils/request'

export const _getBannerList = () => {
  return request.get ('/banner')
}

export const _getRecommendList = () => {
  return request.get ('/personalized')
}