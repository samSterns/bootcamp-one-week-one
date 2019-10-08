// export default (fruit) => {
//     const fruitElement = document.createElement('li');
//     fruitElement.className = 'tree-fruit';
//     fruitElement.title = fruit.description; 
//     return fruitElement
// };
// const someHeader = document.createElement('h3');
// someHeader.textContent = fruit.name;

// fruitElement.appendChild('someHeader')

// const fruitElement = renderFruit(apple);
// const stringHtmlOfFruitElement = dom.outerHTML

// assert.equal(html, expected)

// const someImage = 
// document.createElement('img')
// someImage.src = fruit.someImage
// someImage.alt = fruit.name + 'imagge';
// fruitElement.appendChild(someImage);


// const myButton = 
//     document.createElement('button'); 
//     myButton.value = fruit.id;
//     pTag.appendChild(myButton);


function renderVeggie(veggie) {
    const li = document.createElement('li');
    li.className = veggie.category;
    li.title = veggie.description;

    const h3 = document.createElement('h3');
    h3.textContent = veggie.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../images-veggie/' + veggie.image;
    img.alt = veggie.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + veggie.price.toFixed(2);
    // const usd = veggie.price.toLocaleString('en-US', { 
    //     style: 'currency', 
    //     currency: 'USD' 
    // });
    p.textContent = usd;
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = veggie.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderVeggie;