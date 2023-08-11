// Reference to the Firestore database
const db = firebase.firestore();

// Function to submit form values
function submitForm() {
  const form = document.getElementById('form'); // Change this to the actual form ID
  const name = form.name.value;
  const email = form.email.value;
  const age = form.age.value;
  const role = form.role.value;
  const recommend = form.recommed.value;
  const languages = Array.from(form.inp).filter(input => input.checked).map(input => input.value);
  const comment = form.comment.value;

  // Create a new document in the 'responses' collection
  db.collection('responses').add({
    name: name,
    email: email,
    age: age,
    role: role,
    recommend: recommend,
    languages: languages,
    comment: comment,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(() => {
    console.log('Form submitted successfully.');
    // You can add code here to display a success message or redirect the user.
  })
  .catch(error => {
    console.error('Error submitting form:', error);
    // You can add code here to display an error message.
  });
}
