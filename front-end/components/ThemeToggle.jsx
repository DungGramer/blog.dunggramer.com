import { useState } from "react";

const ThemeToggle = ({ onChange }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    onChange();
    setChecked(!checked);
  }

  return (
    <div className="fj-toggle">
      <input
        id="toggle"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        hidden
      />
      <label htmlFor="toggle">
        {checked ? (<i className="fas fa-moon"></i>) : (<i className="fas fa-sun"></i>)}
      </label>
    </div>
  );
}
export default ThemeToggle;
