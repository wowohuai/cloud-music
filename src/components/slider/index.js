import React , { useState, useEffect }from 'react'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import {
  SliderContainer
} from './style'


export default React.memo((props) => {
  const [sliderSwiper, setSliderSwiper] = useState(null)
  const { list } = props
  useEffect(() => {
    if(list.length && !sliderSwiper) {
      let newSliderSwiper = new Swiper('.slider-container', {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {el: '.swiper-pagination'}
      })
      setSliderSwiper(newSliderSwiper)
    }
  },[list.length, sliderSwiper])

  return (
    <SliderContainer>
      <div className="before"></div>
      <div className="slider-container">
        <div className="swiper-wrapper">
          {
            list.map((item) => {
              return (
                <div className="swiper-slide" key={item.id}>
                  <div className="slider-nav">
                    <img src={item.imageUrl} alt="h" width="100%" height="100%"/>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </SliderContainer>
  )
})