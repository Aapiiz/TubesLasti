// // import BackButton from "../components/BackButton"
// import ContentConfirmPesanan from "../components/ContentConfirmPesanan"

// const ConfirmPesananPage = () => {
//     return (
//         <div className="flex flex-col min-h-screen bg-[#F8EDE3]">
//             {/* <h1>Contoh</h1>
//             <div className="flex justify-center items-center w-screen min-h-full mb-auto x-w-[1920px] mx-auto py-4 px-4 relative">
//                 <div className="kontainer min-h-[350px] w-11/12 bg-[#BDD2B6] rounded-lg border border-[#8ea686] mb-5">
//                     <BackButton/>
//                 </div>
//             </div> */}
//             <ContentConfirmPesanan/>
//         </div>
//     )
// }

// export default ConfirmPesananPage

// import NavbarPelanggan from "../components/NavbarPelanggan";
import ContentReviewMenu from "../components/ContentReviewMenu";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import Footer from "../components/Footer";

const ReviewMenuPage = () => {
    return (
        <div className='flex flex-col h-screen bg-[#F8EDE3]'>
            <Header/>
            <ContentReviewMenu/>
            <Footer/>
        </div>
    )
};

export default ReviewMenuPage

