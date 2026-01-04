import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import IndicatorSection from './components/indicatorSection'
import HelpSection from './components/HelpSection'
import Footer from './components/Footer'
import HeroSectionIllustration from './components/HeroSectionIllustration'

const HomePage = () => {
    return (
        <div>
            <div className="p-8">
                <Header />
                <HeroSection />
            </div>
            <div className="relative mb-90">
                <HeroSectionIllustration />

            </div>
            <div className="p-8">
                <IndicatorSection />
                <HelpSection />
                <Footer />
            </div>

        </div>
    )
}


export default HomePage;
