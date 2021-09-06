import React from "react";
import PropTypes from "prop-types";
import { supportedLanguages } from "../../config/i18n";
import i18next from "../../services/i18n";

class LanguageSwitcher extends React.Component {
  render() {
    const { onChange, onClickLanguage } = this.props;

    return (
      <div className="select-container">
        <select
          className="select"
          type="button"
          id="dropdown-basic"
          value={i18next.language}
          onChange={(e) => onChange(e.target.value)}
          onClick={onClickLanguage}
        >
          {supportedLanguages.map((lang) => (
            <option
              className="select-item"
              key={lang.code}
              value={lang.code}
              id={lang.code}
            >
              {lang.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

LanguageSwitcher.propTypes = {
  onChange: PropTypes.func,
  onClickLanguage: PropTypes.func,
};
export default LanguageSwitcher;
