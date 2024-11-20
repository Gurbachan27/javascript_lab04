// Step 1: Create references to the header and section elements
const header = document.querySelector('header');
const section = document.querySelector('section');

// Step 2: Fetch the JSON file
async function populate() {
    const url = './js/i-scream.json'; // Path to the local JSON file
    const response = await fetch(url); // Fetch the file
    const jsonObj = await response.json(); // Parse the JSON data
    console.log(jsonObj); // Debugging: Log the JSON object to the console

    // Step 3: Populate header and flavors section
    populateHeader(jsonObj);
    showTopFlavors(jsonObj.topFlavors);
}

// Step 3a: Populate header
function populateHeader(jsonObj) {
    const h1 = document.createElement('h1');
    h1.textContent = jsonObj.companyName;

    const p = document.createElement('p');
    p.textContent = `Head Office: ${jsonObj.headOffice} | Established: ${jsonObj.established}`;

    header.appendChild(h1);
    header.appendChild(p);
}

// Step 3b: Display top flavors
function showTopFlavors(topFlavors) {
    topFlavors.forEach(flavor => {
        const article = document.createElement('article');

        const h2 = document.createElement('h2');
        h2.textContent = flavor.name;

        const img = document.createElement('img');
        img.src = `./images/${flavor.image}`;
        img.alt = flavor.name;

        const type = document.createElement('p');
        type.textContent = `Type: ${flavor.type}`;

        const calories = document.createElement('p');
        calories.textContent = `Calories: ${flavor.calories}`;

        const ul = document.createElement('ul');
        flavor.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ul.appendChild(li);
        });

        article.appendChild(h2);
        article.appendChild(img);
        article.appendChild(type);
        article.appendChild(calories);
        article.appendChild(ul);
        section.appendChild(article);
    });
}

// Step 4: Call the populate function
populate();
