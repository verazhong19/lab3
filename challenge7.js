function pyramid() {
  for (var i = 0; i < 4; i++) {
      var string = '';
      for (var q = 1; q < 4-i; q++) {
        string = string + ' ';
      }
      for (var n = 1; n <= (2*i+1); n++) {
        string = string + '#';
      }
       console.log(string);
    }
}
