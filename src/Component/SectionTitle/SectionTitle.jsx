

const SectionTitle = ({heading ,subHeading}) => {
    return (
        <div className="md:w-3/12 sm:w-full w-3/12 mx-auto text-center my-4">
            <p className="text-yellow-600 mb-2 italic" >--- {subHeading} ---</p>
            <h1 className="md:text-4xl text-xl uppercase border-y-4 py-4" >{heading}</h1>
        </div>
    );
};

export default SectionTitle;