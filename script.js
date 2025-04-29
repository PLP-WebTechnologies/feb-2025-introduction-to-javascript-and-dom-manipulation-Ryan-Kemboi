<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic JavaScript Example</title>
    <style>
        /* Basic styles */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
        }

        header {
            background-color: #333;
            color: white;
            padding: 10px;
            text-align: center;
        }

        button {
            margin: 10px;
            padding: 10px;
            cursor: pointer;
        }

        button:hover {
            background-color: #ddd;
        }

        .new-element {
            background-color: #e7f3e7;
            padding: 10px;
            margin: 5px;
            border: 1px solid #ccc;
        }
    </style>
</head>
<body>
    <header>
        <h1>Welcome to Dynamic Web Page</h1>
    </header>

    <main>
        <section>
            <p id="content">This is some text that can be changed.</p>
        </section>

        <section>
            <button id="changeTextButton">Change Text</button>
            <button id="toggleColorButton">Toggle Color</button>
            <button id="addElementButton">Add New Element</button>
        </section>

        <section id="newElementSection">
            <!-- New elements will be added here -->
        </section>
    </main>

    <footer>
        <p>Created by You</p>
    </footer>

    <script>
        // Change text content dynamically when the "Change Text" button is clicked
        const changeTextButton = document.getElementById('changeTextButton');
        const content = document.getElementById('content');

        changeTextButton.addEventListener('click', () => {
            content.textContent = "The text has been changed dynamically!";
        });

        // Modify CSS styles via JavaScript when the "Toggle Color" button is clicked
        const toggleColorButton = document.getElementById('toggleColorButton');
        toggleColorButton.addEventListener('click', () => {
            document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
        });

        // Add a new element when the "Add New Element" button is clicked
        const addElementButton = document.getElementById('addElementButton');
        const newElementSection = document.getElementById('newElementSection');

        addElementButton.addEventListener('click', () => {
            const newElement = document.createElement('div');
            newElement.classList.add('new-element');
            newElement.textContent = "This is a new dynamically added element!";
            newElementSection.appendChild(newElement);
        });
    </script>
</body>
</html>
