const itemsFound = {bouquet: false };

function foundItem(item) {
  itemsFound[item] = true;
  document.querySelector(`img[alt="${capitalize(item)}"]`).style.opacity = '0.3';

  if (Object.values(itemsFound).every(Boolean)) {
    document.querySelector('.container').style.display = 'block';
  }
}

  

 