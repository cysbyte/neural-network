import styled from 'styled-components'
import join from '@/assets/home/join.svg'
import bgJoin from '@/assets/home/bg-join.svg'

const Join = () => {
    const Wrapper = styled.section`
        width: 100%;
        height: 406px;
        margin-top: 15rem;
        @media screen and (max-width: 1040px) {
            height: auto;
            margin-top: 1rem;
        }
        .container {
            position: relative;
            .bg-img {
                position: absolute;
                width: 100%;
                height: 100%;
                left: 5rem;
                top: 0;
                z-index: 1;
            }
            width: 1040px;
            margin: auto auto;
            display: flex;
            flex-direction: row;
            gap: 2rem;
            justify-content: center;
            align-items: start;
            @media screen and (max-width: 1040px) {
                width: 100%;
                flex-direction: column;
            }
            .left-box {
                z-index: 10;
                h3 {
                    font-family: Inter;
                    font-size: 44px;
                    font-weight: 700;
                    line-height: 53.25px;
                    text-align: left;
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
                    font-weight: 300;
                    line-height: 19.36px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    color: #FFFFFF80;
                    margin-top: 1rem;
                    width: 70%;
                    z-index: 10;
                }
            }
            .right-img {
                margin-right: -13rem;
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
                <img className='bg-img' src={bgJoin} alt="" />
                <div className='left-box'>
                    <h3>Join the Neural Network Community</h3>
                    <p>Be part of the future of decentralized AI. Join our community of developers, researchers, and enthusiasts to collaborate, innovate, and shape the future of AI.</p>
                </div>
                <img className='right-img' src={join} alt="" />
            </div>
        </Wrapper>
    )
}

export default Join