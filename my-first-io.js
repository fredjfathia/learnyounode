const fs = require('fs')
filePath=process.argv[2];
fileBeffer=fs.readFileSync(filePath);
to_string=fileBeffer.toString();
 lines=to_string.split("\n");
 console.log(lines.length-1);
