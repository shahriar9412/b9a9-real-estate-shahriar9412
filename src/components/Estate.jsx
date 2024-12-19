
const Estate = ({ estate }) => {
    const { image, estate_title, description, price, status, area, location, facilities } = estate;
    return (
        <div className="border border-red-900 p-5 rounded-xl">
            
            <h1 className="text-center my-5 text-3xl text-pink-500 font-bold">{estate_title}</h1>
            <div><img className="rounded-full h-80 w-[700px]" src={image} alt="" /></div>
            <div className="my-5 flex justify-between">
                <h1 className="text-xl"><span className="text-purple-950">Area:</span> {area}</h1>
                <h1 className="text-xl"><span className="text-purple-950">Location:</span>{location}</h1>
            </div>
            <h1 className="text-xl"><span className="text-green-500 font-bold">Facilities: </span>{facilities[0]}, {facilities[1]}, {facilities[2]}</h1>
            <h1 className="text-base"><span>Price: </span>{price}</h1>
            <h1 className="text-base"><span>Status: </span>{status}</h1>
            <h1 className="text-base"><span>Description: </span>{description}</h1>

        </div>
    );
};

export default Estate;