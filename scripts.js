function calculateTotal() {
    var cost = parseFloat(document.getElementById("ps").value);
    cost += parseFloat(document.querySelector('input[name="virus_shield"]:checked').value);
    cost += parseFloat(document.querySelector('input[name="squaretrade"]:checked').value);

    document.getElementById("total").innerHTML = "Total: " + cost.toFixed(2);
    document.getElementById("discount").innerHTML = "Discount: " + (cost * .2).toFixed(2) + " (20% off)";
    document.getElementById("final").innerHTML = "Final: " + (cost * .8).toFixed(2);
}
