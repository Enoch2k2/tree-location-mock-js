document.addEventListener('DOMContentLoaded', function () {
  loadLocations();
})

async function loadLocations() {
  let response = await fetch('http://localhost:3000/locations')
  let locations = await response.json();

  locations.forEach(data => {
    let location = new Location(data);
    let div = document.getElementById('location-checkboxes');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');
    label.setAttribute('for', `location-${location.id}`);
    label.innerText = location.name;
    checkbox.id = `location-${location.id}`;
    checkbox.type = "checkbox";
    checkbox.value = location.id;
    div.appendChild(checkbox);
    div.appendChild(label);
  })

  document.querySelector('form').addEventListener('submit', createTree);
}

async function createTree(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const treeType = document.getElementById('tree_type').value;
  const height = document.getElementById('height').value;
  const checkboxes = document.querySelectorAll('input[type="checkbox"]')
  const location_ids = [];

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      location_ids.push(checkboxes[i].value);
    }
  }

  const strongParams = {
    tree: {
      name,
      tree_type: treeType,
      height,
      location_ids
    }
  }

  const response = await fetch("http://localhost:3000/trees", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(strongParams)
  })
  const tree = await response.json();


  renderLocations();
}

async function renderLocations() {
  Location.all = [];
  let locationsDiv = document.querySelector('#locations');
  locationsDiv.innerHTML = '';

  let response = await fetch('http://localhost:3000/locations');
  let data = await response.json();

  Location.all = data.map(location => new Location(location));

  Location.all.forEach(location => {
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = location.name;
    div.appendChild(h3)
    locationsDiv.appendChild(div);
  })
}
