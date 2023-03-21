import FilterName from './FilterName'
import FilterHouse from './FilterHouse'

const Filters = ({handleInputName, nameFilter}) => {
    return (
        <section>
            <form>
                <FilterName 
                    handleInputName={handleInputName}
                    nameFilter={nameFilter}
                >
                </FilterName>
                <FilterHouse></FilterHouse>
            </form>
        </section>
    )
}

export default Filters