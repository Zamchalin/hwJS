let parseData = JSON.parse(data);
console.log(parseData);

const body = document.querySelector("body");
let div = document.createElement("div");
body.appendChild(div);

parseData.cats.forEach((e) => {
  div.insertAdjacentHTML(
    "beforeend",
    `  <div class="card">
      <h1>${e.asset_name}</h1>
      <p>${e.description}</p>
      <img src="${e.logo}" />
    </div>`
  );
});
