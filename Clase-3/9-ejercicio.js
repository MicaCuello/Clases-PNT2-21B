const obtenerUsuarios = async () => {
    
    // Crear un array de 10 promesas para obtener 10 usuarios en paralelo
    const promesas = Array(10).fill(fetch('https://randomuser.me/api/').then(res => res.json()));

    // Esperar a que todas las promesas se resuelvan
    const resultados = await Promise.all(promesas);

    // Separar los usuarios en arrays de hombres y mujeres
    let hombres = [];
    let mujeres = [];

    resultados.forEach(resultado => {
        const usuario = resultado.results[0];
        if (usuario.gender === 'male') {
            hombres.push(usuario);
        } else if (usuario.gender === 'female') {
            mujeres.push(usuario);
        }
    });

    return { hombres, mujeres };
};

async function funcionPadre() {
    try {
        const { hombres, mujeres } = await obtenerUsuarios();
        console.log(hombres, mujeres);
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
    }
}

// Llamada a la función principal
funcionPadre();

console.log("Node.js está funcionando");
