**README.md**

## Tend Image Placeholder

A simple npm package to generate placeholder images for web design and development.

**Features**

* Generate placeholder images of specified width, height, and background color.
* Add optional text labels with customizable color and font size (basic support).
* Returns placeholder images as data URIs for easy embedding into `img` tags.
* Optionally save placeholder images as files.

**Installation**

```bash
npm install tend
```

**Usage**

```javascript
const tend = require('tend-image-placeholder');

tend.generatePlaceholder(300, 200, '#0099FF', 'white', 'Hello!')
  .then(dataUri => {
    const img = document.createElement('img');
    img.src = dataUri;
    document.body.appendChild(img);
  });
```

**Advanced Usage (File Saving Example)**

```javascript
// ... (add library for file system access - e.g., const fs = require('fs'))
tend.generatePlaceholder(500, 350, '#ccc')
  .then(imageBuffer => {
    fs.writeFile('placeholder.png', imageBuffer, (err) => {
      if (err) throw err; 
      console.log('Placeholder image saved as placeholder.png');
    });
  });
```


**Example Usage**

```javascript
const placeholderService = require('image-placeholder-service');

placeholderService.generatePlaceholder(300, 200, '#0099FF', 'white', 'Hello!')
  .then(dataUri => {
    const img = document.createElement('img');
    img.src = dataUri;
    document.body.appendChild(img);
  });
```

**Configuration**

The `generatePlaceholder` function accepts the following parameters:

* `width`: Image width (pixels)
* `height`: Image height (pixels)
* `backgroundColor`: Background color (hex code or color name)
* `textColor`: Text color (hex code or color name)
* `text`: Optional text to superimpose on the image


| Feature  | Description | Example | 
|---|---|---|
| **Dimensions** | Specify image width and height in pixels |  `generatePlaceholder(400, 250, ...)` |
| **Background Color** | Set background color using hex codes or common color names  | `generatePlaceholder(..., '#FF8C00', ...)` <br> `generatePlaceholder(..., 'lightblue', ...)` |
| **Text Overlay** | Optionally add text to the image | `generatePlaceholder(..., '#000', 'white', 'Sample Text')` |
| **Text Color** | Customize text color with hex codes or color names | `generatePlaceholder(..., '#fff', 'red', ...)` |
| **Output Format**  | Get image as a data URI (for direct embedding) or save as a file (.png, etc.) | See "Usage" sections in README |



**TODO Moved To Github Issues**


**Contributing**

Contributions are welcome! Feel free to open issues or submit pull requests.

**License**

MIT
