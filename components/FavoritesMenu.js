import React from 'react'

export default class FavoritesMenu extends React.Component {
    render() {
        const { selectedCity, favoritesList } = this.props
        return (
            <div className="input-group-btn">
                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {selectedCity ? selectedCity.name + ' ' : ' '}
                    <span className="caret"></span>
                </button>

                <ul className="dropdown-menu">
                    { favoritesList }
                    <li role="separator" className="divider"></li>
                    <li><a><img src="/img/Favorites-Add.svg" />Add city to favorites by clicking icon by near</a></li>
                </ul>
            </div>
        )
    }
}