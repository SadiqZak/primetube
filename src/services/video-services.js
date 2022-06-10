import axios from "axios";

export const getAllVideoService = async()=>{
    return axios.get("api/videos")
}