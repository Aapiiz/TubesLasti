import {useEffect} from "react";
import CardMenu from "./CardMenu";
import {useLocation, useNavigate} from "react-router-dom";
import Axios from "axios";
import {useState} from "react";

const ContentDaftarMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log('location :',location)
  let namapemesan; 
  try {
      namapemesan = location.state.namapemesan;
      console.log("Berikut nama pemesan: ", namapemesan);   
  } catch (error) {
      alert('anda harus memasukkan nama pemesan terlebih dahulu')
      window.location = '/'; //di login harus masukan nomor meja
  }

  const [pesanan, setPesanan] = useState({});
  useEffect(() => {
    Axios.get('http://localhost:4000/pesanan/readpesanan')
    .then(result => {
        console.log('data API', result.data);
        const responseAPI = result.data;
        for (let i = 0; i < responseAPI.data.length; i++) {
          if (responseAPI.data[i].namapemesan == namapemesan) {
            setPesanan(responseAPI.data[i]);
          }
        }
        console.log("isi : ", pesanan._id)
    })
    .catch(err => {
        console.log('error : ', err);
    })
  }, [namapemesan, pesanan._id])

// Get Pesanan
  // const [pesanan, setPesanan] = useState({});
  // console.log('jncuk',location.state.idpesanan);
  // console.log('id pesanan: ',idpesanan) 
  // useEffect(() => {
  //   Axios.get(`http://localhost:4000/pesanan/readpesananunique/${idpesanan}`)
  //   .then(result => {
  //       console.log('data API', result.data); //Test hasil get
  //       setPesanan(result.data.data);
  //   })
  //   .catch(err => {
  //       console.log('error : ', err);
  //   })
  // }, [pesanan._id])
  ///${pesanan._id}


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
    <div className="flex justify-center items-center w-screen min-h-full mb-auto x-w-[1920px] mx-auto py-4 px-4 relative bg-white">
      <div className="kontainer min-h-[350px] w-11/12 bg-[#DAC0A3] rounded-lg border border-[#DAC0A3] mb-5">
        <h1 className="flex justify-center text-3xl font-bold my-5">Jelajah Menu</h1>
        <div className="kontainer-row flex justify-center flex-row my-5 overflow-x-hidden px-5">
          <div className="flex w-full overflow-x-scroll-hidden [&>div]:flex-shrink-0 pb-5">
            {menus.map((menu) => (
              <CardMenu key={menu._id} namamenu={menu.namamenu} gambar={`http://localhost:4000/${menu.image}`} deskripsi={menu.deskripsi} idpesanan={pesanan._id} harga={menu.harga} menuid={menu._id}>
                {menu.namamenu}
              </CardMenu>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center absolute bottom-3">
        <button onClick={() => navigate(`/reviewmenu/`, {state: {idpesanan: pesanan._id}})} className="rounded-lg flex justify-center items-center w-[200px] h-[35px] bg-[#C66666] border-[#883C3C] border-1 shadow-md shadow-[#D18A8A] hover:bg-[#b05b5b] mx-2">
          <h1 className="text-[#FFFFFF] font-semibold">Cek Keranjang</h1>
        </button>
      </div>
    </div>
  );
};

export default ContentDaftarMenu;
