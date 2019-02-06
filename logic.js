function calculateInterest() {
    var startValue = parseInt(document.getElementById('imputStart').value);
    var interestValue = parseInt(document.getElementById('imputZins').value);
    var yearsValue = parseInt(document.getElementById('imputYears').value);
    var result = Math.round((startValue * Math.pow((1+(interestValue/100)), yearsValue)) * 100) / 100;
    document.getElementById("output").value = result;
}