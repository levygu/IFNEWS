import api from "../Api";

export const useGetData = () => {
    const getEditals = async () =>{
        try {
            const response = await api.get('/editals')
            return response.data;
        }catch(err){
            console.log({err});
            return err;
        }
    
    }
    const getHotNews = async () =>{
        try {
            const response = await api.get('/hotNews')
            return response.data;
        }catch(err){
            console.log({err});
            return err;
        }
    }
    const getBanners = async () =>{
        try {
            const response = await api.get('/bannersURL')
            return response.data;
        }catch(err){
            console.log({err});
            return err;
        }
    }
    const getGeneralNews = async () =>{
        try {
            const response = await api.get('/generalNews0')
            return response.data;
        }catch(err){
            console.log({err});
            return err;
        }
    }
    return {
        getEditals,
        getHotNews,
        getBanners,
        getGeneralNews,
    }
}