import React, { useState } from 'react'
import { data } from './data'
const SearchFilter = () => {
    console.log(data, "data")
    const [searchval, setSearchVal] = useState("")
    const [selectedRole, setSelectedRole] = useState("")

    const roleData = [...new Set(data.map((datas) => datas.role))];

    console.log(roleData,"selectedRole")
    function handleSearchFilter(e) {
        setSearchVal(e.target.value)
    }

    function handleDropdownFilter(e) {
        setSelectedRole(e.target.value)
    }

    const filteredSearchItems = data.filter(datas => {
        const matchesSearch =
            datas.name.toLowerCase().includes(searchval.toLowerCase()) ||
            datas.role.toLowerCase().includes(searchval.toLowerCase());

        const matchesRole = selectedRole === "" || datas.role === selectedRole;

        return matchesSearch && matchesRole;
    }
    )

    return (
        <div className="Container">
            <h2>Search Filter App</h2>

            <div className='search-input'>
                <div className='searchbar'>
                    <label htmlFor="searchInput" hidden>Search</label>
                    <input type='search' id='searchInput' value={searchval} onChange={handleSearchFilter} placeholder='Filter the users'></input>
                </div>
                <div className='roleFilter'>
                    <label htmlFor='roleInput' hidden>Role Filter</label>
                    <select className='select' id='roleInput' value={selectedRole} onChange={handleDropdownFilter}>
                        <option value=''>All</option>
                        {roleData?.map((role, index) => {
                            return (
                                <option key={index} value={role}>{role}</option>
                            )
                        })}
                    </select>
                </div>
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