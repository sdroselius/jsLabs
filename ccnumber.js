var validateCcNumberString = function(cc) {
  if (typeof cc === "string") {
    cc = cc.replace(/\D/g, ''); // Strip non-numerals
  }
  var cardType = false;
  if (cc.length === 15 &&
    (cc.startsWith('34') || cc.startsWith('35'))) {
    cardType = "AmEx";
  } else if ((cc.length >= 13 && cc.length <= 16) &&
    cc.startsWith(4)) {
    cardType = "Visa";
  } else if ((cc.length >= 15 && cc.length <= 19) &&
    (
      cc.startsWith('51') ||
      cc.startsWith('52') ||
      cc.startsWith('53') ||
      cc.startsWith('54') ||
      cc.startsWith('55')
    )) {
    cardType = "MasterCard";
  } else if (cc.length === 16) {
    if (cc.startsWith('6011') ||
      c.startsWith('65')) {
      cardType = "Discover";
    } else {
      var firstThree = cc.substr(0, 3);
      if (firstThree >= 644 && firstThree <= 649) {
        cardType = "Discover";
      } else {
        firstSix = cc.substr(0, 6);
        if (firstSix >= 622126 && firstSix <= 622925) {
          cardType = "Discover"
        }
      }
    }
  }
  return cardType;
}


var input = [
  '4539487559016689',
  '4274091993506237',
  '4539140313096709',
  '4556953578885915',
  '4532304120822908',
  '5316316132380104',
  '5519775949779912',
  '5320733042221034',
  '5503981921308393',
  '555737103440856',
  '6011370992726027',
  '6011621909266584',
  '6011389226675784',
  '6011058017197585',
  '6011136834235760',
  '373041936306193',
  '342061437538019',
  '349341146069891',
  '348098979128472',
  '342932118515957',
  'NotANumber',
  '004234123123123',
  '42',
  60111234,
  '12983721309u5'
];

input.forEach(function(value, index, array) {
  console.log(value + ": " + validateCcNumberString(value));
});
