const URL = 'http://localhost:3000/trainers';

const getTrainers = async (params) => {
    let newUrl = '';
    if (params) {
        const { name, hasThropies } = params;
        newUrl = `${URL}?name=${name}&isChampion=${hasThropies}`;
    } else {
        newUrl = URL;
    }
    const request = await fetch(newUrl);
    const response = await request.json();
    return response;
}

export { getTrainers };