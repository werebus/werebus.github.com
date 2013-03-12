/* Author: Matt Moretti

*/

$('.badge').hover(
  function(){$(this).animate({'padding-bottom': '20px'}, {queue: false})}, 
  function(){$(this).animate({'padding-bottom': '0px'}, {queue: false})}
)

var d = new Date();
var ds = [d.getFullYear(), d.getMonth() + 1].join('');
$('#gravatar').attr('src', 'http://www.gravatar.com/avatar/9a82bcc06a07030f05996fdb76a2f2e5?s=120&v=' + ds);




















