import fetch from 'node-fetch';
const characters = "https://rickandmortyapi.com/api/character";
const locations = "https://rickandmortyapi.com/api/location";
const episodies = "https://rickandmortyapi.com/api/episode";

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

const getInfoFrom = async (api_url) => {
    try {
        const data = await fetchData(api_url);
        return [data.info, data.results];
    } catch (err) {
        console.log(err);
    }
};


getInfoFrom(characters)
    .then(data => {
        console.log(data[0]);
        console.log(data[1]);
    });
// getInfoFrom(locations);
// getInfoFrom(episodies);