/**
 * Greet should render the text hello and if a name is passed into the componet
 * It should render hello followed by the name
 */
import { render, screen } from '@testing-library/react';
import {Greet} from './greet';


test("Greet reders correctly", () => {
    render(<Greet />)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
    
})

// describe('Greet',()=>{

//     test("Greet reders correctly", () => {
//         render(<Greet />)
//         const textElement = screen.getByText(/hello/i)
//         expect(textElement).toBeInTheDocument()
        
//     })
    
//     test('Greet renders with a name', () => {
//         render(<Greet name='Vyshnav' />)
//         const nameElement = screen.getByText(/Hello Vyshnav/i)
//         expect(nameElement).toBeInTheDocument()
//     })
// })

