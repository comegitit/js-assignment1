//color declarations
const green = 'rgba(118,174, 170, 1)'
const black = 'rgba(23,35, 50, 1)'
const brown = 'rgba(205,164, 133, 1)'
const greenblue = 'rgba(62,171, 201, 1)'
const pink = 'rgba(254,156, 161, 1)'
const blue = 'rgba(98,189, 254, 1)'

//an array [] of (6) objects
const data = [{
    topic: 'Food',
    title: 'Wake Up and Smell the Coffee',
    price: '$0.90',
    color: green,
  },
  {
    topic: 'Architecture',
    title: 'The Brand New NASA Office',
    price: '$0.19',
    color: black,
  },
  {
    topic: 'Travel',
    title: 'Experience the Saharan Sands',
    price: '$2.29',
    color: brown,
  },
  {
    topic: 'Interior',
    title: '9 Air-Cleaning Plants Your Home Needs',
    price: '$0.09',
    color: greenblue,
  },
  {
    topic: 'Food',
    title: 'One Month Sugar Detox',
    price: '$0.99',
    color: pink,
  },
  {
    topic: 'Photography',
    title: 'Shooting Minimal Instagram Photos',
    price: '$0.29',
    color: blue,
  }
]

// Instructions
// Take the data above and display it as tiles on the page

//-----------------------------------------------------------------
//Heavily commented throughout only for the sake of my own learning
//-----------------------------------------------------------------


//First, declare a reference to the element with id 'content'.
// The element is coming from the DOM (html):
const content = document.getElementById('content') //get the DOM (html) element 'content' and set it to the variable (const) content

function displayContent(cardContainer, array) { //The *only* function in this code
  // cardContainer - The container to which cards will be added.
  // array - The list of cards to be added to said container.
  for (let index = 0; index < array.length; index++) {
   // all the program's logic is contained within this for loop.
   //We are creating a function before the loop starts, and calling that function after the loop ends.

    // creating card with properties AND adding to the DOM:
    const card = document.createElement('div') //creating card in the DOM. An orphaned child at this point
    card.className = 'card' //apply className as 'card'. IntelliSense: card.(choose className from the list)
    card.style.backgroundColor = array[index].color //Getting the correct color for whatever object the current array iteration is looking at.
    //Note: the syntax is card.style.backgroundColor because *background-color is a css style* property. Thus, we cannot just say card.backgroundColor

    //Now, add the content to the cards, one property at a time. Remember we're still inside the for loop
    let topic = document.createElement('div')
    topic.className = 'topic' //only applying a className to 'topic'
    topic.textContent = array[index].topic //** textContent is a DOM element property!
    card.appendChild(topic) // adds it to the <div> element

    let title = document.createElement('div') //same idea as above
    title.className = 'title'
    title.textContent = array[index].title
    card.appendChild(title)

    let price = document.createElement('div')
    price.className = 'buy-button'
    price.textContent = 'Read For ' + array[index].price
    card.appendChild(price)

    cardContainer.appendChild(card) //adds everything to the DOM right here
  }
}

displayContent(content, data) // the function call that makes the whole thing do what it does
