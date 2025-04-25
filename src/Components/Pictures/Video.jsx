

const Video = ({ videoFile }) => {
    return (
        <div className="relative w-full h-[28rem] max-sm:w-full  rounded-lg  shadow-md flex justify-center items-center">
            <video controls={true} className="w-full relative h-full">
                <source src={videoFile} type="video/mp4" />
                <track src="subtitles.vtt" kind="subtitles" srclang="en" label="English" />
            </video>
        </div>
    )
}

export default Video;
