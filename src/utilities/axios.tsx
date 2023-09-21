import axios from 'axios'

const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
})

const getPlaylists = async () => (
  await youtube.get('/playlists', {
    params: {
      part: 'snippet',
      channelId: 'UCi8e0iOVk1fEOogdfu4YgfA',
      maxResults: 5,
      key: import.meta.env.VITE_YOUTUBE_API_KEY,
    },
}))

const getVideosFromPlaylist = async (playlistId: string) => (
  await youtube.get('/playlistItems', {
    params: {
      part: 'snippet',
      playlistId,
      maxResults: 10,
      key: import.meta.env.VITE_YOUTUBE_API_KEY,
    },   
}))

const getVideos = () => {
  (
    youtube.get('/videos', {
      params: {
        part: ['snippet', 'contentDetails'],
        videoCategoryId: 44,
        myRating: 'none',
        key: import.meta.env.VITE_YOUTUBE_API_KEY,
      },
    })
  )
}

export { getPlaylists, getVideosFromPlaylist, getVideos }