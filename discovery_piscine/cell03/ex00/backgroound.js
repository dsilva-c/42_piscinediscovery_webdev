function changeColor() {
    // Generate random values for Red, Green, and Blue (0-255)
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    // Construct the RGB string
    let color = "rgb(" + r + ", " + g + ", " + b + ")";
    // Apply the new color to the body background
    document.body.style.backgroundColor = color;
}
