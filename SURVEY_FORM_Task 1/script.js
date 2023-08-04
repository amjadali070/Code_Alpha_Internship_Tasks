const form = document.getElementById('survey-form');
const pages = document.querySelectorAll('.page');
let currentPage = 1;

function showPage(pageNumber) {
  pages.forEach(page => page.classList.remove('active'));
  pages[pageNumber - 1].classList.add('active');
  currentPage = pageNumber;
}

function nextPage(pageNumber) {
  saveFormData(); // Implement this function to save form data to local storage or variables
  showPage(pageNumber);
}

function prevPage(pageNumber) {
  saveFormData(); // Implement this function to save form data to local storage or variables
  showPage(pageNumber);
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  submitForm(); // Implement this function to handle form submission
});

showPage(currentPage);
