<template>
  <div class="material-background">

    <!-- TÍTULO DA PÁGINA -->
    <div class="page-title">
      <h1 class="page-title-text">Materiais</h1>
      <v-divider></v-divider>
    </div>

    <!-- FUNCÕES DA TABELA -->
    <div class="page-functions">
      <v-text-field v-model="search" append-icon="mdi-magnify" label="Procurar" single-line hide-details class="search-box">
      </v-text-field>

      <!-- DIALOG DA CATEGORIA -->
      <v-dialog v-model="categoryDialog" max-width="500px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on" class="category-buttom">Categorias</v-btn>
        </template>
      </v-dialog>

      <!-- DIALOG DA CRIAÇÃO/EDIÇÃO DE MATERIAL -->
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on" class="add-new-buttom">Adicionar Material</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">This Title</span>
          </v-card-title>
        </v-card>
      </v-dialog>
    </div>

    <!-- TABELA COM OS MATERIAIS -->
    <div class="page-table">
      <v-data-table :headers="headers" :items="products" :items-per-page="10" class="elevation-1" :search="search">
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
          <v-icon @click="deleteItem(item)">mdi-delete</v-icon>
        </template>
      </v-data-table>
    </div>
  </div>
</template>
<script>

export default {
  data (){
    return{
      search: '',
      dialog: false,
      categoryDialog: false,
      headers: [{
        text: 'Código',
        align: 'center',
        value: 'product_id'
      },
      {
        text: 'Nome',
        align: 'center',
        value: 'name'
      },
      {
        text: 'Modelo',
        align: 'center',
        value: 'model_brazil'
      },
      {
        text: 'NCM',
        align: 'center',
        value: 'ncm'
      },
      {
        text: 'Categoria',
        align: 'center',
        value: 'category_name'
      },
      {text: 'Ações', value: 'actions', sortable: false }
      ],
      products: [{
        product_id: 1,
        name: 'Teste 01',
        model_brazil: 'FXBW-120',
        ncm: '8535.10.10',
        category_name: 'Isolador Suspensão'
      },
      {
        product_id: 2,
        name: 'BAAA 01',
        model_brazil: 'DCO-120',
        ncm: '8535.10.10',
        category_name: 'Isolador Suspensão'
      }]
    }
  }
}
</script>

<style lang="sass">
.page-title-text
  color: #424242

.page-functions
  display: flex
  margin-top: 20px
  align-items: center

  .search-box
    max-width: 400px

  .add-new-buttom
    margin-left: 10px
    margin-left: auto
    margin-right: 0

  .category-buttom
    margin-left: 25px
    margin-right: 0

.page-table
  margin-top: 25px
</style>