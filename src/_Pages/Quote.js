import React from 'react'
import Nav from '../Components/Nav'

const Quote = () => {
  return (
    <>
    <Nav/>
    <div className='qoute-container'>
        <div className='qoute-upper'>

        </div>
        <div className='qoute-lower'>
            <table className='qoute-table'>
                <thead>
                    <tr>
                        <th>Header 1</th>
                        <th>Header 2</th>
                        <th>Header 3</th>
                        <th>Header 4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Row 1, Col 1</td>
                        <td>Row 1, Col 2</td>
                        <td>Row 1, Col 3</td>
                        <td>Row 1, Col 4</td>
                    </tr>
                    <tr>
                        <td>Row 2, Col 1</td>
                        <td>Row 2, Col 2</td>
                        <td>Row 2, Col 3</td>
                        <td>Row 2, Col 4</td>
                    </tr>
                    <tr>
                        <td>Row 3, Col 1</td>
                        <td>Row 3, Col 2</td>
                        <td>Row 3, Col 3</td>
                        <td>Row 3, Col 4</td>
                    </tr>
                    <tr>
                        <td>Row 4, Col 1</td>
                        <td>Row 4, Col 2</td>
                        <td>Row 4, Col 3</td>
                        <td>Row 4, Col 4</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </>

  )
}

export default Quote