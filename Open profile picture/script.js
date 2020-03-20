// Retrieving the url
function getUserData() {
  var username = document.querySelector('input').value;
  console.log(username);
  var url = 'https://api.github.com/users/' +  username;
  console.log(url);
  search(url)
}

// Acessing the url
function search(url_input) {
  axios.get(url_input)
    .then(function(response) {
      document.body.innerHTML = ""
      var imgURL = response.data.avatar_url;
      var imgElement = document.createElement("img");
      imgElement.setAttribute("src", `${imgURL}`)
      document.body.appendChild(imgElement);
      document.body.style.backgroundColor = "#1a1a1a";

      // Adding Bio
      var bioContainer = document.createElement("div");
      bioContainer.setAttribute("class", "container");
      document.body.appendChild(bioContainer);

      var quoteBox = document.createElement("div");
      quoteBox.setAttribute("class", "quote-box");
      bioContainer.appendChild(quoteBox);

      var bioElement = document.createElement("div");
      bioElement.setAttribute("class", "bio");
      quoteBox.appendChild(bioElement);

      var bio = response.data.bio;
      console.log(bio);
      var bioText = document.createTextNode(bio);
      bioElement.appendChild(bioText);

      var nameElement = document.createElement("div");
      nameElement.setAttribute("class", "name");
      bioElement.appendChild(nameElement);

      var name = document.createTextNode("- " + response.data.name);
      console.log(name)

      nameElement.appendChild(name);

    })
    .catch(function(error) {
      console.warn(error);
    });
}

function showBio() {

}