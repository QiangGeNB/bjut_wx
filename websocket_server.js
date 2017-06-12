var mongoose = require('mongoose')
var Student = require('./db/models/student')


const WebSocketServer = require('websocket').server;
const http = require('http');

//创建一个Http server
var httpServer = http.createServer(function(request, response){
  console.log('[' + (new Date()) + '] Received request for ' + request.url);
  response.writeHead(404);
  response.end();
});

var wsServer = new WebSocketServer({
  httpServer: httpServer,
  autoAcceptConnections : true
});

//启动HTTP Server
httpServer.listen( 8090 ,function(){
  console.log('[' + (new Date()) + '] server is listen on port 8090');
});

//事件监听器
wsServer.on('connect' , function(connection) {
  connection.on('message' , function(message){
    message = JSON.parse(message.utf8Data);
    //console.log(">> message : " + message.name);
    //console.log(">>message.type : " + message.type);
    if(message.action === "add"){
      Student.create(message.data,function(err,student){
        if(err){
          console.log(err)
        }
        console.log(student)
        //student = JSON.stringify(student)
        //connection.sendUTF(persons)
      });
    }
    else{
      console.log("wrong");
    }

/*
    message = JSON.stringify(message);
    console.log("message connect form client: " + message);
     connection.sendUTF('[from sever]' + message);
*/
  });
  connection.on('close' , function(reasonCode, description) {
  console.log('[' + (new Date()) + '] Peer ' + connection.remoteAddress + ' disconnection'); 
  });
});


/*
Person.fetch(function(err,persons){
  if(err){
    console.log(err)
  }
  console.log(persons)
  temp = persons
  mongoose.connection.close();
})
console.log("i am ws")
*/
/*
var persone = new Person({ "_id" : "58e5a27238a8b65939cd4e80", "name" : "test", "__v" : 0 })
console.log(persone.name)
persone.remove()
*/
/*
var doc = {
        mongo_ID: "REY908123570968",
        business_ID: 2,
        business_name: "test",
        business_intro: "北京东单游泳馆环境温馨幽雅，游泳馆设有50米×25米的10泳道国际标准游泳池和10米×3米儿童冲浪水池及戏水智力滑梯。池水采用国际先进循环过滤和消毒系统，水质清澈，四季如春。水温常年保持在26-28度，室温28-30度。",
        business_avatar_src: "/images/eg/business_avatar/youyong.jpg",
        name: "woshixiaxiede",
        discount: [{
            discount_ID: "001",
            discount_title: "我是游泳馆的活动标题",
            discount_author:"chenlong",
            discount_images: ["/images/eg/discount_images/youyong/1.jpg", "/images/eg/discount_images/youyong/2.jpg", "/images/eg/discount_images/youyong/3.jpg", "/images/eg/discount_images/youyong/4.jpg"],
            publis_date: "2017-4-3",
            old_price: "80/小时",
            new_price: "40/小时",
            discount_info: ["工大学生单人xx元/小时", "双人套餐：xx元/人/小时", "四人套餐：xx元/人/小时"],
            discount_intro: "增强抵抗力游泳池的水温常为26度到28度，在水中浸泡散热快，耗能大。",
            discount_detail : "增强抵抗力游泳池的水温常为26度到28度，在水中浸泡散热快，耗能大。为尽快补充身体散发的热量，以供冷热平衡的需要，神经系统便快速做出反应，使人体新陈代谢加快，增强人体对外界的适应能力，抵御寒冷。经常参加冬泳的人，由于体温调节功能改善，就不容易伤风感冒，还能提高人体内分泌功能，使脑垂体功能增加，从而提高对疾病的抵抗力和免疫力。减肥游泳时身体直接浸泡在水中，水不仅阻力大，而且导热性能也非常好，散热速度快，因而消耗热量多。就好比一个刚煮熟的鸡蛋，在空气中的冷却速度，远远不如在冷水中快，实验证明：人在标准游泳池中游泳20分钟所消耗的热量，相当于同样速度在陆地上的1小时，在14度的水中停留1分钟所消耗的热量高达100千卡，相当于在同温度空气中1小时所散发的热量。另外游泳减肥法可避免下肢和腰部运动性损伤。在陆上进行运动减肥时，因肥胖者体重大，使身体（特别是下肢和腰部）要承受很大的重力负荷，使运动能力降低，易疲劳，使减肥运动的兴趣大打折扣，并可损伤下肢关节和骨骼。而游泳项目在水中进行，肥胖者的体重有相当一部分被水的浮力承受，下肢和腰部会因此轻松许多，关节和骨骼的损伤的危险性大大降低。 由此可见，在水中运动，会使许多想减肥的人，取得事半功倍的效果，所以，游泳是保持身材最有效的有氧运动之一。人在游泳时，通常会利用水的浮力俯卧或仰卧于水中，全身松弛而舒展，使身体得到全面、匀称、协调的发展，使肌肉线条流畅。在水中运动由于减少了地面运动时地对骨骼的冲击性，降低了骨骼的老损机率，使骨关节不易变形。水的阻力可增加人的运动强度，但这种强度，又有别于陆地上的器械训练，是很柔和的，训练的强度又很容易控制在有氧域之内，不会长出很生硬的肌肉块，可以使全身的线条流畅、优美。",
            view_count: 500,
            collection_count: 300
        }]
    }
Person_E = new Person(doc);

Person_E.save(function(error) {
    if(error) {
        console.log(error);
    } else {
        console.log('saved OK!');
    }
    // 关闭数据库链接
    mongoose.connection.close();
});
*/
