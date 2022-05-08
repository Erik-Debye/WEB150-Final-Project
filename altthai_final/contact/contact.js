//This function auto-inserts todays date into the date category

const today = new Date().toISOString().substring(0, 10);
document.getElementById('date').value = today;
