
/**
 * Created by Administrator on 14-6-16.
 */

$(function(){

//    $("#ipt1").bind("mouseover mouseout",function(){$("#xs").html(function(index,value){return value + "5-";} );});

    $("#ipt1").bind({
        mouseover:function(){
            $("#xs").html(function(index,value){
            return value + "over-";
        })},
        mouseout:function(){$("#xs").html(function(index,value){
            return value + "out++"
        })},
        keypress:function(){$("#xs").html(function(index,value){
            return value + "out++"
        })}
    });

    $("#squ").mouseover(
        function(){
            $("#xs").html(function(index,value){
                return value + "over-";
            })}
    ).mouseout(
        function(){$("#xs").html(function(index,value){
            return value + "out++"
        })}
        );


})
