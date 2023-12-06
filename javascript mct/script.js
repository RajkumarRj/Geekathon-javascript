
// const popLink = document.querySelectorAll(".area")
// const popLink =  document.getElementById("area");


//   <div id="board-input">
//   <input type="text" placeholder="Enter Board name">
//   <button>Add Board</button>
//   <a href="#">&times;</a>
// </div>
// function addBoard() {
//   var inputbox = document.createElement('div');
//   inputbox.setAttribute('id', 'board-input');
//   inputbox.innerHTML = `<input type="text" placeholder="Enter Board name">
//        <button>Add Board</button>
//        <a href="#" class="closex">&times;</a>`;

//   document.getElementById('value').appendChild(inputbox);
  
// }

//click to  open add board
// document.addEventListener('DOMContentLoaded', function () {
//   const addButton = document.getElementById('addDivButton');
//   const container = document.getElementById('value');

//   addButton.addEventListener('click', function () {
//       const newDiv = document.createElement('div');
//       newDiv.setAttribute('id', 'board-input');

//       newDiv.innerHTML = `
//       <input type="text" placeholder="Enter Board name">
//       <button id="add-board">Add Board</button>
//       <a href="#" class="closex">&times;</a>
//       `;
//       container.appendChild(newDiv);

//       const closeButton = newDiv.querySelector('.closex');
//       closeButton.addEventListener('click', function () {
//           container.removeChild(newDiv);
//       });
//   });

//     const addbut = newDiv.querySelector('#add-board');
//     addbut.addEventListener('click',function(){
//      console.log("clicked add board")
//   })
// });

document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('addDivButton');
  const container = document.getElementById('value');
  let newDiv;

  addButton.addEventListener('click', function () {
    newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'board-input');

    newDiv.innerHTML = `
      <input type="text" id="board-name" placeholder="Enter Board name">
      <button id="add-board">Add Board</button>
      <a href="#" class="closex">&times;</a>
    `;
    container.appendChild(newDiv);

    const closeButton = newDiv.querySelector('.closex');
    closeButton.addEventListener('click', function () {
      container.removeChild(newDiv);
    });

    const addBoardButton = newDiv.querySelector('#add-board');
    addBoardButton.addEventListener('click', function () {
      const boardName = newDiv.querySelector('#board-name').value;
      if (boardName == '') {
        alert("Enter Board Name");
      } else {
        const board = document.getElementById('board-container');
        console.log("Clicked Add Board");
        let appendDiv = document.createElement('div');
        appendDiv.innerHTML = `
          <div id="board" >
            <div class="top">
              <p>${boardName}</p>   
              <a href="#" class="area"><img src="3dot.svg" alt="dot"></a>
            </div>
            <div class="add-card-name"></div>
            <div id="middle-div" class="container"></div>
            <div class="add-card">
              <button class="button1" id="add-card-title">+ Add Card</button>
            </div>
          </div>
        `;
        board.insertBefore(appendDiv, board.lastElementChild);
        newDiv.style.display = 'none';

        const containerMiddle = appendDiv.querySelector('.add-card-name');
        let middleDiv;

        const addCard = appendDiv.querySelector("#add-card-title");
        addCard.addEventListener('click', function (event) {
          event.preventDefault();
          console.log("clicked add card title");

          addCard.disabled = true;
          middleDiv = document.createElement('div');
          middleDiv.setAttribute('id', 'card-input');
          middleDiv.innerHTML = `
            <input type="text" id="card-tie" placeholder="Enter Card Title">
            <button id="add-multiple-card">Add </button>
            <a href="#" class="closex1">&times;</a>
          `;

          containerMiddle.appendChild(middleDiv);

          const closexButton = middleDiv.querySelector('.closex1');
          closexButton.addEventListener('click', function () {
            if (containerMiddle.contains(middleDiv)) {
              containerMiddle.removeChild(middleDiv);
              addCard.disabled = false;
            }
          });
          let thirdDiv;
          const multipleCard = middleDiv.querySelector('#add-multiple-card');
          const centerContainer = appendDiv.querySelector('#middle-div');

          multipleCard.addEventListener('click', function (e) {
            e.preventDefault();
            const titleName = middleDiv.querySelector('#card-tie').value;
            console.log(titleName);

            if (titleName == '') {
              alert("Enter card Title");
            } else {
              thirdDiv = document.createElement('div');
              thirdDiv.setAttribute('id', 'card-div');
              thirdDiv.innerHTML = `<label for="">Movie</label>
                <p id="p-title">${titleName}</p>
                <a href="#" class="area"><img src="hamburger.svg"  alt="hamburger"></a>
                <div id="date-task">
                  <p><img src="clock.svg" alt="clock">13 Dec</p>
                  <p><img src="tick.svg" alt="tick"> 0/1</p>
                </div>`;
                const areaImg = thirdDiv.querySelector('.area');

                const popWindow =  document.getElementById("pop-it");
                const close = document.getElementById("close-it");
                const over =  document.getElementById("overlay");
                const titleInput = document.getElementById("title-input");
                  const descriptionInput = document.getElementById("description-input");
                  const dateInput = document.getElementById("date-input");
                  const labelInput = document.getElementById("label-input");
                  const tasksInput = document.getElementById("tasks-input");
                areaImg.addEventListener('click', function(event){
                  event.preventDefault();
                  over.classList.add("active");
                  popWindow.style.display = "block";
                  addTaskButton.addEventListener('click', function() {
                    const titlePopupValue = titleInput.value;
                    const descriptionPopupValue = descriptionInput.value;
                    const datePopupValue = dateInput.value;
                    const labelPopupValue = labelInput.value;
                    // const tasksPopupValue = tasksInput.value;
                    const movieLabel = thirdDiv.querySelector('label');
                    const cardTitle = thirdDiv.querySelector('p');

                    movieLabel.innerText = "Movie: ";
                    cardTitle.innerText = titlePopupValue;
                        
                    const taskElement = document.createElement('div');
                    taskElement.innerHTML = `
                        <div class="cardinfo-box-progress-bar">
                            <div class="cardinfo-box-progress"></div>
                        </div>
                        <input type="checkbox" ${taskCheckbox.checked ? 'checked' : ''}> ${titlePopupValue} <a href="#"><i class="fa-solid fa-trash aside"></i></a>
                    `;
                    
                    const tasksContainer = document.getElementById("add-task-popup");
                    tasksContainer.appendChild(taskElement);
                    const trashIcon = taskElement.querySelector('.fa-trash');
                      trashIcon.addEventListener('click', function() {
                          taskElement.remove();
                      });
                });
              });
              
              close.addEventListener('click', function(event){
                  event.preventDefault();
                  over.classList.remove("active");
                  popWindow.style.display = 'none';
              });
              
              const addTaskButton = document.getElementById("add-task-button");
              const taskCheckbox = document.getElementById("task-checkbox");
              
              
              

              centerContainer.appendChild(thirdDiv);
              addCard.disabled = false;
              middleDiv.style.display = 'none';
            }
          });
        });
      }
    });
  });
});
















// document.addEventListener('DOMContentLoaded', function () {
//   const addButton = document.getElementById('addDivButton');
//   const container = document.getElementById('value');
//   let newDiv;

//   addButton.addEventListener('click', function () {
//     newDiv = document.createElement('div');
//     newDiv.setAttribute('id', 'board-input');

//     newDiv.innerHTML = `
//       <input type="text" id="board-name" placeholder="Enter Board name">
//       <button id="add-board">Add Board</button>
//       <a href="#" class="closex">&times;</a>
//     `;
//     container.appendChild(newDiv);

//     const closeButton = newDiv.querySelector('.closex');
//     closeButton.addEventListener('click', function () {
//       container.removeChild(newDiv);
//     });

//     const addBoardButton = newDiv.querySelector('#add-board');
//     addBoardButton.addEventListener('click', function () {
//       const boardName = newDiv.querySelector('#board-name').value;
//       if (boardName == '') {
//         alert("Enter Board Name");
//       } else {
//         const board = document.getElementById('board-container');
//         console.log("Clicked Add Board");
//         let appendDiv = document.createElement('div');
//         appendDiv.innerHTML = `
//           <div id="board" >
//             <div class="top">
//               <p>${boardName}</p>   
//               <a href="#"><img src="3dot.svg" alt="dot"></a>
//             </div>
//             <div class="add-card-name"></div>
//             <div id="middle-div" class="container"></div>
//             <div class="add-card">
//               <button class="button1" id="add-card-title">+ Add Card</button>
//             </div>
//           </div>
//         `;
//         board.insertBefore(appendDiv, board.lastElementChild);
//         newDiv.style.display = 'none';

//         const containerMiddle = appendDiv.querySelector('.add-card-name');
//         let middleDiv;

//         const addCard = appendDiv.querySelector("#add-card-title");
//         addCard.addEventListener('click', function (event) {
//           event.preventDefault();
//           console.log("clicked add card title");

//           addCard.disabled = true;
//           middleDiv = document.createElement('div');
//           middleDiv.setAttribute('id', 'card-input');
//           middleDiv.innerHTML = `
//             <input type="text" id="card-tie" placeholder="Enter Card Title">
//             <button id="add-multiple-card">Add </button>
//             <a href="#" class="closex1">&times;</a>
//           `;

//           containerMiddle.appendChild(middleDiv);

//           const closexButton = middleDiv.querySelector('.closex1');
//           closexButton.addEventListener('click', function () {
//             if (containerMiddle.contains(middleDiv)) {
//               containerMiddle.removeChild(middleDiv);
//               addCard.disabled = false;
//             }
//           });
//           let thirdDiv;
//           const multipleCard = middleDiv.querySelector('#add-multiple-card');
//           const centerContainer = appendDiv.querySelector('#middle-div');

//           multipleCard.addEventListener('click', function (e) {
//             e.preventDefault();
//             const titleName = middleDiv.querySelector('#card-tie').value;
//             console.log(titleName);

//             if (titleName == '') {
//               alert("Enter card Title");
//             } else {
//                thirdDiv = document.createElement('div');
//               thirdDiv.setAttribute('id', 'card-div');
//               thirdDiv.innerHTML = `<label for="">Movie</label>
//                 <p>${titleName}</p>
//                 <a href="#" class="area"><img src="hamburger.svg"  alt="hamburger"></a>
//                 <div id="date-task">
//                   <p><img src="clock.svg" alt="clock">13 Dec</p>
//                   <p><img src="tick.svg" alt="tick"> 0/1</p>
//                 </div>`;
//                 const areaImg = thirdDiv.querySelector('.area');

//                 const popWindow =  document.getElementById("pop-it");
//                 const close = document.getElementById("close-it");
//                 const over =  document.getElementById("overlay");

//                 thirdDiv.querySelectorAll('.area').forEach(element => element.addEventListener('click', function(event){
//                     event.preventDefault();
//                     over.classList.add("active");
//                     popWindow.style.display = "block";
                    
//                 }))


//                 close.addEventListener('click', function(event){
//                     event.preventDefault();
//                     over.classList.remove("active");
//                     popWindow.style.display = 'none';
//                 })

//               centerContainer.appendChild(thirdDiv);
//               addCard.disabled = false;
//               middleDiv.style.display = 'none';
//             }
//           });

//         });
//       }
//     });
//   });
  
  
// });





const draggables = document.querySelectorAll('.draggable:not(.add-card)')
const containers = document.querySelectorAll('.middle-div')


draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging')
    })
  
    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging')
    })
  })


// containers.forEach(container =>{
//     container.addEventListener('dragover', e=>{
//         e.preventDefault();
//         const draggable = document.querySelector('.dragging');
//         container.appendChild(draggable);
//     })
// })

containers.forEach(container => {
    container.addEventListener('dragover', e => {
      e.preventDefault()
      const afterElement = getDragAfterElement(container, e.clientY)
      const draggable = document.querySelector('.dragging')
      if (afterElement == null) {
        container.appendChild(draggable)
      } else {
        container.insertBefore(draggable, afterElement)
      }
    })
  })
  
  function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]
  
    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect()
      const offset = y - box.top - box.height / 2
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
      } else {
        return closest
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element
  }





// document.addEventListener('DOMContentLoaded', function () {
//   const addButton = document.getElementById('addDivButton');
//   const container = document.getElementById('value');
//   let newDiv;

//   addButton.addEventListener('click', function () {
//     newDiv = document.createElement('div');
//     newDiv.setAttribute('id', 'board-input');

//     newDiv.innerHTML = `
//       <input type="text" id="board-name" placeholder="Enter Board name">
//       <button id="add-board">Add Board</button>
//       <a href="#" class="closex">&times;</a>
//     `;
//     container.appendChild(newDiv);

//     const closeButton = newDiv.querySelector('.closex');
//     closeButton.addEventListener('click', function () {
//       container.removeChild(newDiv);
//     });

//     const addBoardButton = newDiv.querySelector('#add-board');
//     addBoardButton.addEventListener('click', function () {
//        const boardName = newDiv.querySelector('#board-name').value;
//       if(boardName == ''){
//         alert("Enter Board Name");
//       }
//       else{
//       const board = document.getElementById('board-container');
//       console.log("Clicked Add Board");
//       let appendDiv =  document.createElement('div');
//       appendDiv.innerHTML=`
//       <div id="board" >
//       <div class="top">
//               <p>${boardName}</p>   
//             <a href="#"><img src="3dot.svg" alt="dot"></a>
//           </div>
//           <div class="add-card-name"></div>
//           <div id="middle-div" class="container"></div>
//             <div class="add-card">
//               <button class="button1" id="add-card-title">+ Add Card</button>
//             </div>
//           </div>
//           </div>`;
//           board.insertBefore(appendDiv,board.lastElementChild);
//           newDiv.style.display = 'none';

//           const addCard = appendDiv.querySelector("#add-card-title");
//           const containerMiddle = document.querySelector('.add-card-name');
//           let middleDiv;

//           addCard.addEventListener('click', function(event){
//             event.preventDefault();
//             console.log("clicked add card title")

//             addCard.disabled = true;
//             middleDiv = document.createElement('div');
//             middleDiv.setAttribute('id', 'card-input');
//             middleDiv.innerHTML= ` <input type="text" id="card-tie" placeholder="Enter Card Title">
//             <button id="add-multiple-card">Add </button>
//             <a href="#" class="closex1">&times;</a>`;

//             containerMiddle.appendChild(middleDiv);
//             const closexButton = middleDiv.querySelector('.closex1');
//             closexButton.addEventListener('click', function () {
//               if(containerMiddle.contains(middleDiv)){
//             containerMiddle.removeChild(middleDiv);
//             addCard.disabled = false;
//               }
//         });
//           })


//           const multipleCard = middleDiv.querySelector('#add-multiple-card');
//           const centerContainer = middleDiv.querySelector('#middle-div');

//           multipleCard.addEventListener('click', function(e){
//             e.preventDefault();
//             const titleName = middleDiv.querySelector('#card-tie').value;
//             console.log(titleName);

//             if(titleName == ''){
//               alert("Enter card Title");
//             }
//             else{
//               let thirdDiv = document.createElement('div');
//               thirdDiv.setAttribute('class','card-div');
//               thirdDiv.innerHTML=` <label for="">Movie</label>
//               <p>${titleName}</p>
//               <a href="#"  class="area"><img src="hamburger.svg" alt="hamburger"></a>
//               <div id="date-task">
//                   <p><img src="clock.svg" alt="clock">13 Dec</p>
//                   <p><img src="tick.svg" alt="tick"> 0/1</p>
//               </div>
//               `;
//               centerContainer.appendChild(thirdDiv);
//               addCard.disabled = false;
//             }



//           })


//       }

//     });
//   });
// });

// document.addEventListener('DOMContentLoaded',function(){
//   const addCard = document.getElementById("add-card-title");
//   const containerMiddle = document.getElementById('middle-div');
//   let middleDiv;

//   addCard.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log("clicked add card title")
//     middleDiv = document.createElement('div');
//     middleDiv.setAttribute('id', 'card-div');
//     middleDiv.innerHTML= `<label for="">Movie</label>
//     <p>Leo</p>
//     <a href="#"  class="area"><img src="hamburger.svg" alt="hamburger"></a>
//     <div id="date-task">
//         <p><img src="clock.svg" alt="clock">13 Dec</p>
//         <p><img src="tick.svg" alt="tick"> 0/1</p>
//     </div>`;

//     containerMiddle.appendChild(middleDiv);
//   })
// });
// <div id="middle-div" class="container">
//             <div id="card-div" draggable="true" class="draggable">
//               <label for="">Movie</label>
//               <p>Bigil</p>
//               <a href="#" class="area"><img src="hamburger.svg" alt="hamburger"></a>
//               <div id="date-task">
//                 <p><img src="clock.svg" alt="clock">13 Dec</p>
//                 <p><img src="tick.svg" alt="tick"> 0/1</p>
//               </div>
//             </div>
//             <div id="card-div" draggable="true" class="draggable">
//               <label for="">Movie</label>
//               <p>Master</p>
//               <a href="#" class="area"><img src="hamburger.svg" alt="hamburger"></a>
//               <div id="date-task">
//                 <p><img src="clock.svg" alt="clock">13 Dec</p>
//                 <p><img src="tick.svg" alt="tick"> 0/1</p>
//               </div>
//             </div>
