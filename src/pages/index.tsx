import React, { useEffect, useState } from "react";
import { getPlaylists, getVideosFromPlaylist} from "../utilities/axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useFirebaseAuth } from "../firebase/firebase-auth-context";
import Loader from "../utilities/loader";
const HomePage = () => {  
  const { user } = useFirebaseAuth();
  const data = useLoaderData();
  const navigate = useNavigate();
  const [updatedData, setUpdatedData] = useState(false);
  

  useEffect(() => {
    if (updatedData) {
      setUpdatedData(false);
    }
    setTimeout(() => {
      if (!user) {
        console.log("INDEX: ",user);
        navigate("/login");
      }
    }, 15000);
    console.log("INDEX: ",user);

    }, [updatedData, user]);
  
  const handleMouseOver = (e, video) => {
    const videoUrl = `https://www.youtube.com/embed/${video.snippet.resourceId.videoId}?start=30&end=60&autoplay=1&mute=1&controls=0&enablejsapi=1&fs=0&frameborder="0"`;
    const videoElement = document.createElement("iframe");
    videoElement.src = videoUrl;
    videoElement.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
    videoElement.allowFullscreen = true;
    videoElement.className = "absolute inset-0 w-full h-full object-cover rounded-xl";
    // window.open(videoUrl, '_blank');
    e.target.parentElement.prepend(videoElement);
  }

  const handleMouseLeave = (e) => {
    e.target.parentElement.removeChild(e.target.parentElement.firstChild);
  }

  const handleVideoClick = (e, video) => {
    navigate(`/trailer/${video.snippet.resourceId.videoId}`);
  }

  const videoScrollBack = (array) => {
    const lastVideo = array.pop();
    array.unshift(lastVideo);
    setUpdatedData(true);
    return array;
  }
  const videoScrollForward = (array) => {
    const firstVideo = array.shift();
    array.push(firstVideo);
    setUpdatedData(true);
    return array;
  }

  return (
    <>
    {!user ? <Loader />
    :
    <div className="min-h-screen w-full overflow-x-clip">
  <div className="min-h-screen mx-auto pt-24 flex flex-col gap-[4vw] pb-12">
    {data.trailers.map((playlist) => (
     <div key={playlist.playlistId}>
        <h3 className="text-3xl font-bold p-4">{playlist.playlistTitle}</h3>
        <div className="flex gap-[1vw] relative px-4">
          <div 
          className="absolute left-0 text-8xl text-white z-30 flex items-center h-full opacity-40 bg-black bg-opacity-100 hover:opacity-100 rounded-r-xl cursor-pointer"
          onClick={() => videoScrollBack(playlist.playlistItems)}>
            {'<'}
          </div>
          <div 
          className="absolute right-0 text-8xl text-white z-30 flex items-center h-full opacity-40 bg-black bg-opacity-100  hover:opacity-100 rounded-l-xl cursor-pointer"
          onClick={() => videoScrollForward(playlist.playlistItems)}>{'>'}
          </div>
          {playlist.playlistItems.map((video) => (
            <div 
            key={video.id} 
            className='relative rounded-xl w-[28vw] aspect-video min-h-[16vw] bg-cover bg-center p-4'
            onMouseEnter={(e) => handleMouseOver(e, video)}
            onMouseLeave={(e) => handleMouseLeave(e)}
            
            style={{backgroundImage: `url('${video.snippet.thumbnails.maxres.url}')`}}>
              <p className="bg-black bg-opacity-80 p-1">{video.snippet.title}</p>
              <div className="w-full h-full opacity-0 absolute left-0 top-0" onClick={(e) => handleVideoClick(e,video)}></div>
            </div>
          ))}
          
        </div>
     </div>
    ))}
  </div>
</div> 
    }
    </>
    
  );
}

export default HomePage;

export const loader = async () => {
  const response = await getPlaylists();
  const trailer = await Promise.all(
    response.data.items.map(async (playlist) => (
      {
        playlistId: playlist.id,
        playlistTitle: playlist.snippet.title,
        playlistItems: (await getVideosFromPlaylist(playlist.id)).data.items
      }
    ))
  )
  return { trailers: trailer }; 
}