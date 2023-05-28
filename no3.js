//membuat output yg urut a-z dari input text

function urutHuruf(text) {
  let huruf = text.split("");
  let sortHuruf = huruf.sort();
  let sortText = sortHuruf.join("");

  return sortText;
}

console.log(urutHuruf("halo"));
console.log(urutHuruf("qwerty"));
console.log(urutHuruf("qwertygrrgjtrjtngadeef"));
