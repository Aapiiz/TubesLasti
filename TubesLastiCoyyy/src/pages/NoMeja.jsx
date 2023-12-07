import ContentNoMeja from "../components/contentNoMeja";
import Footer from "../components/Footer";
import Header from "../components/Header";
import React from "react";

const NoMeja  = () => {
    return(
        <div className="flex flex-col h-screen">
            <Header />
            <ContentNoMeja />
            <Footer />
        </div>
    )
}; 

export default NoMeja;