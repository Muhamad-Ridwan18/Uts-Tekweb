import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./footer.css"

const Footer = () => {
	return (
		<section className="ezy__copyright4 light text-center text-lg-start pt-5 pb-5">
			<Container>
				<Row className="text-center">
					<Col xs={12}>
						<p className="mb-0">Copyright all rights reserved</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Footer;