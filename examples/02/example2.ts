// fetch takes url , and on object inside that object there are two main important things 
// headers and options 
const run = async () => {
   const response = await fetch("https://jsonplaceholder.typicode.com/users/2",{
      method:"GET",
      headers:{
            "Content-Type": "application/json"
        }
   })
   const data = await response.json();
   console.log(data)

}

run()