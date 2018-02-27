document.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById('search').addEventListener('click', clickHandler, false);
  });

function clickHandler(event) {
    event.preventDefault()
    const company = document.getElementById('company').value;
    fetch(`https://cruelty-free-chrome-extension.herokuapp.com/api/companies/${company}`)
      .then(res => res.status === 404 ? document.getElementById('result').textContent = 'Boo! This is not a cruelty free brand' : res.json())
      .then(({company}) => {
        document.getElementById('result').textContent = `Yay! ${company.name} are cruelty free. Treat yo self!`
      })
}