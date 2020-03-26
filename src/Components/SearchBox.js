import React from 'react'

const SearchBox = ({searchfield, searchChange}) => {
    console.log('searchbox')
    return (
        <div >
            <input 
            aria-label='Search Robots'
            className='pa3 ba b--green bg-lightest-blue'
             type='search' 
             placeholder='Search Robots'
             onChange={searchChange} />
        </div>
    )
}

export default SearchBox