var fs = require('fs');
const colors = require('./colors.json')
// const prefix = 'ncscdevops-'

fs.writeFile('style-guide-colors.scss', '', function(){console.log('Cleared style guide color file')})

for (let i = 0; i < colors.length; i++) {
  console.log('Writing to file: ', colors[i].name + ': ' + colors[i].color['color-hex'].split(' ')[0])

  fs.appendFile('style-guide-colors.scss', colors[i].name + ': ' + colors[i].color['color-hex'].split(' ')[0] + ';\r\n', function (err) {
    if (err) throw err;
  });
}