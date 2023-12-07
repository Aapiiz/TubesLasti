import ContentLogin from "../component/contentLogin";
import Footer from "../component/footer";
import Header from "../component/Header"
import React from "react";

const Login  = () => {
    return(
        <div className="flex flex-col h-screen">
            <Header />
            <ContentLogin />
            <Footer />
        </div>
    )
}; 

export default Login;