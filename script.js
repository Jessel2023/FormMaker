const insert = () => {
    let type = document.querySelector('#type').value 
    let label = document.querySelector('#label').value 

    switch(type){
        case 'text': appendText(label)
            break
        case 'button': appendButton(label)
            break
        case 'radio': appendRadio(label);
            break
        case 'checkbox': appendCheckbox(label);
            break;
    }
}

const appendText = (label = "No label") => {
    let el = document.createElement('input')

    el.setAttribute('type', 'text')
    el.setAttribute('class', 'form-control mt-2 col-auto')
    el.setAttribute('placeholder', label)

    document.querySelector('#display').append(el)
    
}
const appendButton = (label) => {
    let el = document.createElement('button')

    el.setAttribute('type', 'text')
    el.setAttribute('class', 'btn btn-outline-success mt-2', label) 
    el.textContent = label

    document.querySelector('#display').append(el)
    

}
const appendRadio =(label = "no label") => {
    let el = document.createElement('INPUT')
    let elt = document.createElement('label')

    el.setAttribute('type', 'radio')
    el.setAttribute('name', 'radio-group')
    el.setAttribute('id', label)
    el.setAttribute('class', 'form-check-input')

    elt.setAttribute('for', label)
    elt.setAttribute('class', 'form-check-label')
    elt.textContent=label

    let container = document.createElement('div')
    container.setAttribute('class', 'form-check mt-2')
    container.append(el,elt)

    document.querySelector('#display').append(container)

}

const appendCheckbox = (label = "check") => {

    let el = document.createElement('INPUT')
    let elt = document.createElement('text')

    el.setAttribute('type', 'checkbox')
    el.setAttribute('class', 'form-check-input')

    elt.setAttribute('for', label)
    elt.setAttribute('class', 'form-check-label')
    elt.textContent=label

    let container = document.createElement('div')
    container.setAttribute('class', 'form-check mt-2')
    container.append(el,elt)

    document.querySelector('#display').append(container)

}


const removeElement =() => {
    const delElement = document.querySelector('#display > *:last-child');
    if (delElement) {
        delElement.remove();
    }

};