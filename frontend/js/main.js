window.addEventListener('DOMContentLoaded', (event) => {
    visitCount();
    increment();
});
const apiFetch= 'https://myapi-3bpxoftrva-ey.a.run.app'
const increment = () => {
    fetch(apiFetch, {
        method: "POST",
    }).then(response => {
        return response.json();
    }).catch(err => console.log('Cannot POST.' + err.message));
    }
const visitCount = () => {
    let count;
    fetch(apiFetch).then(response => {
        return response.json();
        }).then(response =>{
            let count = response.count; 
            document.getElementById('counting').innerText = count;
        }).catch(err => console.log('Not really fetched.' + err.message));
        return count; 
    };
   
