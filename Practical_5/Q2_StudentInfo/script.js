$(document).ready(function () {
    const $root = $('#root');
    const $container = $('<div class="container"></div>');
    $container.append('<h2>Student Information (5 Students)</h2>');

    for (let i = 1; i <= 5; i++) {
        const $entry = $(`<div class="student-entry"></div>`);
        $entry.append(`<h4>Student ${i}</h4>`);
        $entry.append(`<div class="form-group"><label>Roll:</label><input type="text" class="roll" placeholder="Roll"></div>`);
        $entry.append(`<div class="form-group"><label>Name:</label><input type="text" class="name" placeholder="Name"></div>`);
        $container.append($entry);
    }

    const $btn = $('<button>Show Records</button>');
    $container.append($btn);

    const $tableContainer = $('<div id="tableContainer" style="display:none;"></div>');
    $container.append($tableContainer);
    $root.append($container);

    $btn.on('click', function () {
        let students = [];
        $('.student-entry').each(function () {
            students.push({
                roll: $(this).find('.roll').val(),
                name: $(this).find('.name').val()
            });
        });

        console.log("All Student Records:");
        console.table(students);

        let tableHtml = '<h3>Displaying Records</h3><table><tr><th>Roll</th><th>Name</th></tr>';
        students.forEach(s => {
            tableHtml += `<tr><td>${s.roll}</td><td>${s.name}</td></tr>`;
        });
        tableHtml += '</table>';

        $tableContainer.html(tableHtml).show();
    });
});
