import React from 'react';
import './Modal.css';

const Modal = (props: any) => {
    const [themeName, setThemeName] = React.useState('');
    const [selectedTags, setSelectedTags] = React.useState<string[]>([]);

    const handleThemeNameChange = (event:any) => {
        setThemeName(event.target.value);
      };

      const handleTagSelection = (tag:string) => {
        if (selectedTags.includes(tag)) {
          setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
        } else {
          setSelectedTags([...selectedTags, tag]);
        }
      };

      const handleCreateTheme = () => {
        // Здесь вы можете выполнить действия при создании темы, например, отправить данные на сервер
        console.log('Theme Name:', themeName);
        console.log('Selected Tags:', selectedTags);
        props.onClose(); // Закрываем модальное окно после создания темы
      };


    return (
        <div className="modalBackdrop" onClick={props.onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <h2>Create a New Theme</h2>
        <div>
          <label>Theme Name:</label>
          <input type="text" value={themeName} onChange={handleThemeNameChange} />
        </div>
        <div>
          <label>Tags:</label>
          <button onClick={() => handleTagSelection('#tag1')}>#tag1</button>
          <button onClick={() => handleTagSelection('#tag2')}>#tag2</button>
          {/* Добавьте другие теги по аналогии */}
        </div>
        <button onClick={handleCreateTheme}>Create</button>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
    );
};

export default Modal;
