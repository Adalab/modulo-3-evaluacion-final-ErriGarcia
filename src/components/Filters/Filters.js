import FilterName from './FilterName'
import FilterHouse from './FilterHouse'
import FilterGender from './FilterGender'
import '../../styles/components/Filters/Filters.scss'

const Filters = ({handleInputName, nameFilter, handleSelectHouse, houseFilter, handleInputGender, genderFilter, handleReset}) => {

    const handleSubmit = (ev) => {
        ev.preventDefault()
    }

    return (
        <section className='section-search'>
            <form className='section-search-form' onSubmit={handleSubmit}>

                <FilterName 
                    handleInputName={handleInputName}
                    nameFilter={nameFilter}>
                </FilterName>

                <FilterHouse
                    handleSelectHouse={handleSelectHouse}
                    houseFilter={houseFilter}>
                </FilterHouse>

                <FilterGender
                    handleInputGender={handleInputGender}
                    genderFilter={genderFilter}>
                </FilterGender>

                <button className='reset-button' onClick={handleReset}>Reset</button>
            </form>
        </section>
    )
}

export default Filters