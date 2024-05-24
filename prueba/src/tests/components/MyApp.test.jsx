import MyApp from "../../components/MyApp";
import { render } from "@testing-library/react"

describe('Pruebas en <MyApp/>', () => {
    test('', () => {

        render(<MyApp title={'Hello world'} texto={'I´m the parrafo'}/>)
        const { container } = render(<MyApp title={'Hello world'} texto={'I´m the parrafo'}/>)
        console.log(container)

        
    })
})