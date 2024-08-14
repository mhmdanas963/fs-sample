// *** Using Promise *** //

// const fs = require("fs/promises");

// (async () => {
//   try {
//     await fs.copyFile("text.txt", "file-PromiseAPI.txt");
//   } catch (e) {
//     console.log(e);
//   }
// })();

// *** Using callback *** //

// const fs = require("fs");

// fs.copyFile("text2.txt", "file-CallbackAPI.txt", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// *** Using synchronous API *** //

const fs = require("fs");

fs.copyFileSync("text2.txt", "file-SynchronousAPI.txt");
