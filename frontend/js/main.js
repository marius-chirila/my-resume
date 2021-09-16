window.addEventListener('DOMContentLoaded', (event) => {
    visitCount();
});

const visitCount = () => {
    let count;
    document.getElementById('counting').innerText = count;
    return count;
}