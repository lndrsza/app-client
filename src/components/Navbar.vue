<template>
<nav>
    <v-navigation-drawer
    app
    v-model="drawer"
    expand-on-hover
    width="200px">
      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</nav>

</template>

<script>
    export default {
        data () {
            return {
                items: [
                { title: 'Dashboard', icon: 'mdi-view-dashboard-variant', link: '/'},
                { title: 'Propostas', icon: 'mdi-account', link: '/delivery'},
                { title: 'Compras', icon: 'mdi-cart', link: '/order'},
                { title: 'Pedidos', icon: 'mdi-clipboard-outline', link: '/order'},
                { title: 'Entregas', icon: 'mdi-truck-fast', link: '/order'},
                { title: 'Estoque', icon: 'mdi-garage-variant', link: '/order'},
                { title: 'Materiais', icon: 'mdi-cube-outline', link: '/order'},
                { title: 'Clientes', icon: 'mdi-account-group', link: '/order'},
                ],
            }     
        }
    }
</script>