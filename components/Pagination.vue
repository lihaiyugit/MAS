<template>
  <div :class="{ hidden: hidden }" class="pagination-container">
    <el-pagination
      style="text-align: center"
      :background="background"
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
// import { scrollTo } from '../utils/scroll-to'

export default {
  name: "Pagination",
  props: {
    total: {
      required: true,
      type: Number,
    },
    page: {
      type: Number,
      default: 1,
    },
    limit: {
      type: Number,
      default: 20,
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 50, 100, 200, 300, 400, 500];
      },
    },
    layout: {
      type: String,
      default: "total, sizes, prev, pager, next, jumper",
    },
    background: {
      type: Boolean,
      default: true,
    },
    autoScroll: {
      type: Boolean,
      default: true,
    },
    hidden: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    currentPage: {
      get() {
        return this.page;
      },
      set(val) {
        this.$emit("update:page", val);
      },
    },
    pageSize: {
      get() {
        return this.limit;
      },
      set(val) {
        this.$emit("update:limit", val);
      },
    },
  },
  methods: {
    handleSizeChange(val) {
      this.$emit("pagination", { page: this.currentPage, limit: val });
      // if (this.autoScroll) {
      //   scrollTo(0, 0)
      // }
    },
    handleCurrentChange(val) {
      this.$emit("pagination", { page: val, limit: this.pageSize });
      // if (this.autoScroll) {
      //   scrollTo(0, 0)
      // }
    },
  },
};
</script>

<style lang="less" scoped>
.pagination-container {
  background: #fff;
}
.pagination-container.hidden {
  display: none;
}

/deep/.el-select-dropdown__item.selected {
  color: #ed6d38 !important;
}
/deep/.el-pagination {
  display: flex !important;
  justify-content: center !important;
  margin: 50px !important;
}
/deep/.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #ed6d38 !important;
}
/deep/.el-input.is-active .el-input__inner,
.el-input__inner:focus {
  border-color: #ed6d38 !important;
}
/deep/.el-select .el-input.is-focus .el-input__inner {
  border-color: #ed6d38 !important;
}
/deep/.el-select .el-input__inner:focus,
.el-select .el-input__inner:hover {
  border-color: #ed6d38 !important;
}
</style>
