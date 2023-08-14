import React from "react";
import './ChatPreview.css'
import Modal from "../Modal/ModalChat";

const ChatPreview = () => {
    const [data, setData] = React.useState<any>([]);
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div className="chatWrapper">
            <div className="chatInner">
                <h1>Choose theme to talk! 😊</h1>
                <button className="createTheme" onClick={openModal}><span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg> Create new theme
  </span></button>
                <ul className="themeList">
                    <li>Football</li>
                    <li>Football</li>
                    <li>Football</li>
                    <li>Football</li>
                    <li>Football</li>
                    <li>Football</li>
                    <li>Football</li>
                    <li>Football</li>
                    <li>Football</li>
                    <li>Football</li>
                    <li>Football</li>
                    <li>Football</li>
                    <li>Football</li>
                    <li>Football</li>
                    <li>Football</li>
                    <li>Football</li>
                    <li>Football</li>
                    <li>Football</li>
                </ul>
            </div>
            {isModalOpen && <Modal onClose={closeModal} />}
        </div>
    );
}


export default ChatPreview