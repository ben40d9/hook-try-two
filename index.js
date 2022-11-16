//test
import fetch from "node-fetch";

const item = fetch("https://59c130.myshopify.com/admin", {
  headers: {
    "Content-Type": "application.json",
  },
});
console.log(item);
