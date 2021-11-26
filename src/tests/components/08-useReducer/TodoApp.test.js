import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos.test';



describe('Pruebas en <TodoApp>', () => {
    
    const wrapper = shallow(<TodoApp /> );

    Storage.prototype.setItem = jest.fn(()=>{});

    test('debe mostrar el componente correctamente', () => {
        
       expect( wrapper ).toMatchSnapshot();
    });

    test('debe agregar un TODO', () => {

        const wrapper = mount( <TodoApp /> );

        act( () => {
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[1] );
        });

        expect( wrapper.find('h1').text().trim() ).toBe('TodoApp (2) ');
        expect( localStorage.setItem ).toBeCalledTimes(2);
        
    })

    test('debe eliminar un TODO', () => {

        wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
        wrapper.find('TodoList').prop('handleDelete')( demoTodos[0].id );

        expect( wrapper.find('h1').text().trim() ).toBe('TodoApp (1)');
        
    })
    
    
    
})
