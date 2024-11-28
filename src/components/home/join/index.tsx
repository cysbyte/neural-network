import styled from 'styled-components'
import join from '@/assets/home/join.svg'
import { Link } from 'react-router-dom'

const Join = () => {
    const Wrapper = styled.section`
        width: 100%;
        height: auto;
        margin-top: 10.5rem;
        @media screen and (max-width: 1040px) {
            height: auto;
            margin-top: 1rem;
            margin-bottom: 3rem;
        }
        .container {
            position: relative;
            width: 1162px;
            margin: auto auto;
            display: flex;
            flex-direction: column;
            gap: 0rem;
            justify-content: center;
            align-items: center;
            @media screen and (max-width: 1040px) {
                width: 100%;
                flex-direction: column;
            }
            .upper-box {
                z-index: 10;
                background-color: #E75F00;
                width: 100%;
                height: 299px;
                border-radius: 30px;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                justify-content: center;
                align-items:center;
                h3 {
                    font-family: Inter;
                    font-size: 44px;
                    font-weight: 700;
                    line-height: 53.25px;
                    text-align: center;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    color: white;
                    z-index: 10;
                    @media screen and (max-width: 1040px) {
                        font-size: 30px;
                        line-height: 36px;
                        font-weight: 500;
                    }
                }
                p {
                    font-family: Inter;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 19.36px;
                    text-align: center;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    color: #FFFFFFB8;
                }
                .join-telegram {
                    font-family: DM Sans;
                    font-size: 26.89px;
                    font-weight: 700;
                    line-height: 35.01px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    text-decoration: none;
                    padding: 0.7rem 3.3rem;
                    background-color: white;
                    color: #E75F00;
                    border-radius: 32px;
                }
            }
            .bottom-img {
                margin-right: 0rem;
                z-index: 0;
                @media screen and (max-width: 1040px) {
                    display: none;
                }
            }
        }
    `
    return (
        <Wrapper>
            <div className='container'>
                
                <div className='upper-box'>
                    <h3>Join the Neural Network Community</h3>
                    <p>Be part of the future of decentralized AI. Join our community of developers, researchers, and enthusiasts<br/> to collaborate, innovate, and shape the future of AI.</p>
                    <Link className='join-telegram' to=''>Join Telegram</Link>
                </div>
                <img className='bottom-img' src={join} alt="" />
            </div>
        </Wrapper>
    )
}

export default Join