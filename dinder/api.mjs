import axios from "axios";

export const imageData = {
  Bakery: require(`./images/restaurant-test-imgs/Bakery.jpg`),
  Caribbean: require(`./images/restaurant-test-imgs/Caribbean.jpg`),
  Chinese: require(`./images/restaurant-test-imgs/Chinese.jpg`),
  English: require(`./images/restaurant-test-imgs/English.jpg`),
  FastFood: require(`./images/restaurant-test-imgs/FastFood.jpg`),
  French: require(`./images/restaurant-test-imgs/French.jpg`),
  Grill: require(`./images/restaurant-test-imgs/Grill.jpg`),
  Indian: require(`./images/restaurant-test-imgs/Indian.jpg`),
  Italian: require(`./images/restaurant-test-imgs/Italian.jpg`),
  Mexican: require(`./images/restaurant-test-imgs/Mexican.jpg`),
  Sushi: require(`./images/restaurant-test-imgs/Sushi.jpg`),
};

const dinderApi = axios.create({
  baseURL: "https://dinder.cyclic.app/api",
});

export const getAllRestaurants = () => {
  return dinderApi.get("/restaurants").then((response) => {
    return response.data;
  });
};

export const getUsers = () => {
  return dinderApi.get("/users").then((response) => {
    return response;
  });
};

export const registerNewUser = ({ username, password, postcode }) => {
  return dinderApi
    .post("/users", { username, password, postcode })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err.status, "<--- axios err");
    });
};

export const getUserByUsername = (username) => {
  return dinderApi.get(`/users/${username}`).then((data) => {
    return data;
  });
};
