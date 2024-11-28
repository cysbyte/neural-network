import React from 'react'
const Build = React.lazy(()=>import('@/components/home/build'))
const Ecosystem = React.lazy(()=>import('@/components/home/ecosystem'))
const Footer = React.lazy(()=>import('@/components/home/footer'))
const Hero = React.lazy(()=>import('@/components/home/hero'))
const Incentive = React.lazy(()=>import('@/components/home/incentive'))
const Join = React.lazy(()=>import('@/components/home/join'))
const KeyFeatures = React.lazy(()=>import('@/components/home/key-features'))
const Header = React.lazy(()=>import('@/components/home/header'))
const Privacy = React.lazy(()=>import('@/components/home/privacy'))
const Technology = React.lazy(()=>import('@/components/home/technology'))
import styled from 'styled-components'


const Home = () => {
    const Wrapper = styled.main`
        width: 100%;
        overflow: hidden;
        background-color: black;
        .upper-box {
            background-color: black;
            max-width: 1454px;
            overflow: hidden;
            margin: auto auto;
            padding: 0 0;
            @media screen and (max-width: 800px) {
                padding: 0rem 1rem;
                overflow: hidden;
            }
        }
       
    `
    return (
        <Wrapper>
            <div className='upper-box'>
                <Header />
                <Hero/>
                <KeyFeatures/>
                <Technology/>
                <Build/>
                <Ecosystem/>
                <Incentive/>
                <Privacy/>
                <Join/>
                <Footer/>
            </div>
            {/* <Footer/> */}
        </Wrapper>
    )
}

export default Home