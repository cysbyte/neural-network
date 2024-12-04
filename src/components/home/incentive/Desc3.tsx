import React from 'react'
import styled from 'styled-components'

const Desc3 = () => {
    const Wrapper = styled.p`
        text-align: left !important;
        width: 100%;
        & > span: nth-child(1) {
            font-family: Inter;
            font-size: 30px;
            font-weight: 500;
            line-height: 36.31px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: #E75F00;
        }
        & > span: nth-child(2) {
            font-family: Inter;
            font-size: 16px;
            font-weight: 500;
            line-height: 19.36px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: white;
        }
    `
  return (
    <Wrapper>
        <span>4.4</span><span> billion in liquidity pool</span>
    </Wrapper>
  )
}

export default React.memo(Desc3)