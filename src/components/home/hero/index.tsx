import styled from 'styled-components'
import bgHero from '@/assets/home/bg-hero.svg'
import arrow from '@/assets/home/arrow.svg'
import React from 'react'

const Wrapper = styled.section`
    position: relative;
    width: 100%;
    height: 783px;
    background-color: #151515;
    
    .bg-img {
        position: absolute;
        left: 0;
        bottom: -1rem;
        z-index: 1;
        display: block;
        width: 100%;
        object-fit: cover;
    }
    .content {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
        z-index: 9999;
        width: 1040px;
        height:100%;
        padding: 4.5rem 0rem 2rem 0rem;
        @media screen and (max-width: 1040px) {
            width: 100%;
            padding: 1rem 2rem 1rem 1rem;
            top: 10%;
        }

        h1 {
            font-family: Inter;
            font-size: 52px;
            font-weight: 700;
            line-height: 62.93px;
            letter-spacing: 1.5px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: white;
            z-index: 10;
            @media screen and (max-width: 800px) {
                font-size: 30px;
                line-height: 36px;
                font-weight: 500;
            }
            span {
                color: #E75F00;
            }
        }
        p {
            font-family: Inter;
            font-size: 26px;
            font-weight: 400;
            line-height: 31.47px;
            text-align: left;
            letter-spacing: 0.7px;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: white;
            margin-top: 1.8rem;
            @media screen and (max-width: 800px) {
                font-size: 20px;
                line-height: 30px;
                font-weight: 500;
            }
        }
        
    }
`

const BottomBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 409px;
    border: 1px solid #FFFFFF;
    border-radius: 122px;
    padding: 0rem 0.2rem 0rem 2rem;
    margin-top: 2rem;
    @media screen and (max-width: 800px) {
        display: none;
    }
    .get-in-touch {
        & > p:first-child {
            font-family: Inter;
            font-size: 16px;
            font-weight: 300;
            line-height: 16.36px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: white;
            margin-top: 0rem;
            letter-spacing: 0.1px;
            @media screen and (max-width: 409px) {
                text-wrap: wrap;
                font-size: 10px;
            }
        }
        & > p:last-child {
            font-family: Inter;
            font-size: 16px;
            font-weight: 300;
            line-height: 16.36px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: white;
            margin-top: 0.2rem;
            text-wrap: nowrap;
            letter-spacing: 0.1px;
            @media screen and (max-width: 409px) {
                text-wrap: wrap;
                font-size: 10px;
            }
        }
    }
    img {
        width: 49px;
    }
`
const Hero = () => {
    return (
        <Wrapper>
            <img className='bg-img' src={bgHero} alt="" />
            <div className='content'>
                <h1>Create, Deploy,and Scale Decentralized<br /> AI with <span className='highlight'>Neural Network</span></h1>
                <p>Empowering Developers with a Trustless, Scalable Layer 2 Platform<br /> for AI Innovation</p>
                <BottomBox>
                    <div className='get-in-touch'>
                        <p>CTA:  Get in Touch || Docs</p>
                        <p>[Graphic Visualisation of Neural Network]</p>
                    </div>
                    <img src={arrow} width={49} alt="" />
                </BottomBox>
            </div>
        </Wrapper>
    )
}

export default React.memo(Hero)