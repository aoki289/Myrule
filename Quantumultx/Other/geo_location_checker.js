// if ($response.statusCode != 200) {
//   $done(Null);
// }

// var body = $response.body;
// var obj = JSON.parse(body);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const place = ['「🇨🇳中国➩🇨🇳中国」','「🇨🇳中国➩🇯🇵日本」','「🇨🇳中国➩🇺🇸美国」','「🇨🇳中国➩🇰🇷韩国」','「🇨🇳中国➩🇹🇭泰国」','「🇨🇳中国➩🇸🇬新加坡」','「🇨🇳中国➩🇷🇺俄罗斯」','「🇨🇳中国➩🇮🇳印度」','「🇨🇳中国➩🇧🇷巴西」','「🇨🇳中国➩🇬🇧英国」','「🇨🇳中国➩🇫🇷法国」','「🇨🇳中国➩🇩🇪德国」','「🇨🇳中国➩🇮🇹意大利」','「🇨🇳中国➩🇪🇬埃及」','「🇨🇳中国➩🇨🇦加拿大」','「🇨🇳中国➩🇦🇺澳大利亚」','「🇨🇳中国➩🇦🇷阿根廷」']

var title = place[getRandomInt(place.length)];
var subtitle = '虫洞瞬移，随机地区';
var ip = '1.1.1.1';
var description = 'description';


$done({title, subtitle, ip, description});
