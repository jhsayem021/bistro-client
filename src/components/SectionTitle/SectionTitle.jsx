

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-8/12 w-screen my-8">
            <p className="text-yellow-600 mb-2 ">--- {subHeading} ---</p>
            <h3 className="md:text-3xl text-sm uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;