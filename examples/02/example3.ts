// how fetch request is made 

const createPost = async () => {
    const controller = new AbortController();
    console.log(controller)
    const signal = controller.signal
    const timeoutId= setTimeout(()=>{
        controller.abort
    },5000);

    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({title:'my Fetch', body: 'it works', userId: 1}),
        signal:signal
    })
    clearTimeout(timeoutId)
    console.log(response)
    if(!response.ok){
        console.log("error while fetching request ")
    }
    const data = await response.json()
    console.log(data)

    return data
    
}

async function createPost2(){
    
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({title:'my Fetch', body: 'it works', userId: 1})
    })
    if(!response.ok){
        console.log("error while fetching request ")
    }
    const data = await response.json()
    console.log(data)
}

createPost2()