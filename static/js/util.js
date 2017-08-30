function time_format(timeData)
{
  var date = new  Date (timeData * 1000);
  Y = date.getFullYear() + '/' ;
  M = (date.getMonth()+ 1 < 10 ? '0' +(date.getMonth()+ 1 ) : date.getMonth()+ 1 ) + '/' ;
  D = date.getDate() + ' ' ;
  h = date.getHours() + ':' ;
  m = pad(date.getMinutes(),2);
  return (Y+M+D+h+m);
}

function get_token(toekn){
  return Cookies.get('classin_key');
}

function set_token(toekn){
  Cookies.set('classin_key', toekn, { expires: 180 });
}
