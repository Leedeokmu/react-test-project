import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import useAxios from './useAxios'

const App = () => {
    const {loading, data, error, refetch} = useAxios({url: 'https://yts.lt/api/v2/list_movies.json'})
    return (
        <div className='App'>
            <h1>{data && data.status}</h1>
            <h1>{loading && 'Loading'}</h1>
            <button onClick={refetch}>refetch it!</button>

        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
