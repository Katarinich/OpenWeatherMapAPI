import React from "react";
import PropTypes from 'prop-types';
import { Translation } from "react-i18next";
import { supportedLanguages } from "../../config/i18n";
import { languageCodeOnly } from "../../services/i18n";

class LanguageSwitcher extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <Translation>
        {(t, { i18n }) => (
          <div className="select">
            <select
              value={languageCodeOnly(i18n.language)}
              onChange={(e) => onChange(e.target.value)}
            >
              {supportedLanguages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </Translation>
    );
  }
}

LanguageSwitcher.propTypes = {
  onChange: PropTypes.func,
};
export default LanguageSwitcher;
