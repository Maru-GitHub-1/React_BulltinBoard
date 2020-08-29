import React from 'react';
import '../SideMenu/SideMenu.css';

class SideMenu extends React.Component {

  render() {
    return (
      <aside className="menu">
        <ul className="menu-list">
          <li className="list-item">掲示板案内</li>
          <li className="list-item">プロフィール</li>
          <li className="list-item">ブックマーク</li>
          <li className="list-item">設定</li>
        </ul>
      </aside>
    )
  };
};

export default SideMenu;