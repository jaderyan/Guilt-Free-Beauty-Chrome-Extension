chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    fetch(`https://cruelty-free-chrome-extension.herokuapp.com/api/companies?website=${tabs[0].url}`)
      .then(res => 
        res.status === 404 ? document.getElementById('website-result').textContent = 'Boo! This is not a cruelty free brand' : res.json())
        .then(({company}) => {
            document.getElementById('website-result').textContent = `Yay! ${company.name} are cruelty free. Treat yo self!`
        })
});
