import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, img, title }) => {
    return (

        <div className="my-8 ">
            {title && <Cover 
                bgImg={img}
                title={title}
            ></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-12 w-5/6 md:w-full mx-auto">
                {
                    items.map((item) => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            {
                title && <Link className="flex justify-center" to={`/order/${title}`} ><button className="text-center btn btn-outline border-0 border-b-4  mt-5 ">Order Your Favorite Food</button></Link>
            }
        </div>

    );
};

export default MenuCategory;