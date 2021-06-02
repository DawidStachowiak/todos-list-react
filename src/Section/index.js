import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
  <div className="main">
    <div className="main__section">
      <h2 className="main__sectionHeader">{title}</h2>
      {extraHeaderContent}
    </div>

    {body}
  </div>
);

export default Section;