var arr = [];

for (var i = 0; i < 3; i++) {
  arr[i] = [];
  for (var j = 0; j < 3; j++) {
    arr[i][j] = i + j;
    }
};

document.write( arr[0]+'<br>'+arr[1]+'<br>'+arr[2] );

/////////////////////////////////////


do {
  var color = prompt('Выберите цвет: Red, Blue, Green', '');
  if ( (color === 'Red') || (color === 'Blue') || (color === 'Green') ){
    break;
  }
}while( true );

do {
  var memory = prompt('Выберите обьем памяти: 8, 16, 32, 64', '');
  if ( (memory === '8') || (memory === '16') || (memory === '32' || memory === '64') ){
    break
  }
}while( true );

switch( memory ) {
  case '8': {
    alert ( '10UAH' )
    break;
  }
  case '16': {
    alert ( '50UAH' )
    break;
  }
  case '32': {
    alert ( '100UAH' )
    break;
  }
  case '64': {
    alert ( '150UAH' )
    break;
  }
  default: alert( 'this is not memory' )
} 

document.write( '<img src="/img'+color+'.png/>' );