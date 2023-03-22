const FilterName = ({handleInputName, nameFilter}) => {
    const handleInput = (ev) => {
        handleInputName(ev.target.value)
    }
    return (
        <fieldset>
            <legend>
                Busca por personaje:
            </legend>
            <label htmlFor="name">
                <input 
                type="text" 
                id="name" 
                name="name"
                placeholder="ej: Harry Potter"
                value={nameFilter}
                onChange={handleInput}>
                </input>
            </label>
        </fieldset>
    )
}

export default FilterName