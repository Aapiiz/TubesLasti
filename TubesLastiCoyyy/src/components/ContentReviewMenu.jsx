//import { React, useState } from "react";
import CardPesanan from "./CardPesanan";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};

const ContentReviewMenu = () => {
  const location = useLocation();

  const navigate = useNavigate();
  let nomormeja
  // try {
  //     nomormeja = location.state.nomormeja;    
  // } catch (error) {
  //     alert('anda harus memasukkan nomor meja terlebih dahulu')
  //     window.location = '/MemasukkanNomorMeja';
  // }

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
          {/* iterasi card pesanan sebanyak data yang ada di database*/}
          {/* {menuPesanan.map((pesanan) => (
            pesanan.listmenu.map((menu) => (
                // console.log(menu),
                // console.log(menu.namatenant),
                // console.log(totalHarga),
                <CardPesanan key={pesanan._id} namatenant={menu.namatenant} namamenu={menu.namamenu} harga={menu.harga} jumlah={menu.jumlah}></CardPesanan>
            )))
          )} */}
          {/* total pembayaran */}
          <div className="relative flex py-5 items-center mx-[30px]">
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <div className="flex justify-between">
            <h1 className="ml-[30px] text-2xl font-bold">Total Pembayaran</h1>
            {/* {menuPesanan[0] && menuPesanan[0].hargatotal ? rupiah(menuPesanan[0].hargatotal) : "Loading..."} */}
            {/* {console.log("isi: ", menuPesanan)} */}
            {/* {menuPesanan.map((pesanan) => (
              <h1 key={pesanan._id} className="mr-[30px] text-2xl font-bold">{rupiah(pesanan.hargatotal)}</h1>
            ))} */}
            {/* <h1 className="mr-[30px] text-2xl font-bold">{rupiah(menuPesanan[0].hargatotal)}</h1> */}
          </div>
        </div>
      </div>

      {/* Tombol pesan dan bayar */}
      {/* <div className="mt-8 flex justify-center">
        <button onClick={() => navigate(`/halamanpembayaran/${pesanan._id}`, {state: {nomormeja: nomormeja}})} className="rounded-[20px] h-auto w-[300px] self text-center text-2xl text-[#FFFFFF] font-thin bg-[#BCD8B7] hover:bg-[#a7c1a3]">
          Pesan Dan Bayar!
        </button>
      </div> */}
    </div>
  );
};

export default ContentReviewMenu;
