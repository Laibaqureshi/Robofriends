import React from 'react';

const SearchBox = ({ searchChange }) => {
    
    return (
        <div className='pa2'>
            <input
                className=' pa3 ba b--green bg-lightest-blue'
                type='Search'
                placeholder='search robos'
                onChange={searchChange} />
        </div>
    );
}
export default SearchBox;

// const a = {
//     name: "Laiba",
//     age: 20
// }

// console.log(a.name);
// console.log(a.age);

// const { name, age } = a;

// const name = a.name;
// const age = a.age;

// const {searchChange} = props;