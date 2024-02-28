function createObjectFromString(str) {
  var pairs = str.split("&");

  var obj = {};

  for (var i = 0; i < pairs.length; i++) {
    var keyValue = pairs[i].split("=");
    var key = keyValue[0];
    var value = keyValue[1].split("+").join(" ");

    // Decode URI components to handle special characters in the values
    key = decodeURIComponent(key);
    value = decodeURIComponent(value);

    obj[key] = value;
  }

  return obj;
}

module.exports = createObjectFromString;
