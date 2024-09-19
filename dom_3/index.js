

function dataLoaded() {
    let tableBody = document.querySelector('#body');


    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {

        console.log(res.data);

        let posts = res.data


        posts.slice(0, 10).map((post) => {
            tableBody.innerHTML = tableBody.innerHTML + `
            
           <div class="col-4">
                <div class="card">
                    <img class="card-img-top" src=${post.url} alt="Card image cap">
                    <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">
                           ${post.title}
                        </p>
                        <a href="#!" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

            </div>
            
            `
        })


    })
}



window.onload = dataLoaded