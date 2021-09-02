import React from "react";
import { Translation } from "react-i18next";
import PropTypes from "prop-types";
import { Dropdown } from "react-bootstrap";

export default class Dropdowns extends React.Component {
  render() {
    const { selectedCity, favoritesList } = this.props;
    return (
      <Translation>
        {(t) => (
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
        )}
      </Translation>
    );
  }
}

Dropdowns.propTypes = {
  selectedCity: PropTypes.object,
  favoritesList: PropTypes.array,
};
