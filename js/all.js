const con = document.getElementById('content');
const day = document.getElementById('date');
const times = document.getElementById('time');
const addBtn = document.getElementById('addedBtn');
const deletedBtn = document.getElementById('deletedBtn');
const list = document.getElementById('list');

const listArray = [];
function render() {
  let htmlStr = '';

  listArray.forEach(function (item, i) {
    htmlStr =
      htmlStr +
      `<div class="item">
          <div>
            <p>內容：${item.content}</p>
            <p>時間：${item.date} ${item.time}</p>
          </div>
        </div>`;
  });

  list.innerHTML = htmlStr;
}

addBtn.addEventListener('click', function () {
  // console.log(con.value);
  // console.log(day.value);
  // console.log(times.value);

  listArray.unshift({
    content: con.value,
    date: day.value,
    time: times.value,
  });
  // console.log(listArray);
  render();
});

deletedBtn.addEventListener('click', function () {
  listArray.shift();
  render();
});
