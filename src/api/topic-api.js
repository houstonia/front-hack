import axios from "axios"

const gagaTaskUrl='http://80.76.60.168:8080/api/topics/'


export const getTopics=async()=>{
    const { data } = await axios.get(`${gagaTaskUrl}`)
    console.log(data)
    return data.res
}

const hubUrl ="http://80.76.60.168:8080/api/hub"


export const getTasksFromHub=async()=>{
    const { data } = await axios.get(`${hubUrl}`)
    return data.res
}