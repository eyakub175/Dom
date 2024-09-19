

function dataLoaded() {
    let tableBody = document.querySelector('#tbody');


    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
        console.log(res.data);

        let posts = res.data


        posts.slice(0, 10).map((post) => {
            tableBody.innerHTML = tableBody.innerHTML + `
            
            <tr>
                <td> ${post.id} </td>
                <td> ${post.title} </td>
                <td> ${post.body} </td>
            </tr>
            
            `
        })


    })
}



window.onload = dataLoaded