import React from 'react'
import "./style.css"
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Card from '../components/Card/Card';
import HikeCatalogue from '../components/HikeCatalogue/HikeCatalogue';
import ContentModern from '../components/ContentModern/ContentModern';
import ScrollAnimation from 'react-animate-on-scroll';
import Contact from './Contact/Contact';
export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <ScrollAnimation animateIn='anim' animateOnce={true} offset={100}>
                <ContentModern />
            </ScrollAnimation>
            <HikeCatalogue />



        </>

    )
}
