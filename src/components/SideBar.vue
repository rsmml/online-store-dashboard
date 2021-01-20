<template>
  <div class="side-bar d-flex">
    <div class="dashboard-menu d-flex flex-column">
      <!-- Avatar -->
      <!-- eslint-disable-next-line -->
      <div class="dashboard-avatar d-flex justify-content-center align-items-center flex-column py-3">
        <img class="avatar-default" src="https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg" alt="">
        <p class="user-name"> Rodrigo Sommacal </p>
        <p class="user-role"> CEO </p>
      </div>
      <!-- Links -->
      <div class="dasboard-link menu-options flex-grow-1">
        <ul v-for="(link, index) in links" :key="index">
          <!-- eslint-disable-next-line -->
          <li class="d-flex justify-content-start align-items-center" :class="active == index ? 'active':''" @click.prevent="setActive(index), changeComponenet(link.title)">
            <p class="icon-svg mb-0 mr-4" :style="{ backgroundColor: link.color, padding: 8+px}">
              <font-awesome-icon :icon=link.icon />
            </p>
            {{link.title}}
          </li>
        </ul>
      </div>
      <!-- Log Out -->
      <!-- eslint-disable-next-line -->
      <div @click.prevent="signOut" class="w-100 dashboard-link menu-options" style="font-size: 14px;">
        <div class="d-flex justify-content-start align-items-center">
          <p class="icon-svg mb-0 mr-4" style="margin-right: 12px; padding: 8px; color: black" >
            <font-awesome-icon icon="sign-out-alt" />
          </p>
          <a class="log-out">Sign Out</a>
        </div>
      </div>
    </div>
    <div>
      <component :is="currentComp"></component>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import Categories from './Categories';
import Clients from './Clients';
import Dashboard from './Dashboard';
import Messages from './Messages';
import Orders from './Orders';
import Products from './Products';
import Profile from './Profile';

export default {
  name: 'SideBar',
  data() {
    return {
      active: 0,
      currentComp: Dashboard,
      links: [
        { icon: 'columns', title: 'Dashboard', color: '#7d5aff' },
        { icon: 'tag', title: 'Products', color: '#ff818a' },
        { icon: 'folder', title: 'Categories', color: '#ffc644' },
        { icon: 'tag', title: 'Orders', color: '#ff9151' },
        { icon: 'user', title: 'Clients', color: '#679b9b' },
        { icon: 'shopping-basket', title: 'Messages', color: '#edc988' },
        { icon: 'address-card', title: 'Profile', color: '#51acd3' },
      ],
    };
  },
  components: {
    Dashboard,
    Products,
    Categories,
    Orders,
    Clients,
    Messages,
    Profile,
  },
  methods: {
    setActive(index) {
      this.active = index;
    },
    changeComponenet(data) {
      this.currentComp = data;
    },
    setError(error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text;
    },
    signOut() {
      axios.delete('http://localhost:3000/signin')
        .then((response) => {
          delete localStorage.csrf;
          delete localStorage.signedIn;
          delete localStorage.id;
          delete localStorage.email;
          this.$router.replace('/');
        })
        .catch(error => this.setError(error, 'Cannot sign out'));
    },
  },
};
</script>

<style scoped>
  .dashboard-menu{
    width: 200px;
    background-color: white;
    height: 100vh;
  }
  img.avatar-default{
    height: 70px;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 50%
  }
  img.avatar-default:hover{
    opacity: 0.5;
    filter: blur(1px);
  }
  p.user-name {
    font-weight: 700;
    font-size: 14px;
    margin: 0;
    padding: 6px 0;
  }
  p.user-role {
    font-size: 10px;
    padding: 2px 8px;
    border: 1px solid #5cc9f5;
    border-radius: 4px;
    color: #308fb5;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }
  li {
    font-size: 14px;
    padding: 14px 24px;
    color: #41434c;
  }
  li:hover{
    cursor: pointer;
    color: #2a2b30;
    border-right: 2px solid #5a7dfb;
    background-color: rgba(190,197,202,0.2);
  }
  p.icon-svg{
    margin-right: 12px;
    padding: 8px;
    border-radius: 4px;
    color: #ffffff;
  }
  li.active{
    background-color: rgba(190,197,202,0.2);
    border-right: 2px solid #5a7dfb
  }
  a.log-out{
    color: #41434c;
  }
  a.log-out:hover{
    text-decoration: none !important;
    color: #23212b;
  }
  .dashboard-link{
    padding: 14px 24px;
    cursor: pointer;
  }
  .dashboard-link:hover{
    background-color: rgba(190,197,202,0.2);
  }
</style>
