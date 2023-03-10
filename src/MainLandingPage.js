import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero";
import DownloadAppCTA from "components/cta";
import Testimonial from "components/testimonials";
import VerticalWithAlternateImageAndTextFeatures from "components/features";
import Footer from "components/footers";
import ThreeColSliderCards from "./components/slider-cards";
import Message from "components/message";

export default function Home() {
    return (
        <AnimationRevealPage>
            <Hero/>
            <DownloadAppCTA/>
            <VerticalWithAlternateImageAndTextFeatures/>
            <ThreeColSliderCards/>
            <Testimonial/>
            <Message/>
            <Footer/>
        </AnimationRevealPage>
    );
};
