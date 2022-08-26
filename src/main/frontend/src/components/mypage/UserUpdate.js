import {useState} from "react";
import "../../css/userupdate.css";

function UserUpdate() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className="container">
            <div className="bloc-tabs">
                <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>나의정보 수정</div>
                <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>회원 탈퇴</div>
                {/* <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>Tab 1</div> */}
            </div>


            {/* CONTENT 부분 */}
            <div className="content-tabs">
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                    <h2>첫번째 내용입니다</h2>
                    {/* <hr></hr> */}
                    <p>hello</p>
                    <p>hello</p>
                    
                </div>

                <div className={toggleState === 2 ? "content active-content" : "content"}>
                    <h2>두번째 내용입니다</h2>
                    {/* <hr></hr> */}
                    <p>world</p>
                </div>

                <div className={toggleState === 3 ? "content active-content" : "content"}>
                    <h2>세번째 내용입니다</h2>
                    {/* <hr></hr> */}
                    <p>t</p>
                </div>

            </div>

        </div>
    )
}

export default UserUpdate;