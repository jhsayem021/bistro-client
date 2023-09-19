// import { useEffect, useState } from "react";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle"
import useMenu from "../../../Hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu ] = useMenu();
    const popular = menu.filter(item=>item.category==='popular')
    
    return (
        <div className="mb-16 ">
           <SectionTitle
           heading={"From Our Menu"}
           subHeading={"Popular Items"}
           ></SectionTitle>
        <div className="grid md:grid-cols-2 gap-10 w-5/6 md:w-full mx-auto">
            {
                popular.map((item)=><MenuItem
                key={item._id}
                item ={item}
                ></MenuItem>)
            }
        </div>

        </div>
    );
};

export default PopularMenu;