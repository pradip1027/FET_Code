$(document).ready(function () {
    const $container = $('<div class="container"></div>');
    $container.append('<h2>Array Sorting (10 Random Numbers)</h2>');

    const $inputGrid = $('<div class="input-grid"></div>');
    for (let i = 0; i < 10; i++) {
        $inputGrid.append(`<input type="number" class="num-val" placeholder="No. ${i + 1}">`);
    }
    $container.append($inputGrid);

    const $controls = $('<div class="controls"></div>');
    const $ascBtn = $('<button id="ascBtn">Sort Ascending</button>');
    const $descBtn = $('<button id="descBtn">Sort Descending</button>');
    $controls.append($ascBtn).append($descBtn);
    $container.append($controls);

    const $resultArea = $('<div class="result" id="result">Result: </div>');
    $container.append($resultArea);

    $('#root').append($container);

    function getNumbers() {
        let nums = [];
        $('.num-val').each(function () {
            let v = parseFloat($(this).val());
            if (!isNaN(v)) nums.push(v);
        });
        return nums;
    }

    $ascBtn.on('click', function () {
        let nums = getNumbers();
        nums.sort((a, b) => a - b);
        $('#result').text("Ascending Order: " + nums.join(', '));
    });

    $descBtn.on('click', function () {
        let nums = getNumbers();
        nums.sort((a, b) => b - a);
        $('#result').text("Descending Order: " + nums.join(', '));
    });
});
