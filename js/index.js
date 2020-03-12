// Your code goes here

// homeLink.addEventListener('click', () => {
// console.log('You clicked the link!')
// })

// document.querySelector('nav').addEventListener('click', () =>{
//     console.log('nav has been clicked')
// })

// header1.addEventListener('click', () =>{
//     console.log('You have clicked the header!')
// })
const links = document.querySelectorAll('a');
links.forEach(link =>{
      link.addEventListener('mouseover', () => {
        
        link.style.fontSize = '2rem'
    })
  })

document.querySelector('nav').addEventListener('mouseout', () => {
        links.forEach(link =>{
            link.style.fontSize = '1.6rem'
        })
      });

links.forEach(link =>{
  link.addEventListener('click', (e) =>{
    e.preventDefault()
  })
    })
  

const textColor= document.querySelector('h2');

  
textColor.addEventListener('click', () => {
    textColor.style.color = 'red'
})

pFocus = document.querySelectorAll('p');

pFocus.forEach(picFocus =>{
    picFocus.addEventListener('mouseenter', () =>{
     picFocus.style.fontSize = '2rem'
        
});
});

pFocus.forEach(picFocus =>{
  picFocus.addEventListener('mouseleave', () =>{
   picFocus.style.fontSize = '1.6rem'
      
});
});

const body = 
document.querySelector('body')

body.addEventListener('wheel', () =>{
body.style.backgroundColor = 'blue'
});

body.addEventListener('keydown', () =>{
  body.style.backgroundColor = 'white'
  });
  
  body.addEventListener('dblclick', () =>{
    body.style.backgroundColor = 'lightblue'
    });

body.addEventListener('load',
alert(`you've loaded the page!`))

body.addEventListener('keyup', () =>{
  body.style.padding = '50%'
})

const buttonEdit =
document.querySelectorAll('.btn')

buttonEdit.forEach(btn =>{
  btn.addEventListener('dblclick', (e) => {
    e.stopPropagation()
    btn.style.backgroundColor = 'purple'
});
});

