import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import "./Featured.css"
const Featured = () => {

    return (
        <div className="featuredItem bg-fixed text-white pt-8 my-20" >
            <SectionTitle
            heading={"Featured Item"}
            subHeading={"Check it Out"}
            ></SectionTitle>

           <div className="md:flex justify-center items-center md: py-5 px-5 pb-20 md:pt-12 md:px-36
           bg-slate-500 bg-opacity-30
           ">
           <div >
                <img className="" src={featuredImg} alt="" />
            </div>
            <div className="my-3 md:ml-10  py-5 px-2 md:p-2">
                <p>Sep 30,2023</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, doloribus voluptatem quasi animi a vitae nam blanditiis ullam excepturi doloremque dolorem in tempore itaque molestiae nihil, minima nulla. Aliquam ducimus ipsa asperiores suscipit doloribus quasi necessitatibus adipisci. Amet, sequi illo?</p>
                <div className="flex md:block justify-center"><button className="btn btn-outline border-0 border-b-4 text-white mt-5 ">Order Now</button></div>
            </div>
           </div>
        </div>
    );
};

export default Featured;