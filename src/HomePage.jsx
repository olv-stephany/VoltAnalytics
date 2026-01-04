import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import IndicatorSection from './components/indicatorSection'
import HelpSection from './components/HelpSection'
import Footer from './components/Footer'

const HomePage = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <IndicatorSection/>
            <HelpSection/>
            <Footer/>
        </div>
    )
}


export default HomePage;
