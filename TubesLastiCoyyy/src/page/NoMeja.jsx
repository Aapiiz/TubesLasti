import ContentNoMeja from "../component/contentNoMeja";
import Footer from "../component/footer";
import Header from "../component/Header"
import React from "react";

const Login  = () => {
    return(
        <div className="flex flex-col h-screen">
            <Header />
            <ContentNoMeja />
            <Footer />
        </div>
    )
}; 

export default Login;