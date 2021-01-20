import React,{useState} from 'react'
import {useGlobalContext} from './Context'

export default function Filter() {
    const {setFilter} = useGlobalContext();

    const [localSearch,setLocalSearch] = useState('');
    return (
        <div className="filter">
            <form onSubmit={(e)=> {
                e.preventDefault();
                setFilter(localSearch);
                setLocalSearch('');
            }}>
                <input value={localSearch} type="text"
                    onChange={(e)=> setLocalSearch(e.target.value)} name="search" className='search'/>

                <button type="submit">搜索</button>    
            </form>

            <button onClick={()=> setFilter('all')}>全部</button>
            <button onClick={()=> setFilter('collection')}>已收藏</button>
        </div>
    )
}
