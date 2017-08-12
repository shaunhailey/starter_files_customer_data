//console.log(customers)

let town = customers.results

for (var i = 0; i < town.length; i++) {
  let _data = town[i]
}
let biggusDivvus = document.getElementById('apartmentBuilding')

function givvusDivvuses(human) {
  let human = _data
  let image = _data.picture
  let flat = document.createElement('div')
  flat.className = 'dweller'
  let name = document.createElement('p')
  let firstname = town.human.name.first
  let surname = town.human.name.last
  name.innerHTML = `${firstname} ${surname}`
  flat.appendChild(name)

  let email = document.createElement('p')
  email.innerHTML = town.human.email
  flat.appendChild(email)

  let address = document.createElement('address')
  let line1 = document.createElement('p')
  let line2 = document.createElement('p')
  line1.innerHTML = `${_data.location.street}`
  line2.innerHTML = `${_data.location.city}, ${_data.location.state} ${_data.location.postcode}`
  address.appendChild(line1)
  address.appendChild(line2)
  flat.appendChild(address)

  let telephone = document.createElement('phone')
  telephone.innerHTML = `${_data.cell}`
  let telephoneline = document.createElement('p')
  flat.appendChild(telephoneline)

  let ssn = document.createElement('p')
  ssn.innerHTML = `${_data.id.value}`
  flat.appendChild(ssn)

  flat.appendChild(biggusDivvus)
}
