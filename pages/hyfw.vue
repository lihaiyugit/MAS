<template>
  <div class="main_container">
    <singleHeader />
    <div class="page-hyfw">
      <div class="banner">
        <div class="banner-main banxin">
          <div class="banner-main-l">
            <h2>点亮MAS会员 尊享更多权益</h2>
            <p>企业管理行业大咖汇聚，前瞻观点文章输出</p>
          </div>
          <div class="banner-main-r">
            <div class="state-one" v-if="vipstate == 0">
              <div class="state-title">
                <img src="../static/images/hyfw/decorate-l.png" alt="" />
                <h5>PLUS会员权益</h5>
                <img src="../static/images/hyfw/decorate-r.png" alt="" />
              </div>
              <ul class="equity-box">
                <li>
                  <img src="../static/images/hyfw/qy01.png" alt="" />
                  <span>畅学100+视频</span>
                </li>
                <li>
                  <img src="../static/images/hyfw/qy02.png" alt="" />
                  <span>每日签到积分</span>
                </li>
                <li>
                  <img src="../static/images/hyfw/qy03.png" alt="" />
                  <span>订阅&会员</span>
                </li>
                <li>
                  <img src="../static/images/hyfw/qy04.png" alt="" />
                  <span>增值服务</span>
                </li>
              </ul>
              <button @click="isShowSon = true">开通会员</button>
            </div>
            <div class="state-two" v-else-if="vipstate == 1">
              <div class="state-two-title">
                <div class="state-two-title-l">
                  <span>欢迎</span>
                  <h5>TAKI~</h5>
                </div>
                <img src="../static/images/hyfw/jr.png" alt="" />
              </div>
              <h5>申请成为会员，您可以畅游MAS平台</h5>
              <ul class="equity-box">
                <li>
                  <img src="../static/images/hyfw/qy01.png" alt="" />
                  <span>畅学100+视频</span>
                </li>
                <li>
                  <img src="../static/images/hyfw/qy02.png" alt="" />
                  <span>每日签到积分</span>
                </li>
                <li>
                  <img src="../static/images/hyfw/qy03.png" alt="" />
                  <span>订阅&会员</span>
                </li>
                <li>
                  <img src="../static/images/hyfw/qy04.png" alt="" />
                  <span>增值服务</span>
                </li>
              </ul>
              <button @click="isShowSon = true">开通会员</button>
            </div>
            <div class="state-three" v-else-if="vipstate == 2">
              <div class="three-title">
                <div class="three-title-l">
                  <img
                    class="hg"
                    src="../static/images/hyfw/vip-hg.png"
                    alt=""
                  />
                  <span>TAKI</span>
                  <img
                    class="icon"
                    src="../static/images/hyfw/vip-icon2.png"
                    alt=""
                  />
                </div>
                <div class="three-title-r">2022-11-08到期</div>
              </div>
              <div class="sub-title">
                <h5>您可以畅游MAS平台</h5>
                <button @click="isShowSon = true">去续费</button>
              </div>
              <ul class="platform">
                <li>
                  <img src="../static/images/hyfw/gw.png" alt="" />
                  <span>MAS官网</span>
                </li>
                <li>
                  <img src="../static/images/hyfw/xcx.png" alt="" />
                  <span>小程序</span>
                </li>
                <li>
                  <img src="../static/images/hyfw/more.png" alt="" />
                  <span>期待更多</span>
                </li>
              </ul>
              <img
                class="vip-hg-bg"
                src="../static/images/hyfw/vip-hg-bg.png"
                alt=""
              />
            </div>
            <div class="state-three" v-else>
              <img
                class="vip-icon"
                src="../static/images/hyfw/vip-icon.png"
                alt=""
              />
              <div class="three-title">
                <div class="three-title-l">
                  <img
                    class="hg"
                    src="../static/images/hyfw/vip-hg.png"
                    alt=""
                  />
                  <span>TAKI</span>
                </div>
                <div class="three-title-r">2022-11-08到期</div>
              </div>
              <div class="sub-title four-title">
                <h5>您可以畅读MAS平台全部文章内容</h5>
              </div>
              <ul class="equity-box">
                <li>
                  <img src="../static/images/hyfw/qy01.png" alt="" />
                  <span>畅学100+视频</span>
                </li>
                <li>
                  <img src="../static/images/hyfw/qy02.png" alt="" />
                  <span>每日签到积分</span>
                </li>
                <li>
                  <img src="../static/images/hyfw/qy03.png" alt="" />
                  <span>订阅&会员</span>
                </li>
                <li>
                  <img src="../static/images/hyfw/qy04.png" alt="" />
                  <span>增值服务</span>
                </li>
              </ul>
              <button @click="isShowSon = true">去升级PLUS会员</button>
            </div>
          </div>
        </div>
      </div>
      <div class="hyfw-main banxin">
        <div class="hyfw-type">
          <div class="hyfw-type-item yd-vip back">
            <div class="title-bg">
              <div class="title">
                <img src="../static/images/hyfw/yd-vip.png" alt="" />
                <h5>畅读MAS文章</h5>
              </div>
              <p class="equity">文章、视频、音频MAS一卡享</p>
              <img
                class="yd-left"
                src="../static/images/hyfw/ydhy.png"
                alt=""
              />
            </div>
            <div class="base-box">
              <div class="type-list">
                <dl :class="ydCheack == 0 ? 'yd-checked' : ''" @click="ydFn(0)">
                  <img
                    class="yd-tip"
                    src="../static/images/hyfw/dy-tip.png"
                    alt=""
                  />
                  <dt>
                    <div class="price-box">
                      <span class="icon">¥</span>
                      <span class="price">120</span>
                      <span class="icon">/年</span>
                    </div>
                    <p>每天仅需1.21元</p>
                  </dt>
                  <dd>
                    <img
                      class="select"
                      src="../static/images/hyfw/dy-select.png"
                      alt=""
                    />
                  </dd>
                </dl>
                <dl :class="ydCheack == 1 ? 'yd-checked' : ''" @click="ydFn(1)">
                  <dt>
                    <div class="price-box">
                      <span class="icon">¥</span>
                      <span class="price">24</span>
                      <span class="icon">/月</span>
                    </div>
                    <p>每天仅需1.21元</p>
                  </dt>
                  <dd>
                    <img
                      class="select"
                      src="../static/images/hyfw/dy-select.png"
                      alt=""
                    />
                  </dd>
                </dl>
              </div>
              <button>立即订阅</button>
            </div>
          </div>
          <div class="hyfw-type-item plus-vip active">
            <div class="title-bg">
              <div class="title">
                <img src="../static/images/hyfw/plus-vip.png" alt="" />
                <h5>畅游MAS平台</h5>
              </div>
              <p class="equity">文章、视频、音频MAS一卡享</p>
              <img
                class="yd-left"
                src="../static/images/hyfw/plushy.png"
                alt=""
              />
            </div>
            <div class="base-box">
              <div class="type-list">
                <dl
                  :class="plusCheack == 0 ? 'plus-checked' : ''"
                  @click="plusFn(0)"
                >
                  <img
                    class="yd-tip"
                    src="../static/images/hyfw/plus-tip.png"
                    alt=""
                  />
                  <dt>
                    <div class="price-box">
                      <span class="icon">¥</span>
                      <span class="price">120</span>
                      <span class="icon">/年</span>
                    </div>
                    <p>每天仅需1.21元</p>
                  </dt>
                  <dd>
                    <img
                      class="select"
                      src="../static/images/hyfw/plus-select.png"
                      alt=""
                    />
                  </dd>
                </dl>
                <dl
                  :class="plusCheack == 1 ? 'plus-checked' : ''"
                  @click="plusFn(1)"
                >
                  <dt>
                    <div class="price-box">
                      <span class="icon">¥</span>
                      <span class="price">24</span>
                      <span class="icon">/月</span>
                    </div>
                    <p>每天仅需1.21元</p>
                  </dt>
                  <dd>
                    <img
                      class="select"
                      src="../static/images/hyfw/plus-select.png"
                      alt=""
                    />
                  </dd>
                </dl>
              </div>
              <button>立即订阅</button>
            </div>
          </div>
          <div class="hyfw-type-item benefits back">
            <div class="title-bg">
              <div class="title">
                <h5>MAS新福利</h5>
              </div>
              <img
                class="yd-left"
                src="../static/images/hyfw/gdhy.png"
                alt=""
              />
            </div>
            <div class="base-box">
              <div class="type-list">
                <dl>
                  <dt>
                    <div class="price-box">
                      <span class="icon">¥</span>
                      <span class="price">?</span>
                      <span class="icon">/年</span>
                    </div>
                  </dt>
                  <dd></dd>
                </dl>
              </div>
              <button>敬请期待</button>
            </div>
          </div>
        </div>
        <div class="user-equities">
          <div class="equities-title">
            <div class="headline">
              <img src="../static/images/hyfw/pink-l.png" alt="" />
              <h2>用户权益</h2>
              <img src="../static/images/hyfw/pink-r.png" alt="" />
            </div>
            <p>
              对于长期陪伴MAS，与MAS
              共同成长的用户，MAS开通用户等级提升渠道。<br />
              随着用户在MAS平台积分以及额贡献的提升，用户等级也随之提升，点亮成就徽章，享受平台更多权益。
            </p>
          </div>
          <div class="equities-table">
            <table border="0" cellspacing="0" cellpadding="0" class="table">
              <thead class="title">
                <tr>
                  <th>类型</th>
                  <th>权益</th>
                  <th>
                    <img src="../static/images/hyfw/lv0.png" alt="" />
                    <div class="name">童生</div>
                  </th>
                  <th>
                    <img src="../static/images/hyfw/lv1.png" alt="" />
                    <div class="name">秀才</div>
                  </th>
                  <th>
                    <img src="../static/images/hyfw/lv2.png" alt="" />
                    <div class="name">举人</div>
                  </th>
                  <th>
                    <img src="../static/images/hyfw/lv3.png" alt="" />
                    <div class="name">贡人</div>
                  </th>
                  <th>
                    <img src="../static/images/hyfw/lv4.png" alt="" />
                    <div class="name">进士</div>
                  </th>
                  <th>
                    <img src="../static/images/hyfw/lv5.png" alt="" />
                    <div class="name">举人</div>
                  </th>
                  <th>
                    <img src="../static/images/hyfw/lv6.png" alt="" />
                    <div class="name">榜眼</div>
                  </th>
                  <th>
                    <img src="../static/images/hyfw/lv7.png" alt="" />
                    <div class="name">状元</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="vertical-align: middle" rowspan="3" class="one">
                    通用权益
                  </td>
                  <td>免费文章阅读权</td>
                  <td>
                    <img src="../static/images/hyfw/check.png" alt="" />
                  </td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                </tr>
                <tr>
                  <td>投稿</td>
                  <td>
                    <img src="../static/images/hyfw/check.png" alt="" />
                  </td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                </tr>
                <tr class="border">
                  <td>点亮等级徽章</td>
                  <td>
                    <img src="../static/images/hyfw/wrong.png" alt="" />
                  </td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                </tr>
                <tr class="border">
                  <td class="one">每日签到积分</td>
                  <td>领取阶梯积分</td>
                  <td>
                    <img src="../static/images/hyfw/check.png" alt="" />
                  </td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                </tr>
                <tr>
                  <td style="vertical-align: middle" class="one" rowspan="4">
                    订阅&会员
                  </td>
                  <td>9折</td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                </tr>
                <tr>
                  <td>8折</td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                </tr>
                <tr>
                  <td>7折</td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                </tr>
                <tr class="border">
                  <td>6折</td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                </tr>
                <tr>
                  <td style="vertical-align: middle" rowspan="4" class="one">
                    培训课程以及课程会员
                  </td>
                  <td>9折</td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                </tr>
                <tr>
                  <td>8折</td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                </tr>
                <tr>
                  <td>7折</td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                </tr>
                <tr class="border">
                  <td>6折</td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                </tr>
                <tr>
                  <td style="vertical-align: middle" rowspan="2" class="one">
                    增值服务
                  </td>
                  <td>申请成为讲师</td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                </tr>
                <tr class="border">
                  <td>不定期增值服务</td>
                  <td><img src="../static/images/hyfw/wrong.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                  <td><img src="../static/images/hyfw/check.png" alt="" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="grade-upgrade">
          <div class="headline headline-bg">
            <img src="../static/images/hyfw/pink-l.png" alt="" />
            <h2>用户等级提升方式</h2>
            <img src="../static/images/hyfw/pink-r.png" alt="" />
          </div>
          <div class="grade-table">
            <table border="0" cellspacing="0" cellpadding="0" class="table">
              <thead class="title">
                <tr>
                  <th>条件</th>
                  <th>LV0 童生</th>
                  <th>LV1 秀才</th>
                  <th>LV2 举人</th>
                  <th>LV3 贡士</th>
                  <th>LV4 进士</th>
                  <th>LV5 探花</th>
                  <th>LV6 榜眼</th>
                  <th>LV7 状元</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="one">积分条件</td>
                  <td></td>
                  <td>500</td>
                  <td>1000</td>
                  <td>3000</td>
                  <td>6000</td>
                  <td>10000</td>
                  <td>30000</td>
                  <td>60000</td>
                </tr>
                <tr>
                  <td class="one">贡献值</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>1</td>
                  <td>100</td>
                  <td>300</td>
                  <td>500</td>
                  <td>1000</td>
                </tr>
              </tbody>
            </table>
            <div class="table-tip">
              <span>贡献值：</span>消费及投稿等动作均能提升贡献值。
            </div>
          </div>
        </div>
        <div class="equity-mian-box">
          <div class="headline headline-bg">
            <img src="../static/images/hyfw/pink-l.png" alt="" />
            <h2>MAS增值权益</h2>
            <img src="../static/images/hyfw/pink-r.png" alt="" />
          </div>
          <div class="equity-main">
            <div class="item">
              <img src="../static/images/hyfw/jf.png" alt="" />
              <span>送积分：</span>
              <p>
                MAS用户均可通过学习、互动、参与等形式获得不同数额积分，随着积分数量的升高，用户可以获得不同等级的权益；
              </p>
            </div>
            <div class="item">
              <img src="../static/images/hyfw/jb.png" alt="" />
              <span>赚金币：</span>
              <p>
                MAS用户亦可通过学习、互动、参与等形式获得不同数额金币，可用金币换购任一付费内容；
              </p>
            </div>
            <div class="item">
              <img src="../static/images/hyfw/zk.png" alt="" />
              <span>享折扣：</span>
              <p>
                MAS用户对着积分以及购买服务的累计，可以升级到不同等级，点亮等级会长，享受该等级不同权益。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 开通会员弹框 -->
    <VipPopup :isVisible="isShowSon" v-if="isShowSon" @close="closeDialog" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      ydCheack: 0, //阅读默认选中值
      plusCheack: 0, //plus默认选中值
      vipstate: 0, //
      isShowSon: false, //是否显示开通会员弹框子组件
    };
  },
  mounted() {
    $(".hyfw-type .hyfw-type-item").mouseenter(function (index) {
      //通过 .index()方法获取元素下标，从0开始，赋值给某个变量
      var _index = $(this).index();
      //改变选中时候的选项框的样式，移除其他几个选项的样式
      $(this).addClass("active").siblings().removeClass("active");
      $(this).removeClass("back").siblings().addClass("back");
    });
    // $(".hyfw-type .hyfw-type-item").mouseleave(function (index) {
    //   $(this).removeClass("active").siblings().removeClass("active");
    //   $(this).removeClass("back").siblings().removeClass("back");
    // });
  },

  methods: {
    ydFn(index) {
      this.ydCheack = index;
    },
    plusFn(index) {
      this.plusCheack = index;
    },
    // 关闭弹窗
    closeDialog(val) {
      this.isShowSon = val;
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/static/css/page-css/hyfw.less";
</style>
