 const textarea = document.getElementById("textArea");
  const count = document.getElementById("count");

  textarea.addEventListener("keydown", rose);


  function rose()
  {
 count.innerText = textarea.value.length;
  }