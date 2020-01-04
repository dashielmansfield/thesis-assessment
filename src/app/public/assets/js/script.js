
console.log(test)

function openMenu() {
  const menu = document.getElementById('page-menu')
  menu.classList.remove('page-menu--hidden')
}

function closeMenu() {
  console.log('close')
}

  


//   const logo = document.createElement('img')
//   logo.src = 'logo.png'

//   const container = document.createElement('div')
//   container.className += ' container'
//   container.className += ' container--blue'

//   movies.forEach(movie => {
//     // Create a div with a card class
//     const card = document.createElement('div')
//     card.setAttribute('class', 'card')

//     // Create an h1 and set the text content to the film's title
//     const h1 = document.createElement('h1')
//     h1.textContent = movie.title

//     // Create a p and set the text content to the film's description
//     //  + Limit description to 300 charachters (plus an ellipses if truncated)
//     const p = document.createElement('p')  
//     const maxDescriptionLength = 300
//     if (movie.description.length > maxDescriptionLength) {
//       movie.description = movie.description.substring(0, maxDescriptionLength) 
//       movie.description = `${movie.description}...`
//     }
//     p.textContent = movie.description

   
    
//     const button = document.createElement('button')
//     button.textContent = 'Delete Movie'
//     button.onclick = deleteMovie
//     card.setAttribute("id", movie.id)
//     // Append the card to the container element
//     container.appendChild(card)

//     // Append the title and description to the card
//     card.appendChild(h1)
//     card.appendChild(p)
//     card.appendChild(button)
//   })

//   // Append the logo and container to the application root element
//   app.appendChild(logo)
//   app.appendChild(container)
  
  
//    var deleteAll = function() {
//       console.log('test')
//       movies.forEach(movie => {
//         const cardToDelete = document.getElementById(movie.id)
//         cardToDelete.parentNode.removeChild(cardToDelete)
//       })
//    }
   
//    const button = document.createElement('button')
//    button.textContent = 'Delete All'
//    button.onclick = deleteAll
  
//     app.appendChild(button)
// }

// // Send the request
// request.send()
