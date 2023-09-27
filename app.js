// Challenge 1
const id = document.querySelector("#user")

function changeName(){
  id.innerHTML = "Kishore";
}

id.addEventListener("load",changeName())

// Challenge 2
const button = document.querySelector("#btn-click")

button.addEventListener("click", () =>{
  button.style.backgroundColor = "peru"
})

// Challenge 3
const bButton = document.querySelector("#build-button")

function happy(){
  const noun = document.querySelector("#noun").value
  const verb = document.querySelector("#verb").value
  const adverb = document.querySelector("#adverb").value
  const output = document.querySelector("#statement")
  
  output.innerHTML = noun +' ' + verb + ' ' + adverb
}

bButton.addEventListener("click", happy) 

// Challenge 4
// Challenge 4.1

const grandparent = document.querySelector("#grandparent")

grandparent.addEventListener("click", (e) =>{
  console.log("grandparent clicked")
})

const parent = document.querySelector("#parent")

parent.addEventListener("click", (e) =>{
  console.log("parent clicked")
})

const child = document.querySelector("#child")

child.addEventListener("click", (e) =>{
  console.log("child clicked")
})

// Challenge 4.2

grandparent.addEventListener("click", (e) =>{
  console.log("grandparent clicked")
},true)


parent.addEventListener("click", (e) =>{
  console.log("parent clicked")
},true)


child.addEventListener("click", (e) =>{
  console.log("child clicked")
},true)

// Challenge 5
const category = document.querySelector("#category")

const shirts = document.querySelector("#shirts")
const pants = document.querySelector("#pants")
const blazers = document.querySelector("#blazers")

category.addEventListener("click", (e) =>{
  console.log(e.target.id)

})