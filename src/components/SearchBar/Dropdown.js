import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";

class Dropdowns extends React.Component {
  render() {
    const { selectedCity, favoritesList, t } = this.props;
    return (
      <Dropdown
        id="dropdown-basic-button"
        className="drop-down input-group-btn"
      >
        <Dropdown.Toggle
          className="drop-down_toggle"
          variant="outline-secondary"
          id="dropdown-basic"
        >
          {selectedCity ? `${selectedCity.name} ` : " "}
        </Dropdown.Toggle>

        <Dropdown.Menu className="drop-down_menu">
          {favoritesList}
          <Dropdown.Divider />
          <span>
            <img
              src={`${process.env.PUBLIC_URL}images/Favorites-Add.svg`}
              alt="drop-down-icon"
            />
            {t("DropdownText")}
          </span>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

Dropdowns.propTypes = {
  selectedCity: PropTypes.object,
  favoritesList: PropTypes.array,
  t: PropTypes.func,
};

export default withTranslation()(Dropdowns);
