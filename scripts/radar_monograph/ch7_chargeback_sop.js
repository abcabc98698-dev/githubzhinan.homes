// scripts/radar_monograph/ch7_chargeback_sop.js
module.exports = `
  <!-- Chapter 7: Chargeback & Refund SOP -->
  <section id="chargeback-sop" class="mx-auto max-w-6xl px-6 py-8 scroll-mt-20">
    <div class="border-b border-border/80 pb-6 mb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 font-mono text-xs font-semibold mb-2">
        <span>Chapter 07</span>
        <span>·</span>
        <span>黄金 72 小时维权止损</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight mb-3">
        7. 遭遇突然断网或跑路后的应急维权与止损 SOP
      </h2>
      <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
        如果不幸遭遇机场失联，许多人第一反应是自认倒霉。实际上，在服务商关站跑路的<strong>前 72 小时黄金窗口期</strong>内，其收单商户在支付网关中仍有大笔处于 T+1 或 T+7 结算周期的“未提现备付金”。只要迅速发起合规申诉，有相当高概率追回已支付款项。
      </p>
    </div>

    <div class="space-y-8">
      <!-- 7.1 WeChat & Alipay Dispute SOP -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          7.1 支付宝与微信支付商户投诉维权全流程
        </h3>
        <p class="text-sm text-text-secondary leading-relaxed">
          通过境内第三方支付通道完成充值的用户，请按以下步骤发起风控拦截：
        </p>

        <ol class="space-y-3 font-mono text-xs text-text-secondary list-decimal list-inside">
          <li><strong>调取真实扣款凭证：</strong>在支付宝或微信账单中找到该笔交易记录，点击进入账单详情，记录下「商户全称」与「商户单号」。</li>
          <li><strong>发起订单争议投诉：</strong>点击账单下方的「对订单有疑问」或「投诉商户」，在投诉原因中选择<strong>「商品/服务未按时提供」或「涉嫌欺诈跑路」</strong>。</li>
          <li><strong>提交完整证据链截图：</strong>
            <ul class="pl-6 pt-1 space-y-1 list-disc">
              <li>套餐购买订单截图（包含服务有效截止时间）。</li>
              <li>官网无法打开或节点全部超时的 Ping 测试截图。</li>
              <li>官方 Telegram 频道全员禁言或已注销的截图。</li>
            </ul>
          </li>
        </ol>

        <div class="p-4 rounded-xl border border-border bg-bg-secondary/60 font-mono text-xs space-y-2">
          <span class="font-bold text-text block">📝 支付宝/微信商户欺诈维权申诉通用模板（可直接复制）：</span>
          <pre class="bg-surface p-3 rounded-lg border border-border/80 overflow-x-auto text-[11px] leading-relaxed"><code>本人于 [支付日期] 购买该商户的网络服务年付订阅（商户订单号：[填写商户单号]），商家承诺提供 12 个月持续在线服务。

然而自 [断联日期] 起，该商户无故切断所有服务节点，官方网站无法访问，客户支持群组开启全员禁言，客服人员失联，属于典型的收款后拒绝履约与恶意欺诈行为。

根据《消费者权益保护法》及第三方支付平台商户服务协议，现正式申请平台介入，紧急冻结该欺诈商户结算账户中的未结算资金，并全额退还本人未消费款项 [金额] 元。</code></pre>
        </div>
      </div>

      <!-- 7.2 Credit Card Chargeback SOP -->
      <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
        <h3 class="text-xl font-bold text-text">
          7.2 国际信用卡 (Visa / MasterCard / Amex) 拒付 (Chargeback) 指南
        </h3>
        <p class="text-sm text-text-secondary leading-relaxed">
          若您是通过外币信用卡直接付款，您享有国际卡组织极其严格的消费者保护条款（<strong>Reason Code 13.1: Services Not Rendered，服务未交付</strong>）：
        </p>
        <div class="p-4 rounded-xl border border-border bg-bg-secondary/40 font-mono text-xs text-text-secondary leading-relaxed space-y-2">
          <p>1. 立即致电发卡银行（如招行、工行、中信等）信用卡客服热线，要求转接<strong>「国际卡争议与拒付处理专席」</strong>。</p>
          <p>2. 明确向专员告知：“我通过信用卡向境外商户订购了为期 1 年的软件订阅服务，但该商户在扣款后关闭了网站与服务器，未完成约定服务交付。我根据 Visa / MasterCard 规则正式申请拒付（Chargeback）。”</p>
          <p>3. 银行会向您邮箱发送争议申诉表，将上述官网打不开与订单截图回复即可。卡组织会直接从收单行强行划扣资金退回您的信用卡账户，<strong>申诉成功率高达 70% 至 90%</strong>。</p>
        </div>

        <div class="p-4 rounded-xl border border-border bg-bg-secondary/60 font-mono text-xs space-y-2">
          <span class="font-bold text-text block">📄 国际信用卡拒付英语申诉陈述函 (Chargeback Statement Template)：</span>
          <pre class="bg-surface p-3 rounded-lg border border-border/80 overflow-x-auto text-[11px] leading-relaxed"><code>Dear Dispute Department,

I am writing to formally dispute transaction [Transaction ID] in the amount of [Amount USD/CNY] dated [Transaction Date].

This payment was made for a 12-month software network subscription service. However, on [Date of Outage], the merchant completely shut down all server infrastructure and customer support channels without prior notice. The service is permanently inaccessible and the merchant has stopped all communications.

Under Visa/MasterCard dispute guidelines (Reason Code 13.1 - Services Not Provided), I request a full chargeback refund as the agreed recurring services were not delivered. Attached are proof of purchase, server downtime logs, and merchant site unreachable screenshots.

Thank you for your prompt assistance.</code></pre>
        </div>
      </div>
    </div>
  </section>
`;
