// Mobile data (brand, model, storage options, price, image)
const mobileData = [
    { brand: "samsung", model: "Galaxy S21", storage: ["64GB", "128GB", "256GB"], price: "$799", image: "images/samsung-s21.jpg" },
    { brand: "samsung", model: "Galaxy Note 20", storage: ["128GB", "256GB"], price: "$999", image: "images/samsung-note20.jpg" },
    { brand: "apple", model: "iPhone 13", storage: ["64GB", "128GB", "256GB"], price: "$999", image: "images/iphone-13.jpg" },
    { brand: "apple", model: "iPhone 12", storage: ["64GB", "128GB"], price: "$799", image: "images/iphone-12.jpg" },
    { brand: "xiaomi", model: "Mi 11", storage: ["128GB", "256GB"], price: "$699", image: "images/xiaomi-mi11.jpg" },
    { brand: "xiaomi", model: "Redmi Note 10", storage: ["64GB", "128GB"], price: "$299", image: "images/xiaomi-redmi-note10.jpg" }
];

// Function to update models based on selected brand
function updateModels() {
    const brand = document.getElementById("brand").value;
    const modelDropdown = document.getElementById("model");

    // Clear previous model options
    modelDropdown.innerHTML = '<option value="">--Select Model--</option>';

    // Filter models based on selected brand
    const filteredModels = mobileData.filter(mobile => mobile.brand === brand);

    // Add filtered models to the dropdown
    filteredModels.forEach(mobile => {
        const option = document.createElement("option");
        option.value = mobile.model;
        option.textContent = mobile.model;
        modelDropdown.appendChild(option);
    });
}

// Function to add selected item to the table
function addToTable() {
    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;
    const storage = document.getElementById("storage").value;
    const tableBody = document.querySelector("#mobileTable tbody");

    // Find the selected mobile details
    const selectedMobile = mobileData.find(mobile => mobile.brand === brand && mobile.model === model);

    if (selectedMobile) {
        // Create a new row
        const row = document.createElement("tr");

        // Add image
        const imgCell = document.createElement("td");
        const img = document.createElement("img");
        img.src = selectedMobile.image;
        img.alt = selectedMobile.model;
        imgCell.appendChild(img);
        row.appendChild(imgCell);

        // Add brand
        const brandCell = document.createElement("td");
        brandCell.textContent = selectedMobile.brand;
        row.appendChild(brandCell);

        // Add model
        const modelCell = document.createElement("td");
        modelCell.textContent = selectedMobile.model;
        row.appendChild(modelCell);

        // Add storage
        const storageCell = document.createElement("td");
        storageCell.textContent = storage;
        row.appendChild(storageCell);

        // Add price
        const priceCell = document.createElement("td");
        priceCell.textContent = selectedMobile.price;
        row.appendChild(priceCell);

        // Add row to table
        tableBody.appendChild(row);

        // Update total price
        updateTotalPrice(selectedMobile.price);
    }
}

// Function to update the total price
function updateTotalPrice(price) {
    const totalElement = document.getElementById("total");
    const currentTotal = parseFloat(totalElement.textContent.replace("$", ""));
    const newPrice = parseFloat(price.replace("$", ""));
    totalElement.textContent = (currentTotal + newPrice).toFixed(2);
}