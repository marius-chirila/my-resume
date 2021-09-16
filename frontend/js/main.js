window.addEventListener('DOMContentLoaded', (event) => {
    visitCount();
});
const apiFetch= ''
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
   
