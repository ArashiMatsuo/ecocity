const stats = [
  { value: "50", unit: "t / 日", label: "日次処理能力" },
  { value: "15", unit: "台", label: "保有・対応車両" },
  { value: "1,200", unit: "t / 月", label: "月間燃料供給量" },
  { value: "250", unit: "社以上", label: "主要お取引先数" },
];

const recycling = [
  {
    number: "01",
    title: "リユース貿易",
    text: "再使用可能なタイヤを選別し、海外需要に合わせて適正に流通。廃棄ではなく価値ある資源として再活用します。",
  },
  {
    number: "02",
    title: "サーマルTDF",
    text: "スクラップタイヤを指定粒度のチップへ加工。製紙・セメント会社様のボイラー代替燃料として安定供給します。",
    featured: true,
  },
  {
    number: "03",
    title: "マテリアル原料",
    text: "ゴム粉・チップへ細かく加工し、舗装材・成形材などの原料利用につながる循環ルートを広げます。",
  },
];

const strengths = [
  ["100%循環", "リユース、熱利用、原料化を組み合わせ、廃タイヤの価値を最大化します。"],
  ["法令遵守", "電子マニフェスト JWNET 対応と自治体許認可の明示で、排出責任を支えます。"],
  ["仕様加工", "高磁力選別と粒度調整により、設備条件に合わせたTDF燃料を供給します。"],
  ["コスト最適化", "回収量・頻度・処理条件を見直し、廃棄コストの削減余地を提案します。"],
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
    <main className="min-h-screen bg-[#f5f7f4] text-[#0e1518]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#081113]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="日本エコシティ ホーム">
            <span className="grid h-10 w-10 place-items-center rounded bg-[#12b981] text-lg font-black text-[#071112]">
              ECO
            </span>
            <span className="leading-tight text-white">
              <span className="block text-sm font-semibold">株式会社</span>
              <span className="block text-lg font-black">日本エコシティ</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-white/78 lg:flex" aria-label="主要ナビゲーション">
            <a href="#recycle">3R体系</a>
            <a href="#flow">処理フロー</a>
            <a href="#permit">許認可・設備</a>
            <a href="#company">会社概要</a>
          </nav>
          <a
            href="#contact"
            className="rounded bg-[#12b981] px-4 py-3 text-sm font-bold text-[#071112] shadow-[0_12px_30px_rgba(18,185,129,0.28)] transition hover:bg-[#35d399]"
          >
            お問い合わせ
          </a>
        </div>
      </header>

      <section id="top" className="relative isolate min-h-[92vh] overflow-hidden bg-[#061012] pt-24 text-white">
        <div className="absolute inset-0 -z-20 bg-[url('/tire-tread-hero.png')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,12,14,0.96)_0%,rgba(4,12,14,0.84)_42%,rgba(4,12,14,0.36)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-[#f5f7f4] to-transparent" />
        <div className="mx-auto flex min-h-[calc(92vh-96px)] max-w-7xl items-center px-5 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex rounded border border-[#12b981]/50 bg-[#12b981]/12 px-4 py-2 text-sm font-bold text-[#7ee7bd]">
              スクラップタイヤの回収・処理・TDF燃料供給
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.08] sm:text-6xl lg:text-7xl">
              廃タイヤに、もう一度エネルギーを。
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-white/82 sm:text-lg">
              スクラップタイヤを高品質なゴム粉・チップへ再生し、製紙・セメント会社様のボイラー代替燃料（TDF）として安定供給。確かな技術と徹底した法令遵守で、排出事業者様の廃棄コスト削減と脱炭素化を同時に実現します。
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="rounded bg-[#12b981] px-6 py-4 text-center font-black text-[#061012] transition hover:bg-[#35d399]">
                タイヤの回収・処分をご検討の方
              </a>
              <a href="#tdf" className="rounded border border-white/30 bg-white/8 px-6 py-4 text-center font-black text-white transition hover:border-[#12b981] hover:bg-[#12b981]/15">
                TDF代替燃料の購入をご検討の方
              </a>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="実績数値" className="mx-auto -mt-16 grid max-w-7xl grid-cols-2 gap-3 px-5 pb-16 lg:grid-cols-4 lg:px-8">
        {stats.map((item) => (
          <div key={item.label} className="rounded border border-[#d6ded8] bg-white p-6 shadow-[0_18px_45px_rgba(9,20,22,0.08)]">
            <p className="text-4xl font-black text-[#0d262b] lg:text-5xl">{item.value}<span className="ml-1 text-base text-[#12a574]">{item.unit}</span></p>
            <p className="mt-3 text-sm font-bold text-[#526062]">{item.label}</p>
          </div>
        ))}
      </section>

      <section id="recycle" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-kicker">3R Recycling System</p>
            <h2 className="section-title">廃タイヤを、用途に応じて最適な資源ルートへ。</h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {recycling.map((item) => (
              <article key={item.number} id={item.featured ? "tdf" : undefined} className={`rounded border p-7 ${item.featured ? "border-[#12b981] bg-[#071416] text-white" : "border-[#dce3df] bg-[#f8faf8]"}`}>
                <p className={`text-sm font-black ${item.featured ? "text-[#7ee7bd]" : "text-[#12a574]"}`}>{item.number}</p>
                <h3 className="mt-5 text-2xl font-black">{item.title}</h3>
                <p className={`mt-4 leading-7 ${item.featured ? "text-white/78" : "text-[#526062]"}`}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#101b1e] py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="section-kicker text-[#7ee7bd]">Our Strengths</p>
          <h2 className="section-title text-white">回収から燃料供給まで、信頼を支える4つの強み。</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {strengths.map(([title, text]) => (
              <article key={title} className="rounded border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-xl font-black text-[#7ee7bd]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/74">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="flow" className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="section-kicker">Process & Supply</p>
            <h2 className="section-title">透明な処理フローと、安定した納入体制。</h2>
            <p className="mt-6 leading-8 text-[#526062]">
              排出事業者様には回収・処分・マニフェスト管理を、燃料利用企業様には品質条件に合わせたTDF燃料の継続供給を行います。
            </p>
            <div className="mt-8 rounded bg-[#e8f6ef] p-5">
              <p className="font-black text-[#0d3f35]">主要納入先</p>
              <p className="mt-2 text-sm leading-7 text-[#31534b]">製紙会社、セメント会社、産業用ボイラー保有企業、リサイクル原料メーカー等</p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {flow.map((item, index) => (
              <div key={item} className="flex min-h-24 items-center gap-4 rounded border border-[#d6ded8] bg-white p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded bg-[#102326] text-sm font-black text-[#7ee7bd]">{index + 1}</span>
                <p className="font-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="permit" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-kicker">Compliance & Facility</p>
            <h2 className="section-title">許認可と設備スペックを明示し、安心して任せられる状態へ。</h2>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <DataTable title="自治体別 許認可情報" head={["自治体", "許可区分", "許可番号"]} rows={permits} />
            <DataTable title="工場設備スペック" head={["設備", "用途"]} rows={equipment} />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <p className="section-kicker">FAQ</p>
          <h2 className="section-title">よくある質問</h2>
          <div className="mt-8 divide-y divide-[#d6ded8] rounded border border-[#d6ded8] bg-white">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group p-6">
                <summary className="cursor-pointer list-none font-black text-[#0d262b]">
                  {question}
                  <span className="float-right text-[#12a574] group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 leading-7 text-[#526062]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="company" className="bg-[#101b1e] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="section-kicker text-[#7ee7bd]">Company</p>
            <h2 className="section-title text-white">株式会社日本エコシティ</h2>
            <p className="mt-6 leading-8 text-white/74">
              廃タイヤの回収・中間処理、ゴム粉・チップ加工、ボイラー代替燃料（TDF）供給、リユースタイヤ貿易を通じて、資源循環と脱炭素化に貢献します。
            </p>
          </div>
          <dl className="grid gap-3">
            {[
              ["事業領域", "廃タイヤ回収・中間処理 / TDF燃料供給 / リユース貿易"],
              ["対応書類", "電子マニフェスト（JWNET）対応"],
              ["対応地域", "東京都・埼玉県・千葉県・神奈川県ほか"],
              ["品質条件", "7,500〜9,000 kcal/kg、指定粒度、高磁力選別"],
            ].map(([term, desc]) => (
              <div key={term} className="rounded border border-white/10 bg-white/[0.04] p-5">
                <dt className="text-sm font-bold text-[#7ee7bd]">{term}</dt>
                <dd className="mt-2 font-semibold text-white/86">{desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="contact" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">回収・処分、TDF燃料調達のご相談はこちら。</h2>
            <p className="mt-6 leading-8 text-[#526062]">
              数量、保管場所、回収頻度、燃料仕様などをお知らせください。担当者より最適な条件をご案内します。
            </p>
            <a href="tel:0000000000" className="mt-8 inline-flex rounded bg-[#101b1e] px-6 py-4 font-black text-white">
              電話で相談する
            </a>
          </div>
          <form className="rounded border border-[#d6ded8] bg-[#f8faf8] p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="会社名" />
              <Field label="お名前" />
              <Field label="メールアドレス" type="email" />
              <Field label="電話番号" type="tel" />
            </div>
            <label className="mt-4 block">
              <span className="text-sm font-bold text-[#344143]">ご相談内容</span>
              <select className="mt-2 w-full rounded border border-[#cbd6d0] bg-white px-4 py-3">
                <option>廃タイヤの回収・処分について</option>
                <option>TDF代替燃料の購入について</option>
                <option>許認可・品質条件について</option>
              </select>
            </label>
            <label className="mt-4 block">
              <span className="text-sm font-bold text-[#344143]">詳細</span>
              <textarea className="mt-2 min-h-36 w-full rounded border border-[#cbd6d0] bg-white px-4 py-3" />
            </label>
            <button type="submit" className="mt-6 w-full rounded bg-[#12b981] px-6 py-4 font-black text-[#061012]">
              相談内容を送信
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#061012] px-5 py-8 text-center text-sm text-white/58">
        <p>© 株式会社日本エコシティ. All rights reserved.</p>
      </footer>
    </main>
  );
}

function DataTable({ title, head, rows }: { title: string; head: string[]; rows: string[][] }) {
  return (
    <div>
      <h3 className="mb-4 text-xl font-black text-[#0d262b]">{title}</h3>
      <div className="overflow-hidden rounded border border-[#d6ded8]">
        <table className="w-full border-collapse bg-white text-left text-sm">
          <thead className="bg-[#102326] text-white">
            <tr>{head.map((item) => <th key={item} className="px-4 py-4 font-black">{item}</th>)}</tr>
          </thead>
          <tbody className="divide-y divide-[#e2e8e4]">
            {rows.map((row) => (
              <tr key={row.join("-")} className="align-top">
                {row.map((cell) => <td key={cell} className="px-4 py-4 leading-6 text-[#415052]">{cell}</td>)}
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
      <span className="text-sm font-bold text-[#344143]">{label}</span>
      <input type={type} className="mt-2 w-full rounded border border-[#cbd6d0] bg-white px-4 py-3" />
    </label>
  );
}
