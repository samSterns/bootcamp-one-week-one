
function renderVeggie(veggie) {
    
    const li = document.createElement('li');
    li.setAttribute('id', veggie.id);
    li.className = veggie.class;
    

    const div = document.createElement('div');
    div.textContent = veggie.name;
    li.appendChild(div);
    div.class = veggie.name;

    const img = document.createElement('img');
    img.id = 'image';
    img.src = '../images-veggie/' + veggie.image;
    img.alt = veggie.name + ' image';
    li.appendChild(img);

    const usd = '$' + veggie.price.toFixed(2);

    const priceDiv = document.createElement('div');
    priceDiv.textContent = usd;
    li.appendChild(priceDiv);
    
    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.value = veggie.code;
    li.appendChild(button);

    // li.appendChild(p);

    return li;
}
export default renderVeggie;