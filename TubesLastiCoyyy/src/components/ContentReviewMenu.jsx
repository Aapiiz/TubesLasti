//import { React, useState } from "react";
import CardPesanan from "./CardPesanan";
import { useLocation,useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";

const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};

// const sumHarga = (menu) => {
//   let sum = 0;
//   for(let i = 0; i < menu.length; i++){
//     sum += (menu[i].harga * 1)
//   }
//   return sum;
// }


const ContentReviewMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log('location di review: ',location)
  const [menuPesanan, setMenuPesanan] = useState([]);
  let idpesanan; 
  try {
      idpesanan = location.state.idpesanan;    
  } catch (error) {
      alert('anda harus memasukkan nama pemesan terlebih dahulu')
      window.location = '/'; //di login harus masukan nomor meja
  }

  
  useEffect(() => {
    Axios.get(`http://localhost:4000/pesanan/readpesananunique/${idpesanan}`)
    .then((result) => {
        console.log('data API', result.data); //Test hasil get
        const responseAPI = result.data;
        setMenuPesanan(new Array(responseAPI.data));
        console.log('response data',responseAPI.data);
    })
    .catch(err => {
        console.log('error : ', err);
    })
  }, [idpesanan])

  console.log('Type of menuPesanan:', typeof menuPesanan);
  console.log(menuPesanan)
  // const [pesanan, setPesanan] = useState({});
  // useEffect(() => {
  //   Axios.get('http://localhost:4000/pesanan/readpesanan')
  //   .then(result => {
  //       console.log('data API', result.data);
  //       const responseAPI = result.data;
  //       for (let i = 0; i < responseAPI.data.length; i++) {
  //         if (responseAPI.data[i].nomormeja == nomormeja) {
  //           setPesanan(responseAPI.data[i]);
  //         }
  //       }
  //       console.log("isi : ", pesanan._id)
  //   })
  //   .catch(err => {
  //       console.log('error : ', err);
  //   })
  // }, [nomormeja, pesanan._id])

  // const [menuPesanan, setMenuPesanan] = useState([]);

  // useEffect(() => {
  //   Axios.get(`http://localhost:4000/pesanan/readpesananunique/${location.pathname.split("/")[2]}`)
  //     .then((result) => {
  //       // console.log("data API", result.data);
  //       const responseAPI = result.data;
  //       setMenuPesanan([responseAPI.data]);
  //       // console.log("menu pesanan : ", responseAPI.data);
  //       // console.log("lokasi : ", location.pathname.split("/")[2]);
  //       // console.log("id pesanan sebelum direturn : ", menuPesanan._id);
  //     })
  //     .catch((err) => {
  //       console.log("error : ", err);
  //     });
  // }, [location.pathname, menuPesanan]);

  //   menuPesanan.listmenu.map((menu) => {
  //       console.log(menu)
  //   })
  //   menuPesanan.map((menu) => {
  //       console.log(menu)
  //   })

// let totalHarga = 0;
//   menuPesanan.map((pesanan) => (
//       totalHarga += pesanan.listmenu.harga*pesanan.listmenu.jumlah
//   ))

const handlePesan = () =>{
  alert('Pesanan Berhasil')
  navigate('/');
}

  return (
    <div className="h-full">
      {/* {console.log("id pesanan setelah di return : ", menuPesanan._id)} */}
      {/* Tulisan review menu */}
      <div className="mt-8 flex justify-center">
        <h1 className="text-4xl text-[#798777] font-bold">REVIEW MENU</h1>
      </div>

      {/* Berisi menu yang dipesan */}
      <div className="mt-4 flex justify-center">
        <div className="rounded-[30px] h-[400px] w-[1024px] bg-[#DAC0A3] overflow-y-auto">
          <div className="flex justify-between">
            <h1 className="ml-[30px] mt-5 text-2xl font-bold">Nama Pemesan:</h1>
              {menuPesanan.map((pesanan) => (
              <h1 key={pesanan._id} className="mr-[30px] mt-5 text-2xl font-bold">{pesanan.namapemesan}</h1>
            ))}
          </div>
          {menuPesanan.map((pesanan) => (
            pesanan.listmenu.map((menu) => (
                // console.log(menu),
                // console.log(menu.namatenant),
                // console.log(totalHarga),
                <CardPesanan key={pesanan._id} namamenu={menu.namamenu} harga={menu.harga} jumlah={menu.jumlah}></CardPesanan>
            )))
          )}
          {/* total pembayaran */}
          <div className="relative flex py-5 items-center mx-[30px]">
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <div className="flex justify-between">
            <h1 className="ml-[30px] text-2xl font-bold">Total Pembayaran</h1>
            {/* {menuPesanan[0] && menuPesanan[0].hargatotal ? rupiah(menuPesanan[0].hargatotal) : "Loading..."} */}
            {/* {console.log("isi: ", menuPesanan)} */}
            {menuPesanan.map((pesanan) => (
              <h1 key={pesanan._id} className="mr-[30px] text-2xl font-bold">{rupiah(pesanan.hargatotal)}</h1>
            ))}
            {/* <h1 className="mr-[30px] text-2xl font-bold">{rupiah(menuPesanan[0].hargatotal)}</h1> */}
          </div>
        </div>
      </div>

      {/* Tombol pesan dan bayar */}
      <div className="mt-8 flex justify-center">
        <button onClick={handlePesan} className="rounded-[20px] h-auto w-[300px] self text-center text-2xl text-[#FFFFFF] font-thin bg-[#BCD8B7] hover:bg-[#a7c1a3]">
          Pesan
        </button>
        <button onClick={() => navigate(`/daftarmenu/`,{state: {namapemesan: menuPesanan[0].namapemesan}})}className="rounded-[20px] h-auto w-[300px] ml-5 self text-center text-2xl text-[#FFFFFF] font-thin bg-[#d0d492] hover:bg-[#bcb185]">
          Kembali
        </button>
      </div>
    </div>
  );
};

export default ContentReviewMenu;
