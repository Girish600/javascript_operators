function createTable(){
    const table= document.createElement('table');
    table.id= 'dynamicTable';

    const headerRow= document.createElement("tr");
    const headers=["Id", "Name", "Age", "class"];
    headers.forEach(headerText=>{
        const th= document.createElement("th");
        th.textContent=headerText;
        headerRow.appendChild(th);
    })
    table.appendChild(headerRow);

    document.getElementById("tableContainer").appendChild(table);
}

function addNewRow(){
    const table= document.getElementById('dynamicTable');
    const row= document.createElement("tr");

    const IdCell= document.createElement("td")
    IdCell.textContent= table.rows.length;

    const Namecell= document.createElement("td");
    Namecell.textContent= "";

    const AgeCell= document.createElement("td");
    AgeCell.textContent= "";

    const classCell= document.createElement("td");
    classCell.textContent="";

    row.appendChild(IdCell);
    row.appendChild(Namecell);
    row.appendChild(AgeCell);
    row.appendChild(classCell);

    table.appendChild(row);
}

createTable();