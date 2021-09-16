window.addEventListener('DOMContentLoaded', (event) => {
    getVisitorCount();
});

const getVisitorCount = () => {
    let count = 1;
    document.getElementById('counting').innerText = count;
    return count;
}