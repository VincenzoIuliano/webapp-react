import { useState } from "react"
import axios from "axios"

const initialFormData = {
    name: '',
    text: '',
    vote: 1
}

function FormReview ({ id }) {
    
    const [formData, setFormData] = useState(initialFormData)

    function onFormChange(e) {
        const {value , name} = e.target
        console.log(value, name);

        const newFormData = {
            ...formData
        }
        newFormData[name] = value

        setFormData({
            ...formData,
            [name]: value
        })
    }

    function storeReview(e) {
        e.preventDefault()
        console.log('Review salvata');
        
        axios.post(`http://localhost:3000/api/movies/${id}/reviews`, formData)
        .then(res => {
            console.log(res);   
        }).catch((err) => {
            console.error(err)
        })
    }
    
    return <>
     <form onSubmit={storeReview} className="container mb-3">
          <div className="m-2">
            <label for="name">Nome</label>
            <input
              type="text"
              class="form-control"
              name="name"
              id="name"
              placeholder="Inserisci il tuo nome"
              value={formData.name}
              onChange={onFormChange}
            ></input>
          </div>
          <div className="m-2">
            <label for="Testo">Testo della recensione</label>
            <input
              type="text"
              class="form-control"
              name="text"
              placeholder="Inserisci qui il testo della tua recensione"
              id="text"
              value={formData.text}
              onChange={onFormChange}
            />
          </div>
          <div className="m-2">
            <label for="Voto">Voto della tua recensione: </label>
            <select id="vote" name="vote" value={formData.vote} onChange={onFormChange}>
              <option defaultValue="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div>
            <button type="submit" className="rounded p-2 m-2">Invia la tua recensione!</button>
          </div>
        </form>
    </>
}

export default FormReview