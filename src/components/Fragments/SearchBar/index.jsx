import React from 'react'
import Input from '../../Elements/Input'
import { useSearchContext } from '../../../context/SearchContext'

const SearchBar = () => {
    const {searchContext, setSearchContext} = useSearchContext()

    const handleSearch = value => {
        setSearchContext(value)
        console.log(searchContext)
    }

    return (
        <div>
            <Input type="text" name="search" placeholder="Cari Disini..." onInputChange={handleSearch} style={'w-full text-lg text-slate-600 font-semibold border border-[3px] border-slate-600 rounded-md px-2 py-1 '}/>
        </div>
    )
}

export default SearchBar