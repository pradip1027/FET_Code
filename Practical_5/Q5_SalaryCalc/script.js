$(document).ready(function () {
    const $container = $('<div class="card"></div>');
    $container.append('<h2>Salary Calculator</h2>');

    const schema = [
        { label: 'Basic Salary', id: 'basic', readonly: false, type: 'number' },
        { label: 'HRA', id: 'hra', readonly: true, type: 'text' },
        { label: 'DA', id: 'da', readonly: true, type: 'text' },
        { label: 'Gross Salary', id: 'gross', readonly: true, type: 'text' },
        { label: 'PF', id: 'pf', readonly: true, type: 'text' },
        { label: 'Net Salary', id: 'net', readonly: true, type: 'text' }
    ];

    schema.forEach(s => {
        const $f = $('<div class="field"></div>');
        $f.append(`<label>${s.label}:</label>`);
        const $in = $(`<input type="${s.type}" id="${s.id}">`);
        if (s.readonly) $in.prop('readonly', true);
        $f.append($in);
        $container.append($f);
    });

    const $btn = $('<button id="btnCalc">Calculate</button>');
    $container.append($btn);

    $('#root').append($container);

    $btn.on('click', function () {
        let basic = parseFloat($('#basic').val());
        if (isNaN(basic)) { alert("Enter Basic Salary"); return; }

        let hra = 0, da = 0, pf = 0, gross = 0, net = 0;

        if (basic >= 5000 && basic <= 10000) {
            hra = 0.20 * basic;
            da = 0.10 * basic;
            gross = basic + hra + da;
            pf = 0.05 * gross;
            net = gross - pf;
        } else if (basic > 10000 && basic <= 50000) {
            hra = 0.30 * basic;
            da = 0.20 * basic;
            gross = basic + hra + da;
            pf = 0.10 * gross;
            net = gross - pf;
        } else {
            alert("Values out of given conditions (5k-50k)");
            return;
        }

        $('#hra').val(hra.toFixed(2));
        $('#da').val(da.toFixed(2));
        $('#gross').val(gross.toFixed(2));
        $('#pf').val(pf.toFixed(2));
        $('#net').val(net.toFixed(2));
    });
});
