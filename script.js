var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["FullName"] = document.getElementById("FullName").value;
    formData["Identity"] = document.getElementById("Identity").value;
    formData["Salary"] = document.getElementById("Salary").value;
    formData["City"] = document.getElementById("City").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.FullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Identity;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.City;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("FullName").value = "";
    document.getElementById("Identity").value = "";
    document.getElementById("Salary").value = "";
    document.getElementById("City").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("FullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Identity").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("City").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.FullName;
    selectedRow.cells[1].innerHTML = formData.Identity;
    selectedRow.cells[2].innerHTML = formData.Salary;
    selectedRow.cells[3].innerHTML = formData.City;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("FullName").value == "") {
        isValid = false;
        document.getElementById("FullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("FullNameValidationError").classList.contains("hide"))
            document.getElementById("FullNameValidationError").classList.add("hide");
    }

    if (document.getElementById("Identity").value == "") {
        isValid = false;
        document.getElementById("IdentityValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("IdentityValidationError").classList.contains("hide"))
            document.getElementById("IdentityValidationError").classList.add("hide");
    }

    return isValid;
}