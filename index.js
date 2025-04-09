$(document).ready(function () {
  let displayValue = "";

  // Append button value to the display
  $(".btn").click(function () {
    const value = $(this).data("value");

    // Ignore equals and clear buttons here
    if (value !== undefined) {
      displayValue += value;
      $("#display").val(displayValue);
    }
  });

  // Handle equals button
  $("#equals").click(function () {
    try {
      // Evaluate the string as a mathematical expression
      const result = eval(displayValue);
      $("#display").val(result);
      displayValue = result.toString(); // Save the result for further calculations
    } catch (error) {
      $("#display").val("Error");
      displayValue = ""; // Reset the display
    }
  });

  // Handle clear button
  $("#clear").click(function () {
    displayValue = "";
    $("#display").val("");
  });
});
