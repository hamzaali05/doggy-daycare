// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submit-button").addEventListener("click", function() {
        var thankYouMessage = document.createElement("p");
        thankYouMessage.textContent = "Thank you for your message";
        thankYouMessage.style.fontSize = "24px";
        var contactPage = document.querySelector(".contact");
        contactPage.innerHTML = "";
        contactPage.appendChild(thankYouMessage);
    });
});