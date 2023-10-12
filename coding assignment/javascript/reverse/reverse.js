document.addEventListener("DOMContentLoaded", function() {
    var reverseButton = document.getElementById("reverseButton");
    var inputSentence = document.getElementById("inputSentence");
    var output = document.getElementById("output");

    reverseButton.addEventListener("click", function() {
        var words = inputSentence.value.split(' ');

        var reversedWords = words.map(function(word) {
            return reverseWord(word);
        });

        var reversedSentence = reversedWords.join(' ');

        output.textContent = "Reversed sentence: " + reversedSentence;
    });

    function reverseWord(word) {
        return word.split('').reverse().join('');
    }
});
