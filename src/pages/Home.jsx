import React   from "react";
import Hero    from "../components/Hero";
import Collections from "../components/Collections";
import Gallery from "../pages/Gallery";

const Home = () => {
    return (
        <>    
            <Hero />
            <Collections />
            <Gallery />
        </>
    )
}

export default Home;