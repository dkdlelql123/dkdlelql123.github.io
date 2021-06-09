import React from 'react';

function pageHd() {
    return (
        <>
            <header>
                <div>logo</div>
                <div>모바일메뉴</div>
                <nav>
                    <ul>
                        <li><Link to="/">홈</Link></li>
                        <li><Link to="/">메뉴1</Link></li>
                        <li><Link to="/">메뉴2</Link></li>
                        <li><Link to="/">메뉴3</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default pageHd;