let responses = [];

const fetchData = async () => {
  responses = await fetch("https://jsonplaceholder.typicode.com/posts/").then(
    (response) => response.json()
  );
  return responses;
};

const getData = async () => {
  await fetchData();
  for (const response of responses) {
    $("#data-display").prepend(
      `<div id='${response.userId}' class="card"> <h2>${response.title}</h2> <p>  ${response.body} </p> <p>  user: ${response.userId}</p></div>`
    );
  }
};

$(".sortUser-button").on("click", () => {
  console.log("click");
  const userSorted = responses.sort(function (a, b) {
    return b.userId - a.userId;
  });
  for (const response of userSorted) {
    $("#data-display").prepend(
      `<div id='${response.userId}' class="card"> <h2>${response.title}</h2> <p> ${response.body} </p> <p> user: ${response.userId}</p> </div>`
    );
  }
});

$(".sortAZ-button").on("click", () => {
  console.log("click AZ");
  const alphaSorted = responses.sort(function (a, b) {
    if (b.title < a.title) return -1;
  });
  for (const response of alphaSorted) {
    $("#data-display").prepend(
      `<div id='${response.userId}' class="card"> <h2>${response.title}</h2> <p> ${response.body} </p> <p> user: ${response.userId}</p> </div>`
    );
  }
});
