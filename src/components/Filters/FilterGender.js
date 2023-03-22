const FilterGender = ({handleInputGender, genderFilter}) => {
    const handleInput = (ev) => {
        handleInputGender(ev.target.value)
    }

    return (
        <fieldset>
            <legend>
                Busca por género
            </legend>
            <label>Todos</label>
            <input 
            type='radio'
            id='all'
            name='gender'
            value='all'
            checked={genderFilter === 'all'}
            onChange={handleInput}>
            </input>
            <label>Hombre</label>
            <input 
            type='radio'
            id='male'
            name='gender'
            value='male'
            checked={genderFilter === 'male'}
            onChange={handleInput}>
            </input>
            <label>Mujer</label>
            <input 
            type='radio'
            id='female'
            name='gender'
            value='female'
            hecked={genderFilter === 'female'}
            onChange={handleInput}>
            </input>
        </fieldset>
    )
}

export default FilterGender