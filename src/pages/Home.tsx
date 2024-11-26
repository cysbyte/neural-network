import Build from '@/components/home/build'
import Ecosystem from '@/components/home/ecosystem'
import Footer from '@/components/home/footer'
import Header from '@/components/home/header'
import Hero from '@/components/home/hero'
import Incentive from '@/components/home/incentive'
import Join from '@/components/home/join'
import KeyFeatures from '@/components/home/key-features'
import Privacy from '@/components/home/privacy'
import Technology from '@/components/home/technology'
import styled from 'styled-components'


const Home = () => {
    const Wrapper = styled.main`
        width: 100%;
        overflow: hidden;
        background-color: black;
        .upper-box {
            background-color: black;
            max-width: 1440px;
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