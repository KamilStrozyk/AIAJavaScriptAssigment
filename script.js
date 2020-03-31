function addItem() {
    let table = document.getElementById('table').getElementsByTagName('tbody')[0];
    let row = table.insertRow();
    let itemsCount = document.getElementById('itemsContainer').rows.length - 1;

    let authorCell = row.insertCell(0)
    let titleCell = row.insertCell(1);
    let buttonsCell = row.insertCell(2);

    authorCell.appendChild(createElement('input', 'text'));
    titleCell.appendChild(createElement('input', 'text'));
    buttonsCell.appendChild(createElement('button', 'button', 'Save', 'saveItem(' + itemsCount + ')'));
    buttonsCell.appendChild(createElement('button', 'button', 'Remove', 'removeItem(' + itemsCount + ')'));
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

function editItem(id) {
    let row = document.getElementById('itemsContainer').rows[id];
    let authorValue = row.cells[0].childNodes[0].data;
    let titleValue = row.cells[1].childNodes[0].data;
    for (let i = 0; i < 3; i++) {
        row.deleteCell(0);
    }

    let newAuthorCell = row.insertCell(0)
    let newTitleCell = row.insertCell(1);
    let newButtonsCell = row.insertCell(2);

    newAuthorCell.appendChild(createElement('input', 'text', null, null, authorValue));
    newTitleCell.appendChild(createElement('input', 'text', null, null, value = titleValue));
    newButtonsCell.appendChild(createElement('button', 'button', 'Save', 'saveItem(' + id + ')'));
    newButtonsCell.appendChild(createElement('button', 'button', 'Remove', 'removeItem(' + id + ')'));
}

function removeItem(id) {
    document.getElementById('itemsContainer').rows[id].remove();
    for (let i = 0; i < document.getElementById('itemsContainer').rows.length; i++) {
        let row = document.getElementById('itemsContainer').rows[i];
        row.cells[2].innerHTML = row.cells[2].innerHTML.replace(/saveItem\D\d\D/, 'saveItem(' + i + ')');
        row.cells[2].innerHTML = row.cells[2].innerHTML.replace(/removeItem\D\d\D/, 'removeItem(' + i + ')');
        row.cells[2].innerHTML = row.cells[2].innerHTML.replace(/editItem\D\d\D/, 'editItem(' + i + ')');
    }
}

function createElement(elementType, elementConcreteType, innerHTML, attribute, value) {
    let element = document.createElement(elementType);
    element.type = elementConcreteType;
    if (innerHTML != null && innerHTML != undefined) element.innerHTML = innerHTML;
    if (attribute != null && attribute != undefined) element.setAttribute('onclick', attribute);
    if (value != null && value != undefined) element.value = value;
    return element;
}