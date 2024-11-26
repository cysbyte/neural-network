import React from 'react'
import styled from 'styled-components'
import bgFooter from '@/assets/home/bg-footer.svg'
import Input from './Input'
import SubscribeButton from './SubscribeButton'
import SocialLinks from './SocialLinks'
import BottomLinks from './BottomLinks'

const Footer = () => {
    const data = [
        {
            id: 1,
            title: "Modular Architecture",
            desc: "Insights on Neural Network’s layered structure supporting decentralized AI."
        },
        {
            id: 2,
            title: "Security & Privacy",
            desc: "Explore how Neural Network uses ZKPs and cryptographic techniques for secure data handling."
        },
        {
            id: 3,
            title: "AI Collaboration & Development",
            desc: "Learn how global contributors power innovation in AI models and applications."
        },
    ]
    const Wrapper = styled.section`
        width: 100%;
        height: 1078px;
        background-image: url('${bgFooter}');
        margin-top: 1rem;
        @media screen and (max-width: 1040px) {
            height: 100%;
        }
    `
    const BlogWrapper = styled.div`
        width: 1040px;
        margin: auto auto;
        padding: 8rem 0rem;
        letter-spacing: 0.2px;
        @media screen and (max-width: 1040px) {
            width: 100%;
            padding: 0rem;
        }
        h2 {
            font-family: Inter;
            font-size: 44px;
            font-weight: 700;
            line-height: 53.25px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: white;
            paddign-top: 10rem;
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
        }
        .middle-box {
            margin-top: 4rem;
            h4 {
                font-family: Inter;
                font-size: 24px;
                font-weight: 400;
                line-height: 29.05px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                color: white;
            }
            .flex-container {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: start;
                margin-top: 1.5rem;
                gap: 0rem;
                width: 95%;
                @media screen and (max-width: 1040px) {
                    width: 100%;
                    flex-direction: column;
                    gap: 2rem;
                }
                .flex-card {
                    flex: 1;
                    width: 100%;
                    h6 {
                        font-family: Inter;
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 19.36px;
                        text-align: left;
                        text-underline-position: from-font;
                        text-decoration-skip-ink: none;
                        color: white;
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
                        width: 50%;
                        @media screen and (max-width: 1040px) {
                            width: 100%;
                        }
                    }
                }
            }
        }
        .bottom-desc {
            margin-top: 2rem;
        }
    `

    const SubscribeWrapper = styled.div`
        width: 1040px;
        margin: auto auto;
        @media screen and (max-width: 1040px) {
            width: 100%;
        }
        h2 {
            font-family: Inter;
            font-size: 24px;
            font-weight: 700;
            line-height: 29.05px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: white;
        }
        .middle-box {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 3rem;
            width: 97%;
            margin-top: 2rem;
            @media screen and (max-width: 1040px) {
                flex-direction: column;
                width: 100%;
            }
            .input-box {
                flex: 1;
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                gap: 1rem;
                @media screen and (max-width: 1040px) {
                    flex-direction: column;
                    gap: 1rem;
                }
            }
        }
    `

    const BorderWrapper = styled.div`
        width: 100%;
        height: auto;
        border-top: 1px solid #3D3D3D;
        padding: 7rem 0rem;
    `

    return (
        <Wrapper>
            <BlogWrapper>
                <h2>Blog</h2>
                <p>Explore Insights, Innovation, and the Future of Decentralized AI with Neural Network</p>
                <div className='middle-box'>
                    <h4>Featured Topics</h4>
                    <div className='flex-container'>
                        {
                            data.map((item) => (
                                <div key={item.id} className='flex-card'>
                                    <h6>{item.title}</h6>
                                    <p>{item.desc}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <p className='bottom-desc'>Stay connected with the latest trends, updates, and community stories from Neural Network.</p>
            </BlogWrapper>
            <BorderWrapper>
                <SubscribeWrapper>
                    <h2>Stay updated on Neural Network’s latest advancements</h2>
                    <div className='middle-box'>
                        <div className='input-box'>
                            <Input title='' placeholder='E-mail' />
                            <SubscribeButton />
                        </div>
                        <SocialLinks />
                    </div>
                    <BottomLinks />
                </SubscribeWrapper>
            </BorderWrapper>
        </Wrapper>
    )
}

export default Footer