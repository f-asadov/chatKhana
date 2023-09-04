import { useMutation } from '@apollo/client';
import React from 'react';
import { CREATE_THEME } from '../../apollo/chat_queries';
import './Modal.css';

const Modal = (props: any) => {
  const [createTheme,{loading,data,error}] = useMutation(CREATE_THEME)
  const [themeName, setThemeName] = React.useState('');
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);

  const handleThemeNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setThemeName(event.target.value);
  };

  const handleTagSelection = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleCreateTheme = () => {
    createTheme({
      variables:{
        themeName,
        themeTags:selectedTags

      }
    })
    props.onClose(); // Закрываем модальное окно после создания темы
  };


  return (
    <div className="modalBackdrop" onClick={props.onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <h2>Create a New Theme</h2>

        <div className="input-container">
          <input value={themeName} type="text" name="text" className="input" placeholder="Theme title" onChange={handleThemeNameChange} />
          <div className="highlight"></div>
        </div>

        <div className='modalContentTags'>
          <label>Tags:  </label>
          <button className={selectedTags.includes('#tag1') ? 'active' : ''} onClick={() => handleTagSelection('#tag1')}>#tag1</button>
          <button className={selectedTags.includes('#tag2') ? 'active' : ''} onClick={() => handleTagSelection('#tag2')}>#tag2</button>
          <button className={selectedTags.includes('#tag3') ? 'active' : ''} onClick={() => handleTagSelection('#tag3')}>#tag3</button>
          <button className={selectedTags.includes('#tag4') ? 'active' : ''} onClick={() => handleTagSelection('#tag4')}>#tag1</button>
          <button className={selectedTags.includes('#tag5') ? 'active' : ''} onClick={() => handleTagSelection('#tag5')}>#tag2</button>
          <button className={selectedTags.includes('#tag6') ? 'active' : ''} onClick={() => handleTagSelection('#tag6')}>#tag3</button>
          <button className={selectedTags.includes('#tag7') ? 'active' : ''} onClick={() => handleTagSelection('#tag7')}>#tag1</button>
          <button className={selectedTags.includes('#tag8') ? 'active' : ''} onClick={() => handleTagSelection('#tag8')}>#tag2</button>
          <button className={selectedTags.includes('#tag9') ? 'active' : ''} onClick={() => handleTagSelection('#tag9')}>#tag3</button>
          <button className={selectedTags.includes('#tag10') ? 'active' : ''} onClick={() => handleTagSelection('#tag10')}>#tag1</button>
          <button className={selectedTags.includes('#tag11') ? 'active' : ''} onClick={() => handleTagSelection('#tag11')}>#tag2</button>
          <button className={selectedTags.includes('#tag12') ? 'active' : ''} onClick={() => handleTagSelection('#tag12')}>#tag3</button>
          <button className={selectedTags.includes('#tag13') ? 'active' : ''} onClick={() => handleTagSelection('#tag13')}>#tag1</button>
          <button className={selectedTags.includes('#tag14') ? 'active' : ''} onClick={() => handleTagSelection('#tag14')}>#tag2</button>
          <button className={selectedTags.includes('#tag15') ? 'active' : ''} onClick={() => handleTagSelection('#tag15')}>#tag3</button>
          <button className={selectedTags.includes('#tag16') ? 'active' : ''} onClick={() => handleTagSelection('#tag16')}>#tag1</button>
          <button className={selectedTags.includes('#tag17') ? 'active' : ''} onClick={() => handleTagSelection('#tag17')}>#tag2</button>
          <button className={selectedTags.includes('#tag18') ? 'active' : ''} onClick={() => handleTagSelection('#tag18')}>#tag3</button>
          <button className={selectedTags.includes('#tag19') ? 'active' : ''} onClick={() => handleTagSelection('#tag19')}>#tag1</button>

        </div>
        <button className="createThemeSubmit" onClick={handleCreateTheme}><span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg> Create
        </span></button>
        <div onClick={props.onClose} className='modalContentCloseButton'></div>
      </div>
    </div>
  );
};

export default Modal;
