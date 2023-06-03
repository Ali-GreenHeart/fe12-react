import { useState } from "react"

const Windows = ({ }) => {
    const [show, setShow] = useState(false)
    const [modalSize, setModalSize] = useState(0)
    return (
        <>
            <img
                onDoubleClick={() => setShow(true)}
                style={{ width: 100, }}
                src="/file.png"
                alt=""
            />

            {
                show && <div
                    className="modal_window"
                    style={{
                        inset: modalSize
                    }}
                >
                    <div className="button_container">
                        <button onClick={() => setModalSize(modalSize === 0 ? '10%' : 0)}>|_|</button>
                        <button onClick={() => setShow(false)}>x</button>
                    </div>
                    <h1>bu yeni penceredir</h1>
                </div>
            }
        </>
    )
}
export default Windows
