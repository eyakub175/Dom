function loadApiData(){

    fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(data => displayData(data))
}


function displayData(data){
    
    const div = document.getElementById('divTag');

    data.map(user=> {
    
         const p = document.createElement('p');
         p.innerText = user.name;
         div.appendChild(p);


    });
   

}
     
     