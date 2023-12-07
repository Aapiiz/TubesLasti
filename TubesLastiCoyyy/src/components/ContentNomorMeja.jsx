import React from "react";
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const ContentNomorMeja = () => {

    const navigate = useNavigate();

    const [nomormeja, setNomorMeja] = useState('')
    const [idpesanan, setIdPesanan] = useState('')

    const onSubmit = () =>{
        if (nomormeja<1 || nomormeja>10) {
            alert('Input nomor meja harus di antara 1-10')
        } 
        else {
            const data = new FormData();

            let emptyObject = '[]';
            data.append('nomormeja', nomormeja);
            data.append('listmenu', JSON.parse(emptyObject));
            data.append('hargatotal', 0);
            data.append('statuspesanan', 'pending');
            data.append('idpesanan', idpesanan);

            Axios.post('http://localhost:4000/pesanan/pesan', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res => {
                console.log('Post Success : ', res);
                setIdPesanan(res.data.data._id);
            })
            .catch(err => {
                console.log('Err : ', err);
            })

            navigate('/daftarmenu', {state:{idpesanan:idpesanan}})
        }
    }

    return (
        <div className="flex h-full justify-center  items-center flex-col bg-white">
            <div className="flex justify-center py-[120px] h-[200px] flex-col align bg-[#F8F0E5] my-[10px]">
                <div className="flex justify-center text-black font-extrabold text-4xl bg-[#F8F0E5]">Pilih Meja</div>
                <form action="POST/">
                    <h1 className="mx-[40px] mt-[10px]">Nomor Meja : </h1>
                    <div className="mx-[40px]">
                        <input id="nomeja" type="nomeja" className="w-full shadow-md" placeholder="  Masukkan antara 1-10" onChange={(e) => setNomorMeja(e.target.value)} />
                    </div>
                    <div className="flex justify-center mt-[20px]">
                        <button className='rounded-full h-10 w-36 text-xl font-bold text-[#F8F0E5] bg-[#0F2C59] shadow-md shadow-[#798777] hover:bg-[#e3d9d0]' >
                            Submit
                        </button>
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default ContentNomorMeja