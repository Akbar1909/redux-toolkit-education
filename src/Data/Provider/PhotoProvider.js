import { client } from "../../Services/Api";

async function getPhotosList() {
  return await client.get("/photos");
}

async function getPhoto(id) {
  return client.get(`/photos/${id}`);
}

async function createPhoto(body) {
  return client.post("/photos", body);
}

async function deletePhoto(id) {
  console.log(id);
  return client.delete(`photos/${id}`);
}

async function updatePhoto(body) {
  return client.patch(`/photos/${body.id}`, body);
}

export { getPhotosList, getPhoto, createPhoto, deletePhoto, updatePhoto };
