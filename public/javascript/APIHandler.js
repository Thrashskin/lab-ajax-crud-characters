class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios
    .get(this.BASE_URL + '/characters')
    .then( response => {
      console.log(response.data);

      let str = '';

      response.data.forEach(character => {
        str +=`
        <li class="list-group-item">
          <div class="character-info">
              <div>Id: ${character.id}</div>
              <div>Name: ${character.name}</div>
              <div>Occupation: ${character.occupation}</div>
              <div>Cartoon?: ${character.cartoon}</div>
              <div>Weapon: ${character.weapon}</div>
          </div>
        </li>`
      });

      document.getElementById('characters-list').innerHTML = str;

    } )
    .catch(err => {
      console.log(err);
    })
    
  }

  getOneRegister () {
    axios
    .get(this.BASE_URL + '/characters/:id')
    .then( response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    })
  }

  createOneRegister () {
    axios
    .post(this.BASE_URL + '/characters', {})
    .then( () => {
      //this should redirect to the list of all the characters.
    })
    .catch(err => {
      console.log(err);
    })
  }

  updateOneRegister () {
    axios
    .put(this.BASE_URL + '/characters/:id', {})
    .then( () => {

    })
    .catch(err => {
      console.log(err);
    })
  }

  deleteOneRegister () {
    axios
    .delete(this.BASE_URL + '/characters/:id')
    .then()
    .catch(err => {
      console.log(err);
    })
  }
}