import {createElement} from'react';
// import './style.css';

export default function App() {
    return createElement('div', null, [
        createElement('h1', {id: 'title'},
        ['Todos']),
        createElement('input', {placeholder: 'Type'}),
        createElement('button', null, ['Add']),
        createElement('ul', null, [
            createElement('li', null, ['Item 1']),
            createElement('li', null, ['Item 2']),
            createElement('li', null, ['Item 3']),
        ]),
    ]);

}

console.log(App);