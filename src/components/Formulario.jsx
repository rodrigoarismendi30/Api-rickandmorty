import React from 'react';
import {UseFormulario} from '../hooks/UseFormulario'
import Swal from 'sweetalert2'

const Formulario = ({setNombrePersonajes}) => {

    const [inputs, handleChange, reset] = UseFormulario({

        nombre : '',
    })

    const {nombre} = inputs

    const handleSubmit = e => {
        e.preventDefault()

        if(!nombre.trim()){
            return Swal.fire({
                title: 'Error!',
                text: 'Escribir Nombre',
                icon: 'error',
            }) 
            
        }

        setNombrePersonajes(nombre.trim().toLowerCase())

        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder='Ingrese personaje'
                    className='form-control mb-2'
                    value={nombre}
                    onChange={handleChange} 
                    name = "nombre"
                />
                <button type='submit' className='btn btn-dark'>
                    buscar
                </button>
            </form>
        </div>
    );
};

export default Formulario;