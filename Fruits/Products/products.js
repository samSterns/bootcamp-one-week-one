
import veggie from '../data/veggie.js';
import renderVeggie from './render-veggie.test.js';

const veggieList = document.getElementById('veggie-list');
for (let i = 0; i < veggie.length; i++) {
    const thisVeggie = veggie[i];
    const dom = renderVeggie(thisVeggie);
    veggieList.appendChild(dom);
}