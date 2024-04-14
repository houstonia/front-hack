import axios from "axios"

const gagaTaskUrl='https://gagarinhack.duckdns.org/api/topics/'


export const getTopics=async()=>{
    const { data } = await axios.get(`${gagaTaskUrl}`)
    return data.res
}

const hubUrl ="https://gagarinhack.duckdns.org/api/hub"


export const getTasksFromHub=async()=>{
    const { data } = await axios.get(`${hubUrl}`)
    return data.res
}