//option-1
function textChangefunction(){
  const textChange = document.getElementById('change-text');
  textChange.innerText = 'text change done'
}

//option-2
document.getElementById('btnChanger').addEventListener('click', function(){
  document.getElementById('change-text').innerText = 'text change done';
})

//input text update-
document.getElementById('update-button').addEventListener('click', function(){
  const inputBox = document.getElementById('input-box');
  const inputBoxValue = inputBox.value;

  const inputTitle = document.getElementById('input-title');
  inputTitle.innerText = inputBoxValue;
})

  //text-area-new comment-
document.getElementById('submit-button').addEventListener('click', function(){
  const textArea = document.getElementById('text-area');
  const newComment = textArea.value;

  const textContainer = document.getElementById('text-container');
  newP = document.createElement('p');
  newP.innerText = newComment;
  textContainer.appendChild(newP);
})
