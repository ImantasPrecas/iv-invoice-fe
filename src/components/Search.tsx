import { Input } from "./ui/input"


const Search = () => {
    return (
        <div>
            <Input 
            type="search"
            placeholder="Search..."
            className="w-[100px] md:w-[150px] lg:w-[300px]"
            />
        </div>
    )
}

export default Search