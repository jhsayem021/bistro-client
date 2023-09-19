import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuBg from '../../../assets/menu/banner3.jpg'
import dessertBg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../../assets/menu/pizza-bg.jpg'
import soupBg from '../../../assets/menu/soup-bg.jpg'
import saladBg from '../../../assets/menu/salad-bg.jpg'
import useMenu from './../../../Hooks/useMenu';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item=>item.category==='dessert')
    const soup = menu.filter(item=>item.category==='soup')
    const salad = menu.filter(item=>item.category==='salad')
    const pizza = menu.filter(item=>item.category==='pizza')
    const offered = menu.filter(item=>item.category==='offered')

    return (
        <div>
            <Helmet>
        <title>Food Mania  | Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Cover
      bgImg={menuBg}
      title={"Our Menu"}
      ></Cover>
      <SectionTitle
      subHeading={"Don't Miss"}
      heading={"Today's Offer"}
      ></SectionTitle>
      <MenuCategory
      items={offered}
      ></MenuCategory>
      <MenuCategory
      items={dessert}
      title={"dessert"}
      img={dessertBg}
      ></MenuCategory>
      <MenuCategory
      items={pizza}
      title={"pizza"}
      img={pizzaBg}
      ></MenuCategory>
      <MenuCategory
      items={soup}
      title={"soup"}
      img={soupBg}
      ></MenuCategory>
      <MenuCategory
      items={salad}
      title={"salad"}
      img={saladBg}
      ></MenuCategory>

        </div>
    );
};

export default Menu;