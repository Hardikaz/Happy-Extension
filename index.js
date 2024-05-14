const cookJokes = async () => {
    try {
        const res=await fetch("https://api.chucknorris.io/jokes/random");
        const data=await res.json();
        const myJoke=document.querySelector("#joke-container");
        myJoke.innerHTML=data.value;
    }
    catch(error){}
};

window.addEventListener("load", () =>{
    cookJokes();
})