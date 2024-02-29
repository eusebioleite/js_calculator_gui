# jscalc

jscalc is a simple JavaScript calculator web application that allows users to perform basic arithmetic operations.

## Features

- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/)
- Clearing the input
- Evaluating the expression

## Usage

1. Download or clone the repository to your local machine.
2. Navigate to the directory where you downloaded/cloned the repository.
3. Open the `index.html` file in a web browser (double-click on it or open it via the browser's file menu).
4. The calculator interface will be displayed, consisting of a textarea for displaying the input and output, and a grid of buttons for entering numbers and operators.
5. Enter numbers and operators by clicking on the buttons.
6. Use the "E" button to evaluate the expression.
7. Use the "C" button to clear the input.

## Implementation Details

### HTML Structure

- The calculator interface consists of a `<textarea>` element for displaying the input and output, and a grid of buttons for entering numbers and operators.
- Buttons are organized into rows using `<div>` elements with specific ids (`first_row`, `second_row`, etc.).
- Each button has an `onclick` attribute that calls the `add_text()` JavaScript function with the id of the clicked button.

### CSS Styling

- Buttons are styled to have a fixed width and height for consistency.
- The textarea is styled to have a specific height, width, and background color.

### JavaScript Functionality

- The `add_text(id)` function is called when a button is clicked.
- Based on the id of the clicked button, the function appends the corresponding text to the textarea.
- For the "E" button, the function evaluates the expression in the textarea using the `eval()` function.
- For the "C" button, the function clears the content of the textarea.
