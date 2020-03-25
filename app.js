// const icons = document.querySelectorAll('.accordion_items');
const icons = document.querySelectorAll('.icon-class');
const ul = document.querySelector('ul')

for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener('click', () => {

    // if (i == 0 || i == 1 || i == 2 || i == 3 || i == 4 || i == 5) {
    //   icons[i].classList.add('active');
    // } else if (i >= 0) {
    //   icons[i].classList.remove('active');
    // }

    // console.log(icons);



    switch (i) {
      // case 0:
      // case 1:
      // case 2:
      // case 3:
      // case 4:
      // case 5:
      //   icons[i].classList.add('active');
      //   break;
      // case 0:
      //   icons[0].classList.remove('active');





      case 0:
        icons[0].classList.add('active');
        icons[1].classList.remove('active');
        icons[2].classList.remove('active');
        icons[3].classList.remove('active');
        icons[4].classList.remove('active');
        icons[5].classList.remove('active');
        break;
      case 1:
        icons[0].classList.remove('active');
        icons[1].classList.add('active');
        icons[2].classList.remove('active');
        icons[3].classList.remove('active');
        icons[4].classList.remove('active');
        icons[5].classList.remove('active');
        break;
      case 2:
        icons[0].classList.remove('active');
        icons[1].classList.remove('active');
        icons[2].classList.add('active');
        icons[3].classList.remove('active');
        icons[4].classList.remove('active');
        icons[5].classList.remove('active');
        break;
      case 3:
        icons[0].classList.remove('active');
        icons[1].classList.remove('active');
        icons[2].classList.remove('active');
        icons[3].classList.add('active');
        icons[4].classList.remove('active');
        icons[5].classList.remove('active');
        break;
      case 4:
        icons[0].classList.remove('active');
        icons[1].classList.remove('active');
        icons[2].classList.remove('active');
        icons[3].classList.remove('active');
        icons[4].classList.add('active');
        icons[5].classList.remove('active');
        break;
      case 5:
        icons[0].classList.remove('active');
        icons[1].classList.remove('active');
        icons[2].classList.remove('active');
        icons[3].classList.remove('active');
        icons[4].classList.remove('active');
        icons[5].classList.add('active');
        break;

    }




    // if (i === 0) {
    //   icons[i].classList.add('active');
    // }

    // console.log(i);
    // console.log(icons[i]);

  })






}


















































// for (var i = 0; i < icons.length; i++) {
//   icons[i].addEventListener('click', () => {

//     console.log(icons[i].classList);

//   })
// }






// console.log(icons);



// for (var i = 0; i < means.length; i++) {
//   let icons = document.querySelectorAll('.icon-class');

//   if (means)

//     console.log(means[i].length);
// }


// means.forEach((icon) => {
//   means[i].addEventListener('click', () => {

//   })
// })


// icons.forEach((icon) => icon.addEventListener('click', () => {

//   console.log(means[0]);

//   if (icon === icon) {
//     icon.classList.toggle('active');
//   } else if (icon.classList.contains('active')) {
//     console.log('not working');
//   }

// }))











// for (let i = 0; i < icons.length; i++) {
//   icons[i].addEventListener('click', function () {

//     console.log(icons[i].length);
//     // if (!icons[i].classList.contains('active')) {
//     //   icons[i].classList.add('active');
//     // } else if (icons[i].classList.contains('active')) {
//     //   icons[i].classList.remove('active');
//     // }

//     // if (icons[i]) {
//     //   icons[i].classList.add('active');
//     //   console.log('test');
//     // } else if (icons[i]) {
//     //   icons[i].classList.remove('active');
//     // }




//     // console.log(icons[i].parentElement.classList.length);
//     // console.log(icons[i].parentElement.classList.value);




//     // if (icons[i].parentElement.classList[i].contains()) {
//     //   icons[i].parentElement.classList('active');
//     // } else {
//     //   console.log('speed');
//     // }




//     // console.log(e.target);







//     // console.log(means);
//     // let newMeans = JSON.stringify(means)
//     // console.log(newMeans);

//     // let means = icons[i].parentElement.classList.value;
//     // let element = icons[i].parentElement;



//     // console.log(element.classList);
//     // console.log(means[i]);
//     // console.log(means);



//     // if (means[i]) {
//     //   element.classList.add('active');
//     // } else if (means[i] === 'active') {
//     //   element.classList.remove('active');
//     // }




//     // if (this.element) {
//     //   element.classList.add('active');
//     // } else if (`${element.classList}` === means) {
//     //   element.classList.remove('active');
//     // }



//     // close
//     // if (!icons[i].parentElement.classList.contains('active')) {
//     //   icons[i].parentElement.classList.add('active');
//     //   console.log('live');
//     // } else if (icons[i].parentElement.classList.contains('active')) {
//     //   icons[i].parentElement.classList.remove('active');
//     //   console.log('winner');
//     // } else if (icon[i].parentElement.classList.value === icons[0]) {
//     //   console.log('text')
//     // }


//     // if (icons[i].parentElement.classList.length <= 1) {
//     //   icons[i].parentElement.classList.toggle('active');
//     //   console.log('high score');
//     // } else if (icons[i].parentElement.classList.value === `${means[i]}-active`) {
//     //   icons[i].parentElement.classList.remove('active');
//     //   console.log('working');
//     // } else {
//     //   icons[i].parentElement.classList.remove('active');
//     // }





//     // if (icons[i].parentElement === 'active') {
//     // } else {
//     // }





//   })
// }





// const val = icons.firstElementChild;

// console.log(val);

// console.log(ul);
// console.log(icons);

// const newIcons = Array.from(icons);

// console.log(newIcons);

// console.log(icons);
// console.log(icons);
// console.log(icons.);

// const val = Array.from(ul.children);

// console.log(val);


// for (var i = 0; i < newIcons.length; i++) {
//   newIcons.addEventListener('click', function () {
//     console.log(newIcons[i])
//   })
// }



// console.log(icons.parentElement);


// icons.forEach((icon) => {
//   icon.addEventListener('click', function () {
//     icon.classList.add('active');
//     if (icon.classList.contains('active')) {
//       console.log('test');
//     } else if (!icon.classList.contains('active')) {
//       icon.parentElement

//       icon.classList.add('active');
//       // icon.classList.remove('active');
//     }







//   })



// })
