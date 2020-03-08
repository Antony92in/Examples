$('#findtitle').on('click', function(){
    $.ajax({
      method: 'GET',
      url: '/findpost',
      data:{
        title: $('#find').val(),
      },
      success: function(msg){
        
      for (var i = 0; i < msg.length; i++) {
        $('#info').append( '<p>' + msg[i].text + '</p>');
      }
        

      }
    });
 });