import renderVeggie from '../render-veggie.js';
const test = QUnit.test;
QUnit.module('Render Veggie');

test('renders a veggie', assert => {
    const spinach = {
        id: 'spinach',
        class: 'veggie-box',
        name: 'Baby Spinach',
        image: 'spinach.png',
        description: 'Baby spinach image',
        category: 'leafy-greens',
        price: 1.00,
    };
    const expected = '<li id="spinach" class="veggie-box"><div>Baby Spinach</div><img id="image" src="../images-veggie/spinach.png" alt="Baby Spinach image"> <div>Price : $1.00</div> <button class="button">Add to Cart</button></li>';
    
    const dom = renderVeggie(spinach);
    const html = dom.outerHTML;
    
    assert.equal(html, expected);
});