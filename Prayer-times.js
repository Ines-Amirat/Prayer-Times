
function prayerTimeCity() {
   
    let address = document.getElementById("city").value
    console.log(document.getElementById("city").value)
    url = `https://api.allorigins.win/raw?url=https://api.aladhan.com/timingsByAddress/16-01-2025?address=${address}`
    axios.get(url)
        .then((response) => {
            let data = response.data
            let timings = data.data.timings
             

            let gregorian = data.data.date.gregorian.date
            let hijri = data.data.date.hijri.date
            let method = data.data.meta.method.name

            document.getElementById("city").innerHTML = `Prayer Times in ${address},`
            document.getElementById("miladi").innerHTML = gregorian
            document.getElementById("hijri").innerHTML = hijri
            Object.getOwnPropertyNames(timings).forEach((val) => {
                document.getElementById("table-prayer").innerHTML += ` <tr>
                                                                                <td>${val}</td>
                                                                                <td>${timings[val]}</td>   
                                                                        </tr>`
                                                                    })
            console.log( Object.getOwnPropertyNames(timings))
          
            document.getElementsByClassName("method")[0].innerHTML = method
            })
            .catch(error => {
                    console.log(error);
            })

        }


