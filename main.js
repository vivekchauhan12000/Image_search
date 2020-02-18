const api="https://pixabay.com/api/?key=13631321-4aefdeba668385349cf1f3945"

const form = document.querySelector('form');
const input = document.querySelector('input');
const imageSection=document.querySelector('.images');

form.addEventListener('submit', formSubmitted);

function formSubmitted(event){
  event.preventDefault();
  const searchTerm = input.value;
  search(searchTerm)
  .then(displayImages);
}

function search(searchTerm){
  const url =`${api}&q=${searchTerm}&image_type=photo`;
 
  return fetch(url)
  .then(response=>response.json())
  .then(result=>{
    console.log(result.hits);
    return result.hits;
    
  });
}

function displayImages(images){
  images.forEach(image=>{
    
    const imageElement=document.createElement('img');
    imageElement.src=image.largeImageURL[0];
    imageSection.appendChild(imageElement);
     
  });
}