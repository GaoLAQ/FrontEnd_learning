<template>
    <v-app> 
      <h1 class="Subheading grey--text">  Teams </h1>
      <v-container class="my-5">
        <v-layout row wrap> 
          <v-flex xs12 sm6 md4 lg3 v-for="person in teams" :key="person.name"> 
            <v-card class="text--xs-center ma-3" :elevation="0">  
                <v-responsive class="pt-4"> 
                   <v-avatar size="100" class="grey lighten-2"> 
                       <v-img :src="person.avatar"> </v-img>
                     
                   </v-avatar>
                </v-responsive>
            </v-card>
            <v-card-text>
                <div class="subheading"> {{person.name}}</div>
                <div class="grey--text"> {{person.role}}</div>
            </v-card-text>
            <v-card-actions> 
                <v-btn  color="grey"> 
                   <v-icon small left> mdi-message</v-icon>
                   <span> Message</span>
                </v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
</template>


<script> 
export default {
  data (){
    return {
       teams:[
           {name:'The Net Ninja', role:'Web developer',avatar: require('@/static/android.jpg')}, 
           {name:'Ryu', role:'Graphic designer',avatar:require('@/static/man.png')}, 
           {name:'Chun Li', role:'Web developer',avatar:require('@/static/panda.jpg')}, 
           {name:'Gouken', role:'Social media maverick',avatar:require('@/static/person.png')}, 
           {name:'Yoshi', role:'Sales guru',avatar:require('@/static/profile.png')}, 
       ]
    }
  }
}
</script>