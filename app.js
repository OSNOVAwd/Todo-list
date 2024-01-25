const container = document.querySelector('.container')
const left = document.querySelector('.left')
const form = document.querySelector('form')
const fullname = document.querySelector('#fullname')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const phone = document.querySelector('#phone')
const userimage = document.querySelector('#userimage')
const savebtn = document.querySelector('#savebtn')



form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const user = document.createElement('div')
    user.classList.add  ('user')

    user.innerHTML = `
    <div class="info">
    <img src="${userimage.value}" alt="">
    <h3>${fullname.value}</h3>
    </div>

     <h3>${username.value}</h3>
     <h5>${email.value}</h5>
     <h5>${phone.value}</h5>
      <div class="edit">
        <button type="button" id="edit" onclick="showModal()">Edit</button>
        <button type="button" id="delete">Delete</button>
    </div>
    `

    left.appendChild(user)
    form.reset();
})


function showModal(){
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.innerHTML = `
    <div class="modal-info">
    <h1>Create user</h1>
    <form action="">
      <input id="fullname" type="text" placeholder="First name">
      <input id="username" type="text" placeholder="Username">
      <input id="email" type="email" placeholder="Email address">
      <input id="phone" type="text" placeholder="Your phone number">
      <input id="userimage" type="text" placeholder="User image">
      <button id="savebtn" type="submit">Save</button>
    </form>
    </div>
    `

    container.appendChild(modal)
}