import FilterName from './FilterName'
import FilterHouse from './FilterHouse'

const Filters = ({handleInputName, nameFilter, handleSelectHouse,houseFilter, handleReset}) => {

    const handleSubmit = (ev) => {
        ev.preventDefault()
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <FilterName 
                    handleInputName={handleInputName}
                    nameFilter={nameFilter}>
                </FilterName>
                <FilterHouse
                    handleSelectHouse={handleSelectHouse}
                    houseFilter={houseFilter}>
                </FilterHouse>
                <button
                onClick={handleReset}>
                    Reset</button>
            </form>
        </section>
    )
}

export default Filters