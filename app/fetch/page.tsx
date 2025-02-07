import axios from "axios";

async function fetchUserDetails() {
  const response = await axios.get("http://localhost:3000/api/user");

  await new Promise((r) => setTimeout(r, 5000));
  console.log("response is" + JSON.stringify(response.data));
  return response.data;
}

export default async function Fetch() {
  const data = await fetchUserDetails();

  return (
    <div>
      {data.email}
      {data.name}
    </div>
  );
}
