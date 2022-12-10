// Check if JS code is being executed
console.log("Hello World!");

// Get all the FAQs
const faqs = document.getElementsByClassName("questions");

// Add an onclick event to the FAQs
for (let index = 0; index < faqs.length; index++) {
    faqs[index].onclick = function() {showAnswer(this)};

    function showAnswer(element) {
        element.nextElementSibling.classList.toggle("show");
    }
}
