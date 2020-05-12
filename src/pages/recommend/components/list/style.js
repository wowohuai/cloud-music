import styled from 'styled-components'
import style from '@/assets/styles'

export const ListWrapper = styled.div`
  max-width: 100%;
  .title {
    font-weight: 700;
    padding-left: 6px;
    font-size: 16px;
    line-height: 60px;
    text-align:center;
  }
`
export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`


export const ListItem = styled.div`
  width: 32%;
  position: relative;
  .img-wrapper{
    height: 0;
    padding-bottom: 100%;
    .decorate {
      position: absolute;
      top: 0;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient(hsla(0,0%,43%,.4),hsla(0,0%,100%,0));
    }
    img {
      position: absolute;
      width: 100%;
      border-radius: 3px;
    }
  }
  .play-count{
    position: absolute;
    top:1px;
    right: 1px;
    font-size: ${style["font-size-s"]};
    line-height: 15px;
    color: ${style["font-color-light"]};
    .play{
      font-size: 12px;
      padding-right: 2px;
    }
  }
  .desc{
    overflow: hidden;
    margin-top: 2px;
    padding: 0 2px;
    height: 50px;
    text-align: left;
    font-size: ${style["font-size-s"]};
    line-height: 1.4;
    color: ${style["font-color-desc"]};
  }
`