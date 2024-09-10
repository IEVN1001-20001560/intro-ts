
interface Alumno{
    nombre: string;
    edad:number;
    apellido:string;
    genero:string;
    calificacion?:number;
}

const alumno:Alumno={
    nombre: "Ceidy",
    apellido: "Matrinez",
    edad:22,
    genero:"F", 

}
console.table(alumno)

let mascotas=['perico','perro','gato']

console.log(mascotas[1]);
mascotas[1]='nuevo perro'
console.log(mascotas[1]);
mascotas.push('hamster');
console.log(mascotas);

let tem:(string|number)[]=[];

tem.push(11)
tem.push('Ceidy')

console.log(tem)