

$.ajax({

  url: 'https://www.reddit.com/r/AskReddit.json',
  method: 'GET',
  success: function(data){
    console.log(data)


    var redditArr = data.data.children
    _.each(redditArr, function(el, index){

  $('.h1').append(redditArr[index].data.title + '<br><br>')
            



})
},

});
//author
