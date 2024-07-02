let formulario = document.getElementById("formulario")

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    let nome =  document.getElementById("nome").value
    let email =  document.getElementById("email").value

    var tbodyRef = document.getElementById('tabela').getElementsByTagName('tbody')[0];

    // Insert a row at the end of table
    var newRow = tbodyRef.insertRow();
    
    // Insert a cell at the end of the row
    var newCell = newRow.insertCell();
    
    // Append a text node to the cell
    var newText = document.createTextNode(nome);
    newCell.appendChild(newText);

    var new2 = newRow.insertCell();
    
    // Append a text node to the cell
    var next2 = document.createTextNode(email);
    new2.appendChild(next2);
})