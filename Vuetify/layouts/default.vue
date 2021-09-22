<template>
  <v-app>
    <v-snackbar v-model="snackbar" :timeout="4000" top> 
      <span> Awesome! You added a new project </span>
      <v-btn @click="snackbar=false" dark> Close </v-btn>
    </v-snackbar>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >  
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text"> 
          <span class="font-weight-light"> TODO </span>
          <span> Ninja </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu  -->
      <v-menu offset-y>
        <template v-slot:activator="{on,attrs}"> 
         <v-btn v-bind="attrs" v-on="on" color="grey">
           <v-icon> mdi-chevron-down </v-icon>
           <span> Menu </span>
         </v-btn>
        </template>
          <v-list>
            <v-list-tile v-for="link in links" :key="link.text" router > 
               <v-col> 
                  <v-btn :to="link.route"> 
                <v-list-tile-title > {{link.text}} </v-list-tile-title>
                  </v-btn>
                </v-col>
            </v-list-tile>
          </v-list>
      </v-menu>


      <v-btn  color="grey"> 
        <span> Sign Out </span>
        <v-icon right> mdi-exit-to-app </v-icon>
      </v-btn>
    </v-app-bar>
    
    <v-navigation-drawer 
      v-model="drawer" class="warning"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      > 
        <v-list>
              <v-layout column align-center> 
                <v-flex class="mt-5">  
                  <v-avatar size="100">
                    <img src="@/static/Android.jpg" alt="">
                  </v-avatar>
                  <p class="white--text subheading mt-1">
                    The Net Ninja 
                  </p>
                </v-flex> 

                <v-flex class="mt-4 mb-3"> 
                  <Popup @projectAdded="snackbar=true"/>
                </v-flex>

              </v-layout>
          <v-list-item v-for="link in links" 
          :key="link.text" router 
          :to="link.route"
          exact>

              <v-list-item-action> <v-icon> {{link.icon}} </v-icon> </v-list-item-action>
            <v-list-item-title class="white--text"> {{link.text}} </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>



    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>  

  </v-app>
</template>

<script>
import Popup from "@/components/Popup"
export default {
  data(){
    return {
      drawer: false,
      links:[
        {icon:'mdi-view-dashboard',text:'Dashboard',route:'/'},
        {icon:'mdi-folder',text:'My Project',route:'/project'},
        {icon:'mdi-microsoft-teams',text:'Team',route:'/team'},
      ],
      right: false,
      clipped: false,
      miniVariant: false,
      expandOnHover: false,
      snackbar: true 
    }
  },
  components:{
    Popup 
  }
}
</script>
