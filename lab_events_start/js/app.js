document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleFormSubmit);
})

const handleFormSubmit = function (event) {
  event.preventDefault();
  // console.dir(event);
  const readingListItem = createReadingListItem(event.target);
  const readingList = document.querySelector('#reading-list');
  readingList.appendChild(readingListItem);

  event.target.reset();
}

const createReadingListItem = function (form) {
  const readingListItem = document.createElement('li');
  readingListItem.classList.add('reading-list-item');

    const newListItem1 = document.createElement('h3');
    newListItem1.textContent = form.title.value;
    readingListItem.appendChild(newListItem1);

    const newListItem2 = document.createElement('h4');
    newListItem2.textContent = form.author.value;
    readingListItem.appendChild(newListItem2);

    const newListItem3 = document.createElement('h5');
    newListItem3.textContent = form.category.value;
    readingListItem.appendChild(newListItem3);

    return readingListItem;
  }
