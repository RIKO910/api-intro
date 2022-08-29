//json
//console.log('api')
const user = {id:120 ,name:'riko'}
//console.log(user)
const stringified = JSON.stringify(user)
//console.log(stringify);

const shop ={
    name:'ali',
    address:'Ali road',
    products:['Laptop','mobile','pepsi'],
    isExpensive:false
}
const stringify = JSON.stringify(shop);
console.log(stringify)