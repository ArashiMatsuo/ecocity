const stats = [
  { value: "50", unit: "t / 日", label: "日次処理能力" },
  { value: "15", unit: "台", label: "保有・対応車両" },
  { value: "1,200", unit: "t / 月", label: "月間燃料供給量" },
  { value: "250", unit: "社以上", label: "主要お取引先数" },
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

const strengths = [
  {
    number: "01",
    label: "Compliance",
    title: "許認可とマニフェストで、排出責任まで見える化。",
    text: "電子マニフェスト JWNET 対応と自治体許認可の明示で、販売店・工場・整備工場様の不法投棄リスクを抑えます。",
  },
  {
    number: "02",
    label: "Specification",
    title: "高磁力選別と粒度調整で、設備に合う燃料へ。",
    text: "ワイヤー等の金属線を徹底除去し、ボイラーや搬送設備の条件に合わせたTDF燃料として安定供給します。",
  },
  {
    number: "03",
    label: "Cost Control",
    title: "回収頻度・量・処理条件を見直し、コストを最適化。",
    text: "回収から処理、出荷までの流れを一体で設計し、廃棄コスト削減と脱炭素化を同時に進めます。",
  },
];

const flow = [
  "回収相談",
  "配車・積込",
  "計量・受入",
  "破砕加工",
  "磁力選別",
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

const faqs = [
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
            <h1 className="max-w-3xl text-[clamp(2.55rem,5.7vw,6.2rem)] font-black leading-[1.08]">
              <span className="block">廃タイヤに、</span>
              <span className="block">もう一度エネルギーを。</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              スクラップタイヤを高品質なゴム粉・チップへ再生し、製紙・セメント会社様のボイラー代替燃料（TDF）として安定供給。回収・中間処理・仕様加工まで、一貫した資源循環を担います。
            </p>
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
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 lg:grid-cols-4">
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
