import { Helmet } from "react-helmet-async";
import orderCover from "../../../assets/shop/banner2.jpg"
import Cover from "../../Shared/Cover/Cover";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from 'react-router-dom'


const OrderFood = () => {
  const {category} = useParams();
    const Categories = ['salad' , 'pizza' , 'soup' , 'dessert' , 'drinks']
   
    const initialIndex = Categories.indexOf(category)
    const [tabIndex , setTabIndex] = useState(initialIndex);
    
    console.log(category)
    const [menu] = useMenu();
    const dessert = menu.filter(item=>item.category==='dessert')
    const soup = menu.filter(item=>item.category==='soup')
    const salad = menu.filter(item=>item.category==='salad')
    const pizza = menu.filter(item=>item.category==='pizza')
    const drinks = menu.filter(item=>item.category==='drinks')


    return (
        <div>
             <Helmet>
        <title>Food Mania  | Order Food</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Cover
      bgImg={orderCover}
      title={"Order Food"}
      ></Cover>
            <Tabs className="text-center my-8" defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salads</Tab>
    <Tab>Pizzas</Tab>
    <Tab>Soups</Tab>
    <Tab>Desserts</Tab>
    <Tab>Drinks</Tab>
  </TabList>
  <TabPanel>
   <OrderTab items={salad} ></OrderTab>
  </TabPanel>
  <TabPanel>
   <OrderTab items={pizza} ></OrderTab>
  </TabPanel>
  <TabPanel>
   <OrderTab items={soup} ></OrderTab>
  </TabPanel>
  <TabPanel>
   <OrderTab items={dessert} ></OrderTab>
  </TabPanel>
  <TabPanel>
   <OrderTab items={drinks} ></OrderTab>
  </TabPanel>
  
</Tabs>
        </div>
    );
};

export default OrderFood;