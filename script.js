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

function createElement(elementType, elementConcreteType, innerHTML, attribute) {
    let element = document.createElement(elementType);
    element.type = elementConcreteType;
    if (innerHTML != null && innerHTML != undefined) element.innerHTML = innerHTML;
    if (attribute != null && attribute != undefined) element.setAttribute('onclick', attribute);
    return element;
}