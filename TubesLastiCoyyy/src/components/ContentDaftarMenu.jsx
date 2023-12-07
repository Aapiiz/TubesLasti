import {useEffect} from "react";
import CardMenu from "CardMenu";
import {useLocation, useNavigate} from "react-router-dom";
import Axios from "axios";
import {useState} from "react";

const ContentDaftarMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let idpesanan; 
  try {
      idpesanan = location.state.idpesanan;    
  } catch (error) {
      alert('anda harus memasukkan nama pemesan terlebih dahulu')
      window.location = '/MemasukkanNomorMeja'; //di login harus masukan n
  }

// Get All Pesanan
  const [pesanan, setPesanan] = useState({});
  useEffect(() => {
    Axios.get(`http://localhost:4000/pesanan/readpesananunique/${idpesanan}`)
    .then(result => {
        console.log('data API', result.data); //Test hasil get
        setPesanan(result.data.data);
    })
    .catch(err => {
        console.log('error : ', err);
    })
  }, [pesanan._id])


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
      <div className="kontainer min-h-[350px] w-11/12 bg-[#DAC0A3] rounded-lg border border-[#DAC0A3] mb-5">
        <h1 className="flex justify-center text-3xl font-bold my-5">Jelajah Menu</h1>
        <div className="kontainer-row flex justify-center flex-row my-5 overflow-x-hidden px-5">
          <div className="flex w-full overflow-x-scroll-hidden [&>div]:flex-shrink-0 pb-5">
            {menus.map((menu) => (
              <CardMenu key={menu._id} namamenu={menu.namamenu} gambar={`http://localhost:4000/${menu.image}`} pesanan={[pesanan._id]} deskripsi={menu.deskripsi} harga={menu.harga} menuid={menu._id}>
                {menu.namamenu}
              </CardMenu>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center absolute bottom-3">
        {/* <button className="rounded-lg flex justify-center items-center w-[200px] h-[35px] bg-[#C66666] border-[#883C3C] border-1 shadow-md shadow-[#D18A8A] hover:bg-[#b05b5b] mx-2">
          <h1 onClick={handlerKeranjang} className="text-[#FFFFFF] font-semibold">Masukkan Keranjang</h1>
        </button> */}
        <button onClick={() => navigate(`/reviewmenu/${pesanan._id}`, {state: {nomormeja: nomormeja}})} className="rounded-lg flex justify-center items-center w-[200px] h-[35px] bg-[#C66666] border-[#883C3C] border-1 shadow-md shadow-[#D18A8A] hover:bg-[#b05b5b] mx-2">
          <h1 className="text-[#FFFFFF] font-semibold">Cek Keranjang</h1>
        </button>
      </div>
    </div>
  );
};

export default ContentDaftarMenu;
