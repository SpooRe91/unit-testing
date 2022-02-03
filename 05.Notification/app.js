function notify(message) {
  let messageDiv = document.querySelector('#notification');
  messageDiv.textContent = message;
  messageDiv.style.display = 'block';

  messageDiv.addEventListener('click', function () {
    messageDiv.style.display = 'none'
  });
}