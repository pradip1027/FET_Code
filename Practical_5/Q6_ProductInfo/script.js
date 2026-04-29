$(document).ready(function () {
    const $form = $('<div class="prod-form"></div>');
    $form.append('<h3>Product Entry</h3>');

    const inputs = [
        { label: 'Product ID', id: 'pid', type: 'text' },
        { label: 'Product Name', id: 'pname', type: 'text' },
        { label: 'Quantity', id: 'qty', type: 'number' },
        { label: 'Price', id: 'price', type: 'number' }
    ];

    inputs.forEach(i => {
        $form.append(`<div class="form-group"><label>${i.label}:</label><input type="${i.type}" id="${i.id}"></div>`);
    });

    const $btn = $('<button>Show Product Details</button>');
    $form.append($btn);
    $('#root').append($form);

    const $details = $('<div id="details" style="display:none;"></div>');
    $('#root').append($details);

    $btn.on('click', function () {
        const p = {
            id: $('#pid').val(),
            name: $('#pname').val(),
            qty: parseInt($('#qty').val()),
            price: parseFloat($('#price').val())
        };

        if (!p.id || !p.name || isNaN(p.qty) || isNaN(p.price)) { alert("Check all fields"); return; }

        let total = p.qty * p.price;
        console.log("Product Data:", p);
        console.log("Total Price:", total);

        $details.empty().show();
        $details.append('<h4>Product Summary</h4>');
        $details.append(`<p><strong>ID:</strong> ${p.id}</p>`);
        $details.append(`<p><strong>Name:</strong> ${p.name}</p>`);
        $details.append(`<p><strong>Quantity:</strong> ${p.qty}</p>`);
        $details.append(`<p><strong>Price:</strong> ${p.price}</p>`);
        $details.append(`<p class="total"><strong>Total Price: $${total.toFixed(2)}</strong></p>`);
    });
});
