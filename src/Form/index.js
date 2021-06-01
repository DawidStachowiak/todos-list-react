import "./style.css";

const Form = () => (
<div className="main__form">


<form className="form ">
  <input className="form__input js-new__task" placeholder="Co jest do zrobienia?" required />
  <button className="form__button ">Dodaj zadanie</button>
</form>
</div>

)

export default Form;