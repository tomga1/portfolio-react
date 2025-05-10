export const Usuario = (props) => {


console.log(props);
return <div>
    <h1>Nombre: {props.nombre}</h1>
    <p>Edad: {props.edad}</p>
    <p>Nacionalidad : {props.nacionalidad}</p>
</div>
;
} 