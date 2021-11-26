import React from 'react'
import { mount } from 'enzyme'
import { UserContext } from '../../../components/09-useContext/UserContext'
import { AppRouter } from '../../../components/09-useContext/AppRouter'

describe('Prueba en <AppRouter />', () => {

    const user = {
        id: 1,
        user: 'Julieta'
    }

    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <AppRouter />
        </UserContext.Provider>
    )

    test('debe mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        
    })
    
    
})
