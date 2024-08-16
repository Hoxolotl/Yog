let scene = document.getElementById('scene')
function populateScene(){
    for (let i =0; i<5; i++){
        let x = -1
        let y = 1
        let z = -1 - i
        let box = '<a-box position="' + x + ' ' + y + ' ' + z + '" rotation="0 45 0" color="#0000FF"></a-box>'
        scene.innerHTML += box
    }
}
populateScene()