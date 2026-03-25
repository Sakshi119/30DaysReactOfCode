import React, { useState } from 'react'
import { data } from './data'
const SearchFilter = () => {
    console.log(data, "data")
    const [searchval, setSearchVal] = useState("")

    function handleSearchFilter(e) {
        setSearchVal(e.target.value)
    }

    const filteredSearchItems = data.filter(datas =>
        datas.name.toLowerCase().includes(searchval.toLowerCase()) ||
        datas.role.toLowerCase().includes(searchval.toLowerCase())
    )
    console.log(searchval)
    return (
        <div className="Container">
            <h2>Search Filter App</h2>

            <div className='search-input'>
                <label htmlfor="searchInput" hidden>Search</label>
                <input type='search' id='searchInput' value={searchval} onChange={handleSearchFilter} placeholder='Filter the users'></input>
            </div>
            <p>Showing {filteredSearchItems.length} of {data.length} users</p>
            <ul className='user-list'>
                {filteredSearchItems.map((datas) => {
                    return (
                        <li key={datas.id} className='userNamesCard'>{datas.name} <span>Role:{datas.role}</span></li>
                    )
                })}

                {filteredSearchItems.length === 0 && <p>"No users found"</p>}
            </ul>


        </div>
    )
}

export default SearchFilter