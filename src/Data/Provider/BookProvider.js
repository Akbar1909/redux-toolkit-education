import axios from 'axios';

async function getBooksList(){
   return await axios.get("db/books.json")
}






export {
    getBooksList
}