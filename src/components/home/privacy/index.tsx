import styled from 'styled-components'
import privacy from '@/assets/home/privacy.svg'

const Privacy = () => {
    const Wrapper = styled.section`
    .container {
        width: 1040px;
        margin: auto auto;
        display: flex;
        gap: 2rem;
        justify-content: center;
        align-items: start;
        margin-top: 12rem;
            .left-box {
                h3 {
                    font-family: Inter;
                    font-size: 44px;
                    font-weight: 700;
                    line-height: 53.25px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    color: white;
                    @media screen and (max-width: 1040px) {
                        font-size: 30px;
                        line-height: 36px;
                        font-weight: 500;
                    }
                }
                .desc {
                    font-family: Inter;
                    font-size: 24px;
                    font-weight: 400;
                    line-height: 29.05px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    color: #FFFFFF80;
                    margin-top: 2rem;
                    @media screen and (max-width: 1040px) {
                        font-size: 16px;
                        line-height: 24px;
                    }

                }
                .cta {
                    font-family: Inter;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 19.36px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    color: #FFFFFF80;
                    margin-top: 6rem;
                }
            }
        }
        img {
            margin-right: -8rem;
        }
    `
    return (
        <Wrapper>
            <div className='container'>
                <div className='left-box'>
                    <h3>Privacy-Preserving AI Leveraging Zero-Knowledge Proofs for Secure AI</h3>
                    <p className='desc'>Neural Network integrates Zero-Knowledge Proofs and Federated Learning, allowing privacy-focused AI training for sensitive sectors like healthcare.</p>
                    <p className='cta'>CTA: Start building on the Neural Network</p>
                </div>
                <img src={privacy} alt="" />
            </div>
        </Wrapper>
    )
}

export default Privacy