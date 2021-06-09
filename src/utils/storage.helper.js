import { cipher, decipher } from "./encrypt";

function storeItem(key, item) {
  // try {
  // const myCipher = cipher("")

  var itemString = JSON.stringify(item);

  const encripted = cipher(itemString);

  localStorage.setItem(key, encripted);

  // } catch (e) {
  //   console.log(e)
  //   }
}

function getItem(key) {
  if (localStorage.getItem(key)) {
    //  try {
    const deciper = localStorage.getItem(key);

    const data = decipher(deciper);

    var parsed = JSON.parse(data);

    //  console.log(parsed);
    return parsed;
    // } catch (e) {
    // console.log(e)
    // }
  }

  return "";
}

export { getItem, storeItem };
