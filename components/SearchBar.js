import React, { Component } from 'react'
import Typeahead from './Typeahead'
import FavoritesMenu from './FavoritesMenu'

import PropTypes from 'prop-types'

export default class SearchBar extends Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(city) {
		const { onClick, onSelect } = this.props

		onSelect(city)

		setTimeout(onClick, 0)
	}

	render() {
		const {
			onClick,
			cities,
			onSelect,
			selectedCity,
			favorites,
			onChange,
			inputText
		} = this.props
		let self = this
		let favoritesList = favorites.map((city) => {
			return (
				<li key={city.id}>
					<a href="#" onClick={() => self.handleClick(city)}>
						{city.name}
					</a>
				</li>
			)
		})

		return (
			<div className="search input-group">
				<FavoritesMenu
					favoritesList={favoritesList}
					selectedCity={selectedCity}
				/>

				<Typeahead
					cities={cities}
					onSelect={(city) => onSelect(city)}
					onChange={onChange}
					inputText={inputText}
				/>

				<span className="input-group-btn">
					<button
						className="btn btn-default"
						type="button"
						onClick={() => onClick()}
					>
						Search
					</button>
				</span>
			</div>
		)
	}
}

SearchBar.propTypes = {
	cities: PropTypes.array,
	favorites: PropTypes.array,
	selectedCity: PropTypes.object,
	onClick: PropTypes.func,
	onSelect: PropTypes.func,
	onChange: PropTypes.func,
	inputText: PropTypes.string
}
