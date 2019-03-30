function getRequest(location, callback) {
    fetch('http://localhost:8080' + location)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(err => console.log(err))

}

function postRequest(location, requestBody, callback) {
    fetch('http://localhost:8080' + location, {
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