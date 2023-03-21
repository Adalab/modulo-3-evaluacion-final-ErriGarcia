import FilterName from './FilterName'
import FilterHouse from './FilterHouse'

const Filters = ({handleInputName, nameFilter, handleSelectHouse,houseFilter}) => {
    return (
        <section>
            <form>
                <FilterName 
                    handleInputName={handleInputName}
                    nameFilter={nameFilter}>
                </FilterName>
                <FilterHouse
                    handleSelectHouse={handleSelectHouse}
                    houseFilter={houseFilter}>
                </FilterHouse>
            </form>
        </section>
    )
}

export default Filters