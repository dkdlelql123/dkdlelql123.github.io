import React from 'react';

function Index() {
    return (
        <>
            <div className="skills">
                <div>활용능력 Skills</div>
                <div className="flex-auto">
                    <div className="skillList">
                        <div className="dt">웹</div>
                        <div className="dd">HTML</div>
                        <div className="dd">CSS</div>
                        <div className="dd">JQUERY</div>
                    </div>
                    <div className="skillList">
                        <div className="dt">디자인</div>
                        <div className="dd">Photoshop</div>
                        <div className="dd">Figma</div>
                    </div>
                    <div className="skillList">
                        <div className="dt">함께하는</div>
                        <div className="dd">React</div>
                        <div className="dd">그누보드/영카드</div>
                    </div>
                    <div className="skillList">
                        <div className="dt">협업</div>
                        <div className="dd">FLOW</div>
                        <div className="dd">GitHub0</div>
                    </div>
                </div>
            </div>
        </>
    );
}



export default Index;