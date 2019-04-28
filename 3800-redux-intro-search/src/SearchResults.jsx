import { connect } from 'react-redux' // 1
import React, { Component } from 'react' // 1
import data from './data.js' // 1
class UnconnectedSearchResults extends Component { // 2
    render = () => { // 3
        let results = data.filter(item => { // 4
            return item.name.includes(this.props.query) // 4
        }) // 4
        return (<div> {/* 5 */}
            {results.map(r => { // 5
                return (<div>{r.name}</div>) // 5
            })} {/* 5 */}
        </div>) // 5
    } // 3
} // 2
let mapStateToProps = st => { // 2
    return { // 2
        query: st.searchQuery, // 2
    } // 2
} // 2
let SearchResults = connect(mapStateToProps)(UnconnectedSearchResults) // 2
export default SearchResults  // 2
/* meta
    ({
        text: {
            1: `We need to import the connect module so that our component can read data from the store.`,
            2: `In the virtual DOM, we see that the UnconnectedSearchResults nodes will receive
        a query prop from connect by looking at the mapStateToProps function. The st parameter
         of that function represents the state of the store. The value of that prop depends on the
          the searchQuery property of the state of the store.`,
            3: `This component has no state and no other methods than render`,
            4: `We only want items who name matches the search query so we use
            filter to select only those items. The query prop is populated by
            the mapStateToProps function below and it refers to the searchQuery property of the
            state of the store. We are currently no filtering by price. You'll need to
            do that in the exercises `,
            5: `Finally we display the items. We use map to convert the array of items to an array
            of react elements. Each item has a name property (see data.js)`

        }
    })
    */