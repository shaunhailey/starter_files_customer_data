//console.log(customers)

let first = customers.results[0]

let _fields = document.getElementById('list')

for (var i = 0; i < customers.results.length; i++) {
  let _data = customers.results[i]
  if (_data.type === 'textarea') {
    let image = document.createElement('img')
  } else if (_data.type === 'textarea') {
    let textarea = document.createElement('textarea')
    textarea.id = _data.id
  }
}

//let element = document.getElementById('list')
//let newElement = document.createElement('li')
//element.appendChild(newElement)
//document.body.appendChild(img)
