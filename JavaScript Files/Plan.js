document.addEventListener('DOMContentLoaded', function () { update(2); });
function update(value) {
    var ValueToSet = 0;

    if (value == 1) {
        document.getElementById("difficultyValue").textContent = "Easy";
        ValueToSet = 6;
    }
    else if (value == 2) {
        document.getElementById("difficultyValue").textContent = "Moderate";
        ValueToSet = 10;
    }
    else if (value == 3) {
        document.getElementById("difficultyValue").textContent = "Hard";
        ValueToSet = 14;
    }

    for (var i = 0; i < TableArray.length; i++) {
        var Rows = document.getElementById(TableArray[i]).getElementsByTagName("tr");

        for (var k = 1; k < Rows.length; k++) {
            var Cells = Rows[k].getElementsByTagName("td");
            for (var j = 0; j < Cells.length; j++) {
                if (Cells[j].textContent.length <= 2) {
                    Cells[j + 1].textContent = ValueToSet;
                    break;
                }
            }
        }
    }
}
function nextpage() {
    // Show previous arrow
    document.getElementById("Previous").style.display = 'block';

    for (var i = 0; i < TableArray.length - 1; i++) {
        // Get the currently visible table
        var CurrentTable = document.getElementById(TableArray[i]);
        if (CurrentTable.style.display !== 'none') {
            CurrentTable.style.display = 'none'; // Hide table

            document.getElementById(TableArray[i + 1]).style.display = 'table'; // Show next table

            // If last table, hide next arrow
            if (i === TableArray.length - 2) document.getElementById("Next").style.display = 'none';

            break;
        }
    }
}
function previouspage() {
    // Show next arrow
    document.getElementById("Next").style.display = 'block';

    for (var i = 0; i < TableArray.length; i++) {
        // Get the currently visible table
        if (document.getElementById(TableArray[i]).style.display !== 'none') {
            document.getElementById(TableArray[i]).style.display = 'none'; // Hide current table
            document.getElementById(TableArray[i - 1]).style.display = 'table'; // Show the previous

            // Hide previous arrow if the current table is the second table,
            // because that means it went back to the first table and there should be no other tables before
            // Otherwise show the previous arrow
            document.getElementById("Previous").style.display = (i === 1) ? 'none' : 'block';

            return;
        }
    }
}