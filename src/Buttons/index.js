const Buttons = ({tasks, hideTasksDone}) =>{
    if (!tasks.length) {
        return null
    }
    return (
    <div className="buttons">
          <button className="buttons__button">
        {hideTasksDone ? "Pokaż" : "Ukryj"} ukończone
    </button>
    <button 
        className = "buttons__button " disabled={tasks.every(({ done }) => done)}
        
    >
        Ukończ wszystkie
    </button>
        </div>
    )
    }

export default Buttons;