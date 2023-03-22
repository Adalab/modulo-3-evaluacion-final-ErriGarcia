import '../../styles/components/Filters/FilterGender.scss'

const FilterGender = ({handleInputGender, genderFilter}) => {
    const handleInput = (ev) => {
        handleInputGender(ev.target.value)
    }

    return (
        <fieldset className='section-search-form-fieldset-gender'>
            <legend className='section-search-form-fieldset-gender-legend'>
                Busca por género:
            </legend>
            <input 
            type='radio'
            id='all'
            name='gender'
            value='all'
            checked={genderFilter === 'all'}
            onChange={handleInput}
            className='section-search-form-fieldset-gender-radio'>
            </input>
            <label className='section-search-form-fieldset-gender-label'>Todos</label>
            
            <input 
            type='radio'
            id='male'
            name='gender'
            value='male'
            checked={genderFilter === 'male'}
            onChange={handleInput}
            className='section-search-form-fieldset-gender-radio'>
            </input>
            <label
            className='section-search-form-fieldset-gender-label'>
                Hombre
            </label>
            
            <input 
            type='radio'
            id='female'
            name='gender'
            value='female'
            checked={genderFilter === 'female'}
            onChange={handleInput}
            className='section-search-form-fieldset-gender-radio'>
            </input>
            <label
            className='section-search-form-fieldset-gender-label'>
                Mujer
            </label>
        </fieldset>
    )
}

export default FilterGender