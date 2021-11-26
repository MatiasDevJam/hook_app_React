import React from 'react';
import { shallow } from 'enzyme'
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";

describe('Prueba en <TodoAdd />', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow(
        <TodoAdd
            handleAddTodo={ handleAddTodo }
        />
    )

    test('debe mostrar el componente correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    })

    test('no debe llamar a handleAddTodo', () => {

        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({ preventDefault(){} });

        expect( handleAddTodo ).toHaveBeenCalledTimes(0);
        
    })

    test('debe llamar a handleAddTodo', () => {

        const value = 'Aprender React';
        wrapper.find('input').simulate('chamge', {
            target:{
                value,
                name: 'description'
            }
        })

        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({ preventDefault(){} });

        expect( handleAddTodo ).toHaveBeenCalledTimes(1);
        expect( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object) );
        expect( handleAddTodo ).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });

        expect( wrapper.find('input').prop('value') ).toBe('');
        
    })
    
    
    
})
