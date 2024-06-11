let obj = JSON.parse($response.body);

// 填入会员数据 loginname参数即可共享会员
// obj.loginname = "";

obj.time = "2222222";
obj.svip_endtime = "2222222";
obj.is_vip = "1";
obj.first_vip = "1";
obj.vip_endtime = "22222222"
obj.vip_day = "2222222"

$done({ body: JSON.stringify(obj) });
