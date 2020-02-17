const api="https://pixabay.com/api/?key=13631321-4aefdeba668385349cf1f3945"

const form = document.querySelector('form');
const input = document.querySelector('input');
form.addEventListener('submit', formSubmitted);

function formSubmitted(event){
  event.preventDefault();
  const searchTerm = input.value;
  search(searchTerm)
}

function search(searchTerm){
  const url =`${api}&q=${searchTerm}&image_type=photo`;
 
  fetch(url)
  .then(response=>response.json())
  .then(result=>{
    console.log(result);
  });
}