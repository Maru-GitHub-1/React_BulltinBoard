import React from 'react';
import {NavLink} from 'react-router-dom';
import ChannelModel from '../../models/Channels';
import '../SideMenu/SideMenu.css';

class SideMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuDataList: []
    }
  }

  componentDidMount() {
    this.created();
  }

  async created () {
    const channels = await ChannelModel.fetch();

    this.setState({
      menuDataList: channels
    });
  }

  render() {
    const menuItems = this.state.menuDataList.map(item => {
      return(
      <li key={item.id} className="list-item">
        <NavLink activeClassName="is-active" exact to={item.id} className="menu-list-title-link"
        >
          {item.name}
        </NavLink>
      </li>
      )
    });
    
    return (
      <aside className="menu">
        <ul className="menu-list">
          {menuItems}
        </ul>
      </aside>
    );
  };
};

export default SideMenu;