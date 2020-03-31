function addItem() {
    let table = document.getElementById('table').getElementsByTagName('tbody')[0];
    let row = table.insertRow();
    let itemsCount = document.getElementById('itemsContainer').rows.length - 1;

    let authorCell = row.insertCell(0)
    let titleCell = row.insertCell(1);
    let buttonsCell = row.insertCell(2);

    authorCell.appendChild(createElement('input', 'text', null, null));
    titleCell.appendChild(createElement('input', 'text', null, null));
    buttonsCell.appendChild(createElement('button', 'button', 'Save', 'saveItem(' + itemsCount + ')'));
    buttonsCell.appendChild(createElement('button', 'button', 'Remove', 'deleteItem(' + itemsCount + ')'));
}

function saveItem(id) {
    let row = document.getElementById('itemsContainer').rows[id];
    let authorValue = row.cells[0].childNodes[0].value;
    let titleValue = row.cells[1].childNodes[0].value;

    for (let i = 0; i < 3; i++) {
        row.deleteCell(0);
    }

    let newAuthorCell = row.insertCell(0)
    let newTitleCell = row.insertCell(1);
    let editButtonCell = row.insertCell(2);

    newAuthorCell.appendChild(document.createTextNode(authorValue));
    newTitleCell.appendChild(document.createTextNode(titleValue));
    editButtonCell.appendChild(createElement('button', 'button', 'Edit', 'editItem(' + id + ')'));
}

function createElement(elementType, elementConcreteType, innerHTML, attribute) {
    let element = document.createElement(elementType);
    element.type = elementConcreteType;
    if (innerHTML != null && innerHTML != undefined) element.innerHTML = innerHTML;
    if (attribute != null && attribute != undefined) element.setAttribute('onclick', attribute);
    return element;
}