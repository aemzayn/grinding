var encode = function (longUrl) {
  return Buffer.from(longUrl).toString("base64");
};

var decode = function (shortUrl) {
  return Buffer.from(shortUrl, "base64").toString("ascii");
};

let encoded = encode("https://google.com");
console.log(encoded);

let decoded = decode(encoded);
console.log(decoded);
