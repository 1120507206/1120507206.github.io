(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{495:function(_,t,a){"use strict";a.r(t);var v=a(1),e=Object(v.a)({},(function(){var _=this,t=_._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"nagle-算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nagle-算法"}},[_._v("#")]),_._v(" Nagle 算法")]),_._v(" "),t("p",[_._v("试想一个场景，发送端不停地给接收端发很小的包，一次只发 1 个字节，那么发 1 千个字节需要发 1000 次。这种频繁的发送是存在问题的，不光是传输的时延消耗，发送和确认本身也是需要耗时的，频繁的发送接收带来了巨大的时延。")]),_._v(" "),t("p",[_._v("而避免小包的频繁发送，这就是 Nagle 算法要做的事情。")]),_._v(" "),t("p",[_._v("具体来说，Nagle 算法的规则如下:")]),_._v(" "),t("ul",[t("li",[_._v("当第一次发送数据时不用等待，就算是 1byte 的小包也立即发送")]),_._v(" "),t("li",[_._v("后面发送满足下面条件之一就可以发了:\n"),t("ul",[t("li",[_._v("数据包大小达到最大段大小(Max Segment Size, 即 MSS)")]),_._v(" "),t("li",[_._v("之前所有包的 ACK 都已接收到")])])])]),_._v(" "),t("h2",{attrs:{id:"延迟确认"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#延迟确认"}},[_._v("#")]),_._v(" 延迟确认")]),_._v(" "),t("p",[_._v("试想这样一个场景，当我收到了发送端的一个包，然后在极短的时间内又接收到了第二个包，那我是一个个地回复，还是稍微等一下，把两个包的 ACK 合并后一起回复呢？")]),_._v(" "),t("p",[t("strong",[_._v("延迟确认")]),_._v("(delayed ack)所做的事情，就是后者，稍稍延迟，然后合并 ACK，最后才回复给发送端。TCP 要求这个延迟的时延必须小于500ms，一般操作系统实现都不会超过200ms。")]),_._v(" "),t("p",[_._v("不过需要主要的是，有一些场景是不能延迟确认的，收到了就要马上回复:")]),_._v(" "),t("ul",[t("li",[_._v("接收到了大于一个 frame 的报文，且需要调整窗口大小")]),_._v(" "),t("li",[_._v("TCP 处于 quickack 模式（通过"),t("code",[_._v("tcp_in_quickack_mode")]),_._v("设置）")]),_._v(" "),t("li",[_._v("发现了乱序包")])]),_._v(" "),t("h2",{attrs:{id:"两者一起使用会怎样"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#两者一起使用会怎样"}},[_._v("#")]),_._v(" 两者一起使用会怎样？")]),_._v(" "),t("p",[_._v("前者意味着延迟发，后者意味着延迟接收，会造成更大的延迟，产生性能问题。")])])}),[],!1,null,null,null);t.default=e.exports}}]);