const submitButton = document.getElementById('submitButton');
const inputField = document.getElementById("textInput");

inputField.addEventListener('input', function() {
    submitButton.disabled = inputField.value.trim() === '';
});

document.querySelector("form").addEventListener('submit', function(event) {
    event.preventDefault();
    var entered_data = inputField.value.trim();
    console.log(entered_data);
    if (entered_data === '') {
        alert("Cannot enter an blank field");
        inputField.value = '';
        submitButton.disabled = true;
    } else {
        const li = document.createElement("li");
        li.textContent = entered_data;
        document.querySelector("#listItem").appendChild(li);
        inputField.value = ''; // Clear input field after adding the item
        submitButton.disabled = true; // Disable button after adding the item
    }
});
