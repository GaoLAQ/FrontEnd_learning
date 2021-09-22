<template>
  <v-dialog max-width="600px" v-model="dialog"> 
      <template v-slot:activator="{ on, attrs }">
      <v-btn slot="activator" v-bind="attrs" v-on="on" class='sucess'> Add new project</v-btn>
      </template>
      <v-card> 
          <v-card-title> 
              <h2> 
                  Add a new  project 
              </h2>
          </v-card-title>
          <v-card-text> 
              <v-form class="px-3" trf="form"> 
                <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"> </v-text-field>
                <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"> </v-textarea>

          
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
          class="pa-2"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
            :rules="inputRules"
              v-model="due"
              label="Date (read only text field)"
              hint="MM/DD/YYYY format"
              prepend-icon="mdi-calendar-range"
              v-bind="attrs"
              v-on="on"
              
            ></v-text-field>
          </template>
          <v-date-picker v-model="due" no-title @input="menu2 = false"></v-date-picker>
        </v-menu>
              <v-btn class="success mx-2 my-4" @click="submit" :loading="loading"> Add project </v-btn>
              </v-form>
          </v-card-text>
      </v-card>
  </v-dialog>
</template>

<script>
import format from 'date-fns/format'
import db from '@/fb'

export default {
  data(){
      return {
          title:'',
          content:'',
          due:null,
          inputRules: [
            v => v.length >=3 || 'Minimum length is 3 characters'
          ], 
          loading: false,
          dialog: false
      }
  }, 
  methods:{
      submit(){
          if(this.$refs.form.validate()) {
            this.loading = true; 
                    const project ={
                      title: this.title, 
                      content: this.content, 
                      due: this.due,
                      person: 'The Net Ninja',
                      status: 'ongoing'
                    }
          }
          db.collection('projects').add(project).then(()=>{
             this.loading = false;
             this.dialog = false; 
             this.$emit('projectAdded');
          })
      }
  },
  computed:{
      formattedDate(){
          return this.due ? format(this.due,"Do MMM YYYY"): ''
      }
  }
}
</script>

<style>

</style>