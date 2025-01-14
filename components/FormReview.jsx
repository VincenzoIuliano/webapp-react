function FormReview () {
    return <>
     <form className="container mb-3">
          <div className="m-2">
            <label for="Nome">Nome</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Inserisci il tuo nome"
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
            />
          </div>
          <div className="m-2">
            <label for="Voto">Voto della tua recensione: </label>
            <select class="custom-select" id="vote">
              <option selected>Scegli il voto che vuoi dare alla tua recensione</option>
              <option value="1">1</option>
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