import React from 'react';
import ImageCarousel from '../carousel/imageCarousel';
import Footer from '../footer/footer';

const Home = () => {
    return (
        <div>
            <h1>Welcome to WECS!</h1>
            <ImageCarousel />
            <p style={{fontSize: "30px"}}>We are the Women in Engineering and Computer Science group at the University of Victoria. 
            We host events and academic support sessions with the goal to create a community for women and gender-non-conforming individuals.</p>
            <Footer />
        </div>
    )
}

export default Home;