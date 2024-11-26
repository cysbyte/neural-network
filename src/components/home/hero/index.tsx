import styled from 'styled-components'
import bgHero from '@/assets/home/bg-hero.svg'

const Hero = () => {
    const Wrapper = styled.section`
        position: relative;
        width: 100%;
        height: 637px;
        img {
            position: absolute;
            left: 0%;
            top: -20%;
            z-index: 1;
            display: block;
            width: 100%;
            margin-right: 20%;
            height: 900px;
            -webkit-filter: blur(4px);
            -moz-filter: blur(4px);
            -o-filter: blur(4px);
            -ms-filter: blur(4px);
            filter: blur(2px);
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
            padding: 9rem 0rem 2rem 0rem;
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
            .bottom-box {
                margin-top: 10.5rem;
                margin-bottom: 10rem;
                & > p:first-child{
                    font-family: Inter;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 16px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    color: white;
                    letter-spacing: 0.1px;
                }
                & > p:last-child{
                    margin-top: 0.6rem;
                    font-family: Inter;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 16px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    color: white;
                    letter-spacing: 0.1px;
                }
            }
        }
    `
    return (
        <Wrapper>
            <img src={bgHero} alt="" />
            <div className='content'>
                <h1>Create, Deploy,and Scale Decentralized<br /> AI with Neural Network</h1>
                <p>Empowering Developers with a Trustless, Scalable Layer 2 Platform<br /> for AI Innovation</p>
                <div className='bottom-box'>
                    <p>CTA:  Get in Touch || Docs</p>
                    <p>[Graphic Visualisation of Neural Network]</p>
                </div>
            </div>
        </Wrapper>
    )
}

export default Hero