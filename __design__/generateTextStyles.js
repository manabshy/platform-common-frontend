var fs = require('fs');
const styles = require('./text-styles.json').styles
// const prefix = 'ncscdevops-'

fs.writeFile('style-guide-text-styles.scss', '', function(){console.log('Cleared text styles file')})

for (let i = 0; i < styles.length; i++) {
  let parts = styles[i].name.split(" ").length
  let viewportName = styles[i].name.split(" ")[0].replace(/\//g, '-').toLowerCase().slice(0, -1)
  let output = styles[i].name.split(" ")[parts-1].replace('.', '$') + '-' + viewportName + ': ' + styles[i].size / 10 + 'rem'
  console.log('Writing to file: ', output)

  fs.appendFile('style-guide-text-styles.scss', output + ';\r\n', function (err) {
    if (err) throw err;
  });
}