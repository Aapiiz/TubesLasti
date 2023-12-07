import {useEffect} from "react";
// import CardMenu from "CardMenu";
import {useLocation, useNavigate} from "react-router-dom";
// import Axios from "axios";
import {useState} from "react";

const ContentDaftarMenu = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   let namaPemesan
// //   try {
// //       namaPemesan = location.state.namaPemesan;    
// //   } catch (error) {
// //       alert('anda harus memasukkan nama pemesan terlebih dahulu')
// //       window.location = '/MemasukkanNamaPemesan'; //di login harus masukan nama pemesan
// //   }

// Get All Pesanan
//   const [pesanan, setPesanan] = useState({});
//   useEffect(() => {
//     Axios.get('http://localhost:4000/pesanan/readpesanan')
//     .then(result => {
//         console.log('data API', result.data);
//         const responseAPI = result.data;
//         for (let i = 0; i < responseAPI.data.length; i++) {
//           if (responseAPI.data[i].nomormeja == nomormeja) {
//             setPesanan(responseAPI.data[i]);
//           }
//         }
//         console.log("isi : ", pesanan._id)
//     })
//     .catch(err => {
//         console.log('error : ', err);
//     })
//   }, [nomormeja, pesanan._id])


const [menus, setMenus] = useState([]);  
// API Get All Menu
  useEffect(() => {
    Axios.get('http://localhost:4000/menu/readmenu/')
    .then((result) => {
      console.log("data API", result.data);
      const responseAPI = result.data;
      setMenus(responseAPI.data);
    })
    .catch((err) => {
      console.log("error : ", err);
    })
  }, [location.pathname]);

  return (
    <div className="flex justify-center items-center w-screen min-h-full mb-auto x-w-[1920px] mx-auto py-4 px-4 relative">
      <div className="kontainer min-h-[350px] w-11/12 bg-[#BDD2B6] rounded-lg border border-[#8ea686] mb-5">
        <h1 className="flex justify-center text-3xl font-bold my-5">Jelajah Menu</h1>
        <div className="kontainer-row flex justify-center flex-row my-5 overflow-x-hidden px-5">
          <div className="flex w-full overflow-x-scroll-hidden [&>div]:flex-shrink-0 pb-5">
            {/* {menus.map((menu) => (
              <CardMenu namamenu={menu.namamenu} idtenant={menu.idtenant} namatenant={menu.namatenant} idpesanan={pesanan._id} listmenupesanan={pesanan.listmenu} hargaTotal={pesanan.hargaTotal} gambar={`http://localhost:4000/${menu.image}`} deskripsi={menu.deskripsi} stok={menu.stok} harga={menu.harga} key={menu._id} menuid={menu._id}>
                {menu.namamenu}
              </CardMenu>
            ))} */}
            <CardMenu namamenu="Ayam jago" idtenant="A01" namatenant="Warung Sule" idpesanan="af32455" hargaTotal={50000} gambar={`http://localhost:4000/${menu.image}`} deskripsi={menu.deskripsi} stok={menu.stok} harga={menu.harga} key={menu._id} menuid={menu._id}>
                {menu.namamenu}
              </CardMenu>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center absolute bottom-3">
        {/* <button className="rounded-lg flex justify-center items-center w-[200px] h-[35px] bg-[#C66666] border-[#883C3C] border-1 shadow-md shadow-[#D18A8A] hover:bg-[#b05b5b] mx-2">
          <h1 onClick={handlerKeranjang} className="text-[#FFFFFF] font-semibold">Masukkan Keranjang</h1>
        </button> */}
        {/* <button onClick={() => navigate(`/reviewmenu/${pesanan._id}`, {state: {nomormeja: nomormeja}})} className="rounded-lg flex justify-center items-center w-[200px] h-[35px] bg-[#C66666] border-[#883C3C] border-1 shadow-md shadow-[#D18A8A] hover:bg-[#b05b5b] mx-2">
          <h1 className="text-[#FFFFFF] font-semibold">Cek Keranjang</h1>
        </button> */}
      </div>
    </div>
  );
};

export default ContentDaftarMenu;
