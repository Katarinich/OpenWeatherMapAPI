export default function findMatches(q, cb) {
	let matches = []
	let substrRegex = new RegExp(q, 'i')

	this.props.cities.forEach((e) => {
		substrRegex.test(e.name) && matches.push(e)
	})

	cb(matches)
}
