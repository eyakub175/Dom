function loadApiData(){


    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => displayData(data));
 
}


function displayData(data){
       
    const container = document.getElementById('parent-container');
    for( const post of data ){
     
        const div = document.createElement('div');
        div.style.padding = '20px';
        div.style.borderRadius = '10px';
        div.style.margin = '10px';
        div.style.backgroundColor = 'tomato';
        div.innerHTML = `
        
        <h2> Title: ${post.title} </h2>
        <p>  Body: ${post.body} </p>
        
        `;
        container.appendChild(div);
        
    
    }


}

    