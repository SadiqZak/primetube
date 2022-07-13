import axios from "axios";

export const getAllVideoService = async()=>{
    return axios.get("api/videos")
}

export const getVideoService = async({videoId})=>{
    return axios.get(`/api/video/${videoId}`)
}

export const getCategoriesService = async()=>{
    return axios.get(`/api/categories`)
}

export const getCategoryObjectService = async({categoryName})=>{
    return axios.get(`/api/category/${categoryName}`)
}

export const getUserLikesService = ({encodedToken})=>{
    return axios.get(`/api/user/likes`,{
        headers:{
            authorization: encodedToken
        }
    })
}

export const postUserLikeService = async({encodedToken, video})=>{
    return axios.post(`/api/user/likes`,{video},{
        headers:{
            authorization: encodedToken
        }
    })
}

export const deleteUserLikeService= ({encodedToken, videoId})=>{
    return axios.delete(`/api/user/likes/${videoId}`,{
        headers:{
            authorization:encodedToken
        }
    })
}

export const getWatchlaterService = ({encodedToken})=>{
    return axios.get(`/api/user/watchlater`,{
        headers:{
            authorization:encodedToken
        }
    })
}

export const postWatchlaterService = ({encodedToken, video})=>{
    return axios.post(`/api/user/watchlater`,{video}, {
        headers:{
            authorization:encodedToken
        }
    })
}

export const deleteWatchlaterService = ({encodedToken, videoId})=>{
    return axios.delete(`/api/user/watchlater/${videoId}`,{
        headers:{
           authorization: encodedToken
        }
    })
}

export const getPlaylistService = ({encodedToken})=>{
    return axios.get(`/api/user/playlists`,{
        headers:{
            authorization:encodedToken
        }
    })
}

export const postPlaylistService = ({encodedToken, playlist})=>{
    return axios.post(`/api/user/playlists`,{playlist},{
        headers:{
            authorization:encodedToken
        }
    })
}

export const deletePlaylistService = ({encodedToken,playlistId})=>{
    return axios.delete(`/api/user/playlists/${playlistId}`,{
        headers:{
            authorization:encodedToken
        }
    })
}

export const postPlaylistVideoService = ({encodedToken, video, playlistId})=>{
    return axios.post(`/api/user/playlists/${playlistId}`,{video},{
        headers:{
            authorization:encodedToken
        }
    })
}

export const deletePlaylistVideoService = ({encodedToken, playlistId, videoId})=>{
    return axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
        headers:{
            authorization:encodedToken
        }
    })
}