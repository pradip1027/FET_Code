function searchArray() {
    let input = document.getElementById('numInput').value;
    let numbers = input.trim().split(/\s+/).map(Number).slice(0, 10);
    let target = parseInt(document.getElementById('searchInput').value);

    let index = numbers.indexOf(target);

    if (index !== -1) {
        document.getElementById('searchResult').innerText = "Found " + target + " at index " + index;
        console.log("Target found at", index);
    } else {
        document.getElementById('searchResult').innerText = target + " not found.";
        console.log("Target not found.");
    }
}
