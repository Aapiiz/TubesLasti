import ContentNomorMeja from "../components/ContentNomorMeja";
import Footer from "../components/Footer";
import Header from "../components/Header";
import React from "react";

const NomorMejaPage  = () => {
    return(
        <div className="flex flex-col h-screen">
            <Header />
            <ContentNomorMeja />
            <Footer />
        </div>
    )
}; 

export default NomorMejaPage;