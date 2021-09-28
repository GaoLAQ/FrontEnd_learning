<template>
  <v-app>
    <v-container flud class="my-5">
      <v-layout row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              color="grey"
              @click="sortBy('title')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small> mdi-folder </v-icon>
              <span class="caption text-lowercase"> By Project Name </span>
            </v-btn>
          </template>
          <span> Sort projects by project name </span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              color="grey"
              v-bind="attrs"
              v-on="on"
              @click="sortBy('person')"
              slot="activator"
            >
              <v-icon left small> mdi-account </v-icon>
              <span class="caption text-lowercase"> By Person </span>
            </v-btn>
          </template>
          <span> Sort projects by person </span>
        </v-tooltip>
      </v-layout>
      <v-card v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div>
              <v-chip
                small
                :class="`${project.status} white--text caption my-2`"
              >
                {{ project.status }}</v-chip
              >
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
    <input 
    type="checkbox"
    v-model="toggle"
    true-value="yes"
    false-value="no"/>
    {{toggle}}
    <a v-bind:['foo'+bar]="url"> </a> 
  </v-app>
  
</template>

<script>
export default {
  data() {
    return {
      attributeName: 'click',
      toggle:'',
      projects: [
        {
          title: "Design a new website",
          person: "The Net Ninja",
          due: "1st Jan 2019",
          status: "ongoing"
        },
        {
          title: "Code up the homepage",
          person: "Chun Li",
          due: "10th Jan 2019",
          status: "complete"
        },
        {
          title: "Design video thumbnails",
          person: "Ryu",
          due: "20th Dec 2019",
          status: "complete"
        },
        {
          title: "Create a community forum",
          person: "Gouken",
          due: "1st Oct 2019",
          status: "overdue"
        }
      ]
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  }
};
</script>

<style scoped>
.content {
  position: relative;
  margin-left: 200px;
}

.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.complete {
  background: #3cd1c2;
}
.v-chip.ongoing {
  background: orange;
}
.v-chip.overdue {
  background: tomato;
}
</style>
