import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero";
import RsvpCta from "components/cta";
import Testimonial from "components/testimonials";
import VerticalWithAlternateImageAndTextFeatures from "components/features";
import Footer from "components/footers";
import ThreeColSliderCards from "./components/slider-cards";
import TwoColumnPrimaryBackgroundFAQS from "components/faqs";
import Marquee from "./components/marquee";

export default function Home() {
    return (
        <AnimationRevealPage>
            <Hero/>
            <RsvpCta/>
            <Marquee/>
            <VerticalWithAlternateImageAndTextFeatures/>
            <ThreeColSliderCards/>
            <Testimonial/>
            <TwoColumnPrimaryBackgroundFAQS/>
            <Footer/>
        </AnimationRevealPage>
    );
};
