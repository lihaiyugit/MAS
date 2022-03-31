<template>
  <div class="banxin">
    <el-breadcrumb separator="/" style="padding: 20px 0">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <a-table :data="tableData" style="width: 100%">
      <a-table-column prop="date" label="日期" width="180"> </a-table-column>
      <a-table-column label="姓名" width="180">
        <template slot-scope="scope">
          <nuxt-link :to="`/list?id=${scope.row.id}`">{{
            scope.row.name
          }}</nuxt-link>
          <!-- <nuxt-link :to="{name:'index-detail',query:{id:scope.row.id},params:{id:scope.row.id}}">{{ scope.row.name }}</nuxt-link> -->
        </template>
      </a-table-column>
      <a-table-column prop="address" label="地址"> </a-table-column>
    </a-table>

    <a-table :columns="columns" :data-source="data">
      <!-- <a slot="name" slot-scope="text">{{ text }}</a> -->
      <!-- <span slot="customTitle"><a-icon type="smile-o" /> Name</span> -->
      <!-- <span slot="tags" slot-scope="tags">
        <a-tag
          v-for="tag in tags"
          :key="tag"
          :color="
            tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'
          "
        >
          {{ tag.toUpperCase() }}
        </a-tag>
      </span> -->
      <span slot="action" slot-scope="text, record">
        <a>Invite 一 {{ record.name }}</a>
        <a-divider type="vertical" />
        <nuxt-link :to="`/list/${1}`"> <a>Delete</a></nuxt-link>
        <a-divider type="vertical" />
        <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
      </span>
    </a-table>
  </div>
</template>
<script>

const columns = [
  {
    dataIndex: "name",
    key: "name",
    title: "Name",
    // slots: { title: "customTitle" },
    // scopedSlots: { customRender: "name" },
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" },
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
export default {
  data() {
    return {
      tableData: [],
      data,
      columns,
    };
  },
  async asyncData() {
    //使用await来实现同步运行（不是异步）promise
    // let res=await BannerApi();
    // console.log(res);
    let list = await [
      {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄",
        id: 1,
      },
      {
        date: "2016-05-04",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1517 弄",
        id: 2,
      },
      {
        date: "2016-05-01",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1519 弄",
        id: 3,
      },
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1516 弄",
        id: 4,
      },
    ];
    return {
      tableData: list,
    };
  },
};
</script>
