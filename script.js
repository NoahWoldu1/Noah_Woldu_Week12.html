// Week 12 - jQuery Basics Assignment

// Check that jQuery loaded successfully
if (typeof jQuery !== "undefined") {

    $(document).ready(function () {

        // Select HTML elements using jQuery
        const paragraph = $("#textPara");
        const changeText = $("#btnChangeText");
        const changeColor = $("#btnChangeColor");
        const nameInput = $("#inputName");
        const greetButton = $("#btnGreet");
        const output = $("#output");

        // Show that JavaScript loaded successfully
        $("#status").text("jQuery loaded successfully!");

        // 1. Change paragraph text
        changeText.on("click", function () {

            paragraph.text(
                "The paragraph text has been changed using jQuery!"
            );

        });

        // 2. Change paragraph text color
        changeColor.on("click", function () {

            paragraph.css("color", "red");

        });

        // 3. Greet the user
        greetButton.on("click", function () {

            const name = nameInput.val().trim();

            if (name === "") {

                output.text("Please enter your name.");

            } else {

                output.text("Hello, " + name + "!");

            }

        });

        // Optional Challenge 1:
        // Hide and show the paragraph
        $("#btnTogglePara").on("click", function () {

            if (paragraph.is(":visible")) {

                paragraph.hide();
                $(this).text("Show Paragraph");

            } else {

                paragraph.show();
                $(this).text("Hide Paragraph");

            }

        });

        // Optional Challenge 2:
        // Append a new list item
        let itemCount = 1;

        $("#btnAddItem").on("click", function () {

            $("#activityList").append(
                $("<li>").text("New Item " + itemCount)
            );

            itemCount++;

        });

        // Optional Challenge 3:
        // Add or remove a CSS class
        $("#btnToggleClass").on("click", function () {

            if (paragraph.hasClass("highlight")) {

                paragraph.removeClass("highlight");

            } else {

                paragraph.addClass("highlight");

            }

        });

        // Allow greeting by pressing Enter
        nameInput.on("keypress", function (event) {

            if (event.which === 13) {
                greetButton.trigger("click");
            }

        });

    });

} else {

    document.addEventListener("DOMContentLoaded", function () {

        document.getElementById("status").textContent =
            "Error: jQuery library could not be loaded.";

    });

}
