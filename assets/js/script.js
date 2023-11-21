// ================Login-Page-Starts================
document.addEventListener('DOMContentLoaded',function(){
    const loginForm = document.getElementById('loginForm')

   loginForm.addEventListener('submit',function(e){
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        console.log(username,password)
        if(username === 'your_username' && password === 'your_username'){
            window.location.href = 'index.html';
        }
        else if(username !== 'your_username' && password === 'your_username'){
            let elm = document.getElementById("userdata")
            let para = document.createElement("p")
            para.textContent = "invalid username"

            if(elm.children.length == 0){
                elm.appendChild(para)
            }
        }
        else{
            alert("Invalid credentials. Please try again.");
        }
    })
})
// ================Login-Page-Ends================

const chart = document.querySelector("#chart").getContext('2d');

// create a new chart instance
new Chart(chart,{
    type:'line',
    data:{
        labels: ['Jan','Feb','Mar','Apr','May','June','Jul','Aug','Sep','Oct','Nov'],
        datasets:[
            {
                label:'BTC',
                data:[29374,33537,49631,59095,57828,36684,33572,39974,48847,48116,61004],
                borderColor:'red',
                borderWidth:2
            },
            {
                label:'ETH',
                data:[31500,4100,88800,26000,46000,32698,5000,3000,18656,24832,36844],
                borderColor:'blue',
                borderWidth:2
            }
        ]
    },
    // options:{
    //     responsive:false
    // }
})

// Show or Hide sidebar
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click',()=>{
    sidebar.style.display='block';
})

closeBtn.addEventListener('click',() => {
    sidebar.style.display='none';
})

// Change-theme
const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click',() => {
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:first-child').classList.toggle('active')
    themeBtn.querySelector('span:last-child').classList.toggle('active')
})

// ==============LogOut-Starts==============

let logout = document.getElementById("logout")
console.log(logout)
logout.addEventListener("click",function logout(){
    window.location.href = 'login.html';
})

// console.log(result)


// ==============LogOut-Ends==============