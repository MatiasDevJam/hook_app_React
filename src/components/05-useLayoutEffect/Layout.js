import React from 'react'
import { useLayoutEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import '../05-useLayoutEffect/layout.css';

export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    
    const { quote } = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setboxSize] = useState({})

    useLayoutEffect( () => {

        console.log( pTag.current.getBoundingClientRect() )

    }, [ quote ] )

    return (
        <>
            <h1>Breaking Bad</h1>
            <hr/>

            
            <blockquote className="blockquote text-right">
                <p 
                    className="mb-0"
                    ref={ pTag }
                > 
                    { quote } 
                </p>
            </blockquote>

            <pre>
                { JSON.stringify( boxSize, null, 3 ) }
            </pre>
                

            <button
                onClick={ increment } 
                className="btn btn-primary">
                Next Quote
            </button>
            
        </>
    )
}
