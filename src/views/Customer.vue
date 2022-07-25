<template>
<div class="page-background">

  <!-- TÍTULO DA PÁGINA -->
  <div class="page-title">
    <h1 class="page-title-text">Clientes</h1>
    <v-divider></v-divider>
  </div>



  <v-container>
    <v-row>
      <v-col>
        <v-data-table :search="search">
          <template v-slot:top>
            <v-toolbar flat>
              <!-- DIALOG DA CATEGORIA -->
              <v-dialog v-model="categoryDialog" max-width="500px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" dark v-bind="attrs" v-on="on" class="category-buttom">Cadastrar Novo</v-btn>
                </template>
              </v-dialog>
              <v-text-field class="search-box" v-model="search" append-icon="mdi-magnify" label="Procurar" single-line hide-details></v-text-field>
            </v-toolbar>
          </template>
        </v-data-table>
      </v-col>
      <v-col>




      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<style lang="sass">
.search-box
  margin-left: 25px
</style>