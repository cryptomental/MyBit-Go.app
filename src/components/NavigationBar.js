/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon, Tooltip } from 'antd';
import { Link } from 'react-router-dom';

import '../styles/NavigationBar.css';
import { debug } from '../constants';

import 'antd/lib/menu/style';

import Button from 'antd/lib/button';
import 'antd/lib/button/style';

const exploreIcon = require('-!svg-react-loader!../images/search.svg');
const portfolioIcon = require('-!svg-react-loader!../images/chart-area.svg');
const transactionsIcon = require('-!svg-react-loader!../images/history.svg');
const listAssetIcon = require('-!svg-react-loader!../images/plus.svg');
const exchangeIcon = require('-!svg-react-loader!../images/mydax.svg');
const knowledgeBaseIcon = require('-!svg-react-loader!../images/question.svg');
const watchIcon = require('-!svg-react-loader!../images/watch.svg');

const NavigationBar = ({ clickHandler, currentPath }) => {
  const menuOptions = [
    {
      name: 'Explore',
      icon: exploreIcon,
      selectable: true,
      selected: currentPath.indexOf('/explore') !== -1,
      url: '/',
    }, {
      name: 'Portfolio',
      icon: portfolioIcon,
      selectable: true,
      selected: currentPath === '/portfolio',
      url: '/portfolio',
    }, {
      name: 'Transactions',
      icon: transactionsIcon,
      selectable: true,
      selected: currentPath === '/transaction-history',
      url: '/transaction-history',
    }, {
      name: 'WatchList',
      icon: watchIcon
    }, {
      name: 'List Asset',
      icon: listAssetIcon,
      disabled: true,
    }, {
      name: 'MYDAX',
      icon: exchangeIcon,
      disabled: true,
    }, {
      name: 'Knowledge Base',
      icon: knowledgeBaseIcon,
      selectable: true,
      selected: currentPath === '/help',
      url: '/help',
    },
  ];

  const navBarOptions = menuOptions.map(menuItem => (
    <Menu.Item key={menuItem.name} disabled={menuItem.disabled}>
      <Link to={menuItem.url || '/'} href={menuItem.url || '/'}>
        <Icon component={menuItem.icon}/>{menuItem.name}
      </Link>
    </Menu.Item>
  ));

  return (
    <Menu
      mode="horizontal"
      className="AppNavigationBar"
    >
      {navBarOptions}
    </Menu>
  );
};

NavigationBar.propTypes = {
  clickHandler: PropTypes.func,
  currentPath: PropTypes.string.isRequired,
};

NavigationBar.defaultProps = {
  clickHandler: debug,
};

export default NavigationBar;
