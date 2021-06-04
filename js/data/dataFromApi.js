const urlApi = "https://yunitto.online/noroff/FEU1_portfolio/Semester-Project-1/wp/wp-json/wp/v2/";

export const fetchPages = async () => {
    const json = await (await fetch(urlApi + `pages?per_page=100`)).json();
    return json;
};

export const fetchMedia = async () => {
    const json = await (await fetch(urlApi + `media?per_page=100`)).json();
    return json;
};
