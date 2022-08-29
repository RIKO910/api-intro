function LoadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data => displayPosts(data))
}

function displayPosts(post){
    console.log(post)
}