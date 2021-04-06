export default function findMatches(q, cb) {
    let matches, substrRegex

    matches = []

    substrRegex = new RegExp(q, 'i')

    $.each(this.props.cities, function(i, str) {
        if (substrRegex.test(str.name)) {
            matches.push(str)
        }
    })
    cb(matches)
}