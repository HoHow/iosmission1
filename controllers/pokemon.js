var multiparty = require('multiparty');
var url        = require('url');
//mission1,mission3
exports.kindofPokemon = function (req,res){
  var id = '';

  if(req.query.id  !== undefined){
     id = req.query.id;
  }else{
     id = req.body.id;
  }
  console.log(id);
    if(id !== "" && id !==undefined){
      switch(id){
        case "1":
          return getdata(res,"1",1,"妙蛙種子","Bulbasaur",6.9)
          break;
        case "2":
          return getdata(res,"1",2,"妙蛙草","Ivysaur",13.1);
          break;
        case "3":
          return getdata(res,"1",3,"妙蛙花","Venusaur",100.1);
          break;

        case "4":
          return getdata(res,"1",4,"小火龍","Charmander",8.5);
          break;

        case "5":
          
          return getdata(res,"1",5,"火恐龍","Charmeleon",19.1);
          break;

        default:
          return geterror(res,"-1","找不到該神奇寶貝");
      }
    }else{
      return geterror(res,"-2","請輸入ID"); 
    }
}











//mission4 getformdata
function getformdata(res,status,id,chinese,english,first,second,weight){
  return res.json({status:status,id:id,chinese_name:chinese,property:{first:first,second:second},english_name:english,weight:weight});
}
//mission1,2,3 getdata
function getdata(res,status,id,chinese,english,weight,url){

  if(url === ''){
  return res.json({status:status,id:id,chinese_name:chinese,english_name:english,weight:weight});
  }else{

  return res.json({status:status,id:id,chinese_name:chinese,english_name:english,weight:weight,url:url});
  }
}
//all error message
function geterror(res,status,error){
  return res.status(400).json({status:status,error:error});
}