const fs = require('fs-extra');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const buildDir = path.join(__dirname, 'build');

fs.copy(publicDir, buildDir, { overwrite: true }, (err) => {
  if (err) {
    console.error('Error copying public folder to build:', err);
  } else {
    console.log('Public folder copied to build successfully.');
  }
});