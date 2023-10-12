document.getElementById("sortButton").addEventListener("click", function() {
    var inputArray = document.getElementById("inputArray").value;
    var inputValues = inputArray.split(',');
    
    var unsortedArray = [];
    for (var i = 0; i < inputValues.length; i++) {
        unsortedArray.push(parseFloat(inputValues[i]));
    }

    var sortedArray = unsortedArray.slice().sort(function(a, b) {
        return b - a;
    });

    document.getElementById("output").textContent = "Sorted Array (Descending Order): " + sortedArray.join(', ');
});
