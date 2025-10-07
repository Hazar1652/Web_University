const cars = [
    { model: "BMW X5", brand: "BMW", price: 30000 },
    { model: "Audi A4", brand: "Audi", price: 27000 },
    { model: "Tesla Model 3", brand: "Tesla", price: 35000 }
];

const carList = document.getElementById("car-list");

function renderCars(data) {
    carList.innerHTML = "";
    for (const car of data) {
        const card = document.createElement("div");
        card.classList.add("car-card");

        const title = document.createElement("h3");
        title.innerText = car.model;
        title.classList.add("car-title");

        const brand = document.createElement("p");
        brand.innerHTML = `<strong>Brand:</strong> ${car.brand}`;
        brand.classList.add("car-brand");

        const price = document.createElement("p");
        price.innerHTML = `<strong>Price:</strong> $${car.price}`;
        price.classList.add("car-price");

        card.append(title, brand, price);
        carList.append(card);
    }
}


renderCars(cars);

document.getElementById("sort").addEventListener("click", () => {
    const sorted = [...cars].sort((a, b) => a.price - b.price);
    renderCars(sorted);
});


document.getElementById("search").addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = cars.filter(car => car.model.toLowerCase().includes(value));
    renderCars(filtered);
});


document.getElementById("total").addEventListener("click", () => {
    const total = cars.reduce((sum, car) => sum + car.price, 0);
    alert(`Total price: $${total}`);
});
