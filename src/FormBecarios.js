import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './FormBecarios.css';
import URI from "./URI";
import axios from 'axios';
const FormBecarios = (props) => {
console.log(props);
	const { handleSubmit, register } = useForm({
		nombre: '',
		nomina: '',
		correo: '',
		nombreAlumno1: '',
		matricula1: '',
		nombreAlumno2: '',
		matricula2: '',
		nombreAlumno3: '',
		matricula3: '',
		nombreAlumno4: '',
		matricula4: '',
		nombreAlumno5: '',
		matricula5: '',
		nombreAlumno6: '',
		matricula6: '',
		nombreAlumno7: '',
		matricula7: '',
		nombreAlumno8: '',
		matricula8: '',
		comentarios: '',
	});

	const onSubmit = (data) => {
		console.log(data);
		return axios
			.post(`${URI.base}${URI.routes.postPreference}`, { ...data })
			.then((resp) => {
				props.history.push('/confirmacion');
				console.log(resp);
		
			})
			.catch((err) => (err.response ? err.response.data.message : err.message));
	};

	const onError = (errors) => console.error(errors);
	const elements = [
		['Alumno 1', 'Matricula 1', 'alumno1', 'matricula1'],
		['Alumno 2', 'Matricula 2', 'alumno2', 'matricula2'],
		['Alumno 3', 'Matricula 3', 'alumno3', 'matricula3'],
		['Alumno 4', 'Matricula 4', 'alumno4', 'matricula4'],
		['Alumno 5', 'Matricula 5', 'alumno5', 'matricula5'],
		['Alumno 6', 'Matricula 6', 'alumno6', 'matricula6'],
		['Alumno 7', 'Matricula 7', 'alumno7', 'matricula7'],
		['Alumno 8', 'Matricula 8', 'alumno8', 'matricula8'],
	];
	const items = [];

	for (const [index, value] of elements.entries()) {
		items.push(
			<Row>
				<Col>
					<Form.Control
						key={index}
						name={value[2]}
						className="inputgg"
						placeholder={value[0]}
						ref={register()}
					/>
				</Col>
				<Col>
					<Form.Control
						key={index}
						name={value[3]}
						className="inputgg"
						placeholder={value[1]}
						ref={register()}
					/>
				</Col>
			</Row>
		);
	}
	return (
		<div>
			<div className="titleServ">
				<h3>SERVICIO BECARIO</h3>
			</div>
			<div className="container ">
				<Form onSubmit={handleSubmit(onSubmit, onError)}>
					<h5 className="titleColab">Información del colaborador</h5>

					<Form.Group as={Row} controlId="validationCustom01">
						<Form.Label column sm="1" className="lbl" controlId="nameForm">
							<b>Nombre</b>
						</Form.Label>
						<Col sm="11">
							{' '}
							<Form.Control
								required
								name="nombre"
								className="input inputgg"
								type="text"
								ref={register({ required: 'Esto es obligatorio' })}
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row} controlId="asuntoForm" controlId="validationCustom02">
						<Form.Label column sm="1" className="lbl">
							<b>Nomina</b>
						</Form.Label>
						<Col sm="11">
							<Form.Control
								required
								name="nomina"
								className="input inputgg"
								type="text"
								ref={register({ required: 'Esto es obligatorio' })}
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row} controlId="emailForm">
						<Form.Label column sm="1" className="lbl">
							<b>Correo</b>
						</Form.Label>
						<Col sm="11">
							<Form.Control
								required
								name="correo"
								className="input inputgg"
								type="email"
								ref={register({ required: 'Esto es obligatorio' })}
							/>
						</Col>
					</Form.Group>
					<h5 className="titleAlumnos">
						Ingresar nombre y matricula de los alumnos que prefiera para servicio becario
					</h5>
					{items}
					<Form.Group controlId="exampleForm.ControlTextarea1">
						<h5 className="titleAlumnos">Comentarios Adicionales</h5>
						<Form.Control as="textarea" className="inputgg" name="comentarios" rows={3} />
					</Form.Group>
					<div className="btnDivEnviar">
						<Button variant="secondary" className="btnEnviar" type="submit">
							Enviar
						</Button>
					</div>
				</Form>
			</div>
		</div>
	);
};
export default FormBecarios;