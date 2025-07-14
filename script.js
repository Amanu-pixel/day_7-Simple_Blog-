const titleInput = document.getElementById('titleInput');
const contentInput = document.getElementById('contentInput');
const postsContainer = document.getElementById('postsContainer');
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', () => {
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  if (title === '' || content === '') {
    alert('Please enter both a title and content!');
    return;
  }

  const postElement = document.createElement('div');
  postElement.className = 'post';
  postElement.innerHTML = `
    <h2>${title}</h2>
    <p>${content}</p>

    <button class="delete-btn">Delete</button>
  `;

  postElement.querySelector('.delete-btn').addEventListener('click', () => {
    postElement.remove();
  });

  postsContainer.prepend(postElement); // Add new post at the top

  titleInput.value = '';
  contentInput.value = '';
});
