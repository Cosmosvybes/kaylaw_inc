

const Card = ({ image }) => {
    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
                className="relative w-[24rem] max-sm:w-full h-[24rem]  object-contain rounded-lg shadow-md flex justify-center items-center">

            </div>
        </>
    )
}

export default Card
