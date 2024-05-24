const cualquierCosa = {
    nombre: 'Juan',
    apellido: 'Rodriguez'
};

const MyComponent = () => {
    
        return (
            <>
            <h1> { cualquierCosa.apellido} { cualquierCosa.nombre } </h1>
            <h2>otra cosa</h2>
            </>
        )
}

export default MyComponent;
