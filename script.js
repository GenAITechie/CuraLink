function getCaregivers() {
  const stored = localStorage.getItem('caregivers');
  return stored ? JSON.parse(stored) : [];
}

function saveCaregivers(list) {
  localStorage.setItem('caregivers', JSON.stringify(list));
}

function saveCaregiver(event) {
  event.preventDefault();
  const name = document.getElementById('cg-name').value.trim();
  const skills = document.getElementById('cg-skills').value.trim();
  const availability = document.getElementById('cg-availability').value.trim();
  if (!name) return;
  const caregivers = getCaregivers();
  caregivers.push({ name, skills, availability });
  saveCaregivers(caregivers);
  document.getElementById('caregiver-form').reset();
  alert('Profile saved!');
}

function displayCaregivers(containerId) {
  const caregivers = getCaregivers();
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  caregivers.forEach(cg => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `<strong>${cg.name}</strong><br/>Skills: ${cg.skills}<br/>Availability: ${cg.availability}`;
    container.appendChild(div);
  });
  if (caregivers.length === 0) {
    container.innerHTML = '<p>No caregivers found.</p>';
  }
}

function searchCaregivers(event) {
  event.preventDefault();
  const term = document.getElementById('search-term').value.trim().toLowerCase();
  const resultsContainer = document.getElementById('search-results');
  const caregivers = getCaregivers();
  const results = caregivers.filter(cg =>
    cg.name.toLowerCase().includes(term) ||
    cg.skills.toLowerCase().includes(term)
  );
  resultsContainer.innerHTML = '';
  results.forEach(cg => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `<strong>${cg.name}</strong><br/>Skills: ${cg.skills}<br/>Availability: ${cg.availability}`;
    resultsContainer.appendChild(div);
  });
  if (results.length === 0) {
    resultsContainer.innerHTML = '<p>No matching caregivers.</p>';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('caregiver-form');
  if (form) form.addEventListener('submit', saveCaregiver);

  const searchForm = document.getElementById('search-form');
  if (searchForm) searchForm.addEventListener('submit', searchCaregivers);

  const listContainer = document.getElementById('caregiver-list');
  if (listContainer) displayCaregivers('caregiver-list');
});
