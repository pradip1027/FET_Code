$(document).ready(function(){

    $("#add").click(function(){

        let sid = $("#sid").val();
        let name = $("#name").val();
        let branch = $("#branch").val();
        let contact = $("#contact").val();

        if(sid == "" || name == "" || branch == "" || contact == ""){
            alert("Please fill all fields");
            return;
        }

        let row = "<tr>";
        row += "<td>" + sid + "</td>";
        row += "<td>" + name + "</td>";
        row += "<td>" + branch + "</td>";
        row += "<td>" + contact + "</td>";
        row += "</tr>";

        $("#table").append(row);

        $("#sid").val("");
        $("#name").val("");
        $("#branch").val("");
        $("#contact").val("");

    });

});
