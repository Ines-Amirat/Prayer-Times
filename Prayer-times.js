/*function userPosts(IdUser) {


    url = `https://jsonplaceholder.typicode.com/posts?userId=${IdUser}`
    axios.get(url)
        .then((response) => {
            console.log(response)
            let posts = response.data
            document.getElementById("postI").innerHTML = ""
            for (post of posts) {
                document.getElementById("postI").innerHTML += ` <div class="postUser">
                                                                <h1>${post.title}</h1>
                                                                <h3>${post.body}</h3>
                                                            </div>`
            }

        })
        .catch(error => {
            console.log(error);
        })

}
        

userPosts(1)
*/


function prayerTimeCity() {
    let address = "annaba"
    url = `https://api.allorigins.win/raw?url=https://api.aladhan.com/timingsByAddress/02-01-2025?address=${address}`
    axios.get(url)
        .then((response) => {
            let data = response.data
            let timings = data.data.timings
             
            document.getElementById("city").innerHTML = address
            Object.getOwnPropertyNames(timings).forEach((val) => {
                document.getElementById("table-prayer").innerHTML += ` <tr>
                                                                                <td>${val}</td>
                                                                                <td>${timings[val]}</td>   
                                                                        </tr>`
                                                                    })
                

                })
        }



prayerTimeCity()
