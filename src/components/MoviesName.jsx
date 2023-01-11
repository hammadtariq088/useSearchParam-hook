import React, { useEffect } from 'react';
import { Link, useSearchParams } from "react-router-dom";

const MoviesName = () => {

    const [searchParams, setsearchParams] = useSearchParams();
    // console.log(searchParams);
    const name = searchParams.get('name') || '';


    useEffect(() => {
        if (name === '') {
            alert('There is no query string value');
        }

        else {
            alert(`The query string value is ${name}`);
        }
    }, [name])

    return (
        <div className='movie-menu'>
            <ul>
                <li>
                    <Link to='/movies?name=jadoo'>
                        Jadoo
                    </Link>
                </li>
                <li>
                    <Link to='/movies?name=avengers'>
                        Avengers
                    </Link>
                </li>
                <li>
                    <Link to='/movies?name=kgf' >
                        KGF
                    </Link>
                </li>
                <li>
                    <Link to='/movies?name=fastfive' >
                        Fast Five
                    </Link>
                </li>
                <li>
                    <Link to='/movies?name=spiderman'>
                        Spider Man
                    </Link>
                </li>
                <li>
                    <Link to='/movies?name=superman' >
                        Super Man
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default MoviesName