  /**
   * You might want to use this template to display each new characters
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template#examples
   */
  const characterTemplate = document.getElementById('template')

  const characterApi = axios.create({
    baseURL: 'http://localhost:5005/api/characters'
  })

  const myUrl = 'http://localhost:5005/api'

  document.getElementById('fetch-all').addEventListener('click', function (event) {
    console.log(event)
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });

