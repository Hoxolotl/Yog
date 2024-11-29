async function(){
 
  function previewFile() {
    const content = document.getElementById("result")
    const file = document.getElementById("inputFile").files[0]
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        // this will then display a text file
        content.innerText = reader.result;
      },
      false,
    );

    if (file) {
      reader.readAsText(file);
    }
  }
	
  previewFile()
  
}