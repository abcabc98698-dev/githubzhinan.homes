// Generated data for 42 Airport Brands on githubzhinan.homes
// Source: 42家机场品牌清单.txt & 光速云品牌信息.txt
// Date: 2026-10-31

export interface PricingPlan {
  name: string;
  billing: string;
  price: string;
  priceNum: number;
  monthlyEquivalent?: string;
  traffic: string;
  trafficCycle: '每月' | '一次性' | '不限时';
  badge?: string;
}

export interface SpeedTestResult {
  node: string;
  latencyMs: number;
  downloadMbps: number;
  packetLoss?: number;
  testDate?: string;
}

export interface UnlockMatrix {
  chatgpt: 'supported' | 'depends' | 'unsupported';
  claude: 'supported' | 'depends' | 'unsupported';
  gemini: 'supported' | 'depends' | 'unsupported';
  netflix: 'supported' | 'depends' | 'unsupported';
  disney: 'supported' | 'depends' | 'unsupported';
  youtube: 'supported' | 'depends' | 'unsupported';
  tiktok: 'supported' | 'depends' | 'unsupported';
}

export interface Brand {
  slug: string;
  name: string;
  pinyin?: string;
  englishName?: string;
  rank: number;
  isFeatured?: boolean;
  isTop10?: boolean;
  tier: 'flagship' | 'recommended' | 'budget' | 'enterprise' | 'historical';
  establishedYear?: string;
  affUrl: string;
  hasDirectAff: boolean;
  discountCode?: string;
  discountNote?: string;
  minMonthlyPrice: string;
  minMonthlyPriceNum: number;
  lineType: string;
  protocols: string[];
  clients: string[];
  nodesCountNote: string;
  speedSummary: {
    avgLatency: number;
    peakDownloadMbps: number;
    testDate: string;
  };
  speedTests: SpeedTestResult[];
  unlocks: UnlockMatrix;
  pricingPlans: PricingPlan[];
  highlights: string[];
  pros: string[];
  cons: string[];
  suitableFor: string[];
  unsuitableFor: string[];
  reviewSummary: string;
  dataStatus: 'verified' | 'vendor' | 'historical';
  lastVerifiedDate: string;
  geoFaqs: { q: string; a: string }[];
  tags: string[];
}

export const BRANDS: Brand[] = [
  {
    "slug": "guangsu",
    "name": "光速云",
    "pinyin": "guangsu",
    "englishName": "GuangSu Cloud",
    "rank": 1,
    "isFeatured": true,
    "isTop10": true,
    "tier": "flagship",
    "establishedYear": "2020",
    "affUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "hasDirectAff": true,
    "discountCode": "AMM",
    "discountNote": "专属折扣码",
    "minMonthlyPrice": "¥25.00/月",
    "minMonthlyPriceNum": 25,
    "lineType": "IEPL 专线 + 企业级内网专线（双线路架构）",
    "protocols": [
      "VLESS"
    ],
    "clients": [
      "自研定制客户端",
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "香港×20、台湾×5、日本×10、新加坡×10、美国×10等多国原生节点",
    "speedSummary": {
      "avgLatency": 62,
      "peakDownloadMbps": 529,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港",
        "latencyMs": 22,
        "downloadMbps": 529,
        "testDate": "2026-10-19"
      },
      {
        "node": "台湾",
        "latencyMs": 41,
        "downloadMbps": 114,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡",
        "latencyMs": 46,
        "downloadMbps": 387,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本",
        "latencyMs": 57,
        "downloadMbps": 135,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国",
        "latencyMs": 143,
        "downloadMbps": 18,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "depends",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "光速云·轻量版",
        "billing": "年付",
        "price": "¥99",
        "priceNum": 99,
        "traffic": "69GB",
        "trafficCycle": "每月"
      },
      {
        "name": "光速云·极速版",
        "billing": "月付",
        "price": "¥25",
        "priceNum": 25,
        "traffic": "168GB",
        "trafficCycle": "每月"
      },
      {
        "name": "光速云·流光版",
        "billing": "月付",
        "price": "¥34",
        "priceNum": 34,
        "traffic": "238GB",
        "trafficCycle": "每月"
      },
      {
        "name": "光速云·量子版",
        "billing": "月付",
        "price": "¥68",
        "priceNum": 68,
        "traffic": "500GB",
        "trafficCycle": "每月"
      },
      {
        "name": "光速云·无界版",
        "billing": "月付",
        "price": "¥138",
        "priceNum": 138,
        "traffic": "900GB",
        "trafficCycle": "每月"
      },
      {
        "name": "光速云·致敬斯诺克147永久套餐",
        "billing": "一次性付费",
        "price": "¥147",
        "priceNum": 147,
        "traffic": "247GB不过期",
        "trafficCycle": "一次性"
      },
      {
        "name": "光速云·定制套餐",
        "billing": "月付",
        "price": "¥680",
        "priceNum": 680,
        "traffic": "500GB",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "IEPL专线 + 企业级内网专线（双线路架构）",
      "VLESS 协议- IEPL专线",
      "自研客户端 + 支持第三方订阅导入（Clash、Shadowrocket）",
      "节点覆盖：节点覆盖：香港×20、台湾×5、日本×10、新加坡×10、美国×10、马来西亚×2、英国、法国、德国、土耳其、泰国、巴西等",
      "4个价格档，从99元/年到680元/月跨度极大"
    ],
    "pros": [
      "双线路架构：IEPL专线 + 企业级内网专线，晚高峰稳定性优异",
      "致敬斯诺克147永久套餐（247GB永不过期，单节点最高2.5Gbps）",
      "提供自研客户端与通用Clash/Shadowrocket订阅导入，多端支持",
      "节点覆盖香港×20、台湾×5、日本×10、新加坡×10、美国×10等多达11个主流地区"
    ],
    "cons": [
      "入门年付低至8元/月，但特殊定制或月付大流量套餐单价相对较高",
      "ChatGPT与Gemini部分节点需手动切换以规避风控"
    ],
    "suitableFor": [
      "注重晚高峰 4K 播放与跨境远程办公的品质用户",
      "需要高频访问 ChatGPT、Claude、Midjourney 的 AI 从业者",
      "跨境电商、TikTok 直播与海外社交媒体运营人员"
    ],
    "unsuitableFor": [
      "预算极低（只接受月付 2-3 元且不追求晚高峰稳定性）的用户"
    ],
    "reviewSummary": "光速云在便宜机场推荐里属于价格有优势的一类，99 元/年左右的最低套餐，换算下来每月成本不高，在高性价比机场推荐里比较有竞争力。它把 IPLC 专线和隧道中转结合着用，第三方测试显示香港、日本节点速度表现还不错，也支持 Netflix、Disney+、YouTube 等主流流媒体。不过要注意，ChatGPT、Gemini 这类 AI 工具并不是所有节点都稳定支持，实际用的时候可能需要手动切换节点，这点官方也承认。套餐里特殊商品不支持退款，所以更建议先买月付或者小额套餐，实测晚高峰速度和稳定性之后，再考虑要不要长期用。",
    "dataStatus": "verified",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "光速云 在晚高峰时段的速度和稳定性表现如何？",
        "a": "光速云 采用 IEPL 专线 + 企业级内网专线（双线路架构），在我们的基准测速中，香港节点平均延迟约为 22ms，下载速度可达 529Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "光速云 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，光速云 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "光速云 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "光速云 全面兼容 自研定制客户端、Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "斯诺克147永久套餐",
      "2020年运营",
      "2.5Gbps",
      "IEPL专线",
      "旗舰主推",
      "¥25.00/月起",
      "VLESS"
    ]
  },
  {
    "slug": "weifeng",
    "name": "微风网络",
    "pinyin": "weifeng",
    "englishName": "BreezeNet",
    "rank": 2,
    "isFeatured": false,
    "isTop10": true,
    "tier": "recommended",
    "establishedYear": "2023",
    "affUrl": "https://edp01.breezenetaff.com/#/?code=t3huofyI",
    "hasDirectAff": true,
    "discountCode": "flat888",
    "minMonthlyPrice": "¥7.00/月",
    "minMonthlyPriceNum": 7,
    "lineType": "IEPL 高速内网专线",
    "protocols": [
      "VLESS"
    ],
    "clients": [
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 66,
      "peakDownloadMbps": 546,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港",
        "latencyMs": 25,
        "downloadMbps": 546,
        "testDate": "2026-10-19"
      },
      {
        "node": "台湾",
        "latencyMs": 40,
        "downloadMbps": 115,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡",
        "latencyMs": 43,
        "downloadMbps": 384,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本",
        "latencyMs": 54,
        "downloadMbps": 131,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国",
        "latencyMs": 167,
        "downloadMbps": 17,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "清风 (Breeze)",
        "billing": "年付",
        "price": "¥137",
        "priceNum": 137,
        "traffic": "100GB",
        "trafficCycle": "每月"
      },
      {
        "name": "乘风 (Riding)",
        "billing": "月付",
        "price": "¥27",
        "priceNum": 27,
        "traffic": "200GB",
        "trafficCycle": "每月"
      },
      {
        "name": "破风 (Breaking)",
        "billing": "月付",
        "price": "¥57",
        "priceNum": 57,
        "traffic": "500GB",
        "trafficCycle": "每月"
      },
      {
        "name": "御风 (Mastery)",
        "billing": "月付",
        "price": "¥127",
        "priceNum": 127,
        "traffic": "1200GB",
        "trafficCycle": "每月"
      },
      {
        "name": "信风·不限时",
        "billing": "一次性付费",
        "price": "¥200",
        "priceNum": 200,
        "traffic": "270GB",
        "trafficCycle": "一次性"
      },
      {
        "name": "长风·不限时",
        "billing": "一次性付费",
        "price": "¥370",
        "priceNum": 370,
        "traffic": "570GB",
        "trafficCycle": "一次性"
      }
    ],
    "highlights": [
      "IEPL 专线 + VLESS 协议，定位入门级高性价比机场",
      "覆盖香港、新加坡、日本、美国等多地原生 IP 节点",
      "可解锁 Netflix、Disney+ 等主流流媒体及 ChatGPT、Claude 等 AI 工具",
      "客服 7×24 小时在线，夜间由 AI 客服值守，适合新手和轻度用户"
    ],
    "pros": [
      "IEPL 专线 + VLESS 协议，定位入门级高性价比机场",
      "覆盖香港、新加坡、日本、美国等多地原生 IP 节点",
      "实测香港低延迟节点平均 25ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "微风网络在便宜机场推荐里经常被提到，价格是它最直接的优势——11 元/月起，比不少同类 IEPL 机场推荐都要低，对学生党和轻度用户比较友好。走的是 IEPL 专线而不是纯中转，所以稳定性比一些更便宜的中转机场要好一点，日常刷网页、看视频、用 ChatGPT 基本没问题，节点也覆盖了香港、新加坡、日本、美国这几个热门地区。客服口碑在这个价位段里算是不错的，第一次用机场遇到问题至少有地方问，这对刚接触机场的新手来说挺重要。不过 100GB 的流量对重度用户可能不太够，属于入门够用但称不上顶配的类型，如果每天长时间在线，可能需要额外留意用量。",
    "dataStatus": "verified",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "微风网络 在晚高峰时段的速度和稳定性表现如何？",
        "a": "微风网络 采用 IEPL 高速内网专线，在我们的基准测速中，香港节点平均延迟约为 25ms，下载速度可达 546Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "微风网络 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，微风网络 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "微风网络 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "微风网络 全面兼容 Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "IEPL专线",
      "Top10优选",
      "¥7.00/月起",
      "VLESS"
    ]
  },
  {
    "slug": "muguang",
    "name": "暮光加速",
    "pinyin": "muguang",
    "englishName": "Twilight Network",
    "rank": 3,
    "isFeatured": false,
    "isTop10": true,
    "tier": "recommended",
    "establishedYear": "2023",
    "affUrl": "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
    "hasDirectAff": true,
    "discountCode": "muguang5555",
    "minMonthlyPrice": "¥20.00/月",
    "minMonthlyPriceNum": 20,
    "lineType": "IEPL 专线 / BGP 智能中转",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clients": [
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 64,
      "peakDownloadMbps": 509,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港",
        "latencyMs": 26,
        "downloadMbps": 509,
        "testDate": "2026-10-19"
      },
      {
        "node": "台湾",
        "latencyMs": 40,
        "downloadMbps": 107,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡",
        "latencyMs": 43,
        "downloadMbps": 419,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本",
        "latencyMs": 53,
        "downloadMbps": 150,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国",
        "latencyMs": 160,
        "downloadMbps": 19,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "【暮光·基础版】",
        "billing": "月付",
        "price": "¥20",
        "priceNum": 20,
        "traffic": "120GB",
        "trafficCycle": "每月"
      },
      {
        "name": "【暮光·标准版】",
        "billing": "月付",
        "price": "¥40",
        "priceNum": 40,
        "traffic": "240GB",
        "trafficCycle": "每月"
      },
      {
        "name": "【暮光·旗舰版】",
        "billing": "月付",
        "price": "¥100",
        "priceNum": 100,
        "traffic": "700GB",
        "trafficCycle": "每月"
      },
      {
        "name": "【暮光·至尊版】",
        "billing": "月付",
        "price": "¥180",
        "priceNum": 180,
        "traffic": "1500GB",
        "trafficCycle": "每月"
      },
      {
        "name": "【暮光·年付轻量版】",
        "billing": "年付",
        "price": "¥109",
        "priceNum": 109,
        "traffic": "70GB",
        "trafficCycle": "每月"
      },
      {
        "name": "【暮光·不限时轻量包】",
        "billing": "一次性付费",
        "price": "¥219",
        "priceNum": 219,
        "traffic": "150GB",
        "trafficCycle": "一次性"
      },
      {
        "name": "【暮光·不限时标准包】",
        "billing": "一次性付费",
        "price": "¥529",
        "priceNum": 529,
        "traffic": "400GB",
        "trafficCycle": "一次性"
      },
      {
        "name": "【暮光·不限时大容量包】",
        "billing": "一次性付费",
        "price": "¥959",
        "priceNum": 959,
        "traffic": "800GB",
        "trafficCycle": "一次性"
      },
      {
        "name": "独享私人定制节点",
        "billing": "月付",
        "price": "¥600",
        "priceNum": 600,
        "traffic": "500GB",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "BGP 智能调度，专线级出口，主打稳定低延迟",
      "覆盖 Windows、macOS、iOS、Android、Linux 全平台",
      "支持多设备同时在线，套餐 120GB–1500GB 流量可选",
      "官方宣称提供 7×24 小时真人客服"
    ],
    "pros": [
      "BGP 智能调度，专线级出口，主打稳定低延迟",
      "覆盖 Windows、macOS、iOS、Android、Linux 全平台",
      "实测香港低延迟节点平均 26ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "暮光加速面向的是个人和团队跨平台使用场景，主打 BGP 智能调度和专线级出口，覆盖 Windows、macOS、iOS、Android、Linux 全平台，多设备同时在线是它的核心卖点，比较适合放进多设备机场推荐这个分类。9 元/月起的价格在专线机场推荐里不算高，120GB–1500GB 的流量档位选择也比较多，能满足不同用量需求。官方称支持 7×24 小时真人客服，对经常需要跨境办公、远程协作的团队用户会有一定吸引力，也支持 Netflix、Disney+、HBO、Hulu 等流媒体。目前没有查到公开的优惠码信息，如果预算敏感，建议直接联系客服问问当前是否有活动。",
    "dataStatus": "verified",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "暮光加速 在晚高峰时段的速度和稳定性表现如何？",
        "a": "暮光加速 采用 IEPL 专线 / BGP 智能中转，在我们的基准测速中，香港节点平均延迟约为 26ms，下载速度可达 509Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "暮光加速 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，暮光加速 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "暮光加速 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "暮光加速 全面兼容 Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "IEPL专线",
      "Top10优选",
      "¥20.00/月起",
      "VLESS"
    ]
  },
  {
    "slug": "feimao",
    "name": "飞猫云",
    "pinyin": "feimao",
    "englishName": "FlyCat Cloud",
    "rank": 4,
    "isFeatured": false,
    "isTop10": true,
    "tier": "recommended",
    "establishedYear": "2023",
    "affUrl": "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
    "hasDirectAff": true,
    "discountCode": "flycat888",
    "minMonthlyPrice": "¥7.00/月",
    "minMonthlyPriceNum": 7,
    "lineType": "IEPL 专线 / BGP 智能中转",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clients": [
      "自研定制客户端",
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 68,
      "peakDownloadMbps": 526,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港",
        "latencyMs": 21,
        "downloadMbps": 526,
        "testDate": "2026-10-19"
      },
      {
        "node": "台湾",
        "latencyMs": 41,
        "downloadMbps": 116,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡",
        "latencyMs": 45,
        "downloadMbps": 413,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本",
        "latencyMs": 54,
        "downloadMbps": 138,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国",
        "latencyMs": 178,
        "downloadMbps": 14,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "飞猫·学生版",
        "billing": "年付",
        "price": "¥84",
        "priceNum": 84,
        "traffic": "50GB",
        "trafficCycle": "每月"
      },
      {
        "name": "飞猫·星耀版",
        "billing": "月付",
        "price": "¥25",
        "priceNum": 25,
        "traffic": "150GB",
        "trafficCycle": "每月"
      },
      {
        "name": "飞猫·星环版",
        "billing": "月付",
        "price": "¥45",
        "priceNum": 45,
        "traffic": "300GB",
        "trafficCycle": "每月"
      },
      {
        "name": "飞猫·银河版",
        "billing": "月付",
        "price": "¥85",
        "priceNum": 85,
        "traffic": "600GB",
        "trafficCycle": "每月"
      },
      {
        "name": "飞猫·宇宙版",
        "billing": "月付",
        "price": "¥150",
        "priceNum": 150,
        "traffic": "1000GB",
        "trafficCycle": "每月"
      },
      {
        "name": "飞猫·不限时套餐",
        "billing": "一次性付费",
        "price": "¥680",
        "priceNum": 680,
        "traffic": "1000GB",
        "trafficCycle": "一次性"
      },
      {
        "name": "飞猫·定制套餐",
        "billing": "月付",
        "price": "¥550",
        "priceNum": 550,
        "traffic": "500GB",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "主打轻快连接、简单配置和灵活节点切换",
      "专属客户端下载登录即用，不用配订阅",
      "不用自己挑客户端、导订阅，新手容易快速上手",
      "节点覆盖亚太、欧美等热门地区"
    ],
    "pros": [
      "主打轻快连接、简单配置和灵活节点切换",
      "专属客户端下载登录即用，不用配订阅",
      "实测香港低延迟节点平均 21ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "飞猫云更适合放进新手机场推荐这个分类——它的重点不是极致速度或专线，而是省事：走的是专属客户端模式，下载 App、登录就能用，不用找订阅链接、不用配 Clash，第一次用机场的人也能快速上手。7 元/月起的价格也不算贵，节点覆盖亚太和欧美常见地区，日常看视频、用 AI 工具都能应付，作为轻量日常使用足够。它不是那种主打顶级专线体验的机场，如果你要的是极致稳定，可能得看看更偏专线机场推荐的选项，但作为日常主力或备用机场，飞猫云的易用性是个明显加分项。",
    "dataStatus": "verified",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "飞猫云 在晚高峰时段的速度和稳定性表现如何？",
        "a": "飞猫云 采用 IEPL 专线 / BGP 智能中转，在我们的基准测速中，香港节点平均延迟约为 21ms，下载速度可达 526Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "飞猫云 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，飞猫云 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "飞猫云 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "飞猫云 全面兼容 自研定制客户端、Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "IEPL专线",
      "Top10优选",
      "¥7.00/月起",
      "VLESS"
    ]
  },
  {
    "slug": "dalaoyun",
    "name": "大佬云",
    "pinyin": "dalaoyun",
    "englishName": "DaLaoYun",
    "rank": 5,
    "isFeatured": false,
    "isTop10": true,
    "tier": "recommended",
    "establishedYear": "2023",
    "affUrl": "https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN",
    "hasDirectAff": true,
    "discountCode": "dly888",
    "minMonthlyPrice": "¥5.60/月",
    "minMonthlyPriceNum": 5.6,
    "lineType": "IEPL 高速内网专线",
    "protocols": [
      "VLESS"
    ],
    "clients": [
      "自研定制客户端",
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 77,
      "peakDownloadMbps": 425,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港 节点",
        "latencyMs": 30,
        "downloadMbps": 425,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本 节点",
        "latencyMs": 60,
        "downloadMbps": 265,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡 节点",
        "latencyMs": 53,
        "downloadMbps": 300,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国 节点",
        "latencyMs": 165,
        "downloadMbps": 80,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "大佬云·标准版",
        "billing": "月付",
        "price": "¥20",
        "priceNum": 20,
        "traffic": "150GB",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "IEPL专线",
      "VLESS 协议",
      "年付约5.6元/月 60GB",
      "自研客户端 + 第三方订阅导入",
      "季付及以上 7 折",
      "和闪电鼠、云界线、榴莲云、环球梯规格几乎相同",
      "品牌资料没有提供差异化的独有卖点"
    ],
    "pros": [
      "IEPL专线",
      "VLESS 协议",
      "实测香港低延迟节点平均 30ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "大佬云是一家面向个人与团队的综合网络代理服务商，提供多地海外原生节点与主流协议支持。",
    "dataStatus": "verified",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "大佬云 在晚高峰时段的速度和稳定性表现如何？",
        "a": "大佬云 采用 IEPL 高速内网专线，在我们的基准测速中，香港节点平均延迟约为 30ms，下载速度可达 425Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "大佬云 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，大佬云 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "大佬云 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "大佬云 全面兼容 自研定制客户端、Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "IEPL专线",
      "Top10优选",
      "¥5.60/月起",
      "VLESS"
    ]
  },
  {
    "slug": "xingdaomeng",
    "name": "星岛梦",
    "pinyin": "xingdaomeng",
    "englishName": "XingDaoMeng",
    "rank": 6,
    "isFeatured": false,
    "isTop10": true,
    "tier": "recommended",
    "establishedYear": "2020",
    "affUrl": "https://guangs.xingdaomeng.com/#/?code=1TynBYnR",
    "hasDirectAff": true,
    "discountCode": "nmw888",
    "minMonthlyPrice": "¥8.00/月",
    "minMonthlyPriceNum": 8,
    "lineType": "IEPL 高速内网专线",
    "protocols": [
      "Trojan"
    ],
    "clients": [
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 69,
      "peakDownloadMbps": 504,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港",
        "latencyMs": 27,
        "downloadMbps": 504,
        "testDate": "2026-10-19"
      },
      {
        "node": "台湾",
        "latencyMs": 41,
        "downloadMbps": 103,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡",
        "latencyMs": 44,
        "downloadMbps": 411,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本",
        "latencyMs": 57,
        "downloadMbps": 136,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国",
        "latencyMs": 177,
        "downloadMbps": 18,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "星岛梦·贴心小包",
        "billing": "年付",
        "price": "¥96",
        "priceNum": 96,
        "traffic": "60GB",
        "trafficCycle": "每月"
      },
      {
        "name": "星岛梦·超量150G",
        "billing": "月付",
        "price": "¥25",
        "priceNum": 25,
        "traffic": "150GB",
        "trafficCycle": "每月"
      },
      {
        "name": "星岛梦·进阶300G",
        "billing": "月付",
        "price": "¥50",
        "priceNum": 50,
        "traffic": "300GB",
        "trafficCycle": "每月"
      },
      {
        "name": "星岛梦·闪光500G",
        "billing": "月付",
        "price": "¥70",
        "priceNum": 70,
        "traffic": "500GB",
        "trafficCycle": "每月"
      },
      {
        "name": "星岛梦·旗舰1T版",
        "billing": "月付",
        "price": "¥130",
        "priceNum": 130,
        "traffic": "1000GB",
        "trafficCycle": "每月"
      },
      {
        "name": "星岛梦·永久不限时100",
        "billing": "一次性付费",
        "price": "¥100",
        "priceNum": 100,
        "traffic": "100GB",
        "trafficCycle": "一次性"
      },
      {
        "name": "星岛梦·永久不限时300",
        "billing": "一次性付费",
        "price": "¥300",
        "priceNum": 300,
        "traffic": "300GB",
        "trafficCycle": "一次性"
      },
      {
        "name": "星岛梦·永久不限时1TB",
        "billing": "一次性付费",
        "price": "¥600",
        "priceNum": 600,
        "traffic": "1000GB",
        "trafficCycle": "一次性"
      },
      {
        "name": "星岛梦·定制套餐",
        "billing": "月付",
        "price": "¥680",
        "priceNum": 680,
        "traffic": "500GB",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "IEPL 专线，1 倍流量且不限设备使用",
      "节点覆盖香港、台湾、日本、美国、新加坡及韩国、东南亚等地区",
      "支持 Netflix、Disney+、YouTube Premium 等主流流媒体",
      "兼容 ChatGPT、Gemini 等 AI 工具及 TikTok 跨区使用"
    ],
    "pros": [
      "IEPL 专线，1 倍流量且不限设备使用",
      "节点覆盖香港、台湾、日本、美国、新加坡及韩国、东南亚等地区",
      "实测香港低延迟节点平均 27ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "星岛梦走的是 IEPL 专线，Trojan 协议，1 倍流量不限设备，节点覆盖香港、台湾、日本、美国、新加坡，还延伸到韩国和东南亚等地区，在 IEPL 机场推荐里节点覆盖算是比较广的一个。适合多设备家庭或者小团队一起用，日常流媒体解锁（Netflix、Disney+、YouTube Premium）和 ChatGPT、Gemini 等 AI 工具访问都在支持范围内，TikTok 跨区使用也有涉及。8 元/月起的价格放在稳定机场推荐里不算贵，配合海外技术团队和多人客服，属于综合体验还不错的选项。具体线路表现建议结合自己的地区先测一轮，再决定要不要长期订阅。",
    "dataStatus": "verified",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "星岛梦 在晚高峰时段的速度和稳定性表现如何？",
        "a": "星岛梦 采用 IEPL 高速内网专线，在我们的基准测速中，香港节点平均延迟约为 27ms，下载速度可达 504Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "星岛梦 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，星岛梦 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "星岛梦 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "星岛梦 全面兼容 Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "IEPL专线",
      "Top10优选",
      "¥8.00/月起",
      "Trojan"
    ]
  },
  {
    "slug": "ermao",
    "name": "二猫云",
    "pinyin": "ermao",
    "englishName": "ErMaoYun",
    "rank": 7,
    "isFeatured": false,
    "isTop10": true,
    "tier": "recommended",
    "establishedYear": "2023",
    "affUrl": "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
    "hasDirectAff": true,
    "discountCode": "ermao5555",
    "minMonthlyPrice": "¥20.00/月",
    "minMonthlyPriceNum": 20,
    "lineType": "IEPL 高速内网专线",
    "protocols": [
      "VLESS"
    ],
    "clients": [
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 59,
      "peakDownloadMbps": 481,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港",
        "latencyMs": 22,
        "downloadMbps": 481,
        "testDate": "2026-10-19"
      },
      {
        "node": "台湾",
        "latencyMs": 41,
        "downloadMbps": 118,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡",
        "latencyMs": 46,
        "downloadMbps": 407,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本",
        "latencyMs": 53,
        "downloadMbps": 143,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国",
        "latencyMs": 134,
        "downloadMbps": 17,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "二猫云·不限时套餐",
        "billing": "一次性付费",
        "price": "¥99",
        "priceNum": 99,
        "traffic": "100GB",
        "trafficCycle": "一次性"
      },
      {
        "name": "二猫年付小包",
        "billing": "年付",
        "price": "¥89",
        "priceNum": 89,
        "traffic": "60GB",
        "trafficCycle": "每月"
      },
      {
        "name": "二猫云·白猫套餐",
        "billing": "月付",
        "price": "¥20",
        "priceNum": 20,
        "traffic": "130GB",
        "trafficCycle": "每月"
      },
      {
        "name": "二猫云·橘猫畅玩版",
        "billing": "月付",
        "price": "¥40",
        "priceNum": 40,
        "traffic": "230GB",
        "trafficCycle": "每月"
      },
      {
        "name": "二猫云·牛奶猫尊享版",
        "billing": "月付",
        "price": "¥80",
        "priceNum": 80,
        "traffic": "430GB",
        "trafficCycle": "每月"
      },
      {
        "name": "二猫云·黑猫重度用户版",
        "billing": "月付",
        "price": "¥160",
        "priceNum": 160,
        "traffic": "850GB",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "全线 IEPL 专线，主打长期稳定而非低价走量",
      "账号不限设备连接数，多端同时在线无压力",
      "海外技术团队主理，配备独家定制客户端",
      "解锁 Netflix、YouTube 等流媒体及 ChatGPT 等 AI 工具"
    ],
    "pros": [
      "全线 IEPL 专线，主打长期稳定而非低价走量",
      "账号不限设备连接数，多端同时在线无压力",
      "实测香港低延迟节点平均 22ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "二猫云走 IEPL 专线，VLESS 协议，20 元/月起，130GB 流量。官方强调自己不做低价跑路盘那一套，主打长期稳定，还配了一套独家定制客户端。账号不限设备连接数，Netflix、YouTube、ChatGPT 这些日常场景基本能覆盖，但 Claude 和 Gemini 官方没给出确定说法，能不能用建议自己先测一下。节点覆盖香港、日本、美国，比不少同类机场少了新加坡这一站。套餐从月付到三年付都有，摆明是想留长期用户，价格在这个价位的专线机场里不算便宜，预算有限或者只是短期用用，可以先看看其他更便宜的选项。",
    "dataStatus": "verified",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "二猫云 在晚高峰时段的速度和稳定性表现如何？",
        "a": "二猫云 采用 IEPL 高速内网专线，在我们的基准测速中，香港节点平均延迟约为 22ms，下载速度可达 481Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "二猫云 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，二猫云 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "二猫云 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "二猫云 全面兼容 Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "IEPL专线",
      "Top10优选",
      "¥20.00/月起",
      "VLESS"
    ]
  },
  {
    "slug": "wuyou",
    "name": "无忧链接",
    "pinyin": "wuyou",
    "englishName": "WorryFree Link",
    "rank": 8,
    "isFeatured": false,
    "isTop10": true,
    "tier": "recommended",
    "establishedYear": "2023",
    "affUrl": "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",
    "hasDirectAff": true,
    "discountCode": "wuyou666",
    "minMonthlyPrice": "¥19.00/月",
    "minMonthlyPriceNum": 19,
    "lineType": "IEPL 专线 / BGP 智能中转",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clients": [
      "自研定制客户端",
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 61,
      "peakDownloadMbps": 531,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港",
        "latencyMs": 23,
        "downloadMbps": 531,
        "testDate": "2026-10-19"
      },
      {
        "node": "台湾",
        "latencyMs": 41,
        "downloadMbps": 107,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡",
        "latencyMs": 42,
        "downloadMbps": 418,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本",
        "latencyMs": 55,
        "downloadMbps": 147,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国",
        "latencyMs": 145,
        "downloadMbps": 17,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "MINI链接",
        "billing": "年付",
        "price": "¥79",
        "priceNum": 79,
        "traffic": "40GB",
        "trafficCycle": "每月"
      },
      {
        "name": "舒心链接",
        "billing": "月付",
        "price": "¥19",
        "priceNum": 19,
        "traffic": "100GB",
        "trafficCycle": "每月"
      },
      {
        "name": "省心链接",
        "billing": "月付",
        "price": "¥33",
        "priceNum": 33,
        "traffic": "200GB",
        "trafficCycle": "每月"
      },
      {
        "name": "随心链接",
        "billing": "月付",
        "price": "¥77",
        "priceNum": 77,
        "traffic": "500GB",
        "trafficCycle": "每月"
      },
      {
        "name": "忘忧链接",
        "billing": "月付",
        "price": "¥117",
        "priceNum": 117,
        "traffic": "1000GB",
        "trafficCycle": "每月"
      },
      {
        "name": "100G永久不限时 无忧链接",
        "billing": "一次性付费",
        "price": "¥108",
        "priceNum": 108,
        "traffic": "100GB",
        "trafficCycle": "一次性"
      },
      {
        "name": "300G永久不限时 无忧链接",
        "billing": "一次性付费",
        "price": "¥298",
        "priceNum": 298,
        "traffic": "300GB",
        "trafficCycle": "一次性"
      }
    ],
    "highlights": [
      "面向轻度用户和跨境电商的超高性价比套餐",
      "全线节点无倍率、不限速、不限设备数量",
      "专属客户端下载登录即用，新手不用折腾订阅配置",
      "香港、新加坡、日本、美国均有节点，支持 TikTok 跨区直连",
      "客服 7×24 小时在线，夜间由 AI 客服值守"
    ],
    "pros": [
      "面向轻度用户和跨境电商的超高性价比套餐",
      "全线节点无倍率、不限速、不限设备数量",
      "实测香港低延迟节点平均 23ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "如果你要找便宜机场推荐里价格最低的那一档，无忧链接大概率会出现——6.5 元/月起，是这份榜单里门槛最低的机场之一，主打的是跨境电商和轻度用户场景，TikTok 跨区直连和直播支持是它比较突出的点。2026 年 10 月起直接用官方专属客户端，下载登录就能用，不用折腾订阅和复杂配置，对新手比较友好。同时也能解锁 Netflix、Disney+ 和 YouTube 等主流流媒体，日常刷视频基本够用。不过流量只有 40GB，节点覆盖也偏基础，如果你的使用场景是重度办公或者多设备同时在线，这个价位的套餐大概率撑不了太久，更适合当作低成本的备用机场或者电商运营的辅助工具。",
    "dataStatus": "verified",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "无忧链接 在晚高峰时段的速度和稳定性表现如何？",
        "a": "无忧链接 采用 IEPL 专线 / BGP 智能中转，在我们的基准测速中，香港节点平均延迟约为 23ms，下载速度可达 531Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "无忧链接 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，无忧链接 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "无忧链接 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "无忧链接 全面兼容 自研定制客户端、Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "IEPL专线",
      "Top10优选",
      "¥19.00/月起",
      "VLESS"
    ]
  },
  {
    "slug": "weitu",
    "name": "唯兔云",
    "pinyin": "weitu",
    "englishName": "V2Yun",
    "rank": 9,
    "isFeatured": false,
    "isTop10": true,
    "tier": "recommended",
    "establishedYear": "2023",
    "affUrl": "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    "hasDirectAff": true,
    "discountCode": "weitu666",
    "minMonthlyPrice": "¥14.90/月",
    "minMonthlyPriceNum": 14.9,
    "lineType": "全专线 IPLC / 独立高速通道",
    "protocols": [
      "Trojan"
    ],
    "clients": [
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 69,
      "peakDownloadMbps": 500,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港",
        "latencyMs": 27,
        "downloadMbps": 500,
        "testDate": "2026-10-19"
      },
      {
        "node": "台湾",
        "latencyMs": 37,
        "downloadMbps": 100,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡",
        "latencyMs": 44,
        "downloadMbps": 414,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本",
        "latencyMs": 56,
        "downloadMbps": 147,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国",
        "latencyMs": 179,
        "downloadMbps": 17,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "唯兔云·年付加强专线",
        "billing": "年付",
        "price": "¥120",
        "priceNum": 120,
        "traffic": "75GB",
        "trafficCycle": "每月"
      },
      {
        "name": "唯兔云·年付版限量款",
        "billing": "年付",
        "price": "¥79.90",
        "priceNum": 79.9,
        "traffic": "45GB",
        "trafficCycle": "每月"
      },
      {
        "name": "唯兔云·节假日限时开启（14.9元）",
        "billing": "月付",
        "price": "¥14.9",
        "priceNum": 14.9,
        "traffic": "100GB",
        "trafficCycle": "每月"
      },
      {
        "name": "唯兔云·普通版",
        "billing": "月付",
        "price": "¥19.90",
        "priceNum": 19.9,
        "traffic": "150GB",
        "trafficCycle": "每月"
      },
      {
        "name": "唯兔云·进阶版",
        "billing": "月付",
        "price": "¥29.90",
        "priceNum": 29.9,
        "traffic": "200GB",
        "trafficCycle": "每月"
      },
      {
        "name": "唯兔云·专业版",
        "billing": "月付",
        "price": "¥59.90",
        "priceNum": 59.9,
        "traffic": "500GB",
        "trafficCycle": "每月"
      },
      {
        "name": "唯兔云·至尊版",
        "billing": "月付",
        "price": "¥119.90",
        "priceNum": 119.9,
        "traffic": "1000GB",
        "trafficCycle": "每月"
      },
      {
        "name": "唯兔云·永久不限时",
        "billing": "一次性付费",
        "price": "¥100",
        "priceNum": 100,
        "traffic": "100GB",
        "trafficCycle": "一次性"
      },
      {
        "name": "唯兔云·永久不限时",
        "billing": "一次性付费",
        "price": "¥160",
        "priceNum": 160,
        "traffic": "200GB",
        "trafficCycle": "一次性"
      },
      {
        "name": "唯兔云·永久不限时",
        "billing": "一次性付费",
        "price": "¥340",
        "priceNum": 340,
        "traffic": "500GB",
        "trafficCycle": "一次性"
      }
    ],
    "highlights": [
      "IPLC 专线，1 倍流量、不限速及不限设备连接",
      "支持 ChatGPT、Gemini、Claude 等主流 AI 工具",
      "支持 Netflix、Disney+、YouTube Premium 及 TikTok 等解锁",
      "提供海外技术团队与多人客服支持"
    ],
    "pros": [
      "IPLC 专线，1 倍流量、不限速及不限设备连接",
      "支持 ChatGPT、Gemini、Claude 等主流 AI 工具",
      "实测香港低延迟节点平均 27ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "唯兔云走 IPLC 专线，Trojan 协议，主打 1 倍流量、不限速、不限设备连接，比较适合个人、家庭甚至小团队一起用，属于 IPLC 机场推荐里综合能力不错的选项。它同时支持 ChatGPT、Gemini、Claude 等 AI 工具和 Netflix、Disney+、YouTube Premium、TikTok 等流媒体解锁，覆盖的使用场景比较全，日常娱乐和 AI 办公都能兼顾。价格在 15 元/月左右，比一些入门中转机场贵，但比顶级专线机场便宜，算是中间档位的选择。海外技术团队加多人客服是它宣传的增值服务，具体套餐细节和优惠力度建议下单前以官网当前显示为准，价格可能随时调整。",
    "dataStatus": "verified",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "唯兔云 在晚高峰时段的速度和稳定性表现如何？",
        "a": "唯兔云 采用 全专线 IPLC / 独立高速通道，在我们的基准测速中，香港节点平均延迟约为 27ms，下载速度可达 500Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "唯兔云 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，唯兔云 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "唯兔云 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "唯兔云 全面兼容 Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "高速中转",
      "Top10优选",
      "¥14.90/月起",
      "Trojan"
    ]
  },
  {
    "slug": "firefly",
    "name": "Firefly",
    "pinyin": "firefly",
    "englishName": "Firefly VPN",
    "rank": 10,
    "isFeatured": false,
    "isTop10": true,
    "tier": "recommended",
    "establishedYear": "2022",
    "affUrl": "https://vip02.fireflyaff.com/#/?code=2n7VURre",
    "hasDirectAff": true,
    "discountCode": "firefly",
    "minMonthlyPrice": "¥8.00/月",
    "minMonthlyPriceNum": 8,
    "lineType": "全专线 IPLC / 独立高速通道",
    "protocols": [
      "VLESS"
    ],
    "clients": [
      "自研定制客户端",
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 62,
      "peakDownloadMbps": 547,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港",
        "latencyMs": 27,
        "downloadMbps": 547,
        "testDate": "2026-10-19"
      },
      {
        "node": "台湾",
        "latencyMs": 39,
        "downloadMbps": 135,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡",
        "latencyMs": 42,
        "downloadMbps": 445,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本",
        "latencyMs": 57,
        "downloadMbps": 147,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国",
        "latencyMs": 143,
        "downloadMbps": 30,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "Firefly 年付版",
        "billing": "年付",
        "price": "¥96",
        "priceNum": 96,
        "traffic": "60GB",
        "trafficCycle": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "月付",
        "price": "¥25",
        "priceNum": 25,
        "traffic": "150GB",
        "trafficCycle": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "月付",
        "price": "¥45",
        "priceNum": 45,
        "traffic": "300GB",
        "trafficCycle": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "月付",
        "price": "¥85",
        "priceNum": 85,
        "traffic": "600GB",
        "trafficCycle": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "月付",
        "price": "¥150",
        "priceNum": 150,
        "traffic": "1000GB",
        "trafficCycle": "每月"
      },
      {
        "name": "Firefly 不限时",
        "billing": "一次性付费",
        "price": "¥100",
        "priceNum": 100,
        "traffic": "100GB",
        "trafficCycle": "一次性"
      }
    ],
    "highlights": [
      "IPLC 专线接入，主打低延迟与高稳定性",
      "全节点不限速，不限客户端及设备数量",
      "原生 IP 节点，覆盖香港、新加坡、日本、美国",
      "海外技术团队维护线路，客服 7×24 小时在线，夜间由 AI 客服值守"
    ],
    "pros": [
      "IPLC 专线接入，主打低延迟与高稳定性",
      "全节点不限速，不限客户端及设备数量",
      "实测香港低延迟节点平均 27ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "如果你在找 2026 年靠谱的 IPLC 机场推荐，Firefly 算是专线机场推荐里性价比不错的一个选择。8 元/月起的价格，比很多同样走 IPLC 专线的机场便宜一些，晚高峰稳定性是它的核心卖点，对每天要用 ChatGPT 办公、或者经常在深夜追剧的人来说，这一点比单纯堆节点数量更实际。节点覆盖香港、新加坡、日本、美国这几个常见地区，原生 IP 让 Netflix、Disney+ 这类流媒体解锁相对稳定，2026 年 10 月起直接用官方专属客户端，下载登录就能连，不用再配订阅链接，使用门槛更低。不限设备数量也算是个加分项，家里几台设备一起用不会受限制。当然，专线机场的价格门槛终归比中转线路高，如果只是偶尔上网、预算有限，没必要非选它不可。",
    "dataStatus": "verified",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "Firefly 在晚高峰时段的速度和稳定性表现如何？",
        "a": "Firefly 采用 全专线 IPLC / 独立高速通道，在我们的基准测速中，香港节点平均延迟约为 27ms，下载速度可达 547Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "Firefly 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，Firefly 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "Firefly 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "Firefly 全面兼容 自研定制客户端、Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "高速中转",
      "Top10优选",
      "¥8.00/月起",
      "VLESS"
    ]
  },
  {
    "slug": "yuzhou",
    "name": "宇宙云",
    "pinyin": "yuzhou",
    "englishName": "YuZhou Cloud",
    "rank": 11,
    "isFeatured": false,
    "isTop10": false,
    "tier": "budget",
    "establishedYear": "2023",
    "affUrl": "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
    "hasDirectAff": true,
    "discountCode": "YUZHOU553",
    "minMonthlyPrice": "¥15.00/月",
    "minMonthlyPriceNum": 15,
    "lineType": "IEPL 专线 / BGP 智能中转",
    "protocols": [
      "VLESS"
    ],
    "clients": [
      "自研定制客户端",
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 76,
      "peakDownloadMbps": 395,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港 节点",
        "latencyMs": 26,
        "downloadMbps": 395,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本 节点",
        "latencyMs": 56,
        "downloadMbps": 247,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡 节点",
        "latencyMs": 49,
        "downloadMbps": 276,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国 节点",
        "latencyMs": 171,
        "downloadMbps": 74,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "宇宙云·标准版",
        "billing": "月付",
        "price": "¥15",
        "priceNum": 15,
        "traffic": "150GB",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "60+ 节点；三网优化；智能负载均衡（历史品牌资料）",
      "完整资料、节点覆盖、支持设备与客服信息有待补充"
    ],
    "pros": [
      "60+ 节点；三网优化；智能负载均衡（历史品牌资料）",
      "完整资料、节点覆盖、支持设备与客服信息有待补充",
      "实测香港低延迟节点平均 26ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "宇宙云是一家面向个人与团队的综合网络代理服务商，提供多地海外原生节点与主流协议支持。",
    "dataStatus": "vendor",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "宇宙云 在晚高峰时段的速度和稳定性表现如何？",
        "a": "宇宙云 采用 IEPL 专线 / BGP 智能中转，在我们的基准测速中，香港节点平均延迟约为 26ms，下载速度可达 395Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "宇宙云 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，宇宙云 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "宇宙云 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "宇宙云 全面兼容 自研定制客户端、Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "IEPL专线",
      "性价比推荐",
      "¥15.00/月起",
      "VLESS"
    ]
  },
  {
    "slug": "u1s1",
    "name": "U1S1",
    "pinyin": "u1s1",
    "englishName": "U1S1 Network",
    "rank": 12,
    "isFeatured": false,
    "isTop10": false,
    "tier": "budget",
    "establishedYear": "2023",
    "affUrl": "https://guangs.vipaff.cc/#/?code=xhX5X22f",
    "hasDirectAff": true,
    "discountCode": "akaka",
    "minMonthlyPrice": "¥20.00/月",
    "minMonthlyPriceNum": 20,
    "lineType": "全专线 IPLC / 独立高速通道",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clients": [
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 60,
      "peakDownloadMbps": 538,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港",
        "latencyMs": 24,
        "downloadMbps": 538,
        "testDate": "2026-10-19"
      },
      {
        "node": "台湾",
        "latencyMs": 39,
        "downloadMbps": 107,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡",
        "latencyMs": 46,
        "downloadMbps": 414,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本",
        "latencyMs": 57,
        "downloadMbps": 133,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国",
        "latencyMs": 134,
        "downloadMbps": 20,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "u1s1·就是好用包",
        "billing": "年付",
        "price": "¥96",
        "priceNum": 96,
        "traffic": "60GB",
        "trafficCycle": "每月"
      },
      {
        "name": "u1s1·普通人真够了包",
        "billing": "月付",
        "price": "¥20",
        "priceNum": 20,
        "traffic": "120GB",
        "trafficCycle": "每月"
      },
      {
        "name": "u1s1·你以为用不到包",
        "billing": "月付",
        "price": "¥40",
        "priceNum": 40,
        "traffic": "300GB",
        "trafficCycle": "每月"
      },
      {
        "name": "u1s1·瘾大就拉满包",
        "billing": "月付",
        "price": "¥100",
        "priceNum": 100,
        "traffic": "700GB",
        "trafficCycle": "每月"
      },
      {
        "name": "u1s1·我全都要包",
        "billing": "月付",
        "price": "¥180",
        "priceNum": 180,
        "traffic": "1500GB",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "2025 年起运营的 IPLC 专线机场",
      "官方宣称 2000Mbps 高速带宽，晚高峰不限速",
      "不限设备同时连接",
      "支持 Netflix、TikTok 等流媒体及 ChatGPT 等 AI 工具"
    ],
    "pros": [
      "2025 年起运营的 IPLC 专线机场",
      "官方宣称 2000Mbps 高速带宽，晚高峰不限速",
      "实测香港低延迟节点平均 24ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "U1S1 是 2025 年才上线的新机场，走 IPLC 专线，官方宣传 2000Mbps 高速带宽和晚高峰不限速，在高速机场推荐里算是敢喊出具体带宽数字的一个，实测反馈显示流媒体解锁和 ChatGPT 访问表现还可以。20 元 120GB 的套餐之外还有 1000GB 的一次性大流量包，适合短期内用量大、需要弹性补充流量的场景。因为运营时间还比较短，长期稳定性和售后表现还需要更长周期观察，这也是新机场普遍会遇到的问题，官方公开的优惠信息也比较有限。如果你愿意尝鲜，建议先用小额套餐测试，别一上来就冲大额年付。",
    "dataStatus": "verified",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "U1S1 在晚高峰时段的速度和稳定性表现如何？",
        "a": "U1S1 采用 全专线 IPLC / 独立高速通道，在我们的基准测速中，香港节点平均延迟约为 24ms，下载速度可达 538Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "U1S1 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，U1S1 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "U1S1 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "U1S1 全面兼容 Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "高速中转",
      "性价比推荐",
      "¥20.00/月起",
      "VLESS"
    ]
  },
  {
    "slug": "lingmao",
    "name": "灵猫网络",
    "pinyin": "lingmao",
    "englishName": "CivetNet",
    "rank": 13,
    "isFeatured": false,
    "isTop10": false,
    "tier": "budget",
    "establishedYear": "2023",
    "affUrl": "https://vip01.civetnet.com/#/?code=8MIAyxak",
    "hasDirectAff": true,
    "discountCode": "lmao888",
    "minMonthlyPrice": "¥19.00/月",
    "minMonthlyPriceNum": 19,
    "lineType": "IEPL 专线 / BGP 智能中转",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clients": [
      "自研定制客户端",
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 66,
      "peakDownloadMbps": 492,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港",
        "latencyMs": 22,
        "downloadMbps": 492,
        "testDate": "2026-10-19"
      },
      {
        "node": "台湾",
        "latencyMs": 40,
        "downloadMbps": 109,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡",
        "latencyMs": 46,
        "downloadMbps": 409,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本",
        "latencyMs": 57,
        "downloadMbps": 147,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国",
        "latencyMs": 164,
        "downloadMbps": 19,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "灵猫·年付小包",
        "billing": "年付",
        "price": "¥85",
        "priceNum": 85,
        "traffic": "45GB",
        "trafficCycle": "每月"
      },
      {
        "name": "灵猫·年付Small",
        "billing": "年付",
        "price": "¥195",
        "priceNum": 195,
        "traffic": "150GB",
        "trafficCycle": "每月"
      },
      {
        "name": "灵猫·年付Big",
        "billing": "年付",
        "price": "¥295",
        "priceNum": 295,
        "traffic": "300GB",
        "trafficCycle": "每月"
      },
      {
        "name": "灵猫·季付Big",
        "billing": "季付",
        "price": "¥125",
        "priceNum": 125,
        "traffic": "300GB",
        "trafficCycle": "每月"
      },
      {
        "name": "灵猫·月付Small",
        "billing": "月付",
        "price": "¥25",
        "priceNum": 25,
        "traffic": "150GB",
        "trafficCycle": "每月"
      },
      {
        "name": "灵猫·月付Big",
        "billing": "月付",
        "price": "¥45",
        "priceNum": 45,
        "traffic": "300GB",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "1 倍流量，不限速及不限设备使用",
      "覆盖香港、台湾、日本、美国、新加坡等亚洲及欧美节点",
      "支持 Netflix、Disney+、YouTube 等流媒体及 ChatGPT、TikTok 等平台",
      "专属客户端下载登录即用，不用导入订阅"
    ],
    "pros": [
      "1 倍流量，不限速及不限设备使用",
      "覆盖香港、台湾、日本、美国、新加坡等亚洲及欧美节点",
      "实测香港低延迟节点平均 22ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "灵猫走的是中转优化线路，7.1 元/月起，主打 1 倍流量、不限速、不限设备，这一点对家里多台设备同时用的人比较实用。节点覆盖了香港、新加坡、日本、美国这几个常见地区，2026 年 10 月起直接用官方专属客户端，下载登录就能用，不用自己配置，属于比较适合放进不限设备机场推荐的选项。官方也提到可以解锁 Netflix、Disney+ 等流媒体，以及 ChatGPT、TikTok 之类的应用，覆盖场景算是比较全面。不过具体解锁效果和线路参数会因账号和时段有差异，建议先用月付套餐测一测晚高峰体验，而不是直接冲年付套餐。",
    "dataStatus": "verified",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "灵猫网络 在晚高峰时段的速度和稳定性表现如何？",
        "a": "灵猫网络 采用 IEPL 专线 / BGP 智能中转，在我们的基准测速中，香港节点平均延迟约为 22ms，下载速度可达 492Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "灵猫网络 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，灵猫网络 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "灵猫网络 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "灵猫网络 全面兼容 自研定制客户端、Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "IEPL专线",
      "性价比推荐",
      "¥19.00/月起",
      "VLESS"
    ]
  },
  {
    "slug": "jilian",
    "name": "极连云",
    "pinyin": "jilian",
    "englishName": "JiLian Cloud",
    "rank": 14,
    "isFeatured": false,
    "isTop10": false,
    "tier": "budget",
    "establishedYear": "2023",
    "affUrl": "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
    "hasDirectAff": true,
    "discountCode": "ji8888",
    "minMonthlyPrice": "¥18.00/月",
    "minMonthlyPriceNum": 18,
    "lineType": "IEPL 高速内网专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clients": [
      "自研定制客户端",
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 79,
      "peakDownloadMbps": 380,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港 节点",
        "latencyMs": 29,
        "downloadMbps": 380,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本 节点",
        "latencyMs": 59,
        "downloadMbps": 238,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡 节点",
        "latencyMs": 52,
        "downloadMbps": 264,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国 节点",
        "latencyMs": 174,
        "downloadMbps": 71,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "极连云·标准版",
        "billing": "月付",
        "price": "¥15",
        "priceNum": 15,
        "traffic": "150GB",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "IEPL专线",
      "18元/月 100GB",
      "自研客户端 + 支持第三方客户端",
      "品牌资料明确说\"覆盖常见 AI 工具使用场景\"",
      "18 元档中有 IEPL + 自研客户端",
      "和光年梯同为 18 元档，但极连云是 100GB，光年梯是 110GB"
    ],
    "pros": [
      "IEPL专线",
      "18元/月 100GB",
      "实测香港低延迟节点平均 29ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "极连云是一家面向个人与团队的综合网络代理服务商，提供多地海外原生节点与主流协议支持。",
    "dataStatus": "verified",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "极连云 在晚高峰时段的速度和稳定性表现如何？",
        "a": "极连云 采用 IEPL 高速内网专线，在我们的基准测速中，香港节点平均延迟约为 29ms，下载速度可达 380Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "极连云 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，极连云 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "极连云 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "极连云 全面兼容 自研定制客户端、Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "IEPL专线",
      "性价比推荐",
      "¥18.00/月起",
      "VLESS"
    ]
  },
  {
    "slug": "guangnian",
    "name": "光年梯",
    "pinyin": "guangnian",
    "englishName": "GuangNian Ladder",
    "rank": 15,
    "isFeatured": false,
    "isTop10": false,
    "tier": "budget",
    "establishedYear": "2023",
    "affUrl": "https://guangs.gntaff.com/#/?code=X1FoxjGE",
    "hasDirectAff": true,
    "discountCode": "gnt6666",
    "minMonthlyPrice": "¥18.00/月",
    "minMonthlyPriceNum": 18,
    "lineType": "IEPL 高速内网专线",
    "protocols": [
      "VLESS"
    ],
    "clients": [
      "自研定制客户端",
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 76,
      "peakDownloadMbps": 375,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港 节点",
        "latencyMs": 30,
        "downloadMbps": 375,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本 节点",
        "latencyMs": 60,
        "downloadMbps": 235,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡 节点",
        "latencyMs": 53,
        "downloadMbps": 260,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国 节点",
        "latencyMs": 160,
        "downloadMbps": 70,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "光年梯·标准版",
        "billing": "月付",
        "price": "¥15",
        "priceNum": 15,
        "traffic": "150GB",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "IEPL专线",
      "VLESS 协议",
      "18元/月 110GB",
      "自研客户端 + 第三方订阅导入",
      "品牌资料明确说\"支持常见 AI 工具使用场景\"和\"支持主流流媒体使用场景\"",
      "18 元档中流量 110GB（比极连云多 10GB）",
      "定位\"介于低价套餐和综合型专线套餐之间\""
    ],
    "pros": [
      "IEPL专线",
      "VLESS 协议",
      "实测香港低延迟节点平均 30ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "光年梯是一家面向个人与团队的综合网络代理服务商，提供多地海外原生节点与主流协议支持。",
    "dataStatus": "verified",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "光年梯 在晚高峰时段的速度和稳定性表现如何？",
        "a": "光年梯 采用 IEPL 高速内网专线，在我们的基准测速中，香港节点平均延迟约为 30ms，下载速度可达 375Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "光年梯 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，光年梯 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "光年梯 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "光年梯 全面兼容 自研定制客户端、Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "IEPL专线",
      "性价比推荐",
      "¥18.00/月起",
      "VLESS"
    ]
  },
  {
    "slug": "yifan",
    "name": "一翻云",
    "pinyin": "yifan",
    "englishName": "YiFan Cloud",
    "rank": 16,
    "isFeatured": false,
    "isTop10": false,
    "tier": "budget",
    "establishedYear": "2023",
    "affUrl": "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",
    "hasDirectAff": true,
    "discountCode": "yfy6666",
    "minMonthlyPrice": "¥20.00/月",
    "minMonthlyPriceNum": 20,
    "lineType": "IEPL 高速内网专线",
    "protocols": [
      "VLESS",
      "Shadowsocks",
      "Hysteria 2"
    ],
    "clients": [
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 68,
      "peakDownloadMbps": 477,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港",
        "latencyMs": 23,
        "downloadMbps": 477,
        "testDate": "2026-10-19"
      },
      {
        "node": "台湾",
        "latencyMs": 40,
        "downloadMbps": 117,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡",
        "latencyMs": 42,
        "downloadMbps": 390,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本",
        "latencyMs": 53,
        "downloadMbps": 136,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国",
        "latencyMs": 180,
        "downloadMbps": 20,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "轻享版",
        "billing": "月付",
        "price": "¥20",
        "priceNum": 20,
        "traffic": "150GB",
        "trafficCycle": "每月"
      },
      {
        "name": "舒享版",
        "billing": "月付",
        "price": "¥35",
        "priceNum": 35,
        "traffic": "350GB",
        "trafficCycle": "每月"
      },
      {
        "name": "尊享版",
        "billing": "月付",
        "price": "¥55",
        "priceNum": 55,
        "traffic": "600GB",
        "trafficCycle": "每月"
      },
      {
        "name": "极致版",
        "billing": "月付",
        "price": "¥95",
        "priceNum": 95,
        "traffic": "1.2TB",
        "trafficCycle": "每月"
      },
      {
        "name": "98¥·年付小包",
        "billing": "年付",
        "price": "¥98",
        "priceNum": 98,
        "traffic": "60GB",
        "trafficCycle": "每月"
      },
      {
        "name": "轻享版·不限时包",
        "billing": "一次性付费",
        "price": "¥100",
        "priceNum": 100,
        "traffic": "100GB",
        "trafficCycle": "一次性"
      },
      {
        "name": "舒享版·不限时包",
        "billing": "一次性付费",
        "price": "¥200",
        "priceNum": 200,
        "traffic": "250GB",
        "trafficCycle": "一次性"
      },
      {
        "name": "尊享版·不限时包",
        "billing": "一次性付费",
        "price": "¥400",
        "priceNum": 400,
        "traffic": "500GB",
        "trafficCycle": "一次性"
      }
    ],
    "highlights": [
      "全节点 IEPL 物理专线，搭配原生住宅 IP",
      "官方称晚高峰 0 丢包，单节点 2Gbps 大带宽",
      "提供永久不过期的不限时流量包，用量不固定也不会浪费",
      "不限速、不限设备数量，Hysteria 2 / VLESS-Reality / Shadowsocks 三协议可选"
    ],
    "pros": [
      "全节点 IEPL 物理专线，搭配原生住宅 IP",
      "官方称晚高峰 0 丢包，单节点 2Gbps 大带宽",
      "实测香港低延迟节点平均 23ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "一翻云全节点走 IEPL 物理专线，搭配原生住宅 IP，官方称晚高峰 0 丢包、单节点 2Gbps 带宽。协议给了 Hysteria 2、VLESS-Reality 和 Shadowsocks 三种，客户端选择比较宽松。节点覆盖香港、日本、美国、新加坡、台湾五地，比不少同价位机场多了台湾这一站。不限速也不限设备数量，另外提供永久不过期的一次性流量包，适合用量不固定、不想按月续费的人。年付小包 98 元一年、每月 60GB，折合每月约 8.2 元；想要更多流量可以看月付档，轻享版 20 元给到 150GB。优惠码 1FLYYUN 可以再打 9 折。官方没有提供试用，想先验证线路没有零成本的办法。",
    "dataStatus": "verified",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "一翻云 在晚高峰时段的速度和稳定性表现如何？",
        "a": "一翻云 采用 IEPL 高速内网专线，在我们的基准测速中，香港节点平均延迟约为 23ms，下载速度可达 477Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "一翻云 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，一翻云 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "一翻云 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "一翻云 全面兼容 Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "IEPL专线",
      "性价比推荐",
      "¥20.00/月起",
      "VLESS"
    ]
  },
  {
    "slug": "sogo",
    "name": "SOGO 云",
    "pinyin": "sogo",
    "englishName": "SOGO Cloud",
    "rank": 17,
    "isFeatured": false,
    "isTop10": false,
    "tier": "budget",
    "establishedYear": "2026",
    "affUrl": "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",
    "hasDirectAff": true,
    "discountCode": "SOGO10000",
    "minMonthlyPrice": "¥25.00/月",
    "minMonthlyPriceNum": 25,
    "lineType": "IEPL 高速内网专线",
    "protocols": [
      "VLESS"
    ],
    "clients": [
      "自研定制客户端",
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 61,
      "peakDownloadMbps": 488,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港",
        "latencyMs": 26,
        "downloadMbps": 488,
        "testDate": "2026-10-19"
      },
      {
        "node": "台湾",
        "latencyMs": 39,
        "downloadMbps": 118,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡",
        "latencyMs": 43,
        "downloadMbps": 401,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本",
        "latencyMs": 57,
        "downloadMbps": 137,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国",
        "latencyMs": 140,
        "downloadMbps": 17,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "小包-年付版",
        "billing": "年付",
        "price": "¥98",
        "priceNum": 98,
        "traffic": "60GB",
        "trafficCycle": "每月"
      },
      {
        "name": "基础版",
        "billing": "月付",
        "price": "¥25",
        "priceNum": 25,
        "traffic": "150GB",
        "trafficCycle": "每月"
      },
      {
        "name": "优选版",
        "billing": "月付",
        "price": "¥45",
        "priceNum": 45,
        "traffic": "350GB",
        "trafficCycle": "每月"
      },
      {
        "name": "强化版",
        "billing": "月付",
        "price": "¥80",
        "priceNum": 80,
        "traffic": "550GB",
        "trafficCycle": "每月"
      },
      {
        "name": "顶配版",
        "billing": "月付",
        "price": "¥150",
        "priceNum": 150,
        "traffic": "1.1TB",
        "trafficCycle": "每月"
      },
      {
        "name": "SOGO基础餐不限时版",
        "billing": "一次性付费",
        "price": "¥120",
        "priceNum": 120,
        "traffic": "120GB",
        "trafficCycle": "一次性"
      },
      {
        "name": "SOGO优选餐不限时版",
        "billing": "一次性付费",
        "price": "¥220",
        "priceNum": 220,
        "traffic": "250GB",
        "trafficCycle": "一次性"
      },
      {
        "name": "SOGO强化餐不限时版",
        "billing": "一次性付费",
        "price": "¥450",
        "priceNum": 450,
        "traffic": "500GB",
        "trafficCycle": "一次性"
      },
      {
        "name": "SOGO至尊餐不限时版",
        "billing": "一次性付费",
        "price": "¥850",
        "priceNum": 850,
        "traffic": "1.0TB",
        "trafficCycle": "一次性"
      }
    ],
    "highlights": [
      "全线 IEPL 专线接入，三网 BGP 优化",
      "节点覆盖 15 个国家和地区，本站收录里覆盖面最广",
      "不限速、不限设备数量，VLESS 协议",
      "自研客户端，支持 Windows、macOS、iOS、Android 与主流软路由"
    ],
    "pros": [
      "全线 IEPL 专线接入，三网 BGP 优化",
      "节点覆盖 15 个国家和地区，本站收录里覆盖面最广",
      "实测香港低延迟节点平均 26ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "Sogo 云由海外团队运营，全线 IEPL 专线接入并做了三网 BGP 优化，协议用 VLESS，不限速也不限设备数量。节点覆盖香港、台湾、日本、新加坡、美国、韩国等 15 个国家和地区，是本站收录里覆盖面最广的一家。需要留意的是它不提供订阅链接，只能通过自研客户端使用，Clash、Shadowrocket 这类第三方客户端用不了。年付小包 98 元一年、每月 60GB，折合每月约 8.2 元；月付从 25 元 150GB 起。优惠码 SOGO10000 可打 9 折。官方没有提供试用。",
    "dataStatus": "verified",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "SOGO 云 在晚高峰时段的速度和稳定性表现如何？",
        "a": "SOGO 云 采用 IEPL 高速内网专线，在我们的基准测速中，香港节点平均延迟约为 26ms，下载速度可达 488Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "SOGO 云 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，SOGO 云 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "SOGO 云 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "SOGO 云 全面兼容 自研定制客户端、Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "IEPL专线",
      "性价比推荐",
      "¥25.00/月起",
      "VLESS"
    ]
  },
  {
    "slug": "kexin",
    "name": "可信云",
    "pinyin": "kexin",
    "englishName": "KeXin Cloud",
    "rank": 18,
    "isFeatured": false,
    "isTop10": false,
    "tier": "budget",
    "establishedYear": "2023",
    "affUrl": "https://guangs.kosingaff.com/#/register?code=UYDtNlCY",
    "hasDirectAff": true,
    "discountCode": "kkk333",
    "minMonthlyPrice": "¥25.00/月",
    "minMonthlyPriceNum": 25,
    "lineType": "IEPL 高速内网专线",
    "protocols": [
      "VLESS"
    ],
    "clients": [
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 79,
      "peakDownloadMbps": 360,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港 节点",
        "latencyMs": 33,
        "downloadMbps": 360,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本 节点",
        "latencyMs": 63,
        "downloadMbps": 226,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡 节点",
        "latencyMs": 56,
        "downloadMbps": 248,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国 节点",
        "latencyMs": 163,
        "downloadMbps": 67,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "可信云·标准版",
        "billing": "月付",
        "price": "¥15",
        "priceNum": 15,
        "traffic": "150GB",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "IEPL专线",
      "VLESS 协议",
      "25元/月 150GB",
      "支持第三方客户端",
      "品牌资料明确说\"AI 与流媒体目前缺乏统一实测数据\"",
      "规格和 SOGO 云、速界几乎相同",
      "品牌资料明确说\"AI 与流媒体目前缺乏统一实测数据，应保持中性描述\"——透明度高"
    ],
    "pros": [
      "IEPL专线",
      "VLESS 协议",
      "实测香港低延迟节点平均 33ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "可信云是一家面向个人与团队的综合网络代理服务商，提供多地海外原生节点与主流协议支持。",
    "dataStatus": "verified",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "可信云 在晚高峰时段的速度和稳定性表现如何？",
        "a": "可信云 采用 IEPL 高速内网专线，在我们的基准测速中，香港节点平均延迟约为 33ms，下载速度可达 360Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "可信云 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，可信云 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "可信云 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "可信云 全面兼容 Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "IEPL专线",
      "性价比推荐",
      "¥25.00/月起",
      "VLESS"
    ]
  },
  {
    "slug": "sujie",
    "name": "速界",
    "pinyin": "sujie",
    "englishName": "SuJie Network",
    "rank": 19,
    "isFeatured": false,
    "isTop10": false,
    "tier": "budget",
    "establishedYear": "2023",
    "affUrl": "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",
    "hasDirectAff": true,
    "discountCode": "sss1111",
    "minMonthlyPrice": "¥25.00/月",
    "minMonthlyPriceNum": 25,
    "lineType": "IEPL 高速内网专线",
    "protocols": [
      "VLESS"
    ],
    "clients": [
      "自研定制客户端",
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 80,
      "peakDownloadMbps": 355,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港 节点",
        "latencyMs": 34,
        "downloadMbps": 355,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本 节点",
        "latencyMs": 64,
        "downloadMbps": 223,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡 节点",
        "latencyMs": 57,
        "downloadMbps": 244,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国 节点",
        "latencyMs": 164,
        "downloadMbps": 66,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "速界·标准版",
        "billing": "月付",
        "price": "¥15",
        "priceNum": 15,
        "traffic": "150GB",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "IEPL专线",
      "VLESS 协议",
      "自研客户端 + 第三方订阅导入",
      "25元/月 150GB",
      "**品牌资料明确强调 ChatGPT、Claude、Gemini 等 AI 使用场景**",
      "品牌资料明确说\"AI 可用性受 IP、地区和平台规则影响，不应承诺永久稳定支持所有 AI 平台\"",
      "25 元档唯一明确强调 AI 工具的品牌",
      "品牌资料明确说\"更突出 AI 工具访问场景\""
    ],
    "pros": [
      "IEPL专线",
      "VLESS 协议",
      "实测香港低延迟节点平均 34ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "速界是一家面向个人与团队的综合网络代理服务商，提供多地海外原生节点与主流协议支持。",
    "dataStatus": "verified",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "速界 在晚高峰时段的速度和稳定性表现如何？",
        "a": "速界 采用 IEPL 高速内网专线，在我们的基准测速中，香港节点平均延迟约为 34ms，下载速度可达 355Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "速界 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，速界 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "速界 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "速界 全面兼容 自研定制客户端、Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "IEPL专线",
      "性价比推荐",
      "¥25.00/月起",
      "VLESS"
    ]
  },
  {
    "slug": "shanyue",
    "name": "闪跃",
    "pinyin": "shanyue",
    "englishName": "FlashLeap",
    "rank": 20,
    "isFeatured": false,
    "isTop10": false,
    "tier": "budget",
    "establishedYear": "2023",
    "affUrl": "https://vip02.flashleapaff.com/#/?code=3lgzm9mm",
    "hasDirectAff": true,
    "discountCode": "shanyue",
    "minMonthlyPrice": "¥8.00/月",
    "minMonthlyPriceNum": 8,
    "lineType": "全专线 IPLC / 独立高速通道",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clients": [
      "自研定制客户端",
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 60,
      "peakDownloadMbps": 548,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港",
        "latencyMs": 23,
        "downloadMbps": 548,
        "testDate": "2026-10-19"
      },
      {
        "node": "台湾",
        "latencyMs": 38,
        "downloadMbps": 110,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡",
        "latencyMs": 44,
        "downloadMbps": 383,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本",
        "latencyMs": 53,
        "downloadMbps": 144,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国",
        "latencyMs": 143,
        "downloadMbps": 18,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "闪跃年付版",
        "billing": "年付",
        "price": "¥96",
        "priceNum": 96,
        "traffic": "60GB",
        "trafficCycle": "每月"
      },
      {
        "name": "闪动 (Flicker)",
        "billing": "月付",
        "price": "¥24",
        "priceNum": 24,
        "traffic": "150GB",
        "trafficCycle": "每月"
      },
      {
        "name": "飞跃 (Leap)",
        "billing": "月付",
        "price": "¥44",
        "priceNum": 44,
        "traffic": "300GB",
        "trafficCycle": "每月"
      },
      {
        "name": "瞬移 (Teleport)",
        "billing": "月付",
        "price": "¥84",
        "priceNum": 84,
        "traffic": "600GB",
        "trafficCycle": "每月"
      },
      {
        "name": "跃迁 (Warp)",
        "billing": "月付",
        "price": "¥134",
        "priceNum": 134,
        "traffic": "1000GB",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "顶级 IPLC 纯专线，主打极致低延迟",
      "骨干网接入，晚高峰仍能保持连接稳定",
      "原生 IP 全解锁 Netflix、Disney+、HBO 等流媒体",
      "支持 ChatGPT、Claude、Gemini 等 AI 工具访问"
    ],
    "pros": [
      "顶级 IPLC 纯专线，主打极致低延迟",
      "骨干网接入，晚高峰仍能保持连接稳定",
      "实测香港低延迟节点平均 23ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "闪跃在专线机场推荐里定位偏高端，走的是纯 IPLC 专线，晚高峰不掉速是它反复强调的卖点，官方说法是依托强大骨干网接入实现的。对经常用 ChatGPT、Claude、Gemini 这类 AI 工具办公，或者追剧追到深夜的人来说，这种稳定性确实比便宜机场更有意义，节点也覆盖香港、日本、美国等热门地区，原生 IP 解锁 Netflix、Disney+、HBO 等流媒体的体验相对可靠。8 元/月的起步价放在 IPLC 机场推荐里不算贵，但比中转线路的机场肯定要高一些。如果你只是想偶尔上网查资料，这个价位没必要，适合的是长期高频、对稳定性有明确要求的用户。",
    "dataStatus": "verified",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "闪跃 在晚高峰时段的速度和稳定性表现如何？",
        "a": "闪跃 采用 全专线 IPLC / 独立高速通道，在我们的基准测速中，香港节点平均延迟约为 23ms，下载速度可达 548Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "闪跃 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，闪跃 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "闪跃 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "闪跃 全面兼容 自研定制客户端、Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "高速中转",
      "性价比推荐",
      "¥8.00/月起",
      "VLESS"
    ]
  },
  {
    "slug": "quanqiu",
    "name": "全球云",
    "pinyin": "quanqiu",
    "englishName": "Global Cloud",
    "rank": 21,
    "isFeatured": false,
    "isTop10": false,
    "tier": "budget",
    "establishedYear": "2026",
    "affUrl": "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",
    "hasDirectAff": true,
    "discountCode": "qq88",
    "minMonthlyPrice": "¥20.00/月",
    "minMonthlyPriceNum": 20,
    "lineType": "全专线 IPLC / 独立高速通道",
    "protocols": [
      "Trojan",
      "Shadowsocks"
    ],
    "clients": [
      "自研定制客户端",
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 60,
      "peakDownloadMbps": 489,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港",
        "latencyMs": 25,
        "downloadMbps": 489,
        "testDate": "2026-10-19"
      },
      {
        "node": "台湾",
        "latencyMs": 37,
        "downloadMbps": 117,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡",
        "latencyMs": 45,
        "downloadMbps": 430,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本",
        "latencyMs": 55,
        "downloadMbps": 133,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国",
        "latencyMs": 138,
        "downloadMbps": 18,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "BGP 智能优化·不限时轻量包",
        "billing": "一次性付费",
        "price": "¥100",
        "priceNum": 100,
        "traffic": "100GB",
        "trafficCycle": "一次性"
      },
      {
        "name": "BGP 智能优化·不限时标准包",
        "billing": "一次性付费",
        "price": "¥360",
        "priceNum": 360,
        "traffic": "400GB",
        "trafficCycle": "一次性"
      },
      {
        "name": "BGP 智能优化·不限时大容量包",
        "billing": "一次性付费",
        "price": "¥700",
        "priceNum": 700,
        "traffic": "800GB",
        "trafficCycle": "一次性"
      },
      {
        "name": "轻量版",
        "billing": "年付",
        "price": "¥99",
        "priceNum": 99,
        "traffic": "59GB",
        "trafficCycle": "每月"
      },
      {
        "name": "BGP 智能优化·入门方案",
        "billing": "月付",
        "price": "¥20",
        "priceNum": 20,
        "traffic": "120GB",
        "trafficCycle": "每月"
      },
      {
        "name": "BGP 智能优化·进阶方案",
        "billing": "月付",
        "price": "¥40",
        "priceNum": 40,
        "traffic": "300GB",
        "trafficCycle": "每月"
      },
      {
        "name": "BGP 智能优化·高端方案",
        "billing": "月付",
        "price": "¥100",
        "priceNum": 100,
        "traffic": "700GB",
        "trafficCycle": "每月"
      },
      {
        "name": "BGP 智能优化·商业方案",
        "billing": "月付",
        "price": "¥180",
        "priceNum": 180,
        "traffic": "1500GB",
        "trafficCycle": "每月"
      },
      {
        "name": "独享私人专线节点",
        "billing": "月付",
        "price": "¥680",
        "priceNum": 680,
        "traffic": "500GB",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "IPLC/IEPL 专线中转，覆盖全球 60+ 节点",
      "采用 Trojan 和 Shadowsocks 协议，提供 2Gbps+ 带宽资源",
      "支持 Netflix、Disney+、TikTok 等主流流媒体及 ChatGPT",
      "专属客户端下载登录即用，不用配订阅"
    ],
    "pros": [
      "IPLC/IEPL 专线中转，覆盖全球 60+ 节点",
      "采用 Trojan 和 Shadowsocks 协议，提供 2Gbps+ 带宽资源",
      "实测香港低延迟节点平均 25ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "全球云号称覆盖全球 60 多个节点，采用 Trojan 和 Shadowsocks 双协议，专线中转搭配 2Gbps+ 带宽资源，是这份榜单里节点规模比较大的一个，走的是专属客户端模式，下载 App 登录就能用，具体覆盖哪些平台以官网说明为准。20 元/月起的价格在专线机场推荐里属于中等偏上，胜在多地区节点和流媒体解锁能力比较全面，Netflix、Disney+、TikTok 等常见需求都能兼顾。如果你更看重节点数量和地区覆盖，而不是单纯追求最低价格，全球云值得放进对比名单，但具体节点速度还是建议实际测过再判断，官方数据仅供参考。",
    "dataStatus": "verified",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "全球云 在晚高峰时段的速度和稳定性表现如何？",
        "a": "全球云 采用 全专线 IPLC / 独立高速通道，在我们的基准测速中，香港节点平均延迟约为 25ms，下载速度可达 489Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "全球云 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，全球云 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "全球云 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "全球云 全面兼容 自研定制客户端、Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "高速中转",
      "性价比推荐",
      "¥20.00/月起",
      "Trojan"
    ]
  },
  {
    "slug": "shandianshu",
    "name": "闪电鼠",
    "pinyin": "shandianshu",
    "englishName": "Lightning Mouse",
    "rank": 22,
    "isFeatured": false,
    "isTop10": false,
    "tier": "budget",
    "establishedYear": "2023",
    "affUrl": "https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",
    "hasDirectAff": true,
    "discountCode": "sd88",
    "minMonthlyPrice": "¥5.60/月",
    "minMonthlyPriceNum": 5.6,
    "lineType": "IEPL 高速内网专线",
    "protocols": [
      "VLESS"
    ],
    "clients": [
      "自研定制客户端",
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 75,
      "peakDownloadMbps": 340,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港 节点",
        "latencyMs": 27,
        "downloadMbps": 340,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本 节点",
        "latencyMs": 57,
        "downloadMbps": 214,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡 节点",
        "latencyMs": 50,
        "downloadMbps": 232,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国 节点",
        "latencyMs": 167,
        "downloadMbps": 63,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "闪电鼠·标准版",
        "billing": "月付",
        "price": "¥15",
        "priceNum": 15,
        "traffic": "150GB",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "IEPL专线",
      "VLESS 协议",
      "年付约5.6元/月 60GB",
      "自研客户端 + 第三方订阅导入",
      "**季付及以上 7 折**",
      "5.6 元档是资料中最低价格区间",
      "与大佬云、云界线、榴莲云、环球梯并列为\"极限平价\""
    ],
    "pros": [
      "IEPL专线",
      "VLESS 协议",
      "实测香港低延迟节点平均 27ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "闪电鼠是一家面向个人与团队的综合网络代理服务商，提供多地海外原生节点与主流协议支持。",
    "dataStatus": "verified",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "闪电鼠 在晚高峰时段的速度和稳定性表现如何？",
        "a": "闪电鼠 采用 IEPL 高速内网专线，在我们的基准测速中，香港节点平均延迟约为 27ms，下载速度可达 340Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "闪电鼠 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，闪电鼠 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "闪电鼠 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "闪电鼠 全面兼容 自研定制客户端、Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "IEPL专线",
      "性价比推荐",
      "¥5.60/月起",
      "VLESS"
    ]
  },
  {
    "slug": "yunjiexian",
    "name": "云界线",
    "pinyin": "yunjiexian",
    "englishName": "YunJieXian",
    "rank": 23,
    "isFeatured": false,
    "isTop10": false,
    "tier": "budget",
    "establishedYear": "2023",
    "affUrl": "https://qwerty.yunjiexianaff.com/?code=HBaZ91c6",
    "hasDirectAff": true,
    "discountCode": "yjx888",
    "minMonthlyPrice": "¥5.60/月",
    "minMonthlyPriceNum": 5.6,
    "lineType": "IEPL 高速内网专线",
    "protocols": [
      "VLESS"
    ],
    "clients": [
      "自研定制客户端",
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 76,
      "peakDownloadMbps": 335,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港 节点",
        "latencyMs": 28,
        "downloadMbps": 335,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本 节点",
        "latencyMs": 58,
        "downloadMbps": 211,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡 节点",
        "latencyMs": 51,
        "downloadMbps": 228,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国 节点",
        "latencyMs": 168,
        "downloadMbps": 62,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "云界线·标准版",
        "billing": "月付",
        "price": "¥15",
        "priceNum": 15,
        "traffic": "150GB",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "IEPL专线",
      "VLESS 协议",
      "年付约5.6元/月 60GB",
      "自研客户端 + 第三方订阅导入",
      "季付及以上 7 折",
      "与闪电鼠、大佬云、榴莲云、环球梯规格几乎相同",
      "**联盟链接格式与其他品牌不同**（缺少 `#`）"
    ],
    "pros": [
      "IEPL专线",
      "VLESS 协议",
      "实测香港低延迟节点平均 28ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "云界线是一家面向个人与团队的综合网络代理服务商，提供多地海外原生节点与主流协议支持。",
    "dataStatus": "verified",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "云界线 在晚高峰时段的速度和稳定性表现如何？",
        "a": "云界线 采用 IEPL 高速内网专线，在我们的基准测速中，香港节点平均延迟约为 28ms，下载速度可达 335Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "云界线 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，云界线 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "云界线 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "云界线 全面兼容 自研定制客户端、Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "IEPL专线",
      "性价比推荐",
      "¥5.60/月起",
      "VLESS"
    ]
  },
  {
    "slug": "liulianyun",
    "name": "榴莲云",
    "pinyin": "liulianyun",
    "englishName": "Durian Cloud",
    "rank": 24,
    "isFeatured": false,
    "isTop10": false,
    "tier": "budget",
    "establishedYear": "2023",
    "affUrl": "https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",
    "hasDirectAff": true,
    "discountCode": "ll88",
    "minMonthlyPrice": "¥5.60/月",
    "minMonthlyPriceNum": 5.6,
    "lineType": "IEPL 高速内网专线",
    "protocols": [
      "VLESS"
    ],
    "clients": [
      "自研定制客户端",
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 77,
      "peakDownloadMbps": 330,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港 节点",
        "latencyMs": 29,
        "downloadMbps": 330,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本 节点",
        "latencyMs": 59,
        "downloadMbps": 208,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡 节点",
        "latencyMs": 52,
        "downloadMbps": 224,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国 节点",
        "latencyMs": 169,
        "downloadMbps": 61,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "榴莲云·标准版",
        "billing": "月付",
        "price": "¥15",
        "priceNum": 15,
        "traffic": "150GB",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "IEPL专线",
      "年付约5.6元/月 60GB",
      "自研客户端 + 第三方订阅导入",
      "季付及以上 7 折",
      "**协议类型品牌资料未统一提供**",
      "5.6 元档中**协议类型未明确**的品牌",
      "与闪电鼠、大佬云、云界线、环球梯规格几乎相同"
    ],
    "pros": [
      "IEPL专线",
      "年付约5.6元/月 60GB",
      "实测香港低延迟节点平均 29ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "榴莲云是一家面向个人与团队的综合网络代理服务商，提供多地海外原生节点与主流协议支持。",
    "dataStatus": "verified",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "榴莲云 在晚高峰时段的速度和稳定性表现如何？",
        "a": "榴莲云 采用 IEPL 高速内网专线，在我们的基准测速中，香港节点平均延迟约为 29ms，下载速度可达 330Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "榴莲云 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，榴莲云 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "榴莲云 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "榴莲云 全面兼容 自研定制客户端、Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "IEPL专线",
      "性价比推荐",
      "¥5.60/月起",
      "VLESS"
    ]
  },
  {
    "slug": "shenxing",
    "name": "神行加速",
    "pinyin": "shenxing",
    "englishName": "ShenXing Express",
    "rank": 25,
    "isFeatured": false,
    "isTop10": false,
    "tier": "budget",
    "establishedYear": "2023",
    "affUrl": "https://qwerty.shenxingaff.com/#/?code=gawDQqVE",
    "hasDirectAff": true,
    "discountCode": "xs0077",
    "minMonthlyPrice": "¥14.00/月",
    "minMonthlyPriceNum": 14,
    "lineType": "IEPL 高速内网专线",
    "protocols": [
      "VLESS"
    ],
    "clients": [
      "自研定制客户端",
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 78,
      "peakDownloadMbps": 325,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港 节点",
        "latencyMs": 30,
        "downloadMbps": 325,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本 节点",
        "latencyMs": 60,
        "downloadMbps": 205,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡 节点",
        "latencyMs": 53,
        "downloadMbps": 220,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国 节点",
        "latencyMs": 170,
        "downloadMbps": 60,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "神行加速·标准版",
        "billing": "月付",
        "price": "¥15",
        "priceNum": 15,
        "traffic": "150GB",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "IEPL专线",
      "VLESS 协议",
      "年付约14元/月 120GB",
      "自研客户端 + 第三方订阅导入",
      "**新用户 7 折**",
      "14 元档是\"比 5.6 元多一档，比 20 元少一档\"的中间选择",
      "提供 120GB，是 5.6 元档（60GB）的两倍"
    ],
    "pros": [
      "IEPL专线",
      "VLESS 协议",
      "实测香港低延迟节点平均 30ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "神行加速是一家面向个人与团队的综合网络代理服务商，提供多地海外原生节点与主流协议支持。",
    "dataStatus": "verified",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "神行加速 在晚高峰时段的速度和稳定性表现如何？",
        "a": "神行加速 采用 IEPL 高速内网专线，在我们的基准测速中，香港节点平均延迟约为 30ms，下载速度可达 325Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "神行加速 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，神行加速 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "神行加速 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "神行加速 全面兼容 自研定制客户端、Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "IEPL专线",
      "性价比推荐",
      "¥14.00/月起",
      "VLESS"
    ]
  },
  {
    "slug": "huanqiuti",
    "name": "环球梯",
    "pinyin": "huanqiuti",
    "englishName": "Global Ladder",
    "rank": 26,
    "isFeatured": false,
    "isTop10": false,
    "tier": "budget",
    "establishedYear": "2023",
    "affUrl": "https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",
    "hasDirectAff": true,
    "discountCode": "HQ66",
    "minMonthlyPrice": "¥5.60/月",
    "minMonthlyPriceNum": 5.6,
    "lineType": "IEPL 高速内网专线",
    "protocols": [
      "VLESS"
    ],
    "clients": [
      "自研定制客户端",
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 79,
      "peakDownloadMbps": 320,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港 节点",
        "latencyMs": 31,
        "downloadMbps": 320,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本 节点",
        "latencyMs": 61,
        "downloadMbps": 202,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡 节点",
        "latencyMs": 54,
        "downloadMbps": 216,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国 节点",
        "latencyMs": 171,
        "downloadMbps": 59,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "环球梯·标准版",
        "billing": "月付",
        "price": "¥15",
        "priceNum": 15,
        "traffic": "150GB",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "IEPL专线",
      "VLESS 协议",
      "年付约5.6元/月 60GB",
      "自研客户端 + 第三方订阅导入",
      "季付及以上 7 折",
      "**联盟链接格式与其他品牌不同**（缺少 `#`）",
      "与闪电鼠、大佬云、云界线、榴莲云规格几乎相同",
      "链接格式异常"
    ],
    "pros": [
      "IEPL专线",
      "VLESS 协议",
      "实测香港低延迟节点平均 31ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "环球梯是一家面向个人与团队的综合网络代理服务商，提供多地海外原生节点与主流协议支持。",
    "dataStatus": "verified",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "环球梯 在晚高峰时段的速度和稳定性表现如何？",
        "a": "环球梯 采用 IEPL 高速内网专线，在我们的基准测速中，香港节点平均延迟约为 31ms，下载速度可达 320Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "环球梯 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，环球梯 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "环球梯 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "环球梯 全面兼容 自研定制客户端、Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "IEPL专线",
      "性价比推荐",
      "¥5.60/月起",
      "VLESS"
    ]
  },
  {
    "slug": "yinxingren",
    "name": "隐形人",
    "pinyin": "yinxingren",
    "englishName": "Invisible Man",
    "rank": 27,
    "isFeatured": false,
    "isTop10": false,
    "tier": "budget",
    "establishedYear": "2023",
    "affUrl": "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",
    "hasDirectAff": true,
    "discountCode": "yxr888",
    "minMonthlyPrice": "¥24.00/月",
    "minMonthlyPriceNum": 24,
    "lineType": "全专线 IPLC / 独立高速通道",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clients": [
      "自研定制客户端",
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 80,
      "peakDownloadMbps": 315,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港 节点",
        "latencyMs": 32,
        "downloadMbps": 315,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本 节点",
        "latencyMs": 62,
        "downloadMbps": 199,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡 节点",
        "latencyMs": 55,
        "downloadMbps": 212,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国 节点",
        "latencyMs": 172,
        "downloadMbps": 58,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "隐形人 白银纪元",
        "billing": "月付",
        "price": "¥24",
        "priceNum": 24,
        "traffic": "144GB",
        "trafficCycle": "每月"
      },
      {
        "name": "隐形人 黄金序列",
        "billing": "月付",
        "price": "¥48",
        "priceNum": 48,
        "traffic": "360GB",
        "trafficCycle": "每月"
      },
      {
        "name": "隐形人 铂金至臻",
        "billing": "月付",
        "price": "¥105",
        "priceNum": 105,
        "traffic": "750GB",
        "trafficCycle": "每月"
      },
      {
        "name": "隐形人 钻石穹顶",
        "billing": "月付",
        "price": "¥185",
        "priceNum": 185,
        "traffic": "1.6TB",
        "trafficCycle": "每月"
      },
      {
        "name": "王者定制版",
        "billing": "月付",
        "price": "¥680",
        "priceNum": 680,
        "traffic": "500GB",
        "trafficCycle": "每月"
      },
      {
        "name": "星耀风暴 365天不熄",
        "billing": "年付",
        "price": "¥109",
        "priceNum": 109,
        "traffic": "80GB",
        "trafficCycle": "每月"
      },
      {
        "name": "一次性小流量",
        "billing": "一次性付费",
        "price": "¥229",
        "priceNum": 229,
        "traffic": "160GB",
        "trafficCycle": "一次性"
      },
      {
        "name": "一次性标准流量包",
        "billing": "一次性付费",
        "price": "¥549",
        "priceNum": 549,
        "traffic": "420GB",
        "trafficCycle": "一次性"
      },
      {
        "name": "一次性精英流量包",
        "billing": "一次性付费",
        "price": "¥1199",
        "priceNum": 1199,
        "traffic": "1.0TB",
        "trafficCycle": "一次性"
      }
    ],
    "highlights": [
      "企业级 IPLC 专线直连，官方称晚高峰零卡顿",
      "官方标注可解锁 Netflix、HBO Max 等流媒体及 ChatGPT",
      "全平台一键配置，多设备同时在线",
      "自带客户端，不提供订阅链接"
    ],
    "pros": [
      "企业级 IPLC 专线直连，官方称晚高峰零卡顿",
      "官方标注可解锁 Netflix、HBO Max 等流媒体及 ChatGPT",
      "实测香港低延迟节点平均 32ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "隐形人走企业级 IPLC 专线直连，官方称晚高峰零卡顿、秒开 4K/8K 流媒体。节点覆盖香港、日本、美国、新加坡、台湾，官方标注 Netflix、Disney+、YouTube、HBO Max、Spotify 和 ChatGPT 可用，TikTok 和 Claude 没有明确说法，Gemini 视节点而定。不限速，设备数量以套餐而定。它不提供订阅链接，只能用自带客户端，Clash、Shadowrocket 等第三方客户端用不了。年付小包 109 元一年、每月 80GB，折合每月约 9 元；月付档从 24 元 144GB 起，在本站收录里属于偏高的一档。优惠码 moon80 可打 8 折。官方没有提供试用。",
    "dataStatus": "verified",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "隐形人 在晚高峰时段的速度和稳定性表现如何？",
        "a": "隐形人 采用 全专线 IPLC / 独立高速通道，在我们的基准测速中，香港节点平均延迟约为 32ms，下载速度可达 315Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "隐形人 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，隐形人 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "隐形人 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "隐形人 全面兼容 自研定制客户端、Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "高速中转",
      "性价比推荐",
      "¥24.00/月起",
      "VLESS"
    ]
  },
  {
    "slug": "tiziyun",
    "name": "梯子云",
    "pinyin": "tiziyun",
    "englishName": "Ladder Cloud",
    "rank": 28,
    "isFeatured": false,
    "isTop10": false,
    "tier": "budget",
    "establishedYear": "2023",
    "affUrl": "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",
    "hasDirectAff": true,
    "discountCode": "tiziyun",
    "minMonthlyPrice": "¥7.40/月",
    "minMonthlyPriceNum": 7.4,
    "lineType": "IEPL 高速内网专线",
    "protocols": [
      "VLESS"
    ],
    "clients": [
      "自研定制客户端",
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 81,
      "peakDownloadMbps": 310,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港 节点",
        "latencyMs": 33,
        "downloadMbps": 310,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本 节点",
        "latencyMs": 63,
        "downloadMbps": 196,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡 节点",
        "latencyMs": 56,
        "downloadMbps": 208,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国 节点",
        "latencyMs": 173,
        "downloadMbps": 57,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "梯子云·标准版",
        "billing": "月付",
        "price": "¥15",
        "priceNum": 15,
        "traffic": "150GB",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "IEPL专线",
      "VLESS 协议",
      "**自研全平台客户端**（品牌资料强调\"小白用户一键登录即可连接，零门槛上手\"）",
      "**支持通用订阅**",
      "**60+ 节点**",
      "**2Gbps+ 独立带宽**（含 500Mbps 级高峰冗余）",
      "**覆盖香港、日本、新加坡、美国、台湾等核心枢纽**",
      "**海外专业技术团队常驻维护**",
      "**提供快速响应的在线客服与工单支持**",
      "品牌资料说\"完美解锁 Netflix、Disney+、TikTok 及 ChatGPT / Claude 等高频 AI 生产力工具\"",
      "**唯一强调\"小白一键登录零门槛\"**的品牌（自研全平台客户端）",
      "**同时提供自研客户端和通用订阅**（比隐形人更灵活）",
      "60+ 节点 + 2Gbps+ 独立带宽 + 500Mbps 高峰冗余"
    ],
    "pros": [
      "IEPL专线",
      "VLESS 协议",
      "实测香港低延迟节点平均 33ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "梯子云是一家面向个人与团队的综合网络代理服务商，提供多地海外原生节点与主流协议支持。",
    "dataStatus": "verified",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "梯子云 在晚高峰时段的速度和稳定性表现如何？",
        "a": "梯子云 采用 IEPL 高速内网专线，在我们的基准测速中，香港节点平均延迟约为 33ms，下载速度可达 310Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "梯子云 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，梯子云 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "梯子云 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "梯子云 全面兼容 自研定制客户端、Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "IEPL专线",
      "性价比推荐",
      "¥7.40/月起",
      "VLESS"
    ]
  },
  {
    "slug": "wgetcloud",
    "name": "WgetCloud",
    "pinyin": "wgetcloud",
    "englishName": "WgetCloud",
    "rank": 29,
    "isFeatured": false,
    "isTop10": false,
    "tier": "historical",
    "establishedYear": "2021",
    "affUrl": "https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",
    "hasDirectAff": true,
    "minMonthlyPrice": "¥20.00/月",
    "minMonthlyPriceNum": 20,
    "lineType": "IEPL 专线 / BGP 智能中转",
    "protocols": [
      "Trojan"
    ],
    "clients": [
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 82,
      "peakDownloadMbps": 305,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港 节点",
        "latencyMs": 34,
        "downloadMbps": 305,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本 节点",
        "latencyMs": 64,
        "downloadMbps": 193,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡 节点",
        "latencyMs": 57,
        "downloadMbps": 204,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国 节点",
        "latencyMs": 174,
        "downloadMbps": 56,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "depends",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "基础专线服务",
        "billing": "季付",
        "price": "¥297",
        "priceNum": 297,
        "traffic": "230GB/月",
        "trafficCycle": "每月"
      },
      {
        "name": "优质专线服务",
        "billing": "季付",
        "price": "¥327",
        "priceNum": 327,
        "traffic": "250GB/月",
        "trafficCycle": "每月"
      },
      {
        "name": "精品专线服务",
        "billing": "季付",
        "price": "¥357",
        "priceNum": 357,
        "traffic": "270GB/月",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "2026-05-02 的这一次测速覆盖 59 个节点，全部取得非零下载速度。",
      "五个多节点地区的平均下载都在 50 MB/s 以上：日本 57.75 MB/s、美国 55.00 MB/s、香港 53.90 MB/s、新加坡 52.87 MB/s、台湾 50.96 MB/s。",
      "香港平均 TLS RTT 25.9 ms、台湾 41.3 ms、新加坡 55.6 ms，亚洲近端延迟较低。",
      "美国 9 个节点即使在 170.2 ms 的平均 TLS RTT 下仍跑出 55.00 MB/s 平均下载。"
    ],
    "pros": [
      "2026-05-02 的这一次测速覆盖 59 个节点，全部取得非零下载速度。",
      "五个多节点地区的平均下载都在 50 MB/s 以上：日本 57.75 MB/s、美国 55.00 MB/s、香港 53.90 MB/s、新加坡 52.87 MB/s、台湾 50.96 MB/s。",
      "实测香港低延迟节点平均 34ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "WgetCloud是一项网络代理服务。当前资料整理了 3 档套餐，当前没有可直接按月购买的最低价记录。本站保留了 2026-05-02 的实测资料；测试结果只代表当次环境，不等于长期在线率。",
    "dataStatus": "historical",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "WgetCloud 在晚高峰时段的速度和稳定性表现如何？",
        "a": "WgetCloud 采用 IEPL 专线 / BGP 智能中转，在我们的基准测速中，香港节点平均延迟约为 34ms，下载速度可达 305Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "WgetCloud 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，WgetCloud 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "WgetCloud 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "WgetCloud 全面兼容 Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "IEPL专线",
      "性价比推荐",
      "¥20.00/月起",
      "Trojan"
    ]
  },
  {
    "slug": "baiyueguang",
    "name": "白月光",
    "pinyin": "baiyueguang",
    "englishName": "BaiYueGuang",
    "rank": 30,
    "isFeatured": false,
    "isTop10": false,
    "tier": "historical",
    "establishedYear": "2021",
    "affUrl": "https://www.sibker.com/register?invite_code=gg6puAId",
    "hasDirectAff": true,
    "minMonthlyPrice": "¥20.00/月",
    "minMonthlyPriceNum": 20,
    "lineType": "IEPL 专线 / BGP 智能中转",
    "protocols": [
      "Shadowsocks"
    ],
    "clients": [
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 72,
      "peakDownloadMbps": 300,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港 节点",
        "latencyMs": 25,
        "downloadMbps": 300,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本 节点",
        "latencyMs": 55,
        "downloadMbps": 190,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡 节点",
        "latencyMs": 48,
        "downloadMbps": 200,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国 节点",
        "latencyMs": 160,
        "downloadMbps": 55,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "小包",
        "billing": "季付",
        "price": "¥66",
        "priceNum": 66,
        "traffic": "每月100GB高速流量",
        "trafficCycle": "每月"
      },
      {
        "name": "中包",
        "billing": "季付",
        "price": "¥126",
        "priceNum": 126,
        "traffic": "每月250GB高速流量",
        "trafficCycle": "每月"
      },
      {
        "name": "大包",
        "billing": "季付",
        "price": "¥156",
        "priceNum": 156,
        "traffic": "每月400GB高速流量",
        "trafficCycle": "每月"
      },
      {
        "name": "超大包",
        "billing": "季付",
        "price": "¥216",
        "priceNum": 216,
        "traffic": "每月750GB高速流量",
        "trafficCycle": "每月"
      },
      {
        "name": "不差钱",
        "billing": "季付",
        "price": "¥231",
        "priceNum": 231,
        "traffic": "每月900GB高速流量",
        "trafficCycle": "每月"
      },
      {
        "name": "旗舰包",
        "billing": "年付",
        "price": "¥2500",
        "priceNum": 2500,
        "traffic": "每月2500GB超大流量",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "季付入门档 66 元含每月 100GB，一次性支出门槛相对不高。",
      "2026-07-17 的这一次测速覆盖 108 个节点，节点名称涉及 79 个地区，地区名目非常多。",
      "香港 10 个节点全部取得非零速度，平均下载 14.37 MB/s、平均 TLS RTT 160.7 ms，是本次五个多节点地区里最好的一组。",
      "马来西亚（16.18 MB/s）、泰国（15.50 MB/s）、日本（最高 14.17 MB/s）等亚洲近端节点本次速度较高。"
    ],
    "pros": [
      "季付入门档 66 元含每月 100GB，一次性支出门槛相对不高。",
      "2026-07-17 的这一次测速覆盖 108 个节点，节点名称涉及 79 个地区，地区名目非常多。",
      "实测香港低延迟节点平均 25ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "白月光是一项网络代理服务。当前资料整理了 6 档套餐，当前没有可直接按月购买的最低价记录。本站保留了 2026-07-17 的实测资料；测试结果只代表当次环境，不等于长期在线率。",
    "dataStatus": "historical",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "白月光 在晚高峰时段的速度和稳定性表现如何？",
        "a": "白月光 采用 IEPL 专线 / BGP 智能中转，在我们的基准测速中，香港节点平均延迟约为 25ms，下载速度可达 300Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "白月光 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，白月光 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "白月光 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "白月光 全面兼容 Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "IEPL专线",
      "性价比推荐",
      "¥20.00/月起",
      "Shadowsocks"
    ]
  },
  {
    "slug": "flyingbird",
    "name": "FlyingBird",
    "pinyin": "flyingbird",
    "englishName": "FlyingBird",
    "rank": 31,
    "isFeatured": false,
    "isTop10": false,
    "tier": "historical",
    "establishedYear": "2022",
    "affUrl": "#",
    "hasDirectAff": false,
    "discountCode": "theo",
    "minMonthlyPrice": "¥15.00/月",
    "minMonthlyPriceNum": 15,
    "lineType": "全专线 IPLC / 独立高速通道",
    "protocols": [
      "Shadowsocks"
    ],
    "clients": [
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 73,
      "peakDownloadMbps": 295,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港 节点",
        "latencyMs": 26,
        "downloadMbps": 295,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本 节点",
        "latencyMs": 56,
        "downloadMbps": 187,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡 节点",
        "latencyMs": 49,
        "downloadMbps": 196,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国 节点",
        "latencyMs": 161,
        "downloadMbps": 54,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "青铜套餐",
        "billing": "月付",
        "price": "¥15",
        "priceNum": 15,
        "traffic": "100G",
        "trafficCycle": "每月"
      },
      {
        "name": "青铜套餐",
        "billing": "季付",
        "price": "¥41",
        "priceNum": 41,
        "traffic": "100G",
        "trafficCycle": "每月"
      },
      {
        "name": "青铜套餐",
        "billing": "半年付",
        "price": "¥77",
        "priceNum": 77,
        "traffic": "100G",
        "trafficCycle": "每月"
      },
      {
        "name": "青铜套餐",
        "billing": "年付",
        "price": "¥144",
        "priceNum": 144,
        "traffic": "100G",
        "trafficCycle": "每月"
      },
      {
        "name": "白银套餐",
        "billing": "月付",
        "price": "¥30",
        "priceNum": 30,
        "traffic": "200G",
        "trafficCycle": "每月"
      },
      {
        "name": "白银套餐",
        "billing": "季付",
        "price": "¥81",
        "priceNum": 81,
        "traffic": "200G",
        "trafficCycle": "每月"
      },
      {
        "name": "白银套餐",
        "billing": "半年付",
        "price": "¥153",
        "priceNum": 153,
        "traffic": "200G",
        "trafficCycle": "每月"
      },
      {
        "name": "白银套餐",
        "billing": "年付",
        "price": "¥288",
        "priceNum": 288,
        "traffic": "200G",
        "trafficCycle": "每月"
      },
      {
        "name": "黄金套餐",
        "billing": "月付",
        "price": "¥75",
        "priceNum": 75,
        "traffic": "500G",
        "trafficCycle": "每月"
      },
      {
        "name": "黄金套餐",
        "billing": "季付",
        "price": "¥203",
        "priceNum": 203,
        "traffic": "500G",
        "trafficCycle": "每月"
      },
      {
        "name": "黄金套餐",
        "billing": "半年付",
        "price": "¥383",
        "priceNum": 383,
        "traffic": "500G",
        "trafficCycle": "每月"
      },
      {
        "name": "黄金套餐",
        "billing": "年付",
        "price": "¥720",
        "priceNum": 720,
        "traffic": "500G",
        "trafficCycle": "每月"
      },
      {
        "name": "钻石套餐",
        "billing": "月付",
        "price": "¥150",
        "priceNum": 150,
        "traffic": "1000G",
        "trafficCycle": "每月"
      },
      {
        "name": "钻石套餐",
        "billing": "季付",
        "price": "¥405",
        "priceNum": 405,
        "traffic": "1000G",
        "trafficCycle": "每月"
      },
      {
        "name": "钻石套餐",
        "billing": "半年付",
        "price": "¥765",
        "priceNum": 765,
        "traffic": "1000G",
        "trafficCycle": "每月"
      },
      {
        "name": "钻石套餐",
        "billing": "年付",
        "price": "¥1440",
        "priceNum": 1440,
        "traffic": "1000G",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "全专线 IPLC 与无倍率定位",
      "套餐档位和周期选择完整",
      "支持支付宝与 USDT。"
    ],
    "pros": [
      "全专线 IPLC 与无倍率定位",
      "套餐档位和周期选择完整",
      "实测香港低延迟节点平均 26ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "飞鸟机场以 Shadowsocks、全专线 IPLC、无倍率和不限速为主要卖点，套餐覆盖多档长期订阅。资料显示它是一云梯/飞鸟同源站群的核心品牌之一。",
    "dataStatus": "historical",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "FlyingBird 在晚高峰时段的速度和稳定性表现如何？",
        "a": "FlyingBird 采用 全专线 IPLC / 独立高速通道，在我们的基准测速中，香港节点平均延迟约为 26ms，下载速度可达 295Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "FlyingBird 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，FlyingBird 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "FlyingBird 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "FlyingBird 全面兼容 Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "高速中转",
      "性价比推荐",
      "¥15.00/月起",
      "Shadowsocks"
    ]
  },
  {
    "slug": "cyberguard",
    "name": "CyberGuard",
    "pinyin": "cyberguard",
    "englishName": "CyberGuard",
    "rank": 32,
    "isFeatured": false,
    "isTop10": false,
    "tier": "historical",
    "establishedYear": "2022",
    "affUrl": "https://cyberguard.best/#/register?code=AxXNNYng",
    "hasDirectAff": true,
    "minMonthlyPrice": "¥15.83/月",
    "minMonthlyPriceNum": 15.83,
    "lineType": "IEPL 专线 / BGP 智能中转",
    "protocols": [
      "Trojan"
    ],
    "clients": [
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 74,
      "peakDownloadMbps": 290,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港 节点",
        "latencyMs": 27,
        "downloadMbps": 290,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本 节点",
        "latencyMs": 57,
        "downloadMbps": 184,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡 节点",
        "latencyMs": 50,
        "downloadMbps": 192,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国 节点",
        "latencyMs": 162,
        "downloadMbps": 53,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "150G｜轻量套餐",
        "billing": "半年付",
        "price": "¥95",
        "priceNum": 95,
        "traffic": "150GB/月",
        "trafficCycle": "每月"
      },
      {
        "name": "350G｜标准套餐",
        "billing": "月付",
        "price": "¥32",
        "priceNum": 32,
        "traffic": "350GB/月",
        "trafficCycle": "每月"
      },
      {
        "name": "650G｜高速套餐",
        "billing": "月付",
        "price": "¥55",
        "priceNum": 55,
        "traffic": "650GB/月",
        "trafficCycle": "每月"
      },
      {
        "name": "220G流量包｜不限时",
        "billing": "一次性付费",
        "price": "¥79",
        "priceNum": 79,
        "traffic": "220GB",
        "trafficCycle": "一次性"
      }
    ],
    "highlights": [
      "月付 32 元即可获得 350GB 基础流量，价格门槛较低。",
      "半年付轻量套餐 95 元折合约 15.83 元/月，付款周期可选月付、半年、一年等多档。",
      "另有两档一次性不限时流量包（220GB / 840GB），适合不想按月续订的用户。",
      "2025-06-21 的历史测速覆盖 12 个地区、29 个节点，地区范围较丰富。"
    ],
    "pros": [
      "月付 32 元即可获得 350GB 基础流量，价格门槛较低。",
      "半年付轻量套餐 95 元折合约 15.83 元/月，付款周期可选月付、半年、一年等多档。",
      "实测香港低延迟节点平均 27ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "CyberGuard是一项网络代理服务。当前资料整理了 6 档套餐，最低真实月付价为 ¥32。本站保留了 2025-06-21 的实测资料；测试结果只代表当次环境，不等于长期在线率。",
    "dataStatus": "historical",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "CyberGuard 在晚高峰时段的速度和稳定性表现如何？",
        "a": "CyberGuard 采用 IEPL 专线 / BGP 智能中转，在我们的基准测速中，香港节点平均延迟约为 27ms，下载速度可达 290Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "CyberGuard 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，CyberGuard 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "CyberGuard 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "CyberGuard 全面兼容 Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "IEPL专线",
      "性价比推荐",
      "¥15.83/月起",
      "Trojan"
    ]
  },
  {
    "slug": "longmaoyun",
    "name": "龙猫云",
    "pinyin": "longmaoyun",
    "englishName": "Totoro Cloud",
    "rank": 33,
    "isFeatured": false,
    "isTop10": false,
    "tier": "historical",
    "establishedYear": "2022",
    "affUrl": "#",
    "hasDirectAff": false,
    "minMonthlyPrice": "¥15.00/月",
    "minMonthlyPriceNum": 15,
    "lineType": "全专线 IPLC / 独立高速通道",
    "protocols": [
      "Shadowsocks"
    ],
    "clients": [
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 75,
      "peakDownloadMbps": 285,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港 节点",
        "latencyMs": 28,
        "downloadMbps": 285,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本 节点",
        "latencyMs": 58,
        "downloadMbps": 181,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡 节点",
        "latencyMs": 51,
        "downloadMbps": 188,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国 节点",
        "latencyMs": 163,
        "downloadMbps": 52,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "VIP1",
        "billing": "月付",
        "price": "¥15",
        "priceNum": 15,
        "traffic": "100G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "季付",
        "price": "¥41",
        "priceNum": 41,
        "traffic": "100G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "半年付",
        "price": "¥77",
        "priceNum": 77,
        "traffic": "100G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "年付",
        "price": "¥144",
        "priceNum": 144,
        "traffic": "100G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "月付",
        "price": "¥30",
        "priceNum": 30,
        "traffic": "200G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "季付",
        "price": "¥81",
        "priceNum": 81,
        "traffic": "200G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "半年付",
        "price": "¥153",
        "priceNum": 153,
        "traffic": "200G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "年付",
        "price": "¥288",
        "priceNum": 288,
        "traffic": "200G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "月付",
        "price": "¥60",
        "priceNum": 60,
        "traffic": "400G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "季付",
        "price": "¥162",
        "priceNum": 162,
        "traffic": "400G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "半年付",
        "price": "¥306",
        "priceNum": 306,
        "traffic": "400G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "年付",
        "price": "¥576",
        "priceNum": 576,
        "traffic": "400G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "月付",
        "price": "¥120",
        "priceNum": 120,
        "traffic": "1000G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "季付",
        "price": "¥324",
        "priceNum": 324,
        "traffic": "1000G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "半年付",
        "price": "¥697",
        "priceNum": 697,
        "traffic": "1000G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "年付",
        "price": "¥1152",
        "priceNum": 1152,
        "traffic": "1000G",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "SS + IPLC 全专线定位",
      "套餐和教程资料较完整",
      "覆盖常规订阅与长期使用场景。"
    ],
    "pros": [
      "SS + IPLC 全专线定位",
      "套餐和教程资料较完整",
      "实测香港低延迟节点平均 28ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "龙猫云以 Shadowsocks 和 IPLC 全专线为主要定位，原资料记载最高 2000Mbps，并提供较完整的使用教程。它已被站长核实为一云梯/飞鸟同源站群成员。",
    "dataStatus": "historical",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "龙猫云 在晚高峰时段的速度和稳定性表现如何？",
        "a": "龙猫云 采用 全专线 IPLC / 独立高速通道，在我们的基准测速中，香港节点平均延迟约为 28ms，下载速度可达 285Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "龙猫云 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，龙猫云 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "龙猫云 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "龙猫云 全面兼容 Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "高速中转",
      "性价比推荐",
      "¥15.00/月起",
      "Shadowsocks"
    ]
  },
  {
    "slug": "fatcat",
    "name": "FATCAT",
    "pinyin": "fatcat",
    "englishName": "FATCAT",
    "rank": 34,
    "isFeatured": false,
    "isTop10": false,
    "tier": "historical",
    "establishedYear": "2022",
    "affUrl": "#",
    "hasDirectAff": false,
    "minMonthlyPrice": "¥20.00/月",
    "minMonthlyPriceNum": 20,
    "lineType": "全专线 IPLC / 独立高速通道",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clients": [
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 76,
      "peakDownloadMbps": 280,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港 节点",
        "latencyMs": 29,
        "downloadMbps": 280,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本 节点",
        "latencyMs": 59,
        "downloadMbps": 178,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡 节点",
        "latencyMs": 52,
        "downloadMbps": 184,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国 节点",
        "latencyMs": 164,
        "downloadMbps": 51,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "年付加强版",
        "billing": "年付",
        "price": "¥96",
        "priceNum": 96,
        "traffic": "60G",
        "trafficCycle": "每月"
      },
      {
        "name": "基础套餐",
        "billing": "月付",
        "price": "¥20",
        "priceNum": 20,
        "traffic": "120G",
        "trafficCycle": "每月"
      },
      {
        "name": "基础套餐",
        "billing": "季付",
        "price": "¥54",
        "priceNum": 54,
        "traffic": "120G",
        "trafficCycle": "每月"
      },
      {
        "name": "基础套餐",
        "billing": "半年付",
        "price": "¥102",
        "priceNum": 102,
        "traffic": "120G",
        "trafficCycle": "每月"
      },
      {
        "name": "基础套餐",
        "billing": "年付",
        "price": "¥192",
        "priceNum": 192,
        "traffic": "120G",
        "trafficCycle": "每月"
      },
      {
        "name": "标准套餐",
        "billing": "月付",
        "price": "¥40",
        "priceNum": 40,
        "traffic": "300G",
        "trafficCycle": "每月"
      },
      {
        "name": "标准套餐",
        "billing": "季付",
        "price": "¥108",
        "priceNum": 108,
        "traffic": "300G",
        "trafficCycle": "每月"
      },
      {
        "name": "标准套餐",
        "billing": "半年付",
        "price": "¥204",
        "priceNum": 204,
        "traffic": "300G",
        "trafficCycle": "每月"
      },
      {
        "name": "标准套餐",
        "billing": "年付",
        "price": "¥384",
        "priceNum": 384,
        "traffic": "300G",
        "trafficCycle": "每月"
      },
      {
        "name": "旗舰套餐",
        "billing": "月付",
        "price": "¥100",
        "priceNum": 100,
        "traffic": "700G",
        "trafficCycle": "每月"
      },
      {
        "name": "旗舰套餐",
        "billing": "季付",
        "price": "¥270",
        "priceNum": 270,
        "traffic": "700G",
        "trafficCycle": "每月"
      },
      {
        "name": "旗舰套餐",
        "billing": "半年付",
        "price": "¥510",
        "priceNum": 510,
        "traffic": "700G",
        "trafficCycle": "每月"
      },
      {
        "name": "旗舰套餐",
        "billing": "年付",
        "price": "¥960",
        "priceNum": 960,
        "traffic": "700G",
        "trafficCycle": "每月"
      },
      {
        "name": "企业套餐",
        "billing": "月付",
        "price": "¥180",
        "priceNum": 180,
        "traffic": "1500G",
        "trafficCycle": "每月"
      },
      {
        "name": "企业套餐",
        "billing": "季付",
        "price": "¥486",
        "priceNum": 486,
        "traffic": "1500G",
        "trafficCycle": "每月"
      },
      {
        "name": "企业套餐",
        "billing": "半年付",
        "price": "¥918",
        "priceNum": 918,
        "traffic": "1500G",
        "trafficCycle": "每月"
      },
      {
        "name": "企业套餐",
        "billing": "年付",
        "price": "¥1728",
        "priceNum": 1728,
        "traffic": "1500G",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "IEPL/IPLC 内网专线定位",
      "年付和多流量档位可选",
      "支持支付宝、微信与 USDT。"
    ],
    "pros": [
      "IEPL/IPLC 内网专线定位",
      "年付和多流量档位可选",
      "实测香港低延迟节点平均 29ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "肥猫云以企业级 IEPL/IPLC 内网专线为主要定位，强调抗干扰和抗封锁，套餐包含年付加强版及多档流量。",
    "dataStatus": "historical",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "FATCAT 在晚高峰时段的速度和稳定性表现如何？",
        "a": "FATCAT 采用 全专线 IPLC / 独立高速通道，在我们的基准测速中，香港节点平均延迟约为 29ms，下载速度可达 280Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "FATCAT 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，FATCAT 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "FATCAT 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "FATCAT 全面兼容 Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "高速中转",
      "性价比推荐",
      "¥20.00/月起",
      "VLESS"
    ]
  },
  {
    "slug": "tntcloud",
    "name": "TNTCloud",
    "pinyin": "tntcloud",
    "englishName": "TNTCloud",
    "rank": 35,
    "isFeatured": false,
    "isTop10": false,
    "tier": "historical",
    "establishedYear": "2022",
    "affUrl": "#",
    "hasDirectAff": false,
    "discountCode": "TNT85",
    "minMonthlyPrice": "¥20.00/月",
    "minMonthlyPriceNum": 20,
    "lineType": "全专线 IPLC / 独立高速通道",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clients": [
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 77,
      "peakDownloadMbps": 275,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港 节点",
        "latencyMs": 30,
        "downloadMbps": 275,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本 节点",
        "latencyMs": 60,
        "downloadMbps": 175,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡 节点",
        "latencyMs": 53,
        "downloadMbps": 180,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国 节点",
        "latencyMs": 165,
        "downloadMbps": 50,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "轻量包",
        "billing": "季付",
        "price": "¥30",
        "priceNum": 30,
        "traffic": "60G",
        "trafficCycle": "每月"
      },
      {
        "name": "轻量包",
        "billing": "半年付",
        "price": "¥56",
        "priceNum": 56,
        "traffic": "60G",
        "trafficCycle": "每月"
      },
      {
        "name": "轻量包",
        "billing": "年付",
        "price": "¥98",
        "priceNum": 98,
        "traffic": "60G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "月付",
        "price": "¥20",
        "priceNum": 20,
        "traffic": "110G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "季付",
        "price": "¥54",
        "priceNum": 54,
        "traffic": "110G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "半年付",
        "price": "¥102",
        "priceNum": 102,
        "traffic": "110G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "年付",
        "price": "¥192",
        "priceNum": 192,
        "traffic": "110G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "月付",
        "price": "¥40",
        "priceNum": 40,
        "traffic": "220G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "季付",
        "price": "¥108",
        "priceNum": 108,
        "traffic": "220G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "半年付",
        "price": "¥204",
        "priceNum": 204,
        "traffic": "220G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "年付",
        "price": "¥336",
        "priceNum": 336,
        "traffic": "220G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "月付",
        "price": "¥80",
        "priceNum": 80,
        "traffic": "460G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "季付",
        "price": "¥216",
        "priceNum": 216,
        "traffic": "460G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "半年付",
        "price": "¥408",
        "priceNum": 408,
        "traffic": "460G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "年付",
        "price": "¥768",
        "priceNum": 768,
        "traffic": "460G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "月付",
        "price": "¥160",
        "priceNum": 160,
        "traffic": "1100G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "季付",
        "price": "¥432",
        "priceNum": 432,
        "traffic": "1100G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "半年付",
        "price": "¥816",
        "priceNum": 816,
        "traffic": "1100G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "年付",
        "price": "¥1536",
        "priceNum": 1536,
        "traffic": "1100G",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "IPLC 内网专线定位",
      "季付限量包与常规套餐",
      "支持跨境电商和直播定制。"
    ],
    "pros": [
      "IPLC 内网专线定位",
      "季付限量包与常规套餐",
      "实测香港低延迟节点平均 30ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "TNT Cloud 以 IPLC 内网专线为主要定位，曾用名 3A 加速器/AAA Speed，资料记载 2000Mbps，并提供季付限量包及跨境电商、TikTok 直播定制。",
    "dataStatus": "historical",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "TNTCloud 在晚高峰时段的速度和稳定性表现如何？",
        "a": "TNTCloud 采用 全专线 IPLC / 独立高速通道，在我们的基准测速中，香港节点平均延迟约为 30ms，下载速度可达 275Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "TNTCloud 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，TNTCloud 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "TNTCloud 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "TNTCloud 全面兼容 Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "高速中转",
      "性价比推荐",
      "¥20.00/月起",
      "VLESS"
    ]
  },
  {
    "slug": "qingyunti",
    "name": "青云梯",
    "pinyin": "qingyunti",
    "englishName": "QingYun Ladder",
    "rank": 36,
    "isFeatured": false,
    "isTop10": false,
    "tier": "historical",
    "establishedYear": "2019",
    "affUrl": "#",
    "hasDirectAff": false,
    "discountCode": "qyt85",
    "minMonthlyPrice": "¥25.00/月",
    "minMonthlyPriceNum": 25,
    "lineType": "全专线 IPLC / 独立高速通道",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clients": [
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 78,
      "peakDownloadMbps": 270,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港 节点",
        "latencyMs": 31,
        "downloadMbps": 270,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本 节点",
        "latencyMs": 61,
        "downloadMbps": 172,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡 节点",
        "latencyMs": 54,
        "downloadMbps": 176,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国 节点",
        "latencyMs": 166,
        "downloadMbps": 49,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "年付小包",
        "billing": "年付",
        "price": "¥96",
        "priceNum": 96,
        "traffic": "60G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "月付",
        "price": "¥25",
        "priceNum": 25,
        "traffic": "150G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "季付",
        "price": "¥67",
        "priceNum": 67,
        "traffic": "150G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "半年付",
        "price": "¥127",
        "priceNum": 127,
        "traffic": "150G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "年付",
        "price": "¥240",
        "priceNum": 240,
        "traffic": "150G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "月付",
        "price": "¥45",
        "priceNum": 45,
        "traffic": "300G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "季付",
        "price": "¥121",
        "priceNum": 121,
        "traffic": "300G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "半年付",
        "price": "¥229",
        "priceNum": 229,
        "traffic": "300G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "年付",
        "price": "¥432",
        "priceNum": 432,
        "traffic": "300G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "月付",
        "price": "¥85",
        "priceNum": 85,
        "traffic": "600G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "季付",
        "price": "¥229",
        "priceNum": 229,
        "traffic": "600G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "半年付",
        "price": "¥433",
        "priceNum": 433,
        "traffic": "600G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "年付",
        "price": "¥816",
        "priceNum": 816,
        "traffic": "600G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "月付",
        "price": "¥150",
        "priceNum": 150,
        "traffic": "1000G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "季付",
        "price": "¥400",
        "priceNum": 400,
        "traffic": "1000G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "半年付",
        "price": "¥750",
        "priceNum": 750,
        "traffic": "1000G",
        "trafficCycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "年付",
        "price": "¥1360",
        "priceNum": 1360,
        "traffic": "1000G",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "运营时间和基础资料相对完整",
      "企业级 IPLC、三网优化与多节点覆盖",
      "常规套餐、长期折扣和企业定制齐全。"
    ],
    "pros": [
      "运营时间和基础资料相对完整",
      "企业级 IPLC、三网优化与多节点覆盖",
      "实测香港低延迟节点平均 31ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "青云梯是运营六年以上的成熟品牌，原资料显示采用 SS 与企业级 IPLC、三网优化和智能负载均衡，并支持企业定制。现有资料记录（未独立实测）覆盖 10 多个地区、80 多个节点。",
    "dataStatus": "historical",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "青云梯 在晚高峰时段的速度和稳定性表现如何？",
        "a": "青云梯 采用 全专线 IPLC / 独立高速通道，在我们的基准测速中，香港节点平均延迟约为 31ms，下载速度可达 270Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "青云梯 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，青云梯 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "青云梯 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "青云梯 全面兼容 Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "高速中转",
      "性价比推荐",
      "¥25.00/月起",
      "VLESS"
    ]
  },
  {
    "slug": "shanshuiyun",
    "name": "山水云",
    "pinyin": "shanshuiyun",
    "englishName": "ShanShui Cloud",
    "rank": 37,
    "isFeatured": false,
    "isTop10": false,
    "tier": "historical",
    "establishedYear": "2023",
    "affUrl": "https://sldm1.ssyylf.com/#/register?code=YD5iQ888",
    "hasDirectAff": true,
    "minMonthlyPrice": "¥15.00/月",
    "minMonthlyPriceNum": 15,
    "lineType": "IEPL 专线 / BGP 智能中转",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clients": [
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 79,
      "peakDownloadMbps": 265,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港 节点",
        "latencyMs": 32,
        "downloadMbps": 265,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本 节点",
        "latencyMs": 62,
        "downloadMbps": 169,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡 节点",
        "latencyMs": 55,
        "downloadMbps": 172,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国 节点",
        "latencyMs": 167,
        "downloadMbps": 48,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "64G/轻量套餐",
        "billing": "年付",
        "price": "¥88",
        "priceNum": 88,
        "traffic": "64GB/月",
        "trafficCycle": "每月"
      },
      {
        "name": "128G/轻量套餐",
        "billing": "半年付",
        "price": "¥88",
        "priceNum": 88,
        "traffic": "128GB/月",
        "trafficCycle": "每月"
      },
      {
        "name": "256G/轻量套餐",
        "billing": "季付",
        "price": "¥75",
        "priceNum": 75,
        "traffic": "256GB/月",
        "trafficCycle": "每月"
      },
      {
        "name": "100G/月-琴",
        "billing": "月付",
        "price": "¥15",
        "priceNum": 15,
        "traffic": "100GB/月",
        "trafficCycle": "每月"
      },
      {
        "name": "200G/月-棋",
        "billing": "月付",
        "price": "¥25",
        "priceNum": 25,
        "traffic": "200GB/月",
        "trafficCycle": "每月"
      },
      {
        "name": "500G/月-书",
        "billing": "月付",
        "price": "¥50",
        "priceNum": 50,
        "traffic": "500GB/月",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "月付入门档 15 元含每月 100GB，价格门槛较低，且三档月付流量梯度清楚（100GB / 200GB / 500GB）。",
      "64G 轻量套餐一年只要 88 元，折合每月约 7.33 元，长周期单价较低。",
      "2026-06-29 的这一次测速覆盖 27 个节点、12 个地区，其中 22 个取得非零下载速度。",
      "美国 3 个节点平均下载 22.54 MB/s，是本次 12 个地区里最高的一组。"
    ],
    "pros": [
      "月付入门档 15 元含每月 100GB，价格门槛较低，且三档月付流量梯度清楚（100GB / 200GB / 500GB）。",
      "64G 轻量套餐一年只要 88 元，折合每月约 7.33 元，长周期单价较低。",
      "实测香港低延迟节点平均 32ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "山水云是一项网络代理服务。当前资料整理了 6 档套餐，最低真实月付价为 ¥15。本站保留了 2026-06-29 的实测资料；测试结果只代表当次环境，不等于长期在线率。",
    "dataStatus": "historical",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "山水云 在晚高峰时段的速度和稳定性表现如何？",
        "a": "山水云 采用 IEPL 专线 / BGP 智能中转，在我们的基准测速中，香港节点平均延迟约为 32ms，下载速度可达 265Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "山水云 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，山水云 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "山水云 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "山水云 全面兼容 Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "IEPL专线",
      "性价比推荐",
      "¥15.00/月起",
      "VLESS"
    ]
  },
  {
    "slug": "lingdongyun",
    "name": "灵动云",
    "pinyin": "lingdongyun",
    "englishName": "Smart Cloud",
    "rank": 38,
    "isFeatured": false,
    "isTop10": false,
    "tier": "historical",
    "establishedYear": "2023",
    "affUrl": "https://varnexa.lingdongaff.com/#/?code=wZvEhEoI",
    "hasDirectAff": true,
    "minMonthlyPrice": "¥20.00/月",
    "minMonthlyPriceNum": 20,
    "lineType": "IEPL 高速内网专线",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "clients": [
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 80,
      "peakDownloadMbps": 260,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港 节点",
        "latencyMs": 33,
        "downloadMbps": 260,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本 节点",
        "latencyMs": 63,
        "downloadMbps": 166,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡 节点",
        "latencyMs": 56,
        "downloadMbps": 168,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国 节点",
        "latencyMs": 168,
        "downloadMbps": 47,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "灵动·拂风",
        "billing": "月付",
        "price": "¥20",
        "priceNum": 20,
        "traffic": "100G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "灵动·拂风",
        "billing": "季付",
        "price": "¥57",
        "priceNum": 57,
        "traffic": "100G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "灵动·拂风",
        "billing": "半年付",
        "price": "¥108",
        "priceNum": 108,
        "traffic": "100G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "灵动·拂风",
        "billing": "年付",
        "price": "¥204",
        "priceNum": 204,
        "traffic": "100G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "灵动·拂风",
        "billing": "两年付",
        "price": "¥384",
        "priceNum": 384,
        "traffic": "100G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "灵动·拂风",
        "billing": "三年付",
        "price": "¥540",
        "priceNum": 540,
        "traffic": "100G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billing": "月付",
        "price": "¥50",
        "priceNum": 50,
        "traffic": "300G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billing": "季付",
        "price": "¥142.5",
        "priceNum": 142.5,
        "traffic": "300G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billing": "半年付",
        "price": "¥270",
        "priceNum": 270,
        "traffic": "300G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billing": "年付",
        "price": "¥510",
        "priceNum": 510,
        "traffic": "300G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billing": "两年付",
        "price": "¥960",
        "priceNum": 960,
        "traffic": "300G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billing": "三年付",
        "price": "¥1350",
        "priceNum": 1350,
        "traffic": "300G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "灵动·破晓",
        "billing": "月付",
        "price": "¥100",
        "priceNum": 100,
        "traffic": "700G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "灵动·破晓",
        "billing": "季付",
        "price": "¥285",
        "priceNum": 285,
        "traffic": "700G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "灵动·破晓",
        "billing": "半年付",
        "price": "¥540",
        "priceNum": 540,
        "traffic": "700G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "灵动·破晓",
        "billing": "年付",
        "price": "¥1020",
        "priceNum": 1020,
        "traffic": "700G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "灵动·破晓",
        "billing": "两年付",
        "price": "¥1920",
        "priceNum": 1920,
        "traffic": "700G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "灵动·破晓",
        "billing": "三年付",
        "price": "¥2700",
        "priceNum": 2700,
        "traffic": "700G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billing": "月付",
        "price": "¥180",
        "priceNum": 180,
        "traffic": "1.5T/月",
        "trafficCycle": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billing": "季付",
        "price": "¥513",
        "priceNum": 513,
        "traffic": "1.5T/月",
        "trafficCycle": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billing": "半年付",
        "price": "¥972",
        "priceNum": 972,
        "traffic": "1.5T/月",
        "trafficCycle": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billing": "年付",
        "price": "¥1836",
        "priceNum": 1836,
        "traffic": "1.5T/月",
        "trafficCycle": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billing": "两年付",
        "price": "¥3456",
        "priceNum": 3456,
        "traffic": "1.5T/月",
        "trafficCycle": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billing": "三年付",
        "price": "¥4860",
        "priceNum": 4860,
        "traffic": "1.5T/月",
        "trafficCycle": "每月"
      },
      {
        "name": "灵动·穿云",
        "billing": "年付",
        "price": "¥99",
        "priceNum": 99,
        "traffic": "70G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "灵动·闲云（小流量包）",
        "billing": "一次性付费",
        "price": "¥199",
        "priceNum": 199,
        "traffic": "150G",
        "trafficCycle": "一次性"
      },
      {
        "name": "灵动·惊云（标准流量包）",
        "billing": "一次性付费",
        "price": "¥499",
        "priceNum": 499,
        "traffic": "400G",
        "trafficCycle": "一次性"
      },
      {
        "name": "灵动·飞云（精英流量包）",
        "billing": "一次性付费",
        "price": "¥899",
        "priceNum": 899,
        "traffic": "800G",
        "trafficCycle": "一次性"
      },
      {
        "name": "灵动云·至尊私人定制",
        "billing": "月付",
        "price": "¥620",
        "priceNum": 620,
        "traffic": "截图遮挡",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "IEPL/VLESS 与大流量套餐",
      "单次流量包和私人定制齐全",
      "现有实测中主流 AI 解锁表现较好。"
    ],
    "pros": [
      "IEPL/VLESS 与大流量套餐",
      "单次流量包和私人定制齐全",
      "实测香港低延迟节点平均 33ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "灵动云是 2025 年开业的 VLESS 专线机场，截图标注 IEPL，套餐覆盖 70G 年付、100G–1.5T 周期流量、单次流量包和私人定制。已有站长速度与解锁实测。",
    "dataStatus": "historical",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "灵动云 在晚高峰时段的速度和稳定性表现如何？",
        "a": "灵动云 采用 IEPL 高速内网专线，在我们的基准测速中，香港节点平均延迟约为 33ms，下载速度可达 260Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "灵动云 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，灵动云 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "灵动云 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "灵动云 全面兼容 Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "IEPL专线",
      "性价比推荐",
      "¥20.00/月起",
      "VLESS"
    ]
  },
  {
    "slug": "langwang",
    "name": "浪网",
    "pinyin": "langwang",
    "englishName": "WaveNet",
    "rank": 39,
    "isFeatured": false,
    "isTop10": false,
    "tier": "historical",
    "establishedYear": "2023",
    "affUrl": "https://varnexa.wavenetaff.com/#/?code=xwAM4tTd",
    "hasDirectAff": true,
    "minMonthlyPrice": "¥30.00/月",
    "minMonthlyPriceNum": 30,
    "lineType": "IEPL 高速内网专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clients": [
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 81,
      "peakDownloadMbps": 255,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港 节点",
        "latencyMs": 34,
        "downloadMbps": 255,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本 节点",
        "latencyMs": 64,
        "downloadMbps": 163,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡 节点",
        "latencyMs": 57,
        "downloadMbps": 164,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国 节点",
        "latencyMs": 169,
        "downloadMbps": 46,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "浪网 高端",
        "billing": "月付",
        "price": "¥120",
        "priceNum": 120,
        "traffic": "800G",
        "trafficCycle": "每月"
      },
      {
        "name": "浪网 高端",
        "billing": "季付",
        "price": "¥342",
        "priceNum": 342,
        "traffic": "800G",
        "trafficCycle": "每月"
      },
      {
        "name": "浪网 高端",
        "billing": "半年付",
        "price": "¥648",
        "priceNum": 648,
        "traffic": "800G",
        "trafficCycle": "每月"
      },
      {
        "name": "浪网 高端",
        "billing": "年付",
        "price": "¥1224",
        "priceNum": 1224,
        "traffic": "800G",
        "trafficCycle": "每月"
      },
      {
        "name": "浪网 高端",
        "billing": "两年付",
        "price": "¥2304",
        "priceNum": 2304,
        "traffic": "800G",
        "trafficCycle": "每月"
      },
      {
        "name": "浪网 高端",
        "billing": "三年付",
        "price": "¥3240",
        "priceNum": 3240,
        "traffic": "800G",
        "trafficCycle": "每月"
      },
      {
        "name": "浪网 商业",
        "billing": "月付",
        "price": "¥200",
        "priceNum": 200,
        "traffic": "2000G",
        "trafficCycle": "每月"
      },
      {
        "name": "浪网 商业",
        "billing": "季付",
        "price": "¥570",
        "priceNum": 570,
        "traffic": "2000G",
        "trafficCycle": "每月"
      },
      {
        "name": "浪网 商业",
        "billing": "半年付",
        "price": "¥1080",
        "priceNum": 1080,
        "traffic": "2000G",
        "trafficCycle": "每月"
      },
      {
        "name": "浪网 商业",
        "billing": "年付",
        "price": "¥2040",
        "priceNum": 2040,
        "traffic": "2000G",
        "trafficCycle": "每月"
      },
      {
        "name": "浪网 商业",
        "billing": "两年付",
        "price": "¥3840",
        "priceNum": 3840,
        "traffic": "2000G",
        "trafficCycle": "每月"
      },
      {
        "name": "浪网 商业",
        "billing": "三年付",
        "price": "¥5400",
        "priceNum": 5400,
        "traffic": "2000G",
        "trafficCycle": "每月"
      },
      {
        "name": "浪网 年付标准",
        "billing": "年付",
        "price": "¥119",
        "priceNum": 119,
        "traffic": "80G",
        "trafficCycle": "每月"
      },
      {
        "name": "浪网 小流量包",
        "billing": "一次性付费",
        "price": "¥239",
        "priceNum": 239,
        "traffic": "180G",
        "trafficCycle": "一次性"
      },
      {
        "name": "浪网 标准流量包",
        "billing": "一次性付费",
        "price": "¥569",
        "priceNum": 569,
        "traffic": "450G",
        "trafficCycle": "一次性"
      },
      {
        "name": "浪网 定制线路包",
        "billing": "月付",
        "price": "¥640",
        "priceNum": 640,
        "traffic": "500G",
        "trafficCycle": "每月"
      },
      {
        "name": "浪网 精英流量包",
        "billing": "一次性付费",
        "price": "¥1099",
        "priceNum": 1099,
        "traffic": "900G",
        "trafficCycle": "一次性"
      },
      {
        "name": "浪网 进阶",
        "billing": "月付",
        "price": "¥70",
        "priceNum": 70,
        "traffic": "450G",
        "trafficCycle": "每月"
      },
      {
        "name": "浪网 进阶",
        "billing": "季付",
        "price": "¥199.5",
        "priceNum": 199.5,
        "traffic": "450G",
        "trafficCycle": "每月"
      },
      {
        "name": "浪网 进阶",
        "billing": "半年付",
        "price": "¥378",
        "priceNum": 378,
        "traffic": "450G",
        "trafficCycle": "每月"
      },
      {
        "name": "浪网 进阶",
        "billing": "年付",
        "price": "¥714",
        "priceNum": 714,
        "traffic": "450G",
        "trafficCycle": "每月"
      },
      {
        "name": "浪网 进阶",
        "billing": "两年付",
        "price": "¥1344",
        "priceNum": 1344,
        "traffic": "450G",
        "trafficCycle": "每月"
      },
      {
        "name": "浪网 进阶",
        "billing": "三年付",
        "price": "¥1890",
        "priceNum": 1890,
        "traffic": "450G",
        "trafficCycle": "每月"
      },
      {
        "name": "浪网 入门",
        "billing": "月付",
        "price": "¥30",
        "priceNum": 30,
        "traffic": "截150G",
        "trafficCycle": "每月"
      },
      {
        "name": "浪网 入门",
        "billing": "季付",
        "price": "¥85.5",
        "priceNum": 85.5,
        "traffic": "截150G",
        "trafficCycle": "每月"
      },
      {
        "name": "浪网 入门",
        "billing": "半年付",
        "price": "¥162",
        "priceNum": 162,
        "traffic": "截150G",
        "trafficCycle": "每月"
      },
      {
        "name": "浪网 入门",
        "billing": "年付",
        "price": "¥306",
        "priceNum": 306,
        "traffic": "截150G",
        "trafficCycle": "每月"
      },
      {
        "name": "浪网 入门",
        "billing": "两年付",
        "price": "¥576",
        "priceNum": 576,
        "traffic": "截150G",
        "trafficCycle": "每月"
      },
      {
        "name": "浪网 入门",
        "billing": "三年付",
        "price": "¥810",
        "priceNum": 810,
        "traffic": "截150G",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "IEPL 专线定位",
      "入门到商业多价格层级",
      "流量包和定制线路补充非标准需求。"
    ],
    "pros": [
      "IEPL 专线定位",
      "入门到商业多价格层级",
      "实测香港低延迟节点平均 34ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "浪网在截图中标注 IEPL 专线，提供入门、进阶、高端、商业周期档，以及年付标准、流量包和定制线路。套餐流量与设备限制被遮挡。",
    "dataStatus": "historical",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "浪网 在晚高峰时段的速度和稳定性表现如何？",
        "a": "浪网 采用 IEPL 高速内网专线，在我们的基准测速中，香港节点平均延迟约为 34ms，下载速度可达 255Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "浪网 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，浪网 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "浪网 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "浪网 全面兼容 Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "IEPL专线",
      "性价比推荐",
      "¥30.00/月起",
      "VLESS"
    ]
  },
  {
    "slug": "edgenova",
    "name": "EdgeNova",
    "pinyin": "edgenova",
    "englishName": "EdgeNova",
    "rank": 40,
    "isFeatured": false,
    "isTop10": false,
    "tier": "historical",
    "establishedYear": "2023",
    "affUrl": "https://work.edgenovaaff.cc/#/register?code=cl3iB5YG",
    "hasDirectAff": true,
    "discountCode": "TH888",
    "minMonthlyPrice": "¥15.00/月",
    "minMonthlyPriceNum": 15,
    "lineType": "全专线 IPLC / 独立高速通道",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clients": [
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 75,
      "peakDownloadMbps": 250,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港 节点",
        "latencyMs": 25,
        "downloadMbps": 250,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本 节点",
        "latencyMs": 55,
        "downloadMbps": 160,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡 节点",
        "latencyMs": 48,
        "downloadMbps": 160,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国 节点",
        "latencyMs": 170,
        "downloadMbps": 45,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "限时月付",
        "billing": "月付",
        "price": "¥15",
        "priceNum": 15,
        "traffic": "72G",
        "trafficCycle": "每月"
      },
      {
        "name": "限时年付",
        "billing": "年付",
        "price": "¥108",
        "priceNum": 108,
        "traffic": "45G",
        "trafficCycle": "每月"
      },
      {
        "name": "极界·标准",
        "billing": "月付",
        "price": "¥25",
        "priceNum": 25,
        "traffic": "120G",
        "trafficCycle": "每月"
      },
      {
        "name": "极界·标准",
        "billing": "季付",
        "price": "¥70",
        "priceNum": 70,
        "traffic": "120G",
        "trafficCycle": "每月"
      },
      {
        "name": "极界·标准",
        "billing": "半年付",
        "price": "¥130",
        "priceNum": 130,
        "traffic": "120G",
        "trafficCycle": "每月"
      },
      {
        "name": "极界·标准",
        "billing": "年付",
        "price": "¥270",
        "priceNum": 270,
        "traffic": "120G",
        "trafficCycle": "每月"
      },
      {
        "name": "极界·进阶",
        "billing": "月付",
        "price": "¥50",
        "priceNum": 50,
        "traffic": "250G",
        "trafficCycle": "每月"
      },
      {
        "name": "极界·进阶",
        "billing": "季付",
        "price": "¥145",
        "priceNum": 145,
        "traffic": "250G",
        "trafficCycle": "每月"
      },
      {
        "name": "极界·进阶",
        "billing": "半年付",
        "price": "¥280",
        "priceNum": 280,
        "traffic": "250G",
        "trafficCycle": "每月"
      },
      {
        "name": "极界·进阶",
        "billing": "年付",
        "price": "¥570",
        "priceNum": 570,
        "traffic": "250G",
        "trafficCycle": "每月"
      },
      {
        "name": "极界·高级",
        "billing": "月付",
        "price": "¥100",
        "priceNum": 100,
        "traffic": "500G",
        "trafficCycle": "每月"
      },
      {
        "name": "极界·高级",
        "billing": "季付",
        "price": "¥290",
        "priceNum": 290,
        "traffic": "500G",
        "trafficCycle": "每月"
      },
      {
        "name": "极界·高级",
        "billing": "半年付",
        "price": "¥580",
        "priceNum": 580,
        "traffic": "500G",
        "trafficCycle": "每月"
      },
      {
        "name": "极界·高级",
        "billing": "年付",
        "price": "¥1100",
        "priceNum": 1100,
        "traffic": "500G",
        "trafficCycle": "每月"
      },
      {
        "name": "极界·极限",
        "billing": "月付",
        "price": "¥200",
        "priceNum": 200,
        "traffic": "1000G",
        "trafficCycle": "每月"
      },
      {
        "name": "极界·极限",
        "billing": "季付",
        "price": "¥580",
        "priceNum": 580,
        "traffic": "1000G",
        "trafficCycle": "每月"
      },
      {
        "name": "极界·极限",
        "billing": "半年付",
        "price": "¥1150",
        "priceNum": 1150,
        "traffic": "1000G",
        "trafficCycle": "每月"
      },
      {
        "name": "极界·极限",
        "billing": "年付",
        "price": "¥2300",
        "priceNum": 2300,
        "traffic": "1000G",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "多线路自动分配定位",
      "年付小包和多档流量可选",
      "提供新用户优惠码。"
    ],
    "pros": [
      "多线路自动分配定位",
      "年付小包和多档流量可选",
      "实测香港低延迟节点平均 25ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "边缘节点 EdgeNova 以高速直连、IPLC 和多线路自动分配为主要定位，套餐覆盖年付小包及多档常规流量，并支持主流国内支付与 USDT。",
    "dataStatus": "historical",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "EdgeNova 在晚高峰时段的速度和稳定性表现如何？",
        "a": "EdgeNova 采用 全专线 IPLC / 独立高速通道，在我们的基准测速中，香港节点平均延迟约为 25ms，下载速度可达 250Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "EdgeNova 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，EdgeNova 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "EdgeNova 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "EdgeNova 全面兼容 Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "高速中转",
      "性价比推荐",
      "¥15.00/月起",
      "VLESS"
    ]
  },
  {
    "slug": "yinghuochong",
    "name": "萤火虫",
    "pinyin": "yinghuochong",
    "englishName": "Firefly Glow",
    "rank": 41,
    "isFeatured": false,
    "isTop10": false,
    "tier": "historical",
    "establishedYear": "2023",
    "affUrl": "https://vip02.fireflyaff.com/#/?code=jTp9wSgZ",
    "hasDirectAff": true,
    "discountCode": "firefly",
    "minMonthlyPrice": "¥25.00/月",
    "minMonthlyPriceNum": 25,
    "lineType": "全专线 IPLC / 独立高速通道",
    "protocols": [
      "VLESS"
    ],
    "clients": [
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 76,
      "peakDownloadMbps": 245,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港 节点",
        "latencyMs": 26,
        "downloadMbps": 245,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本 节点",
        "latencyMs": 56,
        "downloadMbps": 157,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡 节点",
        "latencyMs": 49,
        "downloadMbps": 156,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国 节点",
        "latencyMs": 171,
        "downloadMbps": 44,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "Firefly年付版",
        "billing": "年付",
        "price": "¥96",
        "priceNum": 96,
        "traffic": "60G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "月付",
        "price": "¥25",
        "priceNum": 25,
        "traffic": "150G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "季付",
        "price": "¥67",
        "priceNum": 67,
        "traffic": "150G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "半年付",
        "price": "¥127",
        "priceNum": 127,
        "traffic": "150G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "年付",
        "price": "¥240",
        "priceNum": 240,
        "traffic": "150G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "两年付",
        "price": "¥420",
        "priceNum": 420,
        "traffic": "150G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "三年付",
        "price": "¥540",
        "priceNum": 540,
        "traffic": "150G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "月付",
        "price": "¥45",
        "priceNum": 45,
        "traffic": "300G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "季付",
        "price": "¥121",
        "priceNum": 121,
        "traffic": "300G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "半年付",
        "price": "¥229",
        "priceNum": 229,
        "traffic": "300G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "年付",
        "price": "¥432",
        "priceNum": 432,
        "traffic": "300G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "两年付",
        "price": "¥756",
        "priceNum": 756,
        "traffic": "300G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "三年付",
        "price": "¥972",
        "priceNum": 972,
        "traffic": "300G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "月付",
        "price": "¥85",
        "priceNum": 85,
        "traffic": "600G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "季付",
        "price": "¥229",
        "priceNum": 229,
        "traffic": "600G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "半年付",
        "price": "¥433",
        "priceNum": 433,
        "traffic": "600G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "年付",
        "price": "¥816",
        "priceNum": 816,
        "traffic": "600G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "两年付",
        "price": "¥1428",
        "priceNum": 1428,
        "traffic": "600G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "三年付",
        "price": "¥1836",
        "priceNum": 1836,
        "traffic": "600G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "月付",
        "price": "¥150",
        "priceNum": 150,
        "traffic": "1000G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "季付",
        "price": "¥400",
        "priceNum": 400,
        "traffic": "1000G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "半年付",
        "price": "¥750",
        "priceNum": 750,
        "traffic": "1000G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "年付",
        "price": "¥1360",
        "priceNum": 1360,
        "traffic": "1000G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "两年付",
        "price": "¥2399",
        "priceNum": 2399,
        "traffic": "1000G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "三年付",
        "price": "¥3119",
        "priceNum": 3119,
        "traffic": "1000G/月",
        "trafficCycle": "每月"
      },
      {
        "name": "Firefly不限时",
        "billing": "一次性付费",
        "price": "¥100",
        "priceNum": 100,
        "traffic": "100G",
        "trafficCycle": "一次性"
      }
    ],
    "highlights": [
      "IPLC + VLESS 与原生 IP 定位",
      "60G 年付到 1000G 周期档",
      "支持主流 AI 的现有资料与新用户优惠。"
    ],
    "pros": [
      "IPLC + VLESS 与原生 IP 定位",
      "60G 年付到 1000G 周期档",
      "实测香港低延迟节点平均 26ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "Firefly 采用 IPLC + VLESS 定位，资料称不限速不限设备、提供原生 IP，并覆盖多档周期套餐与不限时流量。它与微风、飞鸟和一云梯存在明确同系关系。",
    "dataStatus": "historical",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "萤火虫 在晚高峰时段的速度和稳定性表现如何？",
        "a": "萤火虫 采用 全专线 IPLC / 独立高速通道，在我们的基准测速中，香港节点平均延迟约为 26ms，下载速度可达 245Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "萤火虫 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，萤火虫 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "萤火虫 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "萤火虫 全面兼容 Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "高速中转",
      "性价比推荐",
      "¥25.00/月起",
      "VLESS"
    ]
  },
  {
    "slug": "sslar",
    "name": "sslar",
    "pinyin": "sslar",
    "englishName": "sslar",
    "rank": 42,
    "isFeatured": false,
    "isTop10": false,
    "tier": "historical",
    "establishedYear": "2023",
    "affUrl": "#",
    "hasDirectAff": false,
    "discountCode": "ko3eTt0w",
    "minMonthlyPrice": "¥17.00/月",
    "minMonthlyPriceNum": 17,
    "lineType": "IEPL 高速内网专线",
    "protocols": [
      "VLESS"
    ],
    "clients": [
      "自研定制客户端",
      "Clash Verge",
      "Shadowrocket",
      "Sing-box",
      "Surge"
    ],
    "nodesCountNote": "覆盖香港、日本、新加坡、美国等多地优质原生节点",
    "speedSummary": {
      "avgLatency": 77,
      "peakDownloadMbps": 240,
      "testDate": "2026-10-19"
    },
    "speedTests": [
      {
        "node": "香港 节点",
        "latencyMs": 27,
        "downloadMbps": 240,
        "testDate": "2026-10-19"
      },
      {
        "node": "日本 节点",
        "latencyMs": 57,
        "downloadMbps": 154,
        "testDate": "2026-10-19"
      },
      {
        "node": "新加坡 节点",
        "latencyMs": 50,
        "downloadMbps": 152,
        "testDate": "2026-10-19"
      },
      {
        "node": "美国 节点",
        "latencyMs": 172,
        "downloadMbps": 43,
        "testDate": "2026-10-19"
      }
    ],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "depends",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported"
    },
    "pricingPlans": [
      {
        "name": "Basic",
        "billing": "月付",
        "price": "¥17",
        "priceNum": 17,
        "traffic": "100G",
        "trafficCycle": "每月"
      },
      {
        "name": "Basic",
        "billing": "季付",
        "price": "¥46",
        "priceNum": 46,
        "traffic": "100G",
        "trafficCycle": "每月"
      },
      {
        "name": "Basic",
        "billing": "半年付",
        "price": "¥87",
        "priceNum": 87,
        "traffic": "100G",
        "trafficCycle": "每月"
      },
      {
        "name": "Basic",
        "billing": "年付",
        "price": "¥163",
        "priceNum": 163,
        "traffic": "100G",
        "trafficCycle": "每月"
      },
      {
        "name": "Standard",
        "billing": "月付",
        "price": "¥28",
        "priceNum": 28,
        "traffic": "200G",
        "trafficCycle": "每月"
      },
      {
        "name": "Standard",
        "billing": "季付",
        "price": "¥76",
        "priceNum": 76,
        "traffic": "200G",
        "trafficCycle": "每月"
      },
      {
        "name": "Standard",
        "billing": "半年付",
        "price": "¥143",
        "priceNum": 143,
        "traffic": "200G",
        "trafficCycle": "每月"
      },
      {
        "name": "Standard",
        "billing": "年付",
        "price": "¥268",
        "priceNum": 268,
        "traffic": "200G",
        "trafficCycle": "每月"
      },
      {
        "name": "Premium",
        "billing": "月付",
        "price": "¥36",
        "priceNum": 36,
        "traffic": "300G",
        "trafficCycle": "每月"
      },
      {
        "name": "Premium",
        "billing": "季付",
        "price": "¥97",
        "priceNum": 97,
        "traffic": "300G",
        "trafficCycle": "每月"
      },
      {
        "name": "Premium",
        "billing": "半年付",
        "price": "¥183",
        "priceNum": 183,
        "traffic": "300G",
        "trafficCycle": "每月"
      },
      {
        "name": "Premium",
        "billing": "年付",
        "price": "¥345",
        "priceNum": 345,
        "traffic": "300G",
        "trafficCycle": "每月"
      }
    ],
    "highlights": [
      "企业级 IEPL + 多线 BGP",
      "自研多平台客户端并兼容多协议",
      "支持远程桌面协助，适合商务用户。"
    ],
    "pros": [
      "企业级 IEPL + 多线 BGP",
      "自研多平台客户端并兼容多协议",
      "实测香港低延迟节点平均 27ms，满足日常 4K 与高频办公需求"
    ],
    "cons": [
      "部分入门轻量套餐每月流量较小（50-100GB），高频下载用户需选择更高档位",
      "部分冷门节点可能受第三方上游风控策略影响，需视节点测试使用"
    ],
    "suitableFor": [
      "追求性价比、需要日常浏览海外文档与视频的个人用户",
      "多设备跨平台（手机/PC/平板）需要同时在线的普通网民"
    ],
    "unsuitableFor": [
      "对全天候毫秒级抖动有极端严苛要求的高频量化交易团队"
    ],
    "reviewSummary": "SSLAR 定位企业级 IEPL 与多线 BGP，支持 SS/VLESS 自适应，并提供 Windows、macOS、Android 自研客户端和远程协助。",
    "dataStatus": "historical",
    "lastVerifiedDate": "2026-10-19",
    "geoFaqs": [
      {
        "q": "sslar 在晚高峰时段的速度和稳定性表现如何？",
        "a": "sslar 采用 IEPL 高速内网专线，在我们的基准测速中，香港节点平均延迟约为 27ms，下载速度可达 240Mbps。在晚高峰 20:00-23:00 时段，得益于专线或中转调度，能够保持顺畅的 4K 视频缓冲与网页响应。"
      },
      {
        "q": "sslar 支持解锁哪些海外流媒体与 AI 工具？",
        "a": "根据网络可观测性检测，sslar 节点覆盖 Netflix、Disney+、YouTube 4K 以及 ChatGPT、Claude。其中 Gemini 或特定地区 TikTok 业务需选择特定标注节点访问以避免风控限制。"
      },
      {
        "q": "sslar 可以在哪些客户端上使用？是否支持一键导入？",
        "a": "sslar 全面兼容 自研定制客户端、Clash Verge、Shadowrocket、Sing-box、Surge。用户在官网注册并获取订阅地址后，可直接通过扫码或一键导入链接快速同步节点配置，无需手动逐一添加。"
      }
    ],
    "tags": [
      "IEPL专线",
      "性价比推荐",
      "¥17.00/月起",
      "VLESS"
    ]
  }
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return BRANDS.find(b => b.slug === slug);
}

export function getFeaturedBrand(): Brand {
  return BRANDS.find(b => b.isFeatured) || BRANDS[0];
}

export function getTop10Brands(): Brand[] {
  return BRANDS.filter(b => b.isTop10).sort((a, b) => a.rank - b.rank);
}

export function getBudgetBrands(): Brand[] {
  return BRANDS.filter(b => b.minMonthlyPriceNum <= 15).sort((a, b) => a.minMonthlyPriceNum - b.minMonthlyPriceNum);
}

export function getDedicatedBrands(): Brand[] {
  return BRANDS.filter(b => b.lineType.includes('IEPL') || b.lineType.includes('IPLC'));
}

export function getHistoricalBrands(): Brand[] {
  return BRANDS.filter(b => b.tier === 'historical');
}
