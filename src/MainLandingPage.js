import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero";
import DownloadAppCTA from "components/cta";
import TwoColumnPrimaryBackgroundFAQS from "components/faqs";
import Testimonial from "components/testimonials";
import VerticalWithAlternateImageAndTextFeatures from "components/features";
import Footer from "components/footers";
import ThreeColSliderCards from "./components/slider-cards";

export default function Home() {
    return (
        <AnimationRevealPage>
            <Hero/>
            <DownloadAppCTA/>
            <VerticalWithAlternateImageAndTextFeatures/>
            <ThreeColSliderCards/>
            <Testimonial/>
            <TwoColumnPrimaryBackgroundFAQS/>
            <Footer/>
        </AnimationRevealPage>
    );
};
