import React from 'react';
import { mount } from 'enzyme';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';

describe('Pruebas en <LoginScreen />', () => {

    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
    )

    test('debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe ejecutar el setUser con el argumento esperado', () => {
        
        wrapper.find('button').prop('onClick')();

        expect( setUser ).toHaveBeenCalledWith({
            id:1234,
            name: 'Matias'
        })

    })
    
    
    
})

