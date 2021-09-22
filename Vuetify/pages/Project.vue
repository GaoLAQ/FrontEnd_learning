<template>
    <v-app> 
        <h1 class="subheading grey--text"> Projects </h1>
        <v-container class="my-5">
          <v-expansion-panels> 
            <v-expansion-panel v-for="project in myProjects" :key="project.name"> 
                       <v-expansion-panel-header> {{project.title}} </v-expansion-panel-header>
            <v-expansion-panel-content >        
              <v-card>          
                <v-card-text class="px-4 grey--text">
                  <div class="font-weight-bold"> due by {{project.due}} </div>
                  <div> {{project.content}} </div>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-container>
        <div> </div>
    </v-app>
</template>







<script> 

export default {

  
  data (){
    return {
        projects:[
         {title:'Design a new website',person:'The Net Ninja',due:'1st Jan 2019',status:'ongoing', content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur ad assumenda vitae, ratione quisquam deleniti eaque magnam? Adipisci recusandae consequatur corrupti unde perferendis, odio assumenda hic. Tenetur quidem in enim.'},
         {title:'Code up the homepage',person:'Chun Li',due:'10th Jan 2019',status:'complete',content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur ad assumenda vitae, ratione quisquam deleniti eaque magnam? Adipisci recusandae consequatur corrupti unde perferendis, odio assumenda hic. Tenetur quidem in enim.'},
         {title:'Design video thumbnails',person:'Ryu',due:'20th Dec 2019',status:'complete',content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur ad assumenda vitae, ratione quisquam deleniti eaque magnam? Adipisci recusandae consequatur corrupti unde perferendis, odio assumenda hic. Tenetur quidem in enim.'},
         {title:'Create a community forum',person:'Gouken',due:'1st Oct 2019',status:'overdue',content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur ad assumenda vitae, ratione quisquam deleniti eaque magnam? Adipisci recusandae consequatur corrupti unde perferendis, odio assumenda hic. Tenetur quidem in enim.'},
         {title:'Design a new website.. again', person:'The Net Ninja', due:'1st Jan 2019', status:'ongoing',content:'mspfmspfmsp pdlspdlspldspdspd dpsdpsdkpskdspdkpskpskdpskd'}
       ]
    }
  }, 
  computed: {
    myProjects(){
       return this.projects.filter(project=>{
         return project.person === 'The Net Ninja'
       })
    }
  }
}
</script>