<template>
<nav>
    <v-navigation-drawer
    app
    expand-on-hover
    width="200px"
    color="#E0E0E0">
      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          color="#1976D2"
        >
          <v-list-item-icon>
            <v-icon color="#1976D2">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title color="#1976D2">{{ item.title }}</v-list-item-title>
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
                { title: 'Propostas', icon: 'mdi-file-chart-outline', link: '/proposal'},
                { title: 'Compras', icon: 'mdi-cart', link: '/order'},
                { title: 'Pedidos', icon: 'mdi-clipboard-outline', link: '/request'},
                { title: 'Entregas', icon: 'mdi-truck-fast', link: '/delivery'},
                { title: 'Estoque', icon: 'mdi-garage-variant', link: '/stock'},
                { title: 'Materiais', icon: 'mdi-cube-outline', link: '/material'},
                { title: 'Clientes', icon: 'mdi-account-group', link: '/customer'},
                ],
            }     
        }
    }
</script>