$(function() { 
 
    $.ajax({url:'http://pruebasphone.000webhostapp.com/calendario.php', 
            type:'POST',  
            dataType:'json', 
            error:function(jqXHR,text_status,strError){alert("Ha ocurrido un error en la conexión");}, 
            timeout:6000, 
            success:function(data){ 
               

                $("#result").html(""); 
               
                
                
                //Calendario
                for(var j=0; j<data.length;j++){ 
                    $("#calendarioimg").append('<h1 class="encabezado">'+data[j][0]+'</h1>'); 
                    for(var z=0; z<=data.length;z++){                       
                        $("#calendarioimg").append('<img class="seccion" src="'+data[j][z]+'">'); 
                    }
                }



                $('#calendarioimg').imagesLoaded( function() {
                    setTimeout(function () {
                        myScroll.refresh();
                    }, 100);
                   
                 });


            } 
        }
    );

}); 