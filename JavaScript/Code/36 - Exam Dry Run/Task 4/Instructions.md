# Task: Fetch Car Data, Add Random Speed, and Store the Fastest Car in Local Storage

**Objective:**  
Create a JavaScript program that fetches car data from a provided API, adds a random speed to each car, identifies the fastest car, and stores it in `localStorage` with a timestamp. Retrieve and display this data whenever the page is loaded or refreshed.

## Instructions:

1. **Fetch Data:**  
   Use the `fetch` API to retrieve a list of cars from the endpoint: `https://api.edu.skuflic.com/cars`.

2. **Add Random Speed:**

   - For each car object, add a new property `speed`.
   - Use `Math.random()` to generate a random speed between 100 and 300 km/h.

3. **Identify the Fastest Car:**

   - Initialize a variable to keep track of the fastest car.
   - Loop through the list of cars and compare their speeds to find the car with the highest speed.

4. **Store in Local Storage:**

   - Store the fastest car's details (as a string) in `localStorage` along with the current timestamp.

5. **Retrieve and Display:**
   - On page load, check if the fastest car's data is already stored in `localStorage`.
   - If it is, display the car details and the timestamp.
   - If not, fetch the data again, find the fastest car, store it, and then display it.
