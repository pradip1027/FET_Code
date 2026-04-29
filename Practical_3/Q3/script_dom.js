let currentArray = [];

function displayArray() {
    let input = document.getElementById('numInput').value;
    currentArray = input.trim().split(/\s+/).map(Number).slice(0, 10);
    document.getElementById('arrayDisplay').innerText = "Current Array: [" + currentArray.join(", ") + "]";
}

function deleteElement() {
    let index = parseInt(document.getElementById('deleteIndex').value);

    if (isNaN(index) || index < 0 || index >= currentArray.length) {
        alert("Please enter a valid index!");
        return;
    }

    currentArray.splice(index, 1);
    document.getElementById('updatedArray').innerText = "Updated Array: [" + currentArray.join(", ") + "]";
    console.log("Element at index", index, "deleted. New array:", currentArray);
}
