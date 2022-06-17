<template>
  <div class="main_container">
    <singleHeader />
    <div class="form-container">
      <div class="form-box banxin">
        <div class="title">提交稿件申请</div>
        <p class="info">
          感谢您选择MAS,请尽量完整填写下方表单，让我们更加了解您的文稿已便我们审核通过
        </p>
        <div class="subhead">
          <span></span>
          投稿须知
        </div>
        <div class="notice-box">
          <h5>一、投稿内容：</h5>
          <p>
            以管理会计为主，涉及预算管理、成本管理、财务共享、数据分析等领域。对高质量的热点议题来稿，将优先刊用。
          </p>
          <h5>二、稿件要求：</h5>
          <p>
            (1)选题具有前瞻性、新颖性、重要性、实用性；(2)观点新颖独到，具有学术参考价值或实务指导意义；(3)论述充分有力，研究方法严谨创新；(4)请务必标
            明中图分类号和文献标识码，请标明英文标题；（5）请把稿件重合率控制在15%以下。
          </p>
          <h5>三、投稿方式：</h5>
          <p style="padding-bottom: 4px">
            请不要将同一文章重复向本刊投稿，可选择E-mail投稿及在线投稿（请投WORD文档格式）。<br />
            投稿邮箱：tg@chinamas.cn
          </p>
        </div>
        <div class="subhead">
          <span></span>
          在线投稿
        </div>
        <div class="form-content">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            size="small"
            label-position="left"
          >
            <el-form-item label="投稿标题：" prop="headline">
              <el-input
                v-model="ruleForm.headline"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
            <el-form-item label="投稿栏目：" prop="column">
              <el-select
                v-model="ruleForm.column"
                placeholder="请选择"
                style="width: 100%"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="作者：" prop="author">
              <el-input
                v-model="ruleForm.author"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
            <el-form-item label="联系方式：" prop="tel">
              <el-input v-model="ruleForm.tel" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="邮箱：" prop="email">
              <el-input
                v-model="ruleForm.email"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
            <el-form-item label="工作单位：" prop="organization">
              <el-input
                v-model="ruleForm.organization"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
            <el-form-item label="上传稿件：" prop="manuscript">
              <el-upload
                ref="upload"
                accept=".doc,.docx,.pdf"
                :action="upload.uploadFileUrl"
                :headers="upload.headers"
                :on-success="handleSuccess"
                :before-upload="beforeUpload"
                :on-error="handleError"
                :on-progress="handleFileProgress"
                :show-file-list="false"
                :limit="1"
                :file-list="ruleForm.manuscript"
              >
                <el-button
                  size="mini"
                  type="primary"
                  class="upload-btn"
                  :loading="upload.isUpload"
                  >点击上传文件</el-button
                >
                <div slot="tip" class="el-upload__tip">
                  支持文档格式有pdf,doxc
                </div>
              </el-upload>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <button @click="submitForm('ruleForm')">提交申请</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    const validatePhone = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("联系方式不能为空"));
      } else if (value !== "") {
        var reg = /^1[3456789]\d{9}$/;
        if (!reg.test(value)) {
          return callback(new Error("请输入有效的联系方式"));
        }
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        headline: "",
        column: "",
        author: "",
        tel: "",
        email: "",
        organization: "",
        manuscript: [],
      },
      upload: {
        isUpload: false,
        // 设置上传的请求头部
        headers: {
          "Admin-Token": "",
        },
        uploadFileUrl: "", //上传的图片服务器地址
      }, //文件上传数据
      rules: {
        headline: [
          { required: true, message: "请输入投稿标题", trigger: "blur" },
        ],
        column: [
          { required: true, message: "请选择投稿栏目", trigger: "change" },
        ],
        author: [{ required: true, message: "请输入作者", trigger: "blur" }],
        tel: [{ required: true, validator: validatePhone, trigger: "blur" }],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        organization: [
          { required: true, message: "请输入工作单位", trigger: "blur" },
        ],
        manuscript: [
          { required: true, message: "请选择上传文件", trigger: "change" },
        ],
      },
    };
  },
  mounted() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //文件上传类型
    beforeUpload(file) {
      const fileSuffix = file.name.substring(file.name.lastIndexOf(".") + 1);
      const whiteList = ["pdf", "doc", "docx"];
      if (whiteList.indexOf(fileSuffix) === -1) {
        this.$message.error("上传文件只能是pdf、doc、docx格式！");
        this.ruleForm.manuscript = [];
        return false;
      }
      // const isType = file.type === "application/vnd.ms-excel";
      // const isTypeComputer =
      //   file.type ===
      //   "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
      // const fileType = isType || isTypeComputer;
      // if (!fileType) {
      //   this.$message.error("上传文件只能是xls/xlsx格式！");
      // }

      // 文件大小限制为10M
      const fileLimit = file.size / 1024 / 1024 < 10;
      if (!fileLimit) {
        this.$message.error("上传文件大小不超过10M！");
        this.ruleForm.manuscript = [];
        return false;
      }
      // return fileType && fileLimit;
    },
    //文件上传时的钩子
    handleFileProgress() {
      this.upload.isUpload = true;
    },
    // 文件上传成功时的钩子
    handleSuccess(res, file, fileList) {
      console.log(res, file, fileList, "上传成功");
      //  this.ruleForm.manuscript = res.data.src;
      this.$message.success(res.data.msg);
      this.upload.isUpload = false;
    },
    // 文件上传失败时的钩子
    handleError(err, file, fileList) {
      console.log(err, "上传失败");
      // this.$message.error("文件上传失败");
      this.$message.error(err.errMsg);
      this.upload.isUpload = false;
    },
  },
};
</script>
<style lang="less" scoped>
.form-container {
  padding: 40px 0px;
  .form-box {
    width: 788px;
    background: #ffffff;
    border-radius: 6px;
    padding: 50px 185px 22px 127px;
    .title {
      width: 193px;
      height: 25px;
      background-image: url(@/static/images/wytg.png);
      background-size: 100% 100%;
      background-position: top left;
      background-repeat: no-repeat;
      margin: 0 auto;
      font-size: 28px;
      font-weight: 600;
      text-align: center;
      color: #bc996d;
      line-height: 22px;
      letter-spacing: 0.8px;
    }
    .info {
      font-size: 13px;
      font-weight: 400;
      text-align: center;
      color: rgba(0, 0, 0, 0.35);
      line-height: 20px;
      padding-top: 14px;
    }
    .subhead {
      padding-top: 55px;
      display: flex;
      align-items: center;
      font-size: 20px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      line-height: 22px;
      letter-spacing: 0.57px;
      span {
        display: inline-block;
        width: 3px;
        height: 19px;
        background: #bc996d;
        margin-right: 16px;
      }
    }
    .notice-box {
      margin-top: 30px;
      width: 652px;
      background: #f7f8fa;
      border-radius: 4px;
      padding: 25px 64px 30px 64px;
      h5 {
        font-size: 14px;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.85);
        line-height: 24px;
      }
      p {
        font-size: 12px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.45);
        line-height: 20px;
        padding-bottom: 20px;
      }
    }
    .form-content {
      padding: 40px 0px 0px 60px;
      /deep/.el-form-item__label {
        font-weight: 600;
        color: rgba(0, 0, 0, 0.85);
        padding: 0;
      }
      // /deep/.el-form-item.is-required:not(.is-no-asterisk)
      //   > .el-form-item__label:before {
      //   content: "\B7";
      //   transform: scale(-1);
      //   color: #f56c6c;
      //   font-family: SimSun, sans-serif;
      //   line-height: 1;
      //   width: 2px;
      //   height: 2px;
      //   background: #f56c6c;
      //   border-radius: 50%;
      // }
      .el-form-item--mini.el-form-item,
      /deep/.el-form-item--small.el-form-item {
        margin-bottom: 32px;
      }
      .upload-btn {
        width: 150px;
        height: 40px;
        background: #ffffff;
        border: 1px solid #bc996d;
        border-radius: 2px;
        font-size: 16px;
        font-weight: 400;
        text-align: center;
        color: #bc996d;
        letter-spacing: 0.46px;
        margin-top: 0px;
      }
      /deep/.el-upload__tip {
        font-weight: 400;
        color: rgba(0, 0, 0, 0.35);
      }
    }
  }
  button {
    width: 222px;
    height: 40px;
    background: #bc996d;
    border-radius: 2px;
    box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.02);
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
    line-height: 22px;
    border: transparent;
    margin: 0 auto;
    margin-top: 35px;
    display: block;
  }
}
</style>
