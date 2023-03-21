const FilterName = ({handleInputName, nameFilter}) => {
    const handleInput = (ev) => {
        handleInputName(ev.target.value)
    }
    return (
        <fieldset>
            <label htmlFor="name">
                Busca por personaje:
            </label>
            <input 
                type="text" 
                id="name" 
                name="name"
                placeholder="ej: Harry Potter"
                onChange={handleInput}
                value={nameFilter}
            >
            </input>
        </fieldset>
    )
}

export default FilterName