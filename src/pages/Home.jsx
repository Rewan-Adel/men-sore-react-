import React   from "react";
import Hero    from "../components/Hero";
import Gallery from "./Gallery";
import Collections from "../components/Collections";

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