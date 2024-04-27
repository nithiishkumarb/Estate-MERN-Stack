import {useState} from 'react'
import "./search.scss"
import search from "../../assets/search.png"
const types=["buy","rent"]
const Search = () => {
    const [query,setQuery]=useState({
        type:"buy",
        location:"",
        minPrice:0,
        maxPrice:0,
    })
    const switchType=(val)=>{
        setQuery(prev=>({...prev, type : val}))
    }
    return (
    <div className='search'>
        <div className='type'>
        {types.map((type,i) =>(
            <button className={query.type=== type ? "active" : ""} 
            key={i} 
            onClick={()=>switchType(type)}>
            {type}</button>
        ))
        }
        </div>
        <form>
            <input type="input" name='location' placeholder='City Location'></input>
            <input type="number" name='minPrice' min={0} max={100000} placeholder='Min Price'></input>
            <input type="number" name='maxPrice' min={0} max={100000} placeholder='Max Price'></input>
            <button>
                <img src={search} alt="search"></img>
            </button>
        </form>
    </div>
    )
}

export default Search