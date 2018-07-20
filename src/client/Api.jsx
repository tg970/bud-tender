let API = "";

if (window.location.hostname === 'localhost') {
  API = "http://localhost:1122/";
} else {
  API = "";
}

export default API;
