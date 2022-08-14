import React from "react";
import Card from "./components/Card/Card";
import "./Grid.css";

type GridProps = {};

export default function Grid(props: GridProps) {
	const grid = [];

	return (
		<div className="grid">
			{[...Array(10)].map((x, i) => (
				<Card key={i} />
			))}
		</div>
	);
}
