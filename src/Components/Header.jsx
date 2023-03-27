import React from 'react';
import logo from '../images/Logo.svg'

const Header = () => {
    return (
        <div class="">
            <div class="navbar bg-base-100 bg-slate-900">
  <div class="flex-1 ">
    <img class="w-36" src={logo} alt="" />
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1 text-white">
      <li><a>Shop</a></li>
      <li><a>Order</a></li>
      <li><a>Inventory</a></li>
      <li><a>Login</a></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Header;