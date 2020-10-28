import Counter from "../Counter/Counter"
import styled from "styled-components"

const AppDiv = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`

export default function App() {
	const prod = {
		name: "Maëva",
		price: 17,
	}
	return (
		<AppDiv>
			<Counter product={prod} />
		</AppDiv>
	)
}
