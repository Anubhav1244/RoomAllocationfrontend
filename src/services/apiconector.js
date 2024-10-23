import axios from 'axios';
const axiosinstance = axios.create({});

export const apiconnector=(method,url,bodydata,header,params)=>{
    console.log("url",url)
    return axiosinstance({
        method:`${method}`,
        url:`${url}`,
        data:bodydata ? bodydata : null,
        headers:header ? header : null,
        params:params ? params : null
    })
}

