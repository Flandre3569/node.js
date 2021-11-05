const fs = require('fs');
const path = require('path');


// if (!fs.existsSync(dirname)) {
//   fs.mkdir(dirname, err => {
//     if (err) {
//       console.log(err);
//     }
//   });
// }

// fs.readdir(dirname, (err, files) => {
//   console.log(files);
// })
const dirname = './mx';

// 对mx文件夹下的所有文件进行遍历
function getFiles(dirname) {
  fs.readdir(dirname, { withFileTypes: true }, (err, files) => {
    for (let file of files) {
      if (file.isDirectory()) {
        const dirpath = path.resolve(dirname, file.name);
        getFiles(dirpath);
      } else {
        console.log(file.name);
      }
    }
  })
}

getFiles(dirname);


