$(document).ready(function () {
    const $root = $('#root');
    $root.append('<h2>Student Database Entry</h2>');

    const $form = $('<div class="form-area"></div>');
    const fields = [
        { label: 'Student ID', id: 'sid', type: 'text' },
        { label: 'Name', id: 'name', type: 'text' },
        { label: 'Gender', id: 'gender', type: 'select', opts: ['Male', 'Female', 'Other'] },
        { label: 'DOB', id: 'dob', type: 'date' },
        { label: 'Course', id: 'course', type: 'text' },
        { label: 'Branch', id: 'branch', type: 'text' },
        { label: 'Fee', id: 'fee', type: 'number' },
        { label: 'Contact', id: 'contact', type: 'tel' }
    ];

    fields.forEach(f => {
        const $g = $('<div class="form-group"></div>');
        $g.append(`<label>${f.label}:</label>`);
        if (f.type === 'select') {
            const $s = $(`<select id="${f.id}"></select>`);
            f.opts.forEach(o => $s.append(`<option value="${o}">${o}</option>`));
            $g.append($s);
        } else {
            $g.append(`<input type="${f.type}" id="${f.id}">`);
        }
        $form.append($g);
    });

    const $btn = $('<button id="addStudent">Add Record to Table</button>');
    $form.append($btn);
    $root.append($form);

    const $table = $('<table id="resTable"><thead><tr>' +
        '<th>SID</th><th>Name</th><th>Gender</th><th>DOB</th><th>Course</th><th>Branch</th><th>Fee</th><th>Contact</th>' +
        '</tr></thead><tbody></tbody></table>');
    $root.append($table);

    $btn.on('click', function () {
        const data = {
            sid: $('#sid').val(),
            name: $('#name').val(),
            gender: $('#gender').val(),
            dob: $('#dob').val(),
            course: $('#course').val(),
            branch: $('#branch').val(),
            fee: $('#fee').val(),
            contact: $('#contact').val()
        };

        if (!data.sid || !data.name) { alert("Enter SID and Name"); return; }

        const row = `<tr>
            <td>${data.sid}</td>
            <td>${data.name}</td>
            <td>${data.gender}</td>
            <td>${data.dob}</td>
            <td>${data.course}</td>
            <td>${data.branch}</td>
            <td>${data.fee}</td>
            <td>${data.contact}</td>
        </tr>`;

        $('#resTable tbody').append(row);
        $('.form-area input').val('');
    });
});
