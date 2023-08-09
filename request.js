const API = "https://restcountries.com/v3.1/all";
const rows = document.querySelector(".row");

const getData = async () => {
  const request = await fetch(API);
  const data = await request.json();
  return data;
};

getData()
  .then((data) => {
    data.forEach((item) => {
      const { name, borders, flags } = item;
      rows.innerHTML += `        
      <div class="col-sm-4 mb-3 mb-sm-0">
        <div class="card">
            <img src="${flags.png}" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${name.common}</h5>
                <p class="card-text">С вспомогательным текстом .</p>
                <a href="#" class="btn btn-primary">Batafsil</a>
            </div>
        </div>
      </div>`;
    });
  })
  .catch((error) => {
    console.log(error);
  });
