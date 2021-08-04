export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));
  const header = {
    Authorization: "Bearer " + user.accessToken
  }
  console.log(header)

  if (user && user.accessToken) {
    return { Authorization: "Bearer " + user.accessToken };
  } else {
    return {};
  }
}
