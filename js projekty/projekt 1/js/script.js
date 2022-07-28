const input = document.querySelector('input');
const drinkList = document.querySelectorAll('li')

const search = () => {
  let searchValue = input.value.toLowerCase()
  
  for (let i = 0; i < drinkList.length; i++) {
    drinkList[i].style.display = '';

     if (drinkList[i].textContent.toLowerCase().indexOf(searchValue) == -1) {
     drinkList[i].style.display = 'none';
     }
  }
};

input.addEventListener('input', search)




