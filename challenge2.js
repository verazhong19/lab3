function consonantCount(string)
{
  var consonantList = 'qwrtypsdfghjklzxcvbnmQWRTYPSDFGHJKLZXCVBNM';
  var count = 0;

  for(var x = 0; x < string.length ; x++)
  {
    if (consonantList.indexOf(string[x]) !== -1)
    {
      count += 1;
    }

  }
  return count;
}
