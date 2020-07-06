$(document).ready(function(){
  var sel = document.createElement("select");
  sel.name='languagejs';
  sel.placeholder="Languages...";
  sel.id="langaugeSelectJSID";
  sel.multiple="multiple";

  var opt1 = document.createElement("option");
  opt1.value="r";
  opt1.text='R';
  sel.add(opt1);

  var opt2 = document.createElement("option");
  opt2.value='python';
  opt2.text="Python";
  sel.add(opt2);

  document.querySelector(".book-header").prepend(sel);
});
