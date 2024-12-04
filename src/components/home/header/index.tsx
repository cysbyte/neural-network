import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '@/assets/home/logo.svg'
import React from 'react'

const Header = () => {
  const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 4.8rem;
    @media screen and (max-width: 800px) {
        padding: 1.8rem 1rem;
    }
    h2 {
      font-family: Inter;
      font-size: 26px;
      font-weight: 400;
      line-height: 31.47px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: white;
      letter-spacing: 1px;
      @media screen and (max-width: 800px) {
          font-size: 20px;
      }
    }
    .right-box {
      display: flex;
      gap: 1.3rem;
      justify-content: center;
      align-items: center;
      @media screen and (max-width: 800px) {
          display: none;
      }
      .signin-button {
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 19.36px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: white;
        text-decoration: none;
      }
      .connect-button {
        padding: 1rem 2rem;
        background-color: #E75F00;
        color: white;
        font-family: Inter;
        font-size: 16px;
        font-weight: 700;
        line-height: 19.36px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        border-radius: 40px;
        border-color: white;
        border-width: 0px;
      }
    }
    
  `
  return (
    <Wrapper>
      <img src={logo} alt="" />
      <div className='right-box'>
        <Link to='' className='signin-button'>Sign in</Link>
        <button className='connect-button'>Connect Wallet</button>
      </div>
    </Wrapper>
  )
}

export default React.memo(Header)