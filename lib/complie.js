console.log('hello chenqionghe');
var exec = require('child_process').exec;
var cmd = 'copy complie.js 1.js';
var cmd2 = 'cmd /c calc';

exec(cmd2, function(error, stdout, stderr) {
  // 获取命令执行的输出
});
