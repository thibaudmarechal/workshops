import { connect } from 'react-redux' // 1
import React, { Component } from 'react' // 1
class UnconnectedSearch extends Component { // 2
    handleQuery = evt => { // 3
        this.props.dispatch({ type: 'query', q: evt.target.value }) // 3
    } // 3
    handleMinimumPrice = evt => { // 4
        let price = parseInt(evt.target.value) // 4
        this.props.dispatch({ type: 'minimum-price', price: price }) // 4
    } // 4
    handleMaximumPrice = evt => { // 5
        let price = parseInt(evt.target.value) // 5
        this.props.dispatch({ type: 'maximum-price', price: price }) // 5
    } // 3
    render = () => { // 3
        return ( // 3
            <div> {/* 3 */}
                <div> {/* 3 */}
                    Search query {/* 3 */}
                    <input type="text" onChange={this.handleQuery} value={this.props.query} /> {/* 3 */}
                </div> {/* 3 */}
                <div> {/* 4 */}
                    Minimum price {/* 4 */}
                    <input type="text" onChange={this.handleMinimumPrice} value={this.props.minPrice} /> {/* 4 */}
                </div> {/* 4 */}
                <div> {/* 5 */}
                    Maximum price {/* 5 */}
                    <input type="text" onChange={this.handleMaximumPrice} value={this.props.maxPrice} /> {/* 5 */}
                </div> {/* 5 */}
            </div>) // 3
    } // 3
} // 2
let mapStateToProps = st => { // 2
    return { // 2
        query: st.searchQuery, // 2
        minPrice: st.min, // 2
        maxPrice: st.max // 2
    } // 2
} // 2
let Search = connect(mapStateToProps)(UnconnectedSearch) // 2
export default Search // 2
/* meta
    ({
        text: {
            1: `We need to import connect so that we can use the data from the store in our component and also
            dispatch actions to the reducer so that the state of the store can get updated.
            We need to install the react-redux library`,
            2: `The UnconnectedSearch component will receive props from connect. The props it will receive are query, minPrice and maxPrice.
        The value of the props depends on the data in the store. Every time the store gets modified, the mapState to props function gets called
        and it returns an object. Every property of that object becomes a prop of the UnconnectedSearch node in the virtual DOM. To find out
        the value of the prop, we need at the value of that property, which depends on that state of the store. The st parameter in
        the mapStateToProps function represents the state of the store. There is a second reason we connect
        this component: connect will provide a dispatch prop to the component that can be used to dispatch actions.
        `,
            3: `We have a text input element. Everytime it is modified, the handleQuery method is called. The value
            of the text input is equal to this.props.query. The value attribute is optional at the moment, but would be
            necessary if we wanted to add a button to clear the input box. Every time the onChange handler is called,
            an action is dispatched to the reducer which will update the state of the store. The type of the action is
            \`query\` and, by looking at the reducer function store.js, we see that the searchQuery property of the state will get updated. `,
            4: `Similarly, modifying the minimum price input box dispatches an action to the reducer which modifies the min property of the state of the store`,
            5: `Modifying the maximum price input box dispatches an action to the reducer which modifies the max property of the state of the store`,




        }
    })

    */