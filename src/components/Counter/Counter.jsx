import React, { useState } from "react"
import styled from "styled-components"

const CartContainer = styled.div`
	width: 30em;
	display: flex;
	flex-direction: column;
	padding: 0em 2em 2em 2em;
	box-shadow: -5px 8px 20px 5px rgba(0, 0, 0, 0.116);
	border-radius: 8px;
	align-items: center;
`
const ButtonContainer = styled.div`
	width: 30%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	button {
		background-color: #4caf50;
		border: none;
		font-weight: bold;
		color: white;
		padding: 0.7em 1.4em;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
	}
`

export default function CartItem(props) {
	const [quantity, setQuantity] = useState(1)
	const { product } = props
	const { price, name } = product
	const total = price * quantity

	function HandleMinus() {
		if (quantity > 0) {
			setQuantity(quantity - 1)
		}
	}

	function HandlePlus() {
		setQuantity(quantity + 1)
	}
	return (
		<CartContainer>
			<h2>{name}</h2>
			<p>Prix/u : {price}€</p>
			<p>Quantité : {quantity}</p>
			<p>Prix Total : {total}€</p>
			<ButtonContainer>
				<button onClick={HandleMinus}>-</button>
				<button onClick={HandlePlus}> +</button>
			</ButtonContainer>
		</CartContainer>
	)
}
