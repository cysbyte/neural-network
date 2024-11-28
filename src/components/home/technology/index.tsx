import styled from 'styled-components'

const Technology = () => {
    const data = [
        {
            id: 1,
            title: "AI-Powered Execution Layer",
            desc: "Purpose-built for running AI models, our execution layer leverages Ethereum’s VM to handle training, validation, and inference, delivering seamless AI task management.",
        },
        {
            id: 2,
            title: "Transparent Data Availability Layer",
            desc: "Accessible, verifiable data builds a trust-driven network environment, allowing all participants to confidently access essential AI data.",
        },
        {
            id: 3,
            title: "Consensus Layer: Performance-Driven",
            desc: "Verifies and ranks AI contributions, rewarding high-quality model performance and ensuring optimal collaboration across the network.",
        },
    ]
    const Wrapper = styled.section`
        width: 100%;
        margin-top: 9.5rem;
        @media screen and (max-width: 1040px) {
            margin-top: 30rem;
        }
        .container {
            width: 1040px;
            margin: auto auto;
            @media screen and (max-width: 1040px) {
                width: 100%;
                padding: 1rem;
            }
            h2 {
                font-family: Inter;
                font-size: 44px;
                font-weight: 700;
                line-height: 53.25px;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                color: white;
                width: 100%;
                text-align: center;
                @media screen and (max-width: 1040px) {
                    font-size: 30px;
                    font-weight: 500;
                    line-height: 30px;
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
                color: white;
                width: 100%;
                margin-top: 1rem;
            }
            .middle-box {
                margin-top: 4.5rem;
                h3 {
                    font-family: Inter;
                    font-size: 32px;
                    font-weight: 400;
                    line-height: 38.73px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    color: white;
                    @media screen and (max-width: 1040px) {
                        font-size: 24px;
                        line-height: 30px;
                    }
                }
                .technology-box {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    gap: 1.5rem;
                    margin-top: 2rem;
                    @media screen and (max-width: 1040px) {
                        flex-direction: column;
                    }
                    .technology-card {
                        flex: 1;
                        height: 272px;
                        padding: 2rem 2rem;
                        background-color: #121212;
                        border: 1px solid #E75F00;
                        border-radius: 32px;
                        h6 {
                            font-family: Inter;
                            font-size: 24px;
                            font-weight: 500;
                            line-height: 29.05px;
                            text-align: left;
                            text-underline-position: from-font;
                            text-decoration-skip-ink: none;
                            color: white;

                        }
                        p {
                            font-family: Inter;
                            font-size: 16px;
                            font-weight: 400;
                            line-height: 19.36px;
                            text-align: left;
                            text-underline-position: from-font;
                            text-decoration-skip-ink: none;
                            color: #FFFFFF80;
                        }
                    }   
                    .bg-card-gradient {
                        background-image: url('/bg-technology-card.svg');
                        background-repeat: no-repeat;
                        background-size: cover;
                    }
                }
            }
            .bottom-box {
                margin-top: 1.5rem;
                & > p: first-child {
                    font-family: Inter;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 19.36px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    color: #FFFFFF80;
                    width: auto;
                }
                & > p: last-child {
                    font-family: Inter;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 19.36px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    color: white;
                    width: auto;
                    margin-top: 0.8rem;
                }
            }
        }

    `
    return (
        <Wrapper>
            <div className='container'>
                <h2>Technology</h2>
                <p>Neural Network is a Purpose-Built Modular Design for Decentralized AI Applications and Agents.</p>
                <div className='middle-box'>
                    <h3>Powerful Modular Framework on optimistic rollup technology.</h3>
                    <div className='technology-box'>
                        {
                            data.map((item) => (
                                <div key={item.id} 
                                className={`technology-card ${item.id===1?'bg-card-gradient': ''}`}
                                >
                                    <h6>{item.title}</h6>
                                    <p>{item.desc}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='bottom-box'>
                    <p>CTA: Learn about Neural Network technologies [Doc link]</p>
                    <p>[Graphic presentation on Neural Network Architecture ]</p>
                </div>
            </div>
        </Wrapper>
    )
}

export default Technology