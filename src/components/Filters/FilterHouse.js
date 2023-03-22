import '../../styles/components/Filters/FilterHouse.scss'

const FilterHouse = ({handleSelectHouse, houseFilter}) => {
    const handleInput = (ev) => {
        handleSelectHouse(ev.target.value)
    }

    return (
        <fieldset className='section-search-form-fieldset-house'>
            <legend className='section-search-form-fieldset-house-legend'>
                Selecciona la casa:
            </legend>
            <label htmlFor='house'
            className='section-search-form-fieldset-house-label'>
                <select 
                name='house' 
                id='house'
                onChange={handleInput}
                value={houseFilter}
                className='section-search-form-fieldset-house-label-select'>
                    <option value='Elige la casa' disabled
                    className='section-search-form-fieldset-house-label-select-option'>
                        Elige la casa
                    </option>
                    <option value='gryffindor'>
                        Gryffindor
                    </option>
                    <option value='hufflepuff'
                    className='section-search-form-fieldset-house-label-select-option'>
                        Hufflepuff
                    </option>
                    <option value='ravenclaw'
                    className='section-search-form-fieldset-house-label-select-option'>
                        Ravenclaw
                    </option>
                    <option value='slytherin'
                    className='section-search-form-fieldset-house-label-select-option'>
                        Slytherin
                    </option>
                </select>
            </label>
        </fieldset>
    )
}

export default FilterHouse