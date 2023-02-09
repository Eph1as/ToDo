const list = document.getElementById('UL')
     

//    function listeErweitern() {
//        const inhalt = document.getElementById('inputText').value
//        list.innerHTML += `<li> ${inhalt} </li>`
//    }


// ohne HTML tags vom user input
    function listeErweitern() {
        let inhalt = document.getElementById("inputText").value
        let liElement = document.createElement("li")
        liElement.className = `test`
        liElement.textContent = inhalt
        list.append(liElement)
    }
    