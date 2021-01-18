import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './FormBecarios.css';
import axios from 'axios';
const RegistroExitoso = (props) => {
	return (
		<div>
			<div className="container ">
				<div className="titleSuccess">
					<h3>Su registro ha sido enviado exitosamente</h3>
				</div>
			</div>
		</div>
	);
};
export default RegistroExitoso;
