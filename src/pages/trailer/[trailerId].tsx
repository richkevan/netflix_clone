import { useParams } from "react-router-dom";

const TrailerInfo = () => {
  const params = useParams();

  return (
    <div className="min-h-screen w-full">
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <iframe
          className=" aspect-video"
          width="80%"
          src={`https://www.youtube.com/embed/${params.trailerId}?autoplay=1&mute=1&controls=1&enablejsapi=1&fs=0&frameborder="0"&fullscreen="1"`}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen={true}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
      </div>
    </div>
  )
};

export default TrailerInfo;