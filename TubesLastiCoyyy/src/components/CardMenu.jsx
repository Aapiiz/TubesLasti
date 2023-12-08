import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { confirmAlert } from 'react-confirm-alert';

const CardMenu = (props) => {
  const {
    gambar = "../../../public/assets/makanan.jpeg",
    deskripsi = "Tanpa Deskripsi",
    harga = 0,
    idpesanan = "",
    menuid = "",
    namamenu = "",
  } = props;

  CardMenu.propTypes = {
    gambar: PropTypes.string.isRequired,
    deskripsi: PropTypes.string.isRequired,
    harga: PropTypes.number.isRequired,
    idpesanan: PropTypes.string.isRequired,
    menuid: PropTypes.string.isRequired,
    namamenu: PropTypes.string.isRequired,
    // listmenupesanan: PropTypes.array.isRequired,
    // hargatotal: PropTypes.number.isRequired,
  };

  const [keranjang, setKeranjang] = useState(0);   //Jumlah pesan
  const [response, setResponse] = useState();     //Response getAPI pesanan

  console.log("idpesanan : ", idpesanan); //Cek id pesanan

  useEffect(() => {
    Axios.get(`http://localhost:4000/pesanan/readpesananunique/${idpesanan}`)
      .then((result) => {
        console.log("Cek isi get :", result.data.data);
        const responseAPI = result.data.data;
        // console.log(responseAPI); Cek response API
        setResponse(responseAPI);
      })
      .catch((err) => {
        console.error("error : ", err);
      });
  }, [keranjang, idpesanan]);

  //Change Handler
  const handleChange = () => {

    //Object menu dalam listmenu
    const menu = {
      "namamenu": namamenu,
      "harga": harga,
      "jumlah": Number(keranjang)
    }

    //Algoritma mengecek dobel menu dalam pesanan
    let itemSama = false;
    for (let i = 0; i < response.listmenu.length; i++) {
      if (response.listmenu[i].namamenu == menu.namamenu) {
        response.listmenu[i].jumlah += Number(keranjang);
        itemSama = true;
      }
    }
    if (!itemSama) {
      response.listmenu.push(Object(menu));
    }
    
    console.log("Keranjang : ", keranjang);  //Cek menu yang di push
    console.log("Cek menu : ", menu);  //Cek menu yang di push

    console.log("Cek response after push : ", response);  //Cek menu yang di push

    //API patch pesanan
    Axios.patch(`http://localhost:4000/pesanan/updatepesanan/${idpesanan}`, response)
                .then(response => {
                    console.log('Pesanan berhasil diperbarui:', response.data);
                })
                .catch(error => {
                    console.error('Error saat memperbarui pesanan:', error);
                });

    
    //Set harga total
    response.hargatotal += (harga*keranjang);           
    
    //API patch harga total
    Axios.patch(`http://localhost:4000/pesanan/updatehargatotal/${idpesanan}`, response)
                .then(response => {
                    console.log('Harga total diperbarui:', response.data);
                })
                .catch(error => {
                    console.error('Error saat memperbarui harga total:', error);
                });

    setTimeout(() => {
      confirmAlert({
        message: "Pesanan Berhasil",
        buttons: [
          {
            label: "OK",
            onClick: () => window.location.reload(),
          },
        ],
      });
    }, 1000);
  };

  //Algoritma pengubah rupiah
  const numberFormat = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);

  return (
    <div className="w-[200px] h-[250px] rounded-lg shadow-md shadow-[#8a8a8a] mx-2.5">
      <div className="h-full w-full bg-[#D9D9D9] py-3 border border-[#8a8a8a] rounded-lg">
        <div className="h-1/2 w-initial relative mx-3 flex justify-center">
          <img src={gambar} alt={gambar} className="h-full w-full rounded-lg border-2 border-[#8ea686]" />
          {/* <div className="h-2/6 w-full flex justify-center items-center bg-[#FFFFFF] rounded-b-lg border-2 border-[#8ea686] absolute bottom-0 px-2">
            <h1 className="font-semibold truncate">{children}</h1>
          </div> */}
        </div>
        <div className="h-1/2 w-initial pt-3 flex justify-between flex-col mx-3">
          <div className="flex justify-center items-center px-2">
            <h1 className="text-xs truncate">{deskripsi}</h1>
          </div>
          <div className="flex justify-center items-center my-1">
            <div className="flex justify-center items-center bg-[#BDD2B6] border border-[#8a8a8a] rounded-lg w-5/6 px-2">
              <h1 className="text-sm pb-1 font-semibold truncate">{numberFormat(harga)}</h1>
            </div>
          </div>
          <div className="flex justify-between items-center px-8">
            <input
              className="font-semibold w-2/6 rounded-lg text-center"
              value={keranjang}
              type="number"
              onChange={(e) => {
                  setKeranjang(e.target.value);
              }}
            />
            <button className="border border-[#8a8a8a] rounded-lg w-2/6 bg-[#A2B29F] text-[#FFFFFF] hover:bg-[#909e8d]" onClick={handleChange}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMenu;
