import React, { Component } from 'react'

import './SearchBar.css'

export default class SearchBar extends Component {

    render() {
        console.log(this.props)
        const { onChange, onClick, searchTerm } = this.props

        return (
            <React.Fragment>
                <form className="search-bar">
                    <input 
                        className="search-input" 
                        placeholder="Search for a product e.g. strawberry"
                        type="text" 
                        value={searchTerm}
                        onChange={onChange}
                    />
                    <button 
                        className="search-btn" 
                        onClick={onClick}
                    >
                        Search
                    </button>
                </form>
            </React.Fragment>
        )
    }
};