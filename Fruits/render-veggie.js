
function renderVeggie(veggie) {

    // const li = document.createElement('li');
    // li.className = veggie.category;
    // li.title = veggie.description;

    const div = document.createElement('div');
    div.textContent = veggie.name;
    li.appendChild(div);

    const img = document.createElement('img');
    img.src = '../images-veggie/' + veggie.image;
    img.alt = veggie.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + veggie.price.toFixed(2);
    
    p.textContent = usd;
    
    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.value = veggie.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}
export default renderVeggie;