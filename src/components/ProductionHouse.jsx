import disney from './../assets/img/disney.png'
import marvel from './../assets/img/marvel.png'
import nationalG from './../assets/img/nationalG.png'
import pixar from './../assets/img/pixar.png'
import starwar from './../assets/img/starwar.png'

import disneyV from './../assets/video/disney.mp4'
import marvelV from './../assets/video/marvel.mp4'
import nationalGeoV from './../assets/video/nationalGeo.mp4'
import pixarV from './../assets/video/pixar.mp4'
import starwarsV from './../assets/video/star-wars.mp4'

const ProductionHouse = () => {
    const productionHouseList = [
        {
            id:1,
            img: disney,
            video: disneyV
        },
        {
            id:2,
            img: marvel,
            video:marvelV
        },
        {
            id:3,
            img: nationalG,
            video: nationalGeoV
        },
        {
            id:4,
            img: pixar,
            video: pixarV
        },
        {
            id:5,
            img: starwar,
            video: starwarsV
        },
    ]
    return (
        <div className='flex gap-5 p-2 px-5 sm:px-16 '>
            {productionHouseList.map((item) => (
                <div key={item.id} className='border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointe relative shadow-xl shadow-gray-800'> 
                    <video src={item.video} autoPlay loop playsInline muted className='absolute z-0  top-0 rounded-md opacity-0 hover:opacity-50'/> 
                    <img src={item.img} className='w-full z-[1] opacity-100' /> 
                </div>
            ))}
        </div>
    )
}

export default ProductionHouse