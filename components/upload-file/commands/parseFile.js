async function(el, value) {
  console.log(el)
  console.log(value)

  let form = document.querySelector('form[data-js="convert"]')
  console.log(form)

  let output = document.getElementById("result")

  let file = document.getElementById("inputFile").files[0]

  console.log("got a file!")
  console.log(file)

/*
  function reader(file, callback) {
    const fr = new FileReader();
    fr.onload = () => callback(null, fr.result);
    fr.onerror = (err) => callback(err);
    fr.readAsText(file);
  }
  */
  
  const reader = new FileReader();

  function readfile(file){
    reader.onload = (evt) => {
      return evt.target.result;
      console.log(evt.target.result);
    };
    reader.readAsText(file);
  }

  console.log("file is loaded")  

  let fileContent = readfile(file)
  
  console.log("FileContent", fileContent) //undefined

  let yogData = JSON.parse(fileContent)

  let displayContent = "";

  console.log(Object.entries(yogData))

  for (const [key, value] of Object.entries(yogData)) {  
    console.log(`${key}: ${value}`);
    displayContent += "<span>" +  "Hello" + "</span>";
    console.log("ohay!")
  }

  console.log(displayContent)

  output.innerHTML = "hello!" 
  console.log("command sent")

  this.app.actions.displayFile(); //todo: refactoring
}