const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const n = document.querySelector('.name');
const b = document.querySelector('.blog');
const l = document.querySelector('.location');

 const displayUser = async (username) => {
  n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  JSON.stringify(response)
  console.log(response);
  n.textContent = response.name;
  b.textContent = response.blog;
  l.textContent = response.location;
  return response;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski').catch(handleError); 