import { client} from '../../Services/Api';

async function getPhotosList() {
  return await client.get("/photos")
}

async function getPhoto(id){
return client.get(`/photos/${id}`)
}

async function createPhoto(body){
   return client.post('/photos', body);
}

export { getPhotosList , getPhoto, createPhoto};
