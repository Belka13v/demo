<template>
      <el-form>
            <div id="table">
                  <h1>Таблица платежей</h1>
                  <el-table :data="tablePayments" height="250" style="width: 100%">
                        <el-table-column
                                prop="type"
                                label="Тип"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="amount"
                                label="Сумма"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="category"
                                label="Категория"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="status"
                                label="Оплачено или нет"
                                width="180">
                              <p v-if="null"> No </p>
                        </el-table-column>
                  </el-table>
            </div>
      </el-form>
    </template>


<script>

//import axios from 'axios'

    export default {
        name: 'ListPayments',
          el: '#table',
        data() {
            return {
                tablePayments: []
        }
        },
          mounted() {
                this.$http.get('api/payments')
                        .then(response => {
                              this.tablePayments = response.data
                        })
                        .catch(response => {
                              //debugger
                              alert(response.status)
                        })
          }
    }


</script>

<style scoped>


</style>