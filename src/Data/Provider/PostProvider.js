import axios from "axios";

async function getPostsList() {
  return await axios.get("https://jsonplaceholder.typicode.com/posts");
}

export { getPostsList };
