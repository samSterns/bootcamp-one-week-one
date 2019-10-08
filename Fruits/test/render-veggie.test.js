import renderVeggie from '../render-veggie.js';
const test = QUnit.test;
QUnit.module('Render Veggie');

test('renders a veggie', assert => {
    const spinach = {
        id: 'spinach',
        class: 'veggie-box',
        name: 'Baby Spinach',
        image: 'spinach.png',
        description: 'Listen to Popeye but eat it fresh',
        category: 'leafy-greens',
        price: 1.00,
    };
    const expected = '<li id="spinach" class="veggie-box"><div></div><div><img id="image" src="/images-veggie/spinach.png" alt="Listen to Popeye but eat it fresh"></div><div>Price : $0 </div><button class="button">Add to Cart</button></li>';
    
    const dom = renderVeggie(spinach);
    const html = dom.outerHTML;
    
    assert.equal(html, expected);
});