import React from "react";
// import { useState } from "react"
// import axios from "axios"
// import { useNavigate } from "react-router-dom"

const ContentLogin = () => {
    return (
        <div className="flex h-full justify-center bg-white">
            <div className="flex justify-center w-[500px] flex-col align bg-[#F8F0E5] my-[10px]">
                <div className="flex justify-center text-black font-extrabold text-4xl bg-[#F8F0E5]">Login Page
                </div>
                <div className="mx-[30px] mt-[10px]">Username : </div>
                <div className="mx-[30px]">
                    <input type="text" placeholder="Masukkan akun" />
                </div>
                <div className="mx-[30px] mt-[10px]">Password : </div>
                <div className="mx-[30px] mb-[50px]">
                    <input type="text" placeholder="Masukkan password" />
                </div>
                <div className="flex justify-center">
                    <button className='rounded-full h-10 w-36 text-xl font-bold text-[#F8F0E5] bg-[#0F2C59] shadow-md shadow-[#798777] hover:bg-[#e3d9d0]'>
                        Login
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default ContentLogin