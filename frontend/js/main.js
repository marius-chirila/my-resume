window.addEventListener('DOMContentLoaded', (event) => {
    VisitorCount();
});

const VisitorCount = () => {
    let count = 1;
    document.getElementById('counting').innerText = count;
    return count;
}