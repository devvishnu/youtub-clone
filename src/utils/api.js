import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "hi", gl: "IN" },
    headers: {
        "X-RapidAPI-Key":'b72a15a263mshe43ef265472964bp133fdbjsn288f6b3dace2'|| "YOUR_API_KEY",
         'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
};