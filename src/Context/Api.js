import axios from "axios";

export async function getExecutive() {
  const response = await axios.get(
    "http://3.35.39.140:8080/members/executives"
  );
  return response.data;
}

export async function getStudent() {
  const response = await axios.get("http://3.35.39.140:8080/members/students");
  return response.data;
}

export async function getGraduate() {
  const response = await axios.get("http://3.35.39.140:8080/members/graduates");
  return response.data;
}

export async function getProject() {
  const response = await axios.get("http://3.35.39.140:8080/projects/normal");
  return response.data;
}

export async function getProjectData(id) {
  const response = await axios.get(`http://3.35.39.140:8080/projects/${id}`);
  return response.data;
}

export async function getPhotos() {
  const response = await axios.get("http://3.35.39.140:8080/activities/detail");
  return response.data;
}

export async function getEcpick() {
  const response = await axios.get("http://3.35.39.140:8080/projects/ecpick");
  return response.data;
}

export async function getMainactivty() {
  const response = await axios.get("http://3.35.39.140:8080/activities/main");
  return response.data;
}
