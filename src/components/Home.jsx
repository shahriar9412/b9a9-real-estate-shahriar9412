import { useEffect, useState } from "react";
import Estate from "./Estate";

const Home = () => {
    const [estates, setEstates] = useState([]);
    useEffect(() => {
        fetch('Estates.json')
            .then(res => res.json())
            .then(data => setEstates(data));
    }, [])
    return (
        <div>
            <div className="m-10">
            
                <div className="carousel w-full h-96 rounded-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/dP2j1QG/modern-townhouse-design-house-168058-939.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/smMVq9z/what-is-single-family-home-jpeg.webp" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/dKV6ZNB/Luxury-Trends-1554900758-1554900866.webp" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/ZR9kCqj/john-chapman-house-3.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="m-10">
                <h1 className="text-5xl text-purple-950 font-black text-center mt-20 mb-10">Estates</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {
                        estates.map(estate => <Estate key={estate.id} estate={estate}></Estate>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;