const getMoviesPromise = () => {
    fetch("https://yts.am/api/v2/list_movies.json")
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(json => console.log(json))
        .catch(e => console.log(`✖️ ${e}`));
};

const getMoviesAsync = async () => {
    try {
        const response = await fetch("https://yts.am/api/v2/list_movies.json");
        const json = await response.json();
        console.log(json);
    } catch (e) {
        console.log(`✖️ ${e}`);
    } finally {
        console.log("We are done!");
    }
};

getMoviesAsync();