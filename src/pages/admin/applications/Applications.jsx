import React from 'react'
import Container from '../../../components/layouts/admin/Container'
import { Link } from 'react-router'

const Applications = () => {
  return (
    <Container>

      <h4>Arizalar</h4>

      <table className='table align-middle'>
        <thead>

          <tr>
            <th>#</th>
            <th>Ismi</th>
            <th>Kurs</th>
            <th>Tarif</th>
            <th>Boshqarish</th>
          </tr>

        </thead>
        <tbody>

          <tr>
            <td>1</td>
            <td>
              <span>Dilshod Mahmudov</span>
              <br />
              <span className='small text-secondary'>dilshod@gmail.com</span>
            </td>
            <td>Laravel</td>
            <td>
              <b>Pro-new</b>
              <br />
              <span className="text-success">
                25000
              </span> so'm
            </td>
            <td>
              <form className="d-flex gap-3">
                <Link to="/" className='text-secondary'>Chekini ko'rish</Link>
                <input type="date" className='btn btn-secondary py-0' />
                <button className="btn btn-sm btn-primary">Kursni ochish</button>
              </form>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <span>Sunnatilla Vahobjonov</span>
              <br />
              <span className='small text-secondary'>sunnatilla@gmail.com</span>
            </td>
            <td>Matematika</td>
            <td>
              <b>Pro</b>
              <br />
              <span className="text-success">
                300000
              </span> so'm
            </td>
            <td>
              <form className="d-flex gap-3">
                <Link to="/" className='text-secondary'>Chekini ko'rish</Link>
                <input type="date" className='btn btn-secondary py-0' />
                <button className="btn btn-sm btn-primary">Kursni ochish</button>
              </form>
            </td>
          </tr>

        </tbody>
      </table>
    </Container>
  )
}

export default Applications