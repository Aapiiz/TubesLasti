import React from 'react';
import PropTypes from 'prop-types';

const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }

const CardPesanan = (props) => {
    // eslint-disable-next-line react/prop-types
    const {namamenu = "Tanpa Nama", harga = "-", jumlah = "-"} = props
    CardPesanan.propTypes = {
        namamenu: PropTypes.string.isRequired,
        harga: PropTypes.number.isRequired,
        jumlah: PropTypes.number.isRequired
    }
    return (
        <div>
            <div className="mt-4 flex">
                <h1 className="h-auto w-[1000px] ml-[30px] text-2xl font-semibold ">{namamenu}</h1>
                {/* <button className="w-[31px] h-[31px] font-extrabold border-2 border-[#000000]">-</button> */}
                <h1 data-testid="jumlahPesanan" className="h-auto w-[300px] text-2xl ">Jumlah : {jumlah}</h1>
                {/* <button onClick={handlerClickJumlah} className="w-[31px] h-[31px] font-extrabold border-2 border-[#000000]">+</button> */}
                <h1 data-testid="totalHarga" className="h-auto w-[500px] mr-[30px] text-2xl text-right font-semibold ">{rupiah(harga*jumlah)}</h1>
            </div>
            <div>
                <h1 data-testid="hargaDanTenant" className="ml-[30px] text-lg">{rupiah(harga)}</h1>
            </div>
        </div>
    )

}

export default CardPesanan