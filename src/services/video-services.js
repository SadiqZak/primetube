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