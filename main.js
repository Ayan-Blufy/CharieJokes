// console.log(new Date(2021, 11, 1, 10, 30, 33, 0).toString());



const jokes = document.getElementById('jokes');
const jokebtn = document.getElementById('jokebtn');


const newjoke = async() => {
    jokes.innerHTML = `Loading.....`;
    try {

        const setheader = {
            headers: {
                Accept: "application/json"

            }
        }


        const res = await fetch('https://icanhazdadjoke.com', setheader);
        const data = await res.json();


        jokes.innerHTML = data.joke;
    } catch (error) {
        console.log(error);
    }


}





jokebtn.addEventListener('click', newjoke);
newjoke();