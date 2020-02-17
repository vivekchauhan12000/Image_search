const api="your api key"

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
