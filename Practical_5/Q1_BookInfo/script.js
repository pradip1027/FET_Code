$(document).ready(function () {
    // Dynamically create the UI
    const $container = $('<div class="container"></div>');
    $container.append('<h2>Book Information</h2>');

    const fields = [
        { label: 'Book ID', id: 'bookId', type: 'text' },
        { label: 'Name', id: 'bookName', type: 'text' },
        { label: 'Author', id: 'author', type: 'text' },
        { label: 'Publisher', id: 'publisher', type: 'text' },
        { label: 'Price', id: 'price', type: 'number' }
    ];

    fields.forEach(field => {
        const $group = $('<div class="form-group"></div>');
        $group.append(`<label>${field.label}:</label>`);
        $group.append(`<input type="${field.type}" id="${field.id}">`);
        $container.append($group);
    });

    const $btn = $('<button>Display Info</button>');
    $container.append($btn);

    const $displayArea = $('<div class="display-area" style="display:none;"></div>');
    $container.append($displayArea);

    $('#root').append($container);

    // Event Handling
    $btn.on('click', function () {
        const book = {
            id: $('#bookId').val(),
            name: $('#bookName').val(),
            author: $('#author').val(),
            publisher: $('#publisher').val(),
            price: $('#price').val()
        };

        console.log("Book Information:", book);

        // Display on page
        $displayArea.empty().show();
        $displayArea.append('<h3>Result:</h3>');
        $displayArea.append(`<p><strong>ID:</strong> ${book.id}</p>`);
        $displayArea.append(`<p><strong>Name:</strong> ${book.name}</p>`);
        $displayArea.append(`<p><strong>Author:</strong> ${book.author}</p>`);
        $displayArea.append(`<p><strong>Publisher:</strong> ${book.publisher}</p>`);
        $displayArea.append(`<p><strong>Price:</strong> ${book.price}</p>`);
    });
});
