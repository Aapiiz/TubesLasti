import React from "react";
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const ContentLogin = () => {

    const history=useNavigate();

    const[nomeja, setNomeja] = useState('')
    let loginSuccess = false
    let idUserLoggedIn

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("inilink", {
                username,
                password
            })
            .then(res=>{
                if(res.data.message=="Berhasil Login"){
                    idUserLoggedIn = res.data.data._id;
                    history('/HomePage', {state:{idUserLoggedIn:idUserLoggedIn}});
                    loginSuccess = true;
                } else{
                    //alert('')
                }
            })
            .catch(e=>{
                alert('wrong details!')
                console.log(e);
            })
        } catch (e){
            console.log(e);
        }

        try {
            await axios.post("http://localhost:4000/tenant/logintenant/", {
                username,
                password
            })
            .then(res=>{
                if(res.data.message=="Login Berhasil"){
                    idUserLoggedIn = res.data.data._id;
                    history(`/daftarmenutenant/${idUserLoggedIn}`, {state:{idUserLoggedIn:idUserLoggedIn}});
                    loginBerhasil = true;
                } else {
                    // alert('username atau password salah!! ')
                }
            })
            .catch(e=>{
                alert('wrong details!')
                console.log(e);
            })
        } catch (e) {
            console.log(e);
        }
        if (!loginBerhasil){
            alert('username atau password salah!! ')
        }
    }

    return (
        <div className="flex h-full justify-center  items-center flex-col bg-white">
            <div className="flex justify-center py-[120px] h-[200px] flex-col align bg-[#F8F0E5] my-[10px]">
                <div className="flex justify-center text-black font-extrabold text-4xl bg-[#F8F0E5]">Pilih Meja</div>
                <form action="POST">
                    <h1 className="mx-[40px] mt-[10px]">Nomor Meja : </h1>
                    <div className="mx-[40px]">
                        <input id="nomeja" type="nomeja" className="w-full shadow-md" placeholder="  Masukkan antara 1-10" onChange={(e) => setNomeja(e.target.value)} />
                    </div>
                    <div className="flex justify-center mt-[20px]">
                        <button className='rounded-full h-10 w-36 text-xl font-bold text-[#F8F0E5] bg-[#0F2C59] shadow-md shadow-[#798777] hover:bg-[#e3d9d0]' onClick={submit}>
                            Submit
                        </button>
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default ContentLogin