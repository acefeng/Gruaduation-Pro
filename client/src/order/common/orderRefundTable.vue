<template>
  <div class="order_refund_table">
    <div class="order_refund_table_main">
      <div class="order_refund_list">
        <div class="search_list">
          <div>申请时间：</div>
          <div>
            <el-date-picker
              v-model="orderTimeMin"
              align="right"
              type="date"
              placeholder="开始日期"
              size="mini"
              :picker-options="pickerOptions">
            </el-date-picker>
            <span>至</span>
            <el-date-picker
              v-model="orderTimeMax"
              align="right"
              type="date"
              placeholder="结束日期"
              size="mini"
              :picker-options="pickerOptions">
            </el-date-picker>
          </div>
        </div>
        <div class="search_but">
          <el-button type="primary" size="mini">筛选</el-button>
        </div>
      </div>
      <div class="">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            label="商品"
            width="180">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.shopName }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="refundOrderId"
            label="退款订单编号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="orderPrice"
            label="订单金额(元)"
            width="100">
          </el-table-column>
          <el-table-column
            prop="refundPrice"
            label="退款金额(元)"
            width="100">
          </el-table-column>
          <el-table-column
            prop="orderRefundTime"
            label="操作时间"
            width="100">
          </el-table-column>
          <el-table-column
            prop="customer"
            label="收货人"
            width="180">
          </el-table-column>
          <el-table-column
            label="操作"
            align="right">
            <template>
              <el-button type="primary" size="mini">取消</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
    
  },
  data () {
    return {
      tableData: [{
        orderRefundTime: '2019-10-01',
        customer: '王小虎',
        refundPrice: '1.00',
        shopName: '测试商品三',
        orderPrice: '1.00',
        refundOrderId: '12345678'
      }],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      orderTimeMin: '',
      orderTimeMax: ''
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.order_refund_table {
  padding: 10px;

  .order_refund_table_main {
    padding: 10px;
    background: white;

    .order_refund_list {
      padding: 20px;
      background: #f8f8f8;

      .search_but {
        margin-left: 60px;
      }
      .search_list {
        margin-bottom: 15px;
      }
      .search_list>div {
        display: inline-block;
        font-size: 12px;
        color: #333;

        .el-select, .el-input {
          width: 160px;
        }
      }
    }
  }

  
}
</style>
