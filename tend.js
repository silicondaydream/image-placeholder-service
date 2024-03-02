const Jimp = require('jimp');

function generatePlaceholder(width, height, backgroundColor, textColor, text) {
  return new Promise((resolve, reject) => {
    new Jimp(width, height, backgroundColor, (err, image) => {
      if (err) reject(err);

      // Add text (if provided)
      if (text) {
        Jimp.loadFont(Jimp.FONT_SANS_16_BLACK).then(font => {
          image.print(font, 10, 10, text);
        });
      }

      // Return as base64 data URI  
      image.getBase64(Jimp.MIME_PNG, (err, dataUri) => {
        if (err) reject(err);
        resolve(dataUri);
      });
    });
  });
}

module.exports = { generatePlaceholder };