// const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
// const dropdownmenu=document.querySelector('.dropdown-menu')



// const dropdownList = [...dropdownElementList].map(dropdownToggleEl => 
//     new bootstrap.Dropdown(dropdownToggleEl))

// ===============================================================

// ===using querySelectorAll to select all the button=======

// const buttons= document.querySelectorAll('.button');
// buttons.forEach(button => {
//   button.addEventListener('click', ()=>{
//     alert('active');
//   }); 
// });

//  console.log(buttons);
// ========================================



// =======FindRoombtn=======

// const findbtn= document.querySelector('.FindRoombtn');
//      findbtn.addEventListener('click', ()=>{
//     alert('active');
//   }); 


//   ========== submitbtn ======

const submitbtn= document.querySelector('.submitbtn');
   submitbtn.addEventListener('click', ()=>{
    alert('active');
  }); 

  let PhoneNumber=document.querySelector('.Phone-Number')


  // ==========Room type==========

  const roomType =document.querySelector('.roomType')
  const roomNumber=document.querySelector('.roomNumber')

  const rooms = {
    Deluxe:[101,108,110,107],
    Junior:[111,103,105,106,109,114,115],
    Executive:[102,103, 112,104,]
  };

 roomType .addEventListener("change", function () {
  const selectedRoom = this.value;
  roomNumber.innerHTML=`
    <option value="number">select Room Number</option>
  `
   if(rooms [selectedRoom]){
    rooms [selectedRoom].forEach(function (Number
    ){
      roomNumber.innerHTML +=
      `
        <option value="${ Number} ">${ Number} </option>
      `;
    });

   }

});



 const room1={
  roomName:'Deluxe',
  roomNumber:101,
  roomImage: '',
  roomPrice: 100
 }


 const room2={
  roomName:'exclusive',
  roomNumber:101,
  roomImage: '',
  roomPrice: 100
 }



 const room3 ={
  roomName:' Junior',
  roomNumber:111,
  roomImage: '',
  roomPrice: 200
 }

const  roomlist =[room1,room2,room3]

 console.log(room1);
// =========display==========

function displayrooms() {

 roomlist.innerHTML +=Rm

  roomlist.forEach((room)=>{
   
    let Rm = html_content=`
  
     <section class="rooms">

       <h2>${ roomlist.title}</h2>

        <div class="room-grid">

          <div class="room-card" data-aos="zoom-in" data-aos-duration="3000">
            <img src="${ room.image}  image/DELUX ROOM.jpeg">
            <h3>${ room.title}      Deluxe Room</h3>
          </div>

          <div class="room-card" data-aos="zoom-in" data-aos-duration="3000">
            <img src=" ${ room.image} image/JUNIOR SUITE.jpeg">
            <h3>${ room.title}      Junior Suite</h3>
          </div>

          <div class="room-card" data-aos="zoom-in" data-aos-duration="3000">
            <img src=" ${ room.image} image/executive room.jpeg">
            <h3> ${ room.title}      Executive Suite</h3>
          </div>

         </div>
    </section>
  `;


      rooms.insertAdjacentHTML('befoere', html_content)

  } )


  
}