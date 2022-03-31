import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    // 全局设置:
    // disable: false,  // 接受以下值：'phone', 'tablet', 'mobile', boolean, expression or function
    // startEvent: 'DOMContentLoaded',  // 在文档，AOS 应该在
    // initClassName上初始化：'aos-init' ， // 初始化后应用的类
    // animatedClassName：'aos-animate' ， // 动画上应用的类
    // useClassNames：false ,  // 如果为真，将添加 `data-aos` 的内容作为滚动类
    // disableMutationObserver: false,  // 禁用自动突变检测（高级）
    // debounceDelay: 50,  // 调整窗口大小时使用的去抖动延迟（高级)
    // throttleDelay: 99,  // 滚动页面时使用的油门延迟（高级）
    // // 可以基于每个元素覆盖的设置，通过 `data-aos-*` 属性：
    // offset: 120,  // 从原始触发点的偏移量（以 px 为单位
    // delay: 0,  // 值从 0 到 3000 , step 50ms
    // duration: 400,  // 值从 0 到 3000 , with step 50ms
    // easing: 'ease',  // AOS 动画的默认缓动
    //  once: false,  // 动画是否应该只发生一次 - 向下滚动
    // mirror: false ,  // 元素在滚动时是否应该动画出来
    // anchorPlacement: 'top-bottom',  // 定义元素相对于窗口的哪个位置应该触发动画
      easing: "ease-in-sine",
      once: true,
      duration: 300,
});
