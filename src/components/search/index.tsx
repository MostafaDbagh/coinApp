import { Isearch } from "../../interface";

export const Search = ({
    setSearch,
    setcounter,
    counter,
}: Isearch) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearch(value);
        setcounter(counter + 1);
    }
    return (
        <form className="row">
            <div className="col-md-6 mb-5">
                <input type="text" className="form-control" id="inputSearch" placeholder="Enter Symbol..." onChange={(e) => handleChange(e)} />
            </div>

        </form>
    )
}