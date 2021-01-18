import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Fuse from 'fuse.js';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table';
import Loader from './components/Loader';
import URI from './URI';
function App() {
	const [maestros, setMaestros] = useState([]);
	const [query, setQuery] = useState('');
	const [results, setResults] = useState([]);
	const fuse = new Fuse(maestros, { keys: ['nombre', 'nomina', 'correo'] });

	useEffect(() => {
		const fetchMaestros = async () => {
			const { data } = await axios(`${URI.base}${URI.routes.getMaestros}`);
			const { maestros } = data;
			await setMaestros(maestros);
			console.log(maestros);
			setResults(maestros);
		};

		fetchMaestros();
	}, []);

	useEffect(() => {
		setResults(query ? fuse.search(query).map((x) => x.item) : maestros);
	}, [query]);

	const onSearch = ({ currentTarget }) => {
		setQuery(currentTarget.value);
	};

	return !maestros ? (
		<Loader />
	) : (
		<div className="App">
			<Container fluid style={{ marginTop: 20 }}>
				<Row>
					<Col md={{ span: 4, offset: 4 }}>
						<h1 className="display-4 font-weight-bold cotizaciones-dashboard">Maestros</h1>
					</Col>
				</Row>
				<Row>
					<Col md={6} style={{ marginTop: 50 }}>
						<Form>
							<Row>
								<Col md="auto">
									<h3 className="cotizaciones-dashboard">Buscar</h3>
								</Col>
								<Col md="5">
									<Form.Control type="text" value={query} onChange={onSearch}></Form.Control>
								</Col>
							</Row>
						</Form>
					</Col>
				</Row>

				<Table striped bordered hover responsive style={{ marginTop: 10 }}>
					<thead>
						<tr>
							<th className="thc">Nombre</th>
							<th className="thc">Nomina</th>
							<th className="thc">Correo</th>
                            <th className="thc">Alumnos</th>
                            <th className="thc">Matricula</th>
                            <th className="thc">Comentarios</th>
						</tr>
                        </thead>
						{results.map((maestro) => (
                            <tbody><tr>
								<td>{maestro.nombre}</td>
								<td>{maestro.nomina}</td>
								<td>{maestro.correo}</td>
								<td>
									<tr>{maestro.alumnos.alumno1}</tr>
                                    <tr>{maestro.alumnos.alumno2}</tr>
                                    <tr>{maestro.alumnos.alumno3}</tr>
                                    <tr>{maestro.alumnos.alumno4}</tr>
                                    <tr>{maestro.alumnos.alumno5}</tr>
                                    <tr>{maestro.alumnos.alumno6}</tr>
                                    <tr>{maestro.alumnos.alumno7}</tr>
                                    <tr>{maestro.alumnos.alumno8}</tr>
								</td>
                                <td>
                                <tr>{maestro.alumnos.matricula1}</tr>
                                    <tr>{maestro.alumnos.matricula2}</tr>
                                    <tr>{maestro.alumnos.matricula3}</tr>
                                    <tr>{maestro.alumnos.matricula4}</tr>
                                    <tr>{maestro.alumnos.matricula5}</tr>
                                    <tr>{maestro.alumnos.matricula6}</tr>
                                    <tr>{maestro.alumnos.matricula7}</tr>
                                    <tr>{maestro.alumnos.matricula8}</tr>

								</td>
                                <td>
                                    {maestro.comentarios}
                                </td>
							</tr></tbody>
							
						))}
				</Table>
			</Container>
		</div>
	);
}

export default App;
