

const MenuItem = ({item}) => {
    const {name, recipe, image , price} = item
    return (
        <>
        <div className=" hidden md:flex flex space-x-4">
            <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[100px] my-3" src={image} alt="" />
            
            <div>
                <h3 className="uppercase">{name}-----------</h3>
                <p>{recipe}</p>
            </div>
          
            <p className="text-yellow-500">${price}</p>
         
        </div>
        <div className="md:hidden block space-x-4 m-1 p-1 ">
            <img style={{borderRadius:'0 50px 0px 50px'}} className="w-5/6 mx-auto mb-4" src={image} alt="" />
            <div className="flex   justify-items-center">
                <div className="w-5/6 mx-auto">
                <div className="flex justify-between">
                <h3 className="uppercase ">{name}------ </h3>
                <span className="text-yellow-500">${price}</span>
                </div>
                <p>{recipe}</p>
                </div>
                
            </div>
            
        </div>
        </>
    );
};

export default MenuItem;