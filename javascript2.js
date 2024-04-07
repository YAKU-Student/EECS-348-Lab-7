// Function to change the border color, background color, and width of a sample line of text
function change_values() {
    var test_text = document.getElementById("variable");
    // Change border color
    test_text.style.borderColor = `rgb(${document.getElementById("border_r").value},
				       ${document.getElementById("border_g").value},
				       ${document.getElementById("border_b").value})`;
    // Change border width
    test_text.style.borderWidth = border_width;

    // Change background color
    test_text.style.backgroundColor = `rgb(${document.getElementById("back_r").value}, ${document.getElementById("back_g").value}, ${document.getElementById("back_r").value})`;
}
