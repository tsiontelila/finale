const url = 'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json' // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
data.articles.forEach(news=> {
  const keys= Object.values(news); // getting the keys of the data
  console.log(keys)
});    
  })
  .catch(error => console.error(error)) // handling error if something wrong happens
