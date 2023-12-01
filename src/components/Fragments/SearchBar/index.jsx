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
            <Input type="text" name="search" placeholder="Search Note Here..." value={value} onValueChange={handleSearch} style={'md:order-1 flex-grow text-lg font-semibold border border-[3px] rounded-md px-2 py-1 bg-white dark:bg-slate-600 text-slate-600 dark:text-white placeholder-slate-400 dark:placeholder-gray-100 border-slate-600 dark:border-gray-100 dark:select:border-gray-100'}/>
        </>
    )
}

export default SearchBar