function sortArray() {
    let input = document.getElementById('numInput').value;
    let original = input.trim().split(/\s+/).map(Number).slice(0, 10);

    document.getElementById('original').innerText = "Original: [" + original.join(", ") + "]";

    // Sort Ascending
    let asc = [...original].sort((a, b) => a - b);
    document.getElementById('ascending').innerText = "Ascending: [" + asc.join(", ") + "]";

    // Sort Descending
    let desc = [...original].sort((a, b) => b - a);
    document.getElementById('descending').innerText = "Descending: [" + desc.join(", ") + "]";

    console.log("Original:", original);
    console.log("Ascending:", asc);
    console.log("Descending:", desc);
}
