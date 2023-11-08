import React, {useState} from 'react'
import Input from '../../Elements/Input'
import { useSearchContext } from '../../../context/SearchContext'

const SearchBar = () => {
    const {searchContext, setSearchContext} = useSearchContext()
    const [value, setValue] = useState('');


    const handleSearch = e => {
        const value = e.target.value;
        setValue(value);
        setSearchContext(value)
    }

    return (
        <>
            <Input type="text" name="search" placeholder="Search Note Here..." value={value} onValueChange={handleSearch} style={'md:order-1 flex-grow text-lg text-slate-600 font-semibold border border-[3px] border-slate-600 rounded-md px-2 py-1 '}/>
        </>
    )
}

export default SearchBar