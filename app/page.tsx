const stats = [
  { value: "50", unit: "t / 日", label: "日次処理能力" },
  { value: "15", unit: "台", label: "保有・対応車両" },
  { value: "1,200", unit: "t / 月", label: "月間燃料供給量" },
  { value: "250", unit: "社以上", label: "主要お取引先数" },
];

const heroBadges = [
  "JWNET標準対応",
  "許認可・処理体制を公開",
  "PC・LT・TB対応",
  "全国対応",
  "最大30%削減を目指す",
];

const vision = [
  {
    title: "「また頼みたい」で、選ばれる会社へ。",
    text: "価格だけでなく、対応の早さ、報告の分かりやすさ、現場への配慮まで含めて、継続して相談される存在を目指します。",
  },
  {
    title: "この仕事で、若者に希望を。",
    text: "資源循環を支える現場仕事を、誇りを持って続けられる産業へ。働く人にも選ばれる会社づくりを進めます。",
  },
  {
    title: "「ありがとう」を、積み重ねる会社に。",
    text: "排出事業者様、燃料利用企業様、地域社会に対して、誠実な処理と安定した供給で信頼を重ねます。",
  },
];

const services = [
  {
    number: "01",
    category: "Reuse Trade",
    title: "リユースタイヤ貿易",
    text: "再使用可能なタイヤを選別し、海外需要に合わせて適正に流通。廃棄ではなく価値ある資源として再活用します。",
  },
  {
    number: "02",
    category: "Thermal TDF",
    title: "TDF代替燃料供給",
    text: "スクラップタイヤを指定粒度のチップへ加工。製紙・セメント会社様のボイラー代替燃料として安定供給します。",
    featured: true,
  },
  {
    number: "03",
    category: "Material Source",
    title: "ゴム粉・チップ加工",
    text: "ゴム粉・チップへ細かく加工し、舗装材・成形材などの原料利用につながる循環ルートを広げます。",
  },
];

const comparison = [
  ["処分コスト", "単価だけで判断しやすい", "回収量・頻度・処理条件を見直し、最大30%削減を目指した料金設計"],
  ["問い合わせ対応", "都度の確認に時間がかかる", "回収、持込み、燃料供給まで用途別に整理して案内"],
  ["許認可の開示", "情報が分散しやすい", "自治体別の許認可と設備情報をサイト上で公開"],
  ["マニフェスト管理", "紙管理中心で手間が残る", "電子マニフェスト JWNET に対応"],
  ["対応タイヤ種別", "一部品目のみ対応", "PC・LT・TBを中心に、状態や量に応じて相談可能"],
  ["処理後の出口", "処分で終わりやすい", "リユース、TDF、マテリアルの出口を設計"],
];

const sizes = [
  ["ゴム粉", "舗装材・成形材などの原料利用に向けた細粒加工。用途に応じて仕様を確認します。"],
  ["TDFチップ（標準）", "製紙・セメント会社様などのボイラー代替燃料として扱いやすい標準粒度。"],
  ["大型チップ", "設備条件や搬送条件に合わせ、粗めの破砕サイズにも個別に対応します。"],
];

const tireTypes = [
  ["PC", "Passenger Car", "乗用車用タイヤ。販売店、整備工場、ディーラー様からの排出に対応します。"],
  ["LT", "Light Truck", "小型トラック・商用車用タイヤ。量や保管状況に合わせて回収条件を調整します。"],
  ["TB", "Truck & Bus", "トラック・バス用タイヤ。重量やサイズを踏まえ、持込み・回収方法を個別に確認します。"],
];

const strengths = [
  {
    number: "01",
    label: "Circularity",
    title: "廃タイヤを、再び使える資源へつなぐ。",
    text: "リユース、TDF、マテリアルの複数ルートを組み合わせ、廃棄で終わらせない循環を設計します。",
  },
  {
    number: "02",
    label: "Compliance",
    title: "許認可とマニフェストで、排出責任まで見える化。",
    text: "電子マニフェスト JWNET 対応と自治体許認可の明示で、販売店・工場・整備工場様の不法投棄リスクを抑えます。",
  },
  {
    number: "03",
    label: "Stable Supply",
    title: "燃料利用先へ、継続供給できる体制を整える。",
    text: "受入から加工、出荷までを一貫管理し、TDF燃料の品質条件と納入タイミングをすり合わせます。",
  },
  {
    number: "04",
    label: "Cost Control",
    title: "回収頻度・量・処理条件を見直し、コストを最適化。",
    text: "現場ごとの排出量、保管状況、回収頻度を確認し、無理のない処理計画をご提案します。",
  },
  {
    number: "05",
    label: "Speed",
    title: "相談から配車まで、現場に合わせて素早く調整。",
    text: "出張回収、持込み、定期回収など、現場の制約に合わせた運用方法を組み立てます。",
  },
  {
    number: "06",
    label: "Specification",
    title: "高磁力選別と粒度調整で、設備に合う燃料へ。",
    text: "ワイヤー等の金属線除去と破砕サイズの調整により、ボイラーや搬送設備の条件に合わせます。",
  },
];

const flow = [
  "出張・持込み相談",
  "配車・積込",
  "計量・受入",
  "破砕・磁力選別",
  "粒度調整・加工",
  "出荷・報告",
];

const permits = [
  ["東京都", "産業廃棄物収集運搬業", "許可番号を記載"],
  ["埼玉県", "産業廃棄物収集運搬業・処分業", "許可番号を記載"],
  ["千葉県", "産業廃棄物収集運搬業", "許可番号を記載"],
  ["神奈川県", "産業廃棄物収集運搬業", "許可番号を記載"],
];

const equipment = [
  ["大型二軸破砕機", "廃タイヤの一次破砕、安定した投入処理"],
  ["高速微粉砕機", "ゴム粉・チップへの細粒加工"],
  ["高磁力選別ライン", "ワイヤー等の金属線除去"],
  ["40tトラックスケール", "受入・出荷時の正確な重量管理"],
];

const policies = [
  ["環境方針", "適正処理、再資源化、脱炭素への貢献を基本方針として、廃タイヤを有効資源として循環させます。"],
  ["行動指針", "許認可・マニフェスト・受入記録を整理し、排出事業者様が安心して確認できる情報開示を進めます。"],
  ["認証・優良認定", "取得状況・掲載可否を確認のうえ、正式情報として追記します。"],
];

const faqs = [
  ["どの種類のタイヤに対応していますか？", "PC、LT、TBを中心に対応します。建設車両用など特殊サイズは、状態・数量・保管場所を確認したうえで個別にご相談ください。"],
  ["対応エリアはどこまでですか？", "全国対応です。地域、数量、回収頻度、持込み可否などの条件を確認し、最適な方法をご案内します。"],
  ["少量の廃タイヤでも回収できますか？", "地域、数量、回収頻度により最適な方法をご提案します。まずは保管状況と本数をお知らせください。"],
  ["電子マニフェストに対応していますか？", "JWNETに対応しています。排出事業者様の管理負担を抑え、法令遵守を支援します。"],
  ["TDF燃料の粒度指定は可能ですか？", "可能です。ボイラー設備や搬送条件に合わせて、破砕サイズや金属線除去レベルを調整します。"],
  ["納入前に品質条件を確認できますか？", "発熱量、粒度、金属混入対策など、必要な品質条件を事前にすり合わせます。"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5f2] text-[#16110f]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/88 backdrop-blur">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 lg:px-10">
          <a href="#top" aria-label="日本エコシティ ホーム">
            <img src="/ecocitylogo.png" alt="ECO CITY JAPAN" className="h-9 w-auto sm:h-11" />
          </a>
          <nav className="hidden items-center gap-8 text-white/78 lg:flex" aria-label="主要ナビゲーション">
            {[
              ["#concept", "コンセプト", "Concept"],
              ["#service", "事業内容", "Service"],
              ["#strengths", "強み", "Strengths"],
              ["#permit", "許認可・設備", "Permit"],
              ["#contact", "お問い合わせ", "Contact"],
            ].map(([href, label, sub]) => (
              <a key={href} href={href} className="nav-link">
                <span>{label}</span>
                <small>{sub}</small>
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-none bg-[#df3e13] px-4 py-3 text-sm font-black text-white shadow-[0_16px_38px_rgba(223,62,19,0.34)] transition hover:bg-[#f05a24]"
          >
            お問い合わせ
          </a>
        </div>
      </header>

      <section id="top" className="relative isolate min-h-screen overflow-hidden bg-black pt-24 text-white">
        <div className="absolute inset-0 -z-30 bg-[url('/tire-tread-hero.png')] bg-cover bg-[64%_center]" />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(0,0,0,0.98)_0%,rgba(0,0,0,0.90)_42%,rgba(44,13,3,0.45)_100%)]" />
        <div className="absolute inset-y-0 right-0 -z-10 w-1/2 bg-[radial-gradient(circle_at_center,rgba(223,62,19,0.24),transparent_58%)]" />
        <p className="brand-word pointer-events-none absolute -right-5 bottom-10 hidden text-[12vw] font-black leading-none text-white/[0.045] lg:block">
          ECO CITY
        </p>
        <div className="mx-auto grid min-h-[calc(100vh-96px)] max-w-[1440px] items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div>
            <p className="mb-8 text-xs font-black uppercase tracking-[0.28em] text-[#ff875e]">
              Scrap Tire Recycling / TDF Supply
            </p>
            <h1 className="max-w-3xl text-[clamp(2.35rem,5.2vw,5.6rem)] font-black leading-[1.08]">
              <span className="block">廃タイヤに、</span>
              <span className="block">もう一度</span>
              <span className="block">エネルギーを。</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              スクラップタイヤを高品質なゴム粉・チップへ再生し、製紙・セメント会社様のボイラー代替燃料（TDF）として安定供給。PC・LT・TBまで、回収・中間処理・仕様加工を一貫して担います。
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {heroBadges.map((badge) => (
                <span key={badge} className="border border-white/18 bg-black/35 px-4 py-2 text-xs font-black text-white/82">
                  {badge}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="rounded-none bg-[#df3e13] px-7 py-4 text-center font-black text-white transition hover:bg-[#f05a24]">
                回収・処分を相談する
              </a>
              <a href="#service" className="rounded-none border border-white/28 bg-white/8 px-7 py-4 text-center font-black text-white transition hover:border-[#df3e13] hover:bg-[#df3e13]/15">
                TDF燃料について見る
              </a>
            </div>
          </div>
          <div className="hidden self-end lg:block">
            <div className="ml-auto max-w-sm border-l border-white/20 pl-8">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-white/46">Scroll</p>
              <p className="mt-4 text-sm leading-7 text-white/62">
                許認可、設備、処理能力まで見える化し、排出事業者様とエネルギー利用企業様の判断を支えます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="実績数値" className="border-y border-[#e1d8d1] bg-white">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="border-r border-[#e1d8d1] px-5 py-8 lg:px-10">
                <p className="text-[clamp(2.4rem,5vw,5rem)] font-black leading-none text-[#16110f]">
                  {item.value}
                  <span className="ml-2 text-base text-[#df3e13]">{item.unit}</span>
                </p>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-[#706864]">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="border-t border-[#e1d8d1] px-5 py-3 text-xs font-bold text-[#706864] lg:px-10">
            掲載数値は確認用の例示を含みます。正式公開時に実績値へ差し替えます。
          </p>
        </div>
      </section>

      <section id="concept" className="relative overflow-hidden py-24 lg:py-32">
        <p className="pointer-events-none absolute left-4 top-12 hidden text-[11vw] font-black leading-none text-black/[0.035] lg:block">
          CONCEPT
        </p>
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <div className="photo-panel min-h-[420px]" aria-hidden="true" />
          <div className="relative z-10 self-center">
            <p className="section-kicker">Concept</p>
            <h2 className="section-title max-w-3xl">
              捨てるしかなかったタイヤを、産業を動かす資源へ。
            </h2>
            <div className="mt-8 grid gap-6 text-base leading-8 text-[#514a47] lg:grid-cols-2">
              <p>
                日本エコシティは、廃タイヤの回収・中間処理・ゴム粉チップ加工・TDF燃料供給までをつなぐ資源循環企業です。
              </p>
              <p>
                排出事業者様にはコスト削減と法令遵守を、熱エネルギー利用企業様には安定供給と品質管理を。双方の課題を一つの循環ルートで解決します。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <p className="section-kicker">Our Vision</p>
          <h2 className="section-title max-w-3xl">資源循環を、信頼される仕事として次の世代へ。</h2>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {vision.map((item) => (
              <article key={item.title} className="border border-[#e2dad4] bg-[#faf8f6] p-7">
                <h3 className="text-xl font-black leading-8 text-[#16110f]">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#5c5551]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <p className="section-kicker">Why Us</p>
          <h2 className="section-title max-w-3xl">比較しやすい情報開示で、検討の不安を減らします。</h2>
          <div className="mt-12 overflow-x-auto border border-[#ded7d2] bg-white">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead className="bg-black text-white">
                <tr>
                  <th className="px-5 py-5 font-black">比較項目</th>
                  <th className="px-5 py-5 font-black">一般的な処分フロー</th>
                  <th className="px-5 py-5 font-black">日本エコシティ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ebe3de]">
                {comparison.map((row) => (
                  <tr key={row[0]} className="align-top">
                    <td className="px-5 py-5 font-black text-[#16110f]">{row[0]}</td>
                    <td className="px-5 py-5 leading-7 text-[#706864]">{row[1]}</td>
                    <td className="px-5 py-5 leading-7 text-[#514a47]">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs leading-6 text-[#706864]">
            最大30%削減は、回収量・頻度・地域・処理条件の見直しによって目指す削減幅です。実際の削減率は条件により異なります。
          </p>
        </div>
      </section>

      <section id="service" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="section-kicker">Service</p>
              <h2 className="section-title max-w-3xl">3つの循環ルートで、廃タイヤの価値を最大化。</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#706864]">
              タイヤの状態・用途・品質条件に応じて、リユース、サーマル、マテリアルの最適な出口を設計します。
            </p>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {services.map((item) => (
              <article key={item.number} id={item.featured ? "tdf" : undefined} className={`service-card ${item.featured ? "service-card-featured" : ""}`}>
                <div className="service-card-image" aria-hidden="true" />
                <div className="p-7">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-[#df3e13]">{item.category}</p>
                  <p className="mt-5 text-5xl font-black text-[#16110f]/10">{item.number}</p>
                  <h3 className="mt-5 text-2xl font-black">{item.title}</h3>
                  <p className="mt-4 leading-7 text-[#5c5551]">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 lg:grid-cols-[0.72fr_1.28fr] lg:px-10">
          <div>
            <p className="section-kicker">Size & Tire Types</p>
            <h2 className="section-title max-w-2xl">用途に合わせた加工サイズと、主要タイヤ種別に対応。</h2>
            <p className="mt-8 leading-8 text-[#5c5551]">
              燃料利用、原料利用、回収条件に応じて、サイズ・品目・数量を事前に確認します。
            </p>
          </div>
          <div className="grid gap-10">
            <div className="grid gap-4 sm:grid-cols-3">
              {sizes.map(([title, text]) => (
                <article key={title} className="border border-[#ded7d2] bg-white p-6">
                  <h3 className="text-lg font-black">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#5c5551]">{text}</p>
                </article>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {tireTypes.map(([code, label, text]) => (
                <article key={code} className="bg-black p-6 text-white">
                  <p className="text-4xl font-black text-[#df3e13]">{code}</p>
                  <p className="mt-2 text-xs font-black uppercase tracking-[0.18em] text-white/44">{label}</p>
                  <p className="mt-5 text-sm leading-7 text-white/74">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="strengths" className="bg-[#120b08] py-24 text-white lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <p className="section-kicker text-[#ff875e]">Strengths</p>
          <h2 className="section-title section-title-dark max-w-3xl">回収から燃料供給まで、信頼を支える運用設計。</h2>
          <div className="mt-14 divide-y divide-white/12 border-y border-white/12">
            {strengths.map((item, index) => (
              <article key={item.number} className="grid gap-8 py-12 lg:grid-cols-[0.26fr_0.9fr_1.1fr] lg:items-center">
                <p className="text-6xl font-black text-[#df3e13]">{item.number}</p>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.26em] text-white/42">{item.label}</p>
                  <h3 className="mt-4 max-w-xl text-2xl font-black leading-tight lg:text-[1.7rem]">{item.title}</h3>
                </div>
                <div className={`${index === 1 ? "lg:pl-10" : ""}`}>
                  <p className="max-w-2xl leading-8 text-white/68">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="flow" className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="section-kicker">Process</p>
              <h2 className="section-title max-w-2xl">透明な処理フローと、安定した納入体制。</h2>
              <p className="mt-8 leading-8 text-[#5c5551]">
                排出事業者様には回収・処分・マニフェスト管理を、燃料利用企業様には品質条件に合わせたTDF燃料の継続供給を行います。
              </p>
              <div className="mt-8 border-l-4 border-[#df3e13] bg-white p-6">
                <p className="font-black text-[#16110f]">主要納入先</p>
                <p className="mt-2 text-sm leading-7 text-[#5d3a2e]">製紙会社、セメント会社、産業用ボイラー保有企業、リサイクル原料メーカー等</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {flow.map((item, index) => (
                <div key={item} className="group flex min-h-28 items-center gap-5 border border-[#ded7d2] bg-white p-5 transition hover:border-[#df3e13]">
                  <span className="grid h-12 w-12 shrink-0 place-items-center bg-black text-sm font-black text-[#ff875e]">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-lg font-black">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="permit" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <p className="section-kicker">Compliance & Facility</p>
          <h2 className="section-title max-w-3xl">許認可と設備スペックを明示し、安心して任せられる状態へ。</h2>
          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <DataTable title="自治体別 許認可情報" head={["自治体", "許可区分", "許可番号"]} rows={permits} />
            <DataTable title="工場設備スペック" head={["設備", "用途"]} rows={equipment} />
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {policies.map(([title, text]) => (
              <article key={title} className="border border-[#ded7d2] bg-[#faf8f6] p-6">
                <h3 className="text-lg font-black text-[#16110f]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5c5551]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 lg:grid-cols-[0.7fr_1.3fr] lg:px-10">
          <div>
            <p className="section-kicker">FAQ</p>
            <h2 className="section-title">よくある質問</h2>
          </div>
          <div className="divide-y divide-[#ded7d2] border-y border-[#ded7d2]">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-7">
                <summary className="cursor-pointer list-none pr-10 text-lg font-black leading-8 text-[#16110f] lg:text-xl">
                  {question}
                  <span className="float-right text-[#df3e13] group-open:rotate-45">+</span>
                </summary>
                <p className="mt-5 max-w-3xl leading-8 text-[#5c5551]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="company" className="bg-black py-24 text-white lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 lg:grid-cols-[1fr_1fr] lg:px-10">
          <div>
            <p className="section-kicker text-[#ff875e]">Company</p>
            <h2 className="section-title section-title-dark">株式会社日本エコシティ</h2>
            <p className="mt-8 max-w-2xl leading-8 text-white/70">
              廃タイヤの回収・中間処理、ゴム粉・チップ加工、ボイラー代替燃料（TDF）供給、リユースタイヤ貿易を通じて、資源循環と脱炭素化に貢献します。
            </p>
            <p className="mt-6 max-w-2xl leading-8 text-white/62">
              現場で積み重ねる一つひとつの適正処理が、次の産業を動かす燃料と資源になる。その考えを軸に、透明性のある事業運営を進めます。
            </p>
          </div>
          <dl className="grid gap-0 border-y border-white/12">
            {[
              ["事業領域", "廃タイヤ回収・中間処理 / TDF燃料供給 / リユース貿易"],
              ["対応書類", "電子マニフェスト（JWNET）対応"],
              ["対応地域", "東京都・埼玉県・千葉県・神奈川県ほか"],
              ["品質条件", "7,500〜9,000 kcal/kg、指定粒度、高磁力選別"],
            ].map(([term, desc]) => (
              <div key={term} className="grid gap-3 border-b border-white/12 py-5 sm:grid-cols-[0.32fr_0.68fr]">
                <dt className="text-xs font-black uppercase tracking-[0.2em] text-[#ff875e]">{term}</dt>
                <dd className="font-semibold leading-7 text-white/84">{desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="contact" className="bg-white">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-[#df3e13] px-5 py-20 text-white lg:px-10 lg:py-24">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-white/70">Contact</p>
            <h2 className="mt-5 max-w-xl text-[clamp(2rem,3.8vw,3.8rem)] font-black leading-[1.18]">
              回収・処分、TDF燃料調達のご相談はこちら。
            </h2>
            <p className="mt-8 max-w-xl leading-8 text-white/82">
              数量、保管場所、回収頻度、燃料仕様などをお知らせください。担当者より最適な条件をご案内します。
            </p>
            <a href="tel:0000000000" className="mt-10 inline-flex border border-white/34 px-7 py-4 font-black text-white">
              電話で相談する
            </a>
          </div>
          <form className="px-5 py-20 lg:px-10 lg:py-24">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="会社名" />
              <Field label="お名前" />
              <Field label="メールアドレス" type="email" />
              <Field label="電話番号" type="tel" />
            </div>
            <label className="mt-5 block">
              <span className="text-sm font-black text-[#344143]">ご相談内容</span>
              <select className="mt-2 w-full border border-[#d8cfca] bg-white px-4 py-4">
                <option>廃タイヤの回収・処分について</option>
                <option>TDF代替燃料の購入について</option>
                <option>許認可・品質条件について</option>
              </select>
            </label>
            <label className="mt-5 block">
              <span className="text-sm font-black text-[#344143]">詳細</span>
              <textarea className="mt-2 min-h-40 w-full border border-[#d8cfca] bg-white px-4 py-4" />
            </label>
            <button type="submit" className="mt-7 w-full bg-black px-7 py-5 font-black text-white">
              相談内容を送信
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-black px-5 py-10 text-center text-sm text-white/58">
        <img src="/ecocitylogo.png" alt="ECO CITY JAPAN" className="mx-auto mb-6 h-10 w-auto" />
        <p>© 株式会社日本エコシティ. All rights reserved.</p>
      </footer>
    </main>
  );
}

function DataTable({ title, head, rows }: { title: string; head: string[]; rows: string[][] }) {
  return (
    <div>
      <h3 className="mb-5 text-xl font-black text-[#16110f] lg:text-2xl">{title}</h3>
      <div className="overflow-x-auto border border-[#ded7d2]">
        <table className="w-full min-w-[520px] border-collapse bg-white text-left text-sm">
          <thead className="bg-black text-white">
            <tr>{head.map((item) => <th key={item} className="px-5 py-5 font-black">{item}</th>)}</tr>
          </thead>
          <tbody className="divide-y divide-[#ebe3de]">
            {rows.map((row) => (
              <tr key={row.join("-")} className="align-top">
                {row.map((cell) => <td key={cell} className="px-5 py-5 leading-7 text-[#514a47]">{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-sm font-black text-[#344143]">{label}</span>
      <input type={type} className="mt-2 w-full border border-[#d8cfca] bg-white px-4 py-4" />
    </label>
  );
}
