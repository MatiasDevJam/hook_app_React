import React from 'react';
import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Prueba en <HomeScreen />', () => {

    const user = {
        name: 'Matias',
        email: 'mail@mail.com'
    }

    const wrapper = mount( 
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen />
        </UserContext.Provider>
    );

    test('debe mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
    })
    
    
})

