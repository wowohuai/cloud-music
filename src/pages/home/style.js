import styled from 'styled-components'
import style from '@/assets/styles' 

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
  background: ${style['theme-color']};
  &>span {
    line-height: 40px;
    color: #f1f1f1;
    font-size: 20px;
    &.iconfont{
      font-size: 25px;
    }
  }
`

export const Tab = styled.div`
  height: 44px;  
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  background: ${style['theme-color']};
  a {
    flex: 1;
    padding: 2px 0;
    font-size: ${style['font-size-l']};
    color: #e4e4e4;
    &.selected {
      span{
        padding: 3px 0;
        display: block;
        font-weight: 700;
        color: #f1f1f1;
        position: relative;
      }
      span::after{
        position:absolute;
        content: '';
        height: 2px;
        width: 50%;
        background: #ffffff;
        left: 50%;
        transform: translateX(-50%);
        bottom: -7px;
        border-radius: 2px;
      }
    }
  }
`

export const TabItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`