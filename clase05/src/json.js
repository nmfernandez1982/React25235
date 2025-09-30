//Json Simple

const persona={
    nombre:"Nicolas",
    edad:30,
    esEstudiante:false
}

console.log(persona);

const usuarios={
    usuarios:[
        {id:1,nombre:"Nicolas",activo:false},
        {id:2,nombre:"Julieta",activo:false},
        {id:3,nombre:"Valentina",activo:true}
    ]
}


console.log(usuarios);


const personaConDireccion={
    persona:{
        nombre:"Nicolas",
        edad:44,
        direccion:{
            ciudad:"Buenos Aires - Lanus",
            codigoPostal: 1843,
        },
    },
};


console.log("Nombre:",personaConDireccion.persona.nombre);
console.log("Codigo Postal:",personaConDireccion.persona.direccion.codigoPostal);



/*
GET ---> el servidor me va a devolver algo
POST --> le voy a pasar algo al servidor



*/