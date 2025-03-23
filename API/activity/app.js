let button = document.querySelector("button");
let list = document.getElementById("list");

button.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  console.log(country);
  let allColleges = await getData(country);
  for(let college of allColleges){
    let li = document.createElement("li");
    li.innerText = college.name;
    list.appendChild(li);
  }
});

async function getData(country) {
  let url = "http://universities.hipolabs.com/search?country=";
  try {
    let res = await axios.get(url + country);
    return res.data;
  } catch (error) {
    return [];
  }
}
