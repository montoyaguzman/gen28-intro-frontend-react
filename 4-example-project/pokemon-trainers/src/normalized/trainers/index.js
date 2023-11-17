const normalizedTrainers = (apiTrainersData) => {
    let newData = [];
    apiTrainersData.forEach(element => {
        const newElement = {
            region: element.region.name,
            rank: element.rank,
            team: element.team,
            name: element.name,
            img: element.imgs.card,
        };
        newData.push(newElement);
    });
    return newData;
};

export { normalizedTrainers };