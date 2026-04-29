$(document).ready(function () {

    let selectedRow = null;

    $("#addRecord").click(function () {
        let name = $("#name").val().trim();
        let age = $("#age").val().trim();

        if (name === "" || age === "") {
            alert("Please fill both Name and Age fields.");
            return;
        }

        if (selectedRow === null) {
            // Add new record
            let newRow = `<tr>
                <td>${name}</td>
                <td>${age}</td>
                <td>
                    <div class="action-btns">
                        <button class="edit">Edit</button>
                        <button class="delete">Delete</button>
                    </div>
                </td>
            </tr>`;
            $("#table tbody").append(newRow);
        } else {
            // Update existing record
            selectedRow.find("td:eq(0)").text(name);
            selectedRow.find("td:eq(1)").text(age);
            $("#addRecord").text("Add Record");
            selectedRow = null;
        }

        clearFields();
    });

    $(document).on("click", ".delete", function () {
        if (confirm("Are you sure you want to delete this record?")) {
            $(this).closest("tr").remove();
        }
    });

    $(document).on("click", ".edit", function () {
        selectedRow = $(this).closest("tr");
        let name = selectedRow.find("td:eq(0)").text();
        let age = selectedRow.find("td:eq(1)").text();

        $("#name").val(name);
        $("#age").val(age);
        $("#addRecord").text("Update Record");
    });

    function clearFields() {
        $("#name").val("");
        $("#age").val("");
    }

});
