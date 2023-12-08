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

const sumHarga = (menu) => {
  let sum = 0;
  for(let i = 0; i < menu.length; i++){
    sum += (menu[i].harga * 1)
  }
  return sum;
}


const ContentReviewMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log('location di review: ',location)
  let idpesanan; 
  let menu;
  try {
      idpesanan = location.state.idpesanan;    
      menu = location.state.menu;
  } catch (error) {
      alert('anda harus memasukkan nama pemesan terlebih dahulu')
      window.location = '/'; //di login harus masukan nomor meja
  }

  //getPesanan
  const [menuPesanan, setMenuPesanan] = useState({});
  useEffect(() => {
    Axios.get(`http://localhost:4000/pesanan/readpesananunique/${idpesanan}`)
    .then(result => {
        console.log('data API', result.data); //Test hasil get
        setMenuPesanan(result.data.data);
    })
    .catch(err => {
        console.log('error : ', err);
    })
  }, [menuPesanan._id])


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
          {/* iterasi card pesanan sebanyak data yang ada di database*/}
          {menu.map((pesanan) => (
            <CardPesanan key={pesanan._id} namamenu={pesanan.namamenu} harga={pesanan.harga} jumlah={1}></CardPesanan>
          ))

          }
          {/* {menuPesanan.map((pesanan) => (
            pesanan.listmenu.map((menu) => (
                // console.log(menu),
                // console.log(menu.namatenant),
                // console.log(totalHarga),
                <CardPesanan key={pesanan._id} namamenu={menu.namamenu} harga={menu.harga} jumlah={menu.jumlah}></CardPesanan>
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
            {/* {menu.map((pesanan) => ( */}
              <h1 className="mr-[30px] text-2xl font-bold">{rupiah(sumHarga(menu))}</h1>
            {/* ))} */}
            {/* <h1 className="mr-[30px] text-2xl font-bold">{rupiah(menuPesanan[0].hargatotal)}</h1> */}
          </div>
        </div>
      </div>

      {/* Tombol pesan dan bayar */}
      <div className="mt-8 flex justify-center">
        <button onClick={handlePesan} className="rounded-[20px] h-auto w-[300px] self text-center text-2xl text-[#FFFFFF] font-thin bg-[#BCD8B7] hover:bg-[#a7c1a3]">
          Pesan
        </button>
      </div>
    </div>
  );
};

//onClick={() => navigate(`/halamanpembayaran/${pesanan._id}`, {state: {nomormeja: nomormeja}})}

export default ContentReviewMenu;
