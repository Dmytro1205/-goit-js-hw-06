const form = document.querySelector('.login-form')

form.addEventListener('submit', onForm);

function onForm(event) {
event.preventDefault();
// const formData= new formData(event.currentTarget)
// console.log(formData)
const {
    elements:{email, password}
  } = event.currentTarget;
 if (email.value === "" || password.value === "") {
 alert('Please fill in all the fields!');
  return
 } else {
  const result = {
  email: email.value,
  password: password.value
  }
  console.log( result)
 }
 event.currentTarget.reset()
}


