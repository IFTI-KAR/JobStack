import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import HeroSection from '../components/herosection';
import Howitworks from '../components/Howitworks';
import Companies from '../pages/Companies';
import Footer from '../components/Footer';
import LatestBlogs from '../components/Latestblogs';
import IncreasingNumber from '../components/increasingNumber';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
                <HeroSection></HeroSection>
                <Howitworks></Howitworks>
                
                
            <main>
                
                <Outlet></Outlet>
                
                    

            </main>
            <LatestBlogs></LatestBlogs>
            <IncreasingNumber></IncreasingNumber>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;