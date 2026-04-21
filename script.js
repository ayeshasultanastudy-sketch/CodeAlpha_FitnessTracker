let totalActivities = 0;
let totalCalories = 0;
let totalTime = 0;

function addActivity() {
  const activity = document.getElementById("activity").value;
  const duration = parseInt(document.getElementById("duration").value);
  const calories = parseInt(document.getElementById("calories").value);

  if (!activity || isNaN(duration) || isNaN(calories)) {
    alert("Please fill all fields correctly!");
    return;
  }

  // Update totals
  totalActivities++;
  totalCalories += calories;
  totalTime += duration;

  // Update UI
  document.getElementById("totalActivities").innerText = totalActivities;
  document.getElementById("totalCalories").innerText = totalCalories;
  document.getElementById("totalTime").innerText = totalTime;

  // Add to list
  const list = document.getElementById("list");
  const li = document.createElement("li");
  li.innerText = `${activity} - ${duration} mins - ${calories} kcal`;
  list.appendChild(li);

  // Progress bars
  let caloriePercent = Math.min((totalCalories / 1000) * 100, 100);
  let timePercent = Math.min((totalTime / 120) * 100, 100);

  document.getElementById("calorieBar").style.width = caloriePercent + "%";
  document.getElementById("timeBar").style.width = timePercent + "%";

  // Clear inputs
  document.getElementById("activity").value = "";
  document.getElementById("duration").value = "";
  document.getElementById("calories").value = "";
}