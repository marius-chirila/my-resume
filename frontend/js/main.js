window.addEventListener('DOMContentLoaded', (event) => {
    visitCount();
});
const apiFetch= 'https://myapi-3bpxoftrva-ey.a.run.app/'
const visitCount = () => {
    let count;
    fetch(apiFetch).then(response => {
        return response.json();
        }).then(response =>{
            let count = response.count; 
            document.getElementById('counting').innerText = "43";
        }).catch(err => console.log('Not really fetched.' + err.message));
        return count; 
    };
   
