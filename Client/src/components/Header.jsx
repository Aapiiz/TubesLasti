import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className ='flex justify-between items-center h-14 max-w-[1920px] py-10 px-4 bg-[#F8F0E5]'>
              <a onClick={() => navigate(`/`)} className="cursor-pointer">
                <img src="../src/images/Logo.png" alt="Logo Perusahaan" className="flex justify-center w-16 text-base font-bold text-[#DAC0A3]" />
              </a>
            {/* <h1 className ='flex justify-center w-full text-base font-bold text-[#DAC0A3]'>Ini entar diisi logo</h1> */}
        </div>
    )
}

export default Header