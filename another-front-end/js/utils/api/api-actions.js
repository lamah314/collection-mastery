function getRequest(location, callback) {
    fetch(location)
    // fetch('http://localhost:8080' + location) // Original  on line 3 
    .then(response => response.json())
    .then(data => callback(data))
    .catch(err => console.log(err))

}

function postRequest(location, requestBody, callback) {
    fetch(location, {
    // fetch('http://localhost:8080' + location, { // Original on line 11 
        method: "POST",
        body: JSON.stringify(requestBody)
    })
        .then(response => response.json())
        .then(data => callback(data))
        .catch(err => console.log(err))
}

export default {
    getRequest, postRequest
}