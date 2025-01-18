const employees = {
    "Alik": { name: "אולג", hours: 0 },
    "Slavik": { name: "סלבה", hours: 0 },
    "Ori": { name: "אורי", hours: 0 }
};

function getDisplayName(name) {
    return employees[name] ? employees[name].name : name;
}

// Function to update all names on the page
function updateNames() {
    for (const [englishName, details] of Object.entries(employees)) {
        const element = document.querySelector(`[data-name="${englishName}"]`);
        if (element) {
            element.textContent = details.name;
        }
    }
}

// Wait for the DOM to load before executing the updateNames function
document.addEventListener('DOMContentLoaded', updateNames);
