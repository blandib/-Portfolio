// Wait for the page to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {

    // 1. Fetch the JSON data from the file
    fetch('data.json') // Path to your JSON file
        .then(response => {
            // Check if the request was successful
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            // Parse the JSON data from the response
            return response.json();
        })
        .then(data => {
            // 2. We now have the data (the array of products)
            // Call a function to display it in our HTML
            displayProducts(data);
        })
        .catch(error => {
            // 3. Handle any errors that occurred during the fetch
            console.error('There was a problem fetching the data:', error);
            const productList = document.getElementById('product-list');
            productList.innerHTML = '<p>Failed to load products.</p>';
        });

    // Function to display the products
    function displayProducts(products) {
        // Get the container div from the HTML
        const container = document.getElementById('product-list');

        // Clear any existing content
        container.innerHTML = '';

        // Loop through each product in the JSON array
        products.forEach(product => {
            // Create HTML elements for each product
            const productElement = document.createElement('div');
            productElement.classList.add('product'); // Add a CSS class

            // Build the content for the product element using the JSON data
            productElement.innerHTML = `
                <h2>${product.name}</h2>
                <p><strong>Price:</strong> ${product.price}</p>
                <p>${product.description}</p>
                <hr>
            `;

            // Append the new product element to the container
            container.appendChild(productElement);
        });
    }
});