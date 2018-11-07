// Button handler
function calculateNewTotal() {
    cost = getCost("premier_setup", "new_virus_shield", "new_squaretrade");
    setOutput(cost, "new_total", "new_discount", "new_final");
}

// Button handler
function calculateExistingTotal() {
    cost = getCost("diagnostic_repair", "ex_virus_shield", "ex_squaretrade");

    if (!document.getElementById("vs_r").checked) {
        setOutput(cost, "ex_total", "ex_discount", "ex_final");
    }
    else {
        document.getElementById("ex_total").innerHTML = "Total: " + cost.toFixed(2);
        document.getElementById("ex_discount").innerHTML = "Since the VS+ renewal MUST be done via email, the Total Support coupon can no longer be applied.";
    }
}

// Gets the total cost from the designated radio button groups
function getCost(psdr, vs, st) {
    var cost = parseFloat(document.querySelector('input[name="' + psdr + '"]:checked').value);
    cost += parseFloat(document.querySelector('input[name="' + vs + '"]:checked').value);
    cost += parseFloat(document.querySelector('input[name="' + st + '"]:checked').value);

    return cost;
}

// Sets the output to the designated <p> tags
function setOutput(cost, total, discount, final) {
    document.getElementById(total).innerHTML = "Total: " + cost.toFixed(2);
    document.getElementById(discount).innerHTML = "Discount: " + (cost * .2).toFixed(2) + " (20% off)";
    document.getElementById(final).innerHTML = "Final: " + (cost * .8).toFixed(2);
}
