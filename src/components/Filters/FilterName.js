import '../../styles/components/Filters/FilterName.scss'

const FilterName = ({handleInputName, nameFilter}) => {
    const handleInput = (ev) => {
        handleInputName(ev.target.value)
    }
    return (
        <fieldset className='section-search-form-fieldset-name'>
            <legend className='section-search-form-fieldset-name-legend'>
                Busca por personaje:
            </legend>
            <label htmlFor='name' className='section-search-form-fieldset-name-label'>
                <input 
                type='text' 
                id='name' 
                name='name'
                placeholder='ej: Harry Potter'
                value={nameFilter}
                onChange={handleInput}
                className='section-search-form-fieldset-name-label-input'>
                </input>
                <button type="submit" disabled>Search</button>
            </label>
        </fieldset>
    )
}

export default FilterName