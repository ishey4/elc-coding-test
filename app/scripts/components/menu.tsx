import * as React from 'react';
import { useState } from 'react';

import { SearchComponent } from './search/search';

export const Menu = ()=> {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    
    const toggleSearchContainer = (e) => {
        e.preventDefault();
        setIsSearchVisible(!isSearchVisible)
    }
        return (
            <header className="menu">
                <div className="menu-container">
                    <div className="menu-holder">
                        <h1>ELC</h1>
                        <nav>
                            <a href="#" className="nav-item">HOLIDAY</a>
                            <a href="#" className="nav-item">WHAT'S NEW</a>
                            <a href="#" className="nav-item">PRODUCTS</a>
                            <a href="#" className="nav-item">BESTSELLERS</a>
                            <a href="#" className="nav-item">GOODBYES</a>
                            <a href="#" className="nav-item">STORES</a>
                            <a href="#" className="nav-item">INSPIRATION</a>

                            <a href="#" onClick={toggleSearchContainer}>
                                <i className="material-icons search">search</i>
                            </a>
                        </nav>
                    </div>
                </div>
                <SearchComponent
                    visible={isSearchVisible}
                    toggleSearchContainer={toggleSearchContainer}
                />
            </header>
        );



}
