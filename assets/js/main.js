const url = 'https://api.adviceslip.com/advice';
const idAdvice = document.getElementById('advice-id');
const stringAdvice = document.getElementById('advice-string');
const reloadButton = document.getElementById('reload');

function getAPI(url) {
  const request = new XMLHttpRequest();
  request.open('GET', url, false)
  request.send()

  return JSON.parse(request.responseText);
}

const apiReq = getAPI(url);

idAdvice.textContent = `ADVICE #${apiReq.slip.id}`
stringAdvice.textContent = `${apiReq.slip.advice}`

console.log(apiReq.slip);