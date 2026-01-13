import React from 'react'
import HeroSection from '../component/pages/Home/HeroSection'
import Offer from '../component/pages/Home/Offer'
import ExpertDoctors from '../component/pages/Home/ExpertDoctors'
import Tips from '../component/pages/Home/Tips'

function Home() {
    return (
        <div>
            <HeroSection />
            <Offer />
            <ExpertDoctors />
            <Tips />
        </div>
    )
}

export default Home