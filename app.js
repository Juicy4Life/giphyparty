'use strict';

$("#submit-btn").on('submit', searchGiphy)

//make fn that gets the value of the form's input;


async function searchGiphy(e) {
    e.preventDefault();
    let searchTerm = $('#search').val();
    let response = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {q:searchTerm, api_key:'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'}});
    console.log("response is", response.data);
}
console.log("Let's get this party started!");