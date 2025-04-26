import { LocationMap, LocationUser } from "react-huge-icons/outline"


const Card = ({ image, location }) => {
    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
                className="relative w-full max-sm:w-full h-[24rem]  object-contain rounded-lg shadow-md flex justify-center items-center">
                <div className="absolute bottom-0 right-0 p-2 left-0 flex flex-col gap-2 w full h-1/5 bg-transparent backdrop-blur-md">
                    <LocationMap className="text-3xl text-black" />
                    <p className="text-white">{location ? location : "UK , London"}</p>
                </div>
            </div>
        </>
    )
}

export default Card
