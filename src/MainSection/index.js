import "./style.css";

const MainSection = ({title, body, extraHeaderContent})=>(

    <div class="main">
      <div class="main__section">
        <h2 class="main__sectionHeader">{title}</h2>
        {extraHeaderContent}
      </div>

      {body}
    </div>
    

)

export default MainSection;