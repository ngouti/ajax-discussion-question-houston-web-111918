const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

let name = document.querySelector('#fullname')
let email = document.querySelector('#email')
let street = document.querySelector('#street')
let city = document.querySelector('#city')
let state = document.querySelector('#state')
let post = document.querySelector('#postcode')
let phone = document.querySelector('#phone')
let cell = document.querySelector('#cell')
let dat = document.querySelector('#date_of_birth')


document.querySelector('.btn').addEventListener('click', function(e){
e.preventDefault()
fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(res => {
    let d = res.results[0]
    email.innerText = d.email
    name.innerText = `${d.name.title} ${d.name.first} ${d.name.last} `
    street.innerText = d.location.street
    city.innerText = d.location.city
    state.innerText = d.location.state
    post.innerHTML = d.location.postcode
    phone.innerText = d.phone
    cell.innerHTML = d.cell
    dat.innerHTML = d.dob.date
  })
})