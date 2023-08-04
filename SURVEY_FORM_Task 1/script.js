const form = document.getElementById('survey-form');
const pages = document.querySelectorAll('.page');
const formData = {};

function showPage(pageNumber) {
  pages.forEach(page => page.classList.remove('active'));
  pages[pageNumber - 1].classList.add('active');
}

function nextPage(pageNumber) {
  saveFormData();
  showPage(pageNumber);
  restoreFormData();
}

function prevPage(pageNumber) {
  saveFormData();
  showPage(pageNumber);
  restoreFormData();
}

function saveFormData() {
  const currentPage = pages[getCurrentPageNumber() - 1];
  const inputs = currentPage.querySelectorAll('.form-control');
  
  inputs.forEach(input => {
    formData[input.id] = input.value;
  });
  
  localStorage.setItem('formData', JSON.stringify(formData));
}

function restoreFormData() {
  const savedData = JSON.parse(localStorage.getItem('formData'));
  
  if (savedData) {
    const currentPage = pages[getCurrentPageNumber() - 1];
    const inputs = currentPage.querySelectorAll('.form-control');
  
    inputs.forEach(input => {
      if (savedData[input.id]) {
        input.value = savedData[input.id];
      }
    });
  }
}

function getCurrentPageNumber() {
  for (let i = 0; i < pages.length; i++) {
    if (pages[i].classList.contains('active')) {
      return i + 1;
    }
  }
  return 1; // Default to first page
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  submitForm();
});

showPage(1);
restoreFormData();
