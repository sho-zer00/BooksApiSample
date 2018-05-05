function bookSearch(){
  console.log('this functon runs!')
  var search = document.getElementById('search').value
  document.getElementById('results').innerHTML = ""
  console.log(search)

  $.ajax({
    url:"https://www.googleapis.com/books/v1/volumes?q=" + search,
    dataType:"json",
    success:function(data){
        results.innerHTML += '<h2 id = "input">'+data.items[0].volumeInfo.title+'</h2>'
    },
    type: 'GET'
  });

}

function Amazon(){
  console.log('amazon open')
  window.open('https://www.amazon.co.jp/','_blank')
}
//<a href="https://www.amazon.co.jp/" target = "_blank">
document.getElementById('button').addEventListener('click',bookSearch,false)
