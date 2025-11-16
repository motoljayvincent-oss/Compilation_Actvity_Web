// 1. The Baguio Road Trip Budget Manager
const c = console.log.bind(this);

function calculateFuelCost(
  leg1Km,
  leg2Miles,
  leg3Meters,
  kmPerLiter,
  pricePerLiter
) {
  const MILES_TO_KM = 1.60934;
  const METERS_TO_KM = 1000;

  // Step 1. Convert Leg 2 (miles) to km
  let leg2Km = leg2Miles * MILES_TO_KM;

  // Step 2. Convert Leg 3 (meters) to km
  let leg3Km = leg3Meters / METERS_TO_KM;

  // Step 3. Calculate total distance in km
  let totalKm = Math.round(leg1Km + leg2Km + leg3Km);

  // Step 4. Calculate total liters of fuel needed
  let totalLiters = Math.round(totalKm / kmPerLiter);

  // Step 5. Calculate total fuel cost
  let totalCost = totalLiters * pricePerLiter;

  // Display Results
  c(
    `The total distance is ${totalKm}km, fuel needed is ${totalLiters}L, and the total trip cost is ₱${totalCost}.`
  );

  return totalCost;
}

// Example
calculateFuelCost(150, 75, 150000, 12, 64);

// 2. The Homeowner's Fencing Quote
function calculateFenceLength(lengthMeters, widthFeet) {
  const FEET_TO_METER = 0.3048;

  // Step 1. Convert width from feet to meters
  let widthMeters = widthFeet * FEET_TO_METER;

  // Step 2. Calculate total perimeter in meters
  let perimeter = 2 * (lengthMeters + widthMeters);

  // Display Result
  c(
    `The yard has a length of ${lengthMeters}m and width of ${widthMeters.toFixed(
      2
    )}m. Total fencing required is ${perimeter.toFixed(2)} meters.`
  );

  return perimeter;
}

// Example
calculateFenceLength(15.5, 50);

// 3. The Dinner Party Treasurer
function calculateSplitBill(subtotal, tipRate, peopleCount, paymentFee) {
  // Step 1. Calculate tip amount
  let tip = subtotal * tipRate;

  // Step 2. Calculate grand total
  let grandTotal = subtotal + tip + paymentFee;

  // Step 3. Calculate cost per person
  let perPerson = grandTotal / peopleCount;

  // Step 4. Round to nearest peso and format
  perPerson = Math.round(perPerson).toFixed(2);

  // Display Result
  c(
    `Tip amount: ₱${tip.toFixed(2)}, Grand total: ₱${grandTotal.toFixed(
      2
    )}, Each person pays: ₱${perPerson}.`
  );

  return perPerson;
}

// Example
calculateSplitBill(4550.0, 0.18, 7, 10.5);
