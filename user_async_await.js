
async function getUsers(){

    let url = "https://jsonplaceholder.typicode.com/users";
  
    try{
      let res = await fetch(url);
      return await res.json();
    }
    catch (error) {
      console.log(error);
    }
    
  }
  
  async function renderUsers() {

    let users = await getUsers();
    let html = '';
    users.forEach(data =>{
      let htmlSegment = `
      <div class="card mt-3 text-white bg-success animate__animated animate__rubberBand" style="width: 18rem;">
          <img src="http://dummyimage.com/200x200&text=${data.website}" class="h-60" alt="..." ">
        <div class="card-body">
            <h5 class="card-title text-center">${data.username}</h5>
            <hr class="bg-dark" style="border-top: 1px dashed #fff">
        </div>
    
        <div class="ml-3 mb-2">
          <p class="card-text">Name: ${data.name}</p>
          <p class="card-text">Email: ${data.email}</p>
          <p class="card-text">Company: ${data.company.name}</p>
        </div>
      </div>
    `;
  
    html += htmlSegment;
  
    });
  
    let container = document.querySelector('.container');
    container.innerHTML = html;
  
  }
  
    renderUsers();




    // ********************************************************* HTML ********************************************************** //
   /* 
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  <link rel="stylesheet" href="style.css">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Karla&display=swap" rel="stylesheet">
</head>
<body class="mb-3 mx-auto" style="background-color:#01353E">  
  
  <h3 class="title text-center" >Consumo de data online (REST API) &#128579;</h3>

      <!-- <div class="row" id="cardDiv"></div> -->

      <div class="row container"></div>
  
  
    <script src="user_async_await.js"></script>
   
</body>
</html> 
*/