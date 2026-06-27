---
# You can also start simply with 'default'
theme: seriph
title: 推しは推せるときに推せ！ライフステージ変化に向き合う
info: |
  エンジニアがこの先生きのこるためのカンファレンス2026
  https://fortee.jp/kinoko-2026/proposal/9fcb212e-f5d8-4f7f-94ad-cda8478712b8
class: text-center
drawings:
  persist: false
transition: slide-left
seoMeta:
  ogImage: auto
duration: 20min
timer: stopwatch
mdc: true
highlighter: shiki
css: unocss
colorSchema: auto
routerMode: hash
ttsConfig:
  voiceName: "ja-JP-Neural2-B"
  languageCode: "ja-JP"
  clickBreakTime: "500ms"
  usePregenerated: false
  dictionary:
    - from: "runn"
      to: "ランエヌ"
    - from: "EC畑"
      to: "イーシーばたけ"
    - from: "実は"
      to: "じつは"
    - from: "YAML"
      to: "ヤムル"
    - from: "k1LoW"
      to: "けーいちろー"  
    - from: "PR"
      to: "Pull Request"  
    - from: "PHPerKaigi"
      to: "ペチパー会議"  
    - from: "x上"
      to: "エックスじょう"  
    - from: "BaaS"
      to: "Backend as a Service"  
addons:
  - '@katzumi/slidev-addon-qrcode'
  - '@katzumi/slidev-addon-ogp-image'
  - '@katzumi/slidev-addon-tts'
  - slidev-addon-components
  - slidev-addon-rabbit
---

# 推しは推せるときに推せ！<br />ライフステージ変化に向き合う

エンジニアがこの先生きのこるためのカンファレンス 2026 June 28, 2026.  
v0.0.1  
@katzumi（かつみ）

<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  Press Space for next page <carbon:arrow-right />
</div>

<div class="abs-br m-6 text-xl">
  <button @click="$slidev.nav.openInEditor" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button>
  <a href="https://github.com/k2tzumi/cherish-my-oshi-moment" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

<div class="absolute bottom-10 right-4 opacity-80" style="z-index: -1;">
  <img src="./public/kinoko-conf-character.png" class="h-100 w-auto" alt="公式ロゴ" />
</div>


<!--
本日は「推しは推せるときに推せ！ライフステージ変化に向き合う」というタイトルで、お話しさせていただきます。  
どうぞよろしくお願いいたします。
-->

---
transition: slide-left
layout: two-cols-header
class: text-left
---

# <carbon-user-avatar /> 自己紹介

katzumi（かつみ）と申します。

以下のアカウントで活動しています。

::left::

<div class="flex items-center mb-6">
  <img src="https://pbs.twimg.com/profile_images/1961960367351005184/LpDD3fDz_400x400.jpg" class="rounded-full w-24 mr-6"/>
  <QRCode value="https://twitter.com/katzchum" class="w-28 h-28" />
</div>

<div class="flex items-center text-xl mt-4">
  <simple-icons-x class="mr-2" />
  <a href="https://twitter.com/katzchum" target="_blank" class="font-bold">katzchum</a>
</div>

::right::

<div class="flex flex-col space-y-4">
  <div class="flex items-center">
    <img src="https://avatars.githubusercontent.com/u/1182787?v=4" class="rounded-full w-24 mr-6"/>
    <div class="flex flex-col">
      <div class="flex items-center text-xl">
        <logos-github-octocat class="mr-2" />
        <a href="https://github.com/k2tzumi" target="_blank" class="font-bold">k2tzumi</a>
      </div>
      <div class="flex items-center text-xl mt-2">
        <simple-icons-zenn class="mr-2 text-green-400" />
        <a href="https://zenn.dev/katzumi" target="_blank" class="font-bold">katzumi</a>
      </div>
    </div>
  </div>
</div>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--
みなさん、こんにちは。「かつみ」と申します。  
ご覧のXとGitHub等で活動しています。
-->

---
layout: two-cols-header
transition: slide-left
---

# <carbon-information /> お願い 🙏

写真撮影、SNS での実況について

登壇者の励みになるので是非ともご意見やご感想など、フィードバック頂けると助かります mm  
スライドの内容は、すでに以下の場所で公開されていますので、ぜひお手元でご覧ください

* [forteeのプロポーザルページ](https://fortee.jp/kinoko-2026/proposal/9fcb212e-f5d8-4f7f-94ad-cda8478712b8)
* または <fa6-brands-square-x-twitter /> の投稿

::left::

<Transform :scale="2.0">
　　　🙆‍♀📷<ph-projector-screen-chart-light /><br />
　　　🙅‍♂📹💸<br />
　　　🙅📸👨‍👦‍👦<br />
</Transform>

::right::

<br />
<Transform :scale="1.5">
<fa6-brands-square-x-twitter />
</Transform>
<br />
<a href="https://x.com/search?q=%23%E3%81%8D%E3%81%AE%E3%81%932026%20%23a&f=live">#きのこ2026 #a</a>

<!--
まずはじめにお願いです。写真撮影、SNSでの実況、大歓迎です。スライドも公開済みですので、ぜひハッシュタグをつけて、ご意見やご感想をフィードバックいただけると励みになります。
-->

---
transition: fade-out
---

# <carbon-presentation-file /> 本日のお話すること
推し駆動で人生が変わった話

<div class="mt-6 grid grid-cols-5 gap-3">
  <div class="rounded-xl border-2 border-slate-400/80 bg-slate-100/10 px-3 py-4 flex flex-col shadow-lg backdrop-blur-sm">
    <div class="text-xs text-slate-600 tracking-widest font-semibold">🔇 PART 1</div>
    <div class="mt-3 text-base leading-snug font-bold text-slate-900">沈黙の数年間</div>
    <div class="mt-3 text-xs text-slate-700 leading-relaxed">対外アウトプット・ゼロの日々</div>
  </div>
  <div class="rounded-xl border-2 border-pink-400/80 bg-pink-100/10 px-3 py-4 flex flex-col shadow-lg backdrop-blur-sm">
    <div class="text-xs text-pink-600 tracking-widest font-semibold">⚡ PART 2</div>
    <div class="mt-3 text-base leading-snug font-bold text-slate-900">運命の出会い</div>
    <div class="mt-3 text-xs text-slate-700 leading-relaxed">OSSと推しとの出会い</div>
  </div>
  <div class="rounded-xl border-2 border-emerald-400/80 bg-emerald-100/10 px-3 py-4 flex flex-col shadow-lg backdrop-blur-sm">
    <div class="text-xs text-emerald-700 tracking-widest font-semibold">🔄 PART 3</div>
    <div class="mt-3 text-base leading-snug font-bold text-slate-900">推し駆動<br />サイクル</div>
    <div class="mt-3 text-xs text-slate-700 leading-relaxed">フィードバックの連鎖</div>
  </div>
  <div class="rounded-xl border-2 border-amber-400/80 bg-amber-100/10 px-3 py-4 flex flex-col shadow-lg backdrop-blur-sm">
    <div class="text-xs text-amber-700 tracking-widest font-semibold"><mdi-stairs-up class="inline mr-1" />PART 4</div>
    <div class="mt-3 text-base leading-snug font-bold text-slate-900">ライフステージ<br />を味方に</div>
    <div class="mt-3 text-xs text-slate-700 leading-relaxed">3つの追い風</div>
  </div>
  <div class="rounded-xl border-2 border-rose-400/80 bg-rose-100/10 px-3 py-4 flex flex-col shadow-lg backdrop-blur-sm">
    <div class="text-xs text-rose-700 tracking-widest font-semibold">
      <span class="inline-flex items-end gap-0.5 mr-1 align-middle">
        <span class="inline-block w-0.5 h-2.5 rounded-full bg-green-500"></span>
        <span class="inline-block w-0.5 h-2.5 rounded-full bg-yellow-500"></span>
        <span class="inline-block w-0.5 h-2.5 rounded-full bg-pink-500"></span>
      </span>
      PART 5
    </div>
    <div class="mt-3 text-base leading-snug font-bold text-slate-900">推しは推せる<br />ときに推せ</div>
    <div class="mt-3 text-xs text-slate-700 leading-relaxed">波乗りの戦略</div>
  </div>
</div>

<!--
本日は5つのパートでお話しします。  
私自身が40代前半まで「何者でもなかった」状態から、推し活動を通してどのように変化していったのか？  
その実体験を通して、「何かを始めるのに遅すぎることはないんだな」と、少しでも感じていただけたら嬉しいです。
-->

---
layout: center
transition: slide-left
class: py-4
---

# <mdi-clock-time-eight-outline /> Before: 40代になるまでの私

<div class="mt-4 text-left max-w-3xl mx-auto space-y-2 text-base">
  <div>31歳：協力会社だけど営業同行して東京・大阪中心に日本全国出張の旅</div>
  <div>32歳：協力会社間の抗争に負け自社に復帰。案件を一本釣りする為に単身引っ越し（8年ぶり2回目）</div>
  <div>33歳：前職関連のリファラルでEC系ベンチャーに。ブラックな環境になじんむ</div>
  <div>34歳：B社モールのPLに。3拠点最大50名規模に。ホテル住まい</div>
  <div>35歳：モールリリース保守フェーズ。CMで死亡。部下の結婚式で弄られる</div>
  <div>36歳：モール事業が早々に終焉。2匹目のドジョウはおらず本業サービスが辛い状態に</div>
  <div>37歳：ゲーム会社に買われる。N社の本社(韓国)に呼ばれてサービスを説明。単身赴任へ切替</div>
  <div>38歳：前職のリファラルでVGへ。ポイントメディアの中の人に</div>
  <div>39歳：前職部下を協力会社として召喚し各種ポイント・アイテム交換の繋ぎこみ。大手とも連携</div>
  <div>40歳：航空大手A社モールをローンチ。所属部署が統合される</div>
  <div class="text-amber-700 dark:text-amber-300 font-bold">41歳：転職。そしてコロナ禍へ——</div>
</div>

<div v-click="1" class="mt-6 text-3xl font-extrabold text-center text-red-700 dark:text-red-300">
  対外的なアウトプット、ゼロでした。
</div>

<!--
まず、自己紹介がてら40代になるまでの私を振り返ってみます。  
キャリアの初期は、地方のSES会社からベンチャー企業へと渡り歩きながら、ずっとEC畑一筋。大小さまざまなECサイトやモールの開発・運用を泥臭くやってきました。
そこから色々あって、旧VOYAGE　GROUPへ転職するなど、怒涛の10年でした。  
やってきたことは、技術営業っぽい動きから、プロジェクトリーダー、バックエンドエンジニア、SREまで幅広く。今どきのカッコつけた言い方をすると、フルスタック・フルサイクル的なものでした。でも実態はただの何でも屋でした。それでも、目の前の仕事には全力で向き合ってきたつもりでした。  
しかし、です。
[click] これだけいろいろやってきたのに、当時の私は『完全なる社内弁慶』でした。  
地方にいると技術コミュニティとの接点もほとんどなく、OSSにコントリビュートしたこともない。凄腕エンジニアたちは常にインターネットの向こう側の存在で、『すごいなぁ』とただ眺めているだけ。外の世界からは一切見えない、文字通り『何者でもないエンジニア』でした。

そんな私がどうやって対外的なアウトプットを始めるようになったのか、次のパートからお話しします
-->

---
transition: slide-up
---

# <mdi-trending-up /> After: 2023年以降の私

<div class="mt-6 grid grid-cols-3 gap-6">
  <div class="rounded-xl border-2 border-green-400/80 bg-green-100/10 dark:bg-green-400/10 p-5 flex flex-col items-center shadow-lg backdrop-blur-sm">
    <simple-icons-zenn class="text-5xl text-green-400 mb-3" />
    <div class="text-lg font-bold mb-2 text-slate-900 dark:text-white">Zenn</div>
    <a href="https://zenn.dev/katzumi" target="_blank" class="text-sm text-green-700 dark:text-green-300">zenn.dev/katzumi</a>
    <div class="mt-3 text-sm text-slate-700 dark:text-white/80 text-center">65記事・Zenn Book著者<br />トータル1,328Likes</div>
  </div>
  <div class="rounded-xl border-2 border-slate-400/80 bg-slate-100/10 dark:bg-slate-400/10 p-5 flex flex-col items-center shadow-lg backdrop-blur-sm">
    <logos-github-octocat class="text-5xl mb-3" />
    <div class="text-lg font-bold mb-2 text-slate-900 dark:text-white">GitHub</div>
    <a href="https://github.com/k2tzumi" target="_blank" class="text-sm text-slate-700 dark:text-slate-300">github.com/k2tzumi</a>
    <div class="mt-3 text-sm text-slate-700 dark:text-white/80 text-center">OSS貢献を拡大中<br /><a href="https://github.com/k1LoW/runn/issues?q=is%3Apr%20author%3Ak2tzumi%20sort%3Acreated-asc" class="text-slate-800 dark:text-slate-200 underline decoration-slate-400">runn開発</a>・他OSSにも貢献<br />自身のOSSも公開・開発</div>
  </div>
  <div class="rounded-xl border-2 border-blue-400/80 bg-blue-100/10 dark:bg-blue-400/10 p-5 flex flex-col items-center shadow-lg backdrop-blur-sm">
    <carbon-presentation-file class="text-5xl text-blue-400 mb-3" />
    <div class="text-lg font-bold mb-2 text-slate-900 dark:text-white">Docswell</div>
    <a href="https://www.docswell.com/user/katzumi" target="_blank" class="text-sm text-blue-700 dark:text-blue-300">docswell.com/user/katzumi</a>
    <div class="mt-3 text-sm text-slate-700 dark:text-white/80 text-center">カンファレンス登壇多数<br />公開スライド21本</div>
  </div>
</div>

<div
  v-click="1"
  class="absolute inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-sm transition duration-700 ease-in-out"
  :class="$clicks < 1 ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'"
>
  <div class="semantic-overlay semantic-positive p-10 backdrop-blur-lg rounded-2xl shadow-2xl transform scale-125 transition duration-500">
    <h3 class="text-5xl font-extrabold text-white mb-4">
      <mdi-account-arrow-right class="inline mr-2 text-amber-300" />
      あのゼロだった私と、同一人物です
    </h3>
    <p class="text-2xl text-green-300 font-bold tracking-wide leading-relaxed">
      <span class="text-yellow-300 font-bold">
        <mdi-calendar-star class="inline mr-2" />40代から、本格始動しました
      </span>
    </p>
  </div>
</div>

<!--
では、アウトプットが全くなかった私が、今どれくらい変わったのか？  
現在はこんな感じになっています。  

Zennでの記事執筆、OSS貢献、各地のカンファレンスでの登壇。  
おかげさまで記事がバズったり、登壇の機会を頂いたりしています。  
こうしてカンファレンスの場に立っている自分は、30代の頃には想像すらできませんでした。  
[click] 全部、40代に入ってからです。  
何がきっかけでそうなったのか、順を追ってお話しします。
-->

---
transition: slide-left
layout: center
class: text-center
---

<div class="px-8 py-6 rounded-2xl bg-white/60 dark:bg-black/30 border border-slate-300/70 dark:border-white/15 shadow-md backdrop-blur-sm">
  <div class="text-8xl font-extrabold mb-8">
    🔇
  </div>
  <div class="text-5xl font-bold mb-4 text-slate-800 dark:text-slate-100">PART 1</div>
  <div class="text-3xl font-bold text-slate-700 dark:text-slate-300">
    沈黙の十数年間
  </div>
  <div class="mt-4 text-xl text-slate-700 dark:text-slate-200/90">
    対外アウトプット・ゼロの日々
  </div>
</div>

<!--
パート1。  
まず対外的なアウトプットがなかった期間についてお話します。
-->

---
transition: slide-left
layout: center
---

# <mdi-comment-question-outline /> 「自分には特別な強みなんてない」

<div class="mt-8 text-2xl font-bold text-center text-slate-700 dark:text-white/90">
  この気持ち、ありませんか？
</div>

<div class="mt-8 grid grid-cols-2 gap-6 max-w-3xl mx-auto">
  <div v-click="1" class="rounded-xl border-2 border-slate-300/80 dark:border-white/20 bg-white/30 dark:bg-white/10 p-5 text-center shadow-md backdrop-blur-sm">
    <div class="text-4xl mb-3">😔</div>
    <div class="text-base">"対外的に活躍するエンジニアは<br />特別な人たちだ"</div>
  </div>
  <div v-click="2" class="rounded-xl border-2 border-slate-300/80 dark:border-white/20 bg-white/30 dark:bg-white/10 p-5 text-center shadow-md backdrop-blur-sm">
    <div class="text-4xl mb-3">⏳</div>
    <div class="text-base">"年齢的にも今さら<br />始めても遅い気がする"</div>
  </div>
  <div v-click="3" class="rounded-xl border-2 border-slate-300/80 dark:border-white/20 bg-white/30 dark:bg-white/10 p-5 text-center shadow-md backdrop-blur-sm">
    <div class="text-4xl mb-3">🏠</div>
    <div class="text-base">"子育て・家庭があって<br />時間が取れない"</div>
  </div>
  <div v-click="4" class="rounded-xl border-2 border-slate-300/80 dark:border-white/20 bg-white/30 dark:bg-white/10 p-5 text-center shadow-md backdrop-blur-sm">
    <div class="text-4xl mb-3">🗣️</div>
    <div class="text-base">"語れるような<br />ネタが自分にはない"</div>
  </div>
</div>

<!--
「自分には特別な強みなんてない」。そう思って過ごした時期が、私にもありました。  
[click] 対外的に活躍するエンジニアは特別な人たちだと思っていました。  
[click] 年齢的にも今さら始めても遅いかなと。  
[click] 子育てや家庭があって時間も取れない。  
[click] 語れるようなネタが自分にはない。  
……かつての私も、まさにそうでした。  
今日はそんな過去の自分に話しかけるつもりで、お話しします。
-->

---
transition: slide-left
---

# <carbon-building /> 前職にはあったもの：技術力評価会

<div class="mt-6 grid grid-cols-2 gap-6">
  <div class="rounded-xl border-2 border-blue-400/70 bg-blue-100/20 dark:bg-blue-400/10 p-6">
    <div class="text-lg font-bold text-blue-700 dark:text-blue-300 mb-4"><carbon-group class="inline mr-2" />Voyage Group（現 CARTA HOLDINGS）時代</div>
    <ul class="space-y-3 text-base text-slate-800 dark:text-white">
      <li>周りはつよつよエンジニアのタレント集団</li>
      <li>半期ごとに技術的アウトプットを<br />発表する文化（技術力評価会）</li>
      <li>評価会は正直、<span class="text-blue-700 dark:text-blue-300 font-bold">プレッシャーもあり辛かった…</span></li>
    </ul>
  </div>
  <div class="rounded-xl border-2 border-amber-400/70 bg-amber-100/20 dark:bg-amber-400/10 p-6">
    <div class="text-lg font-bold text-amber-700 dark:text-amber-300 mb-4"><mdi-thought-bubble-outline class="inline mr-2" />心の中では</div>
    <ul class="space-y-3 text-base text-slate-800 dark:text-white">
      <li>アウトプットはしていたが<span class="text-amber-700 dark:text-amber-300 font-bold">自発的</span>ではなかった</li>
      <li>「評価されるために義務感でやっている」感が自分にはなじまなかった</li>
      <li>でも<span class="text-amber-700 dark:text-amber-300 font-bold">組織の枠を超えて</span>活躍している人への<br /><span class="text-amber-700 dark:text-amber-300 font-bold">憧れ</span>はずっとあった</li>
    </ul>
  </div>
</div>

<!--
前職には「技術力評価会」という制度がありました。  
半期ごとにアウトプットする場があり、つよつよエンジニアからフィードバックをもらえる環境でした。  
評価会は正直、プレッシャーもあって辛かったです。  
業務としてのアウトプットは出していたものの、「評価のためにやっている」という義務感が拭えず、しっくりきていませんでした。  
一方で、自分の意志で組織の枠組みを飛び越えて活躍しているエンジニアへの憧れは、ずっと心の中にありました。
-->

---
transition: slide-left
---

# <mdi-weather-lightning-rainy /> 転職＋コロナ禍＝アウトプットの場が消えた

<div class="mt-8 flex flex-col items-center gap-6">
  <div class="flex items-center gap-6 text-xl">
    <div class="rounded-xl border-2 border-blue-400/70 bg-blue-100/10 dark:bg-blue-400/10 px-6 py-4 text-center shadow-md backdrop-blur-sm">
      <div class="text-3xl mb-2">🏢</div>
      <div class="font-bold text-slate-800 dark:text-white">事業会社へ転職</div>
      <div class="text-sm text-slate-700 dark:text-white/70 mt-1">Web系ではない</div>
    </div>
    <div class="text-3xl text-slate-700 dark:text-white/70">＋</div>
    <div class="rounded-xl border-2 border-red-400/70 bg-red-100/10 dark:bg-red-400/10 px-6 py-4 text-center shadow-md backdrop-blur-sm">
      <div class="text-3xl mb-2">😷</div>
      <div class="font-bold text-slate-800 dark:text-white">コロナ禍</div>
      <div class="text-sm text-slate-700 dark:text-white/70 mt-1">転職直後に直撃</div>
    </div>
    <div class="text-3xl text-slate-700 dark:text-white/70">＝</div>
    <div class="rounded-xl border-2 border-gray-400/70 bg-gray-100/10 dark:bg-gray-400/10 px-6 py-4 text-center shadow-md backdrop-blur-sm">
      <div class="text-3xl mb-2">🔇</div>
      <div class="font-bold text-slate-800 dark:text-white">アウトプットの場</div>
      <div class="text-sm text-slate-700 dark:text-white/70 mt-1">すべてゼロに</div>
    </div>
  </div>

  <div v-click="1" class="mt-4 max-w-2xl w-full space-y-3">
    <div class="rounded-lg border-2 border-red-300/80 dark:border-red-400/20 bg-red-100/70 dark:bg-red-400/10 px-6 py-3 flex items-center shadow-md backdrop-blur-sm">
      <carbon-close-filled class="mr-3 text-red-600 dark:text-red-400 shrink-0" />
      <span class="text-slate-800 dark:text-white">技術力評価会 →</span>
      <span class="text-red-600 dark:text-red-400 ml-2 font-bold">事業会社なので存在しない</span>
    </div>
    <div class="rounded-lg border-2 border-red-300/80 dark:border-red-400/20 bg-red-100/70 dark:bg-red-400/10 px-6 py-3 flex items-center shadow-md backdrop-blur-sm">
      <carbon-close-filled class="mr-3 text-red-600 dark:text-red-400 shrink-0" />
      <span class="text-slate-800 dark:text-white">社内LT会 →</span>
      <span class="text-red-600 dark:text-red-400 ml-2 font-bold">コロナでなくなった</span>
    </div>
    <div class="rounded-lg border-2 border-red-300/80 dark:border-red-400/20 bg-red-100/70 dark:bg-red-400/10 px-6 py-3 flex items-center shadow-md backdrop-blur-sm">
      <carbon-close-filled class="mr-3 text-red-600 dark:text-red-400 shrink-0" />
      <span class="text-slate-800 dark:text-white">勉強会・カンファレンス →</span>
      <span class="text-red-600 dark:text-red-400 ml-2 font-bold">全滅</span>
    </div>
  </div>
</div>

<!--
事業会社へ転職した直後に、すぐコロナ禍になってしまいました。  
[click] 前職にあった技術力評価会は、事業会社なので当然ありません。  
唯一あった社内LT会もコロナでなくなり、勉強会やカンファレンスも全滅。  
アウトプットできる場が、すべて消えてしまいました。
-->

---
transition: slide-up
---

# <mdi-broadcast-off /> 限定的なアウトプットでは広がりが見えなかった
Slack Bot Officer を自称する様になるものの

<div class="mt-6 grid grid-cols-2 gap-8">
  <div class="space-y-4">
    <div class="rounded-xl border-2 border-green-400/70 bg-green-100/10 dark:bg-green-400/20 p-6 shadow-md backdrop-blur-sm">
      <div class="text-lg font-bold text-green-700 dark:text-green-300 mb-4"><mdi-lightbulb-outline class="inline mr-2" /> きっかけ</div>
      <ul class="space-y-3 text-base text-slate-800 dark:text-white">
        <li><logos-slack-icon /> 社内Slackのworkspaceが少し寂しかった</li>
        <li><mdi-robot-outline /> 前職のworkspaceにはbot職人がいてその雰囲気が好きだった</li>
        <li><logos-typescript-icon /> ちょうどTypeScriptを学びたい時期だった</li>
      </ul>
    </div>
    <div v-click="1" class="rounded-xl border-2 border-amber-400/70 bg-amber-100/20 dark:bg-amber-400/10 p-6 shadow-md backdrop-blur-sm">
      <div class="text-lg font-bold text-amber-700 dark:text-amber-300 mb-3"><mdi-emoticon-wink-outline class="inline mr-2" />もうひとつの狙い</div>
      <div class="text-base text-slate-800 dark:text-white">「部門を超えてエンジニアからのフィードバックを得るには、bot開発は良いムーブだ」という<span class="text-amber-700 dark:text-amber-300 font-bold">想い</span>がありました</div>
    </div>
  </div>

  <div v-click="2" class="rounded-xl border-2 border-red-400/70 bg-red-100/20 dark:bg-red-400/10 p-6 flex flex-col justify-center shadow-md backdrop-blur-sm">
    <div class="text-lg font-bold text-red-700 dark:text-red-300 mb-4"><carbon-warning-filled class="inline mr-2" />でも結局</div>
    <ul class="space-y-3 text-base text-slate-800 dark:text-white">
      <li><mdi-check class="inline mr-2 text-green-600 dark:text-green-400" />会社の中では良い名刺代わりに</li>
      <li><carbon-close-filled class="inline mr-2 text-red-600 dark:text-red-400" />ただフィードバックループはない</li>
      <li><carbon-close-filled class="inline mr-2 text-red-600 dark:text-red-400" />一緒にbot作る仲間はいない</li>
      <li><carbon-close-filled class="inline mr-2 text-red-600 dark:text-red-400" />スポットな認知に留まる</li>
    </ul>
    <div class="mt-5 p-3 rounded-lg bg-red-100/80 dark:bg-red-400/10 border-2 border-red-400/70 text-sm text-center text-slate-700 dark:text-white/80 shadow-sm">
      <mdi-checkbox-blank-off-outline class="inline mr-1 text-red-600 dark:text-red-400" />対外的なアウトプットは<br />ゼロのまま
    </div>
  </div>
</div>

<!--
そんな中、転職先のSlack workspace がどこか物静かで寂しく感じて、自分でBotを生やし始めました。  
前職にいた「Bot職人」への憧れもありましたし、TypeScriptの勉強として取り組みました。

気づけばBotの数もどんどん増えていって、そのうち社内で「Slack Bot Officer」を自称するようになりました。

[click] 実は、このBot開発の取り組みには狙いがあり、部門を超えてエンジニアからフィードバックをもらうのに良い手段だと思っていました。

[click] でも結局、社内での良い名刺代わりにはなったものの、そこから先への広がりはありませんでした。
継続したフィードバックがあるわけでもなく、外に出れない暇つぶしでした。  
リポジトリは増えたものの、積極的に外部発信することはありませんでした。

ここまでが「沈黙の十数年間」でした。
-->

---
transition: slide-left
layout: center
class: text-center
---

<div class="px-8 py-6 rounded-2xl bg-white/60 dark:bg-black/30 border border-slate-300/70 dark:border-white/15 shadow-md backdrop-blur-sm">
  <div class="text-8xl font-extrabold mb-8">
    ⚡
  </div>
  <div class="text-5xl font-bold mb-4 text-pink-700 dark:text-pink-300">PART 2</div>
  <div class="text-3xl font-bold text-pink-600 dark:text-pink-300">
    運命の出会い
  </div>
  <div class="mt-4 text-xl text-pink-700 dark:text-pink-200/90">
    OSSと推しとの出会い
  </div>
</div>

<!--
パート2。  
運命の出会いについてお話しします。
-->

---
transition: fade-out
---

# <carbon-api /> 転機：レセプトBaaSでの技術課題
スキーマ駆動×画面なし・複雑な請求フロー・シナリオテストへの渇望

<div class="mt-6 grid grid-cols-2 gap-8">
  <div class="rounded-xl border-2 border-blue-400/70 bg-blue-100/30 dark:bg-blue-400/10 p-6 shadow-md backdrop-blur-sm">
    <div class="text-lg font-bold text-blue-700 dark:text-blue-300 mb-4"><carbon-api class="inline mr-2" />課題</div>
    <ul class="space-y-3 text-base text-slate-800 dark:text-white">
      <li>APIのみのサービス（BaaS）をスキーマ駆動で開発</li>
      <li>手動によるブラウザテストは不可</li>
      <li>コアドメインなので<br /><span class="text-blue-700 dark:text-blue-300 font-bold">早く品質を確保したい</span></li>
      <li>I/Fとして正しいことを<br /><span class="text-blue-700 dark:text-blue-300 font-bold">早く保証したい</span></li>
    </ul>
  </div>

  <div class="rounded-xl border-2 border-green-400/70 bg-green-100/30 dark:bg-green-400/10 p-6 shadow-md backdrop-blur-sm">
    <div class="text-lg font-bold text-green-700 dark:text-green-300 mb-4"><carbon-search class="inline mr-2" />探していたもの</div>
    <div class="text-base text-slate-800 dark:text-white">シナリオベースで<br />APIテストができるツール</div>
    <div class="text-sm text-slate-700 dark:text-white/70 mt-2">当時、そういうツールが少なかった</div>
  </div>
</div>

<!--
転機は、新しいシステム開発における技術的な課題から始まりました。  
画面を持たないAPI（BaaS）をスキーマ駆動開発する方針としましたが、画面がないので従来のブラウザテストが行えないという課題です。  
しかも請求処理は複数ステップにまたがり、組み合わせも膨大で、単体のAPIテストだけでは品質を担保できませんでした。  
シナリオベースでAPIテストできるツールが必要と考えましたが、当時はほとんど選択肢がありませんでした。
-->

---
layout: center
transition: slide-left
class: hide-global-bottom
---

<div class="w-full h-full flex items-center justify-center">
  <img src="https://raw.githubusercontent.com/k1LoW/runn/main/docs/logo.svg" class="w-96 h-auto" alt="runn logo" />
</div>

<!--
そんなときに見つけたのが、このrunnというAPIシナリオテストツールでした。
-->

---
transition: slide-left
layout: center
---

# <carbon-document /> 衝撃的なrunnとの出会い

<div class="mt-6 flex justify-center">
  <OgpImage url="https://tech.pepabo.com/2022/06/07/scenario-testing-in-go/" width="960" height="504" />
</div>

<div class="mt-4 text-sm text-slate-700 dark:text-white/70 text-center">
  作者のk1LoWさんの記事でrunnを知る
</div>

<!--
このツールを知ったのは、作者のk1LoWさんの記事でした。  
初見だったのですが、YAMLでAPIの呼び出し順を並べるだけでシナリオになる！  
直感的に「こうかけば動きそう！」と理解できました。  
「これだ！」と思って、すぐに試し始めたのが最初の一歩でした。
-->

---
transition: slide-left
---

# <logos-github-octocat /> 勇気を出して、最初のPull Requestを送る

<div class="mt-6 grid grid-cols-2 gap-8">
  <div class="space-y-4">
    <div class="rounded-xl border-2 border-amber-400/70 bg-amber-100/20 dark:bg-amber-400/10 p-5 shadow-md backdrop-blur-sm">
      <div class="text-lg font-bold text-amber-700 dark:text-amber-300 mb-3"><mdi-timeline-text-outline class="inline mr-2" />最初はうまく動かなかった</div>
      <div class="space-y-2 text-base text-slate-800 dark:text-white">
        <div>コードを読んでみると…</div>
        <div class="pl-4 border-l-2 border-amber-400/70 dark:border-amber-400/50 space-y-1">
          <div>✅ Goがシンプル</div>
          <div>✅ 初期段階でコード量が少ない</div>
          <div>✅ ちょうどGoを勉強中だった</div>
        </div>
        <div class="mt-3 text-amber-700 dark:text-amber-300 font-bold text-lg">「自分でも分かるかも！」</div>
      </div>
    </div>
  </div>

  <div class="space-y-4">
    <div class="rounded-xl border-2 border-green-400/70 bg-green-100/20 dark:bg-green-400/10 p-5 shadow-md backdrop-blur-sm">
      <div class="text-lg font-bold text-green-700 dark:text-green-300 mb-3"><carbon-send-filled class="inline mr-2" />PR → マージ → 喜び → 繰り返す</div>
      <div class="space-y-2 text-base text-slate-800 dark:text-white">
        <div>すぐマージしてもらえた！</div>
        <div class="text-green-700 dark:text-green-300">レセプトBaaSの開発が進むにつれて、<br />新しい課題が現れる</div>
        <div class="text-slate-700 dark:text-white/80 text-sm">Issueで機能を提案・検討し、PRで改善を積み上げる</div>
        <div class="text-4xl font-extrabold text-center mt-3 text-green-700 dark:text-green-300 tracking-wide">77 Pull Request</div>
        <div class="text-sm text-slate-700 dark:text-white/80 text-center leading-relaxed">
          <span class="text-amber-700 dark:text-amber-300 font-bold">小さな改善</span>を積み上げた結果、<br />テストしているプロダクトの成長と一緒にrunnも育っていった
        </div>
        <div class="text-[10px] text-slate-600 dark:text-white/45 text-center mt-1">※ 累計コントリビュートPR数</div>
      </div>
    </div>
  </div>
</div>

<!--
しかし最初はうまく動きませんでした。  
動かない原因を調べるために、ソースコードを読んでみることにしました。

すると、runnはまだ初期段階でコード量が少なく、Go言語自体もシンプルで、当時Goを勉強中だった自分でも追える規模でした。  
「もしかして自分でもわかるのでは？」と感じて、動かなかった箇所を修正し、初めてのPRを送ってみました。

それがすぐにマージしてもらえました！  
一度受け入れてもらえると「次もいけるかも」と思えて、Issue作成やPRを積極的に送るようになりました。

BaaSの開発が進むにつれてrunnへの改善ポイントも次々と見つかり、気づけば送ったPRの数は現時点で77件になりました。
-->

---
transition: slide-left
---

# <carbon-email /> 小さな改善が、コミッターへの扉を開いた

<div class="mt-2 max-w-5xl mx-auto flex flex-col items-center gap-3 px-2">
  <div class="text-sm md:text-base text-slate-800 dark:text-white/90 text-center leading-relaxed">
    k1LoWさんに会う前、まだ <span class="text-amber-700 dark:text-amber-300 font-bold">9PR</span> くらいの時期。<br />
    改善提案を続けていたところ、リポジトリ招待が届いた
  </div>
  <img src="./public/invitation.png" alt="k1LoW invited you to k1LoW/runn" class="w-full max-w-[60%] object-contain" />
  <div class="text-center text-lg md:text-xl font-bold text-green-700 dark:text-green-300">
    「改善を積み上げると、信頼が返ってくる」
  </div>
</div>

<!--
ある日、突然リポジトリへの招待が届きました。公式のコミッター権限です。  
まだリアルで対面すらしていない、送ったPRも10件に満たない頃でした。

振り返ると、k1LoWさんは自分の小さな改善や提案を毎回受け止めてくれて、議論にも丁寧に答えてくれていました。  
ディスカッションの中で、自分の提案の点と点をつないでコンセプトを汲み取って貰えたときは、本当に嬉しかったです。  
そして招待をもらったことで、「もっとコミットして、自分のアイデアも持ち寄りながら一緒にrunnを良くしていこう」という気持ちになりました。
-->

---
transition: fade-out
---

# <carbon-star /> それがぼくには楽しかったから
runn 開発で学び、気づけば変わっていた自分——k1LoW さんへの感謝

<div class="mt-6 grid grid-cols-2 gap-8">
  <div class="rounded-xl border-2 border-blue-400/70 bg-blue-100/20 dark:bg-blue-400/10 p-5 shadow-md backdrop-blur-sm">
    <div class="text-lg font-bold text-blue-700 dark:text-blue-300 mb-3"><mdi-school-outline class="inline mr-2" />runnで学んだこと</div>
    <ul class="space-y-2 text-sm text-slate-800 dark:text-white">
      <li>開発者フレンドリーなツール設計（runn本体・tagprによるリリースプロセス）</li>
      <li>Documentation as Code の考え方</li>
      <li>CLIでもインタフェース設計が重要になるということ</li>
      <li>テスティングライブラリとCLIツールのバランス設計</li>
      <li>Goのモダンな開発スタイル</li>
    </ul>
  </div>

  <div class="rounded-xl border-2 border-amber-400/70 bg-amber-100/20 dark:bg-amber-400/10 p-5 shadow-md backdrop-blur-sm">
    <div class="text-lg font-bold text-amber-700 dark:text-amber-300 mb-3"><mdi-handshake-outline class="inline mr-2" />OSSで共同開発する楽しさ</div>
    <ul class="space-y-2 text-sm text-slate-800 dark:text-white">
      <li>対話しながら機能を育てる、共創の面白さ</li>
      <li>発展的な機能拡張は、議論が難しいぶんワクワクする</li>
      <li>提案が形になり、ユーザー価値へつながる手応え</li>
    </ul>
  </div>
</div>

<div class="mt-6 rounded-xl border-2 border-green-400/70 bg-green-100/20 dark:bg-green-400/10 p-4 text-center text-sm text-slate-800 dark:text-white shadow-md backdrop-blur-sm">
  推し活で回るフィードバックサイクルが、<span class="text-green-700 dark:text-green-300 font-bold">エンジニアとしての成長</span>を自然と後押しする
</div>

<!--
コミッターとして開発に参加していく中で、runn開発から多くを学びました。  
開発者フレンドリーな設計、Documentation as Code、CLIのインタフェース設計、ライブラリとCLIのバランス、そしてGoのモダンな開発スタイルも学びました。  
k1LoWさんとの機能拡張の議論は難しさもありつつも、その分ワクワクする機会をたくさん経験できました。  

リーナスの言葉を借りれば「それがぼくには楽しかったから」。　　

かつて特別な人たちだと思っていた「対外的に活躍するエンジニア」の世界に、気づけば自分もいる。ここまでの景色を見せてくれたk1LoWさんには、本当に感謝しかないです。
-->

---
transition: slide-left
---

# <mdi-account-group-outline /> ちゃまほりさんがつないでくれた縁

<div class="mt-6 text-center">
  <div class="text-base mb-4 text-slate-700 dark:text-white/80">同僚の <span class="text-pink-600 dark:text-pink-300 font-bold">ちゃまほり（@tyamahori）</span>さんが動いてくれた</div>

  <div class="grid grid-cols-2 gap-3 max-w-4xl mx-auto">
    <div class="rounded-xl border-2 border-pink-400/70 bg-pink-100/20 dark:bg-pink-400/10 p-3 text-center shadow-md backdrop-blur-sm">
      <img src="https://unavatar.io/x/katzchum" alt="katzchum icon" class="w-10 h-10 rounded-full mx-auto mb-2 border border-pink-300/70" />
      <div class="font-bold text-sm text-slate-900 dark:text-white">katzumi</div>
      <div class="text-xs text-slate-700 dark:text-white/80 mt-1">runnをドッグフーディング<br />改善提案を継続</div>
    </div>
    <div class="rounded-xl border-2 border-blue-400/70 bg-blue-100/20 dark:bg-blue-400/10 p-3 text-center shadow-md backdrop-blur-sm">
      <img src="https://unavatar.io/x/tyamahori" alt="tyamahori icon" class="w-10 h-10 rounded-full mx-auto mb-2 border border-blue-300/70" />
      <div class="font-bold text-sm text-slate-900 dark:text-white">ちゃまほりさん(@tyamahori)</div>
      <div class="text-xs text-slate-700 dark:text-white/80 mt-1">PHPerRoomで<br />アカセさんに打診</div>
    </div>
    <div class="rounded-xl border-2 border-green-400/70 bg-green-100/20 dark:bg-green-400/10 p-3 text-center shadow-md backdrop-blur-sm">
      <img src="https://unavatar.io/x/k1LoW" alt="k1LoW icon" class="w-10 h-10 rounded-full mx-auto mb-2 border border-green-300/70" />
      <div class="font-bold text-sm text-slate-900 dark:text-white">k1LoWさん</div>
      <div class="text-xs text-slate-700 dark:text-white/80 mt-1">runnの作者</div>
    </div>
    <div class="rounded-xl border-2 border-amber-400/70 bg-amber-100/20 dark:bg-amber-400/10 p-3 text-center shadow-md backdrop-blur-sm">
      <img src="https://pbs.twimg.com/profile_images/1245365303187390465/Tpnuv2rt_200x200.jpg" alt="akase244 icon" class="w-10 h-10 rounded-full mx-auto mb-2 border border-amber-300/70" />
      <div class="font-bold text-sm text-slate-900 dark:text-white">アカセさん(@akase244)</div>
      <div class="text-xs text-slate-700 dark:text-white/80 mt-1">ツナギメエフエムで<br />k1LoWさんとちゃまほりさんを繋いだ</div>
    </div>
  </div>

  <div class="mt-4 text-sm text-slate-700 dark:text-white/70 tracking-wide">
    katzumi → ちゃまほりさん → アカセさん → k1LoWさん
  </div>

  <div v-click="1" class="mt-4 text-xl text-amber-600 dark:text-amber-300 font-bold">
    <mdi-calendar-heart class="inline mr-2" />
    PHPerKaigi 2023 で初めてお会いする機会が訪れた
  </div>

  <div
    v-click="2"
    class="fixed inset-0 h-full z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 md:p-6"
  >
    <img
      src="https://static.zenn.studio/user-upload/deployed-images/6a8c0250cdfb5ef1a4598f04.png?sha=c786eceab6d9dccc91d87eb349951362c3540bae"
      alt="PHPerKaigi 2023 hallway track"
      class="w-auto max-w-[94%] max-h-[88%] object-contain"
    />
  </div>
</div>

<!--
ここまでの話、実はk1LoWさんとはまだ一度もリアルでお会いしていませんでした。  
実際にお会いするきっかけを作ってくれたのは、同僚のちゃまほりさんでした。  
PHPerRoomでアカセさんに打診してくれていました。  
そしてツナギメエフエムというPodcastでk1LoWさんとちゃまほりさんが共演しました。  
その流れでちゃまほりさんが自分をk1LoWさんに繋いでくれました  
[click] そしてPHPerKaigi 2023で、初めてお会いする機会が訪れました。  
[click] x上ではこんなやり取りをしていました。
-->

---
transition: slide-up
---

# <mdi-balloon /> PHPerKaigi 2023：カンファレンスの廊下を体験
hallway track の魅力

<div class="mt-4 grid grid-cols-2 gap-5">
  <div class="space-y-4">
    <div class="rounded-xl border-2 border-blue-400/70 bg-blue-100/20 dark:bg-blue-400/10 p-4 shadow-md backdrop-blur-sm">
      <div class="font-bold text-blue-700 dark:text-blue-300 mb-2 flex items-center justify-between gap-2">
        <span><img src="https://unavatar.io/x/k1LoW" alt="k1LoW profile icon" class="w-6 h-6 rounded-full border border-blue-300/70" />k1LoWさんのセッションを客席で聴く　<carbon-presentation-file class="inline mr-1" /></span>
      </div>
      <div class="text-sm text-slate-800 dark:text-white">"Win Testing Trophy Easily"<br />runnが生まれた動機が語られる</div>
    </div>
    <div v-click="1" class="rounded-xl border-2 border-pink-400/70 bg-pink-100/20 dark:bg-pink-400/10 p-4 shadow-md backdrop-blur-sm">
      <div class="font-bold text-pink-700 dark:text-pink-300 mb-2"><mdi-microphone class="inline mr-1" />登壇中のサプライズ言及</div>
      <div class="text-sm italic text-slate-800 dark:text-white">"データ駆動テストの拡張をしてくれたコントリビューターが<span class="text-pink-700 dark:text-pink-300 font-bold">本日会場に来てくれていると思います（ニヤリ）</span>"</div>
      <div class="text-xs text-slate-700 dark:text-white/80 mt-2">→ 想定外のタイミングで名指しされて驚く</div>
    </div>
  </div>

  <div class="space-y-4">
    <div v-click="2" class="rounded-xl border-2 border-green-400/70 bg-green-100/20 dark:bg-green-400/10 p-4 shadow-md backdrop-blur-sm">
      <div class="font-bold text-green-700 dark:text-green-300 mb-2"><mdi-glass-mug-variant class="inline mr-1" />Day1 Night → Day2ホワイトボード</div>
      <div class="text-sm text-slate-800 dark:text-white">IssueやPRでの英語コミュニケーションとは全然違う。<br /><span class="text-green-700 dark:text-green-300">対面で日本語で話すと、解像度が一気に上がる。</span><br />ハッカソン的にその場でコーディング。</div>
    </div>
    <div v-click="4" class="rounded-xl border-2 border-amber-400/70 bg-amber-100/20 dark:bg-amber-400/10 p-4 shadow-md backdrop-blur-sm">
      <div class="font-bold text-amber-700 dark:text-amber-300 mb-2"><img src="https://pbs.twimg.com/profile_images/1245365303187390465/Tpnuv2rt_200x200.jpg" alt="akase244 icon" class="w-6 h-6 rounded-full border border-amber-300/70" /><mdi-map-marker class="inline mr-1" />運命のひとこと</div>
      <div class="text-sm text-slate-800 dark:text-white">"福岡でPHPカンファレンスやりますよ"<br /><span class="text-amber-700 dark:text-amber-300 font-bold text-base">「絶対参加しよう！」</span><br /><span class="text-xs text-slate-700 dark:text-white/80">（k1LoWさん・アカセさんは福岡在住）</span></div>
    </div>
  </div>
</div>

<div
  v-click="[3, 4]"
  class="fixed inset-0 h-full z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 md:p-6"
>
  <img
    src="https://pbs.twimg.com/media/FsDT3YAaQAI5P3x?format=jpg&name=small"
    alt="PHPerKaigi 2023 runn開発者会議の様子"
    class="w-auto max-w-[94%] max-h-[88%] object-contain"
  />
</div>

<!--
そのPHPerKaigi 2023の当日。まずk1LoWさんのセッションをトラックで聴いていました。  
[click] そしたら登壇中に突然、「データ駆動テストの拡張をしてくれたコントリビューターが本日会場に来てくれていると思います」と触れられて、かなり驚きました。  
セッション後のAsk the Speakerで、ようやくk1LoWさんに直接「はじめまして」を伝えることができました。  
ネットでのやり取りのみだった方と、初めてリアルで会えた瞬間でした。   
[click] 普段はIssueやPRで英語コミュニケーションでしたが、日本語で対面で話すと解像度が一気に上がりました。  
Day2はホワイトボードでアイデアをぶつけ合い、その場でコーディングも行いました。カンファレンスの廊下の魅力を始めて実感しました  
[click] この写真は、その時に書き殴ったホワイトボードです。  
[click] そして「福岡でPHPカンファレンスやりますよ」という話を聞いて、「絶対参加しよう！」という気持ちになりました。
-->

---
transition: slide-left
layout: center
class: text-center
---

<div class="px-8 py-6 rounded-2xl bg-white/60 dark:bg-black/30 border border-slate-300/70 dark:border-white/15 shadow-md backdrop-blur-sm">
  <div class="text-8xl font-extrabold mb-8">
    🔄
  </div>
  <div class="text-5xl font-bold mb-4 text-green-800 dark:text-green-300">PART 3</div>
  <div class="text-3xl font-bold text-green-800 dark:text-green-300">
    推し駆動サイクル
  </div>
  <div class="mt-4 text-xl text-green-800 dark:text-green-200/90">
    フィードバックの連鎖
  </div>
</div>

<!--
パート 3  
推し駆動サイクルについてお話しします。
-->

---
transition: slide-left
---

# <mdi-fire /> 5本のプロポーザル——推し駆動の気合

<div class="mt-6 text-center">
  <div class="text-xl mb-8 text-slate-700 dark:text-white/80">
    「推しに会いに行く」という動機で<br />
    <span class="text-orange-700 dark:text-orange-300 font-bold text-2xl">PHPカンファレンス福岡2023にプロポーザル5本提出</span>
  </div>

  <div class="flex items-center justify-center gap-10">
    <div class="rounded-xl border-2 border-orange-400/70 bg-orange-100/30 dark:bg-orange-400/10 p-8 text-center shadow-md backdrop-blur-sm">
      <div class="text-7xl font-extrabold text-orange-700 dark:text-orange-300">5</div>
      <div class="text-lg mt-2 text-slate-900 dark:text-white">本のプロポーザル</div>
      <div class="text-sm text-slate-700 dark:text-white/80 mt-1">LT含む</div>
    </div>
    <div class="text-4xl text-slate-600 dark:text-white/70">→</div>
    <div class="rounded-xl border-2 border-green-400/70 bg-green-100/30 dark:bg-green-400/10 p-8 text-center shadow-md backdrop-blur-sm">
      <div class="text-7xl">🎉</div>
      <div class="text-lg mt-2 text-slate-900 dark:text-white">採択！</div>
      <div class="text-sm text-slate-700 dark:text-white/80 mt-1">前夜祭LTで初登壇</div>
    </div>
  </div>

  <div v-click="1" class="mt-8 rounded-xl border-2 border-slate-300/70 dark:border-white/20 bg-white/70 dark:bg-white/10 p-4 max-w-lg mx-auto shadow-md backdrop-blur-sm">
    <mdi-comment-quote-outline class="inline mr-2 text-slate-600 dark:text-white/80" />
    <span class="text-slate-700 dark:text-white/80 italic">"プロポーザルが落ちても行くつもりでいた"</span>
  </div>
</div>

<!--
PHPカンファレンス福岡2023では、プロポーザルを5本提出しました。  
「推しに会いに行く！」という気合で。  
[click] 正直に言うと、プロポーザルが落ちても行くつもりでいました。  
でも幸い採択されて、前夜祭LTで初めての対外登壇を果たしました。
-->

---
transition: slide-left
---

# <mdi-cached /> サイクルが回り始めた
推し活動を狙いつつ地方カンファレンスを行脚しはじめる

<div class="mt-6 max-w-3xl mx-auto">
  <div class="flex flex-col items-center gap-2">
    <div class="rounded-xl border-2 border-blue-400/70 bg-blue-100/30 dark:bg-blue-400/10 px-8 py-3 w-full text-center font-bold text-slate-900 dark:text-white shadow-md backdrop-blur-sm">
      前夜祭LT「クリーンアーキテクチャのアンチパターン」
    </div>
    <div class="text-center text-sm font-bold text-blue-800 dark:text-blue-200 bg-blue-100/80 dark:bg-blue-500/15 border border-blue-300/80 dark:border-blue-300/30 rounded-full px-4 py-1">↓ フィードバックをもらう</div>
    <div v-click="1" class="rounded-xl border-2 border-green-400/70 bg-green-100/30 dark:bg-green-400/10 px-8 py-3 w-full text-center font-bold text-slate-900 dark:text-white shadow-md backdrop-blur-sm">
      PHPカンファレンス沖縄「ActiveRecordパターンの呪縛を学びほぐす」
    </div>
    <div v-click="1" class="text-center text-sm font-bold text-green-800 dark:text-green-200 bg-green-100/80 dark:bg-green-500/15 border border-green-300/80 dark:border-green-300/30 rounded-full px-4 py-1">↓ 廊下でrunnへの要望・質問を受ける → 実装する</div>
    <div v-click="2" class="rounded-xl border-2 border-amber-400/70 bg-amber-100/30 dark:bg-amber-400/10 px-8 py-3 w-full text-center font-bold text-slate-900 dark:text-white shadow-md backdrop-blur-sm">
      各地のカンファレンス「APIカバレッジ計測」「モブワーク事例」など
    </div>
    <div v-click="2" class="text-center text-sm font-bold text-amber-800 dark:text-amber-200 bg-amber-100/80 dark:bg-amber-500/15 border border-amber-300/80 dark:border-amber-300/30 rounded-full px-4 py-1">↓ 改善内容がOSS化 → 次の登壇ネタに</div>
    <div v-click="3" class="rounded-xl border-2 border-pink-400/70 bg-pink-100/30 dark:bg-pink-400/10 px-8 py-3 w-full text-center font-bold text-slate-900 dark:text-white shadow-md backdrop-blur-sm">
      PHPカンファレンス福岡2025「アーキテクチャレベルの依存性逆転」
    </div>
    <div v-click="3" class="text-center text-sm font-bold text-pink-800 dark:text-pink-200 bg-pink-100/80 dark:bg-pink-500/15 border border-pink-300/80 dark:border-pink-300/30 rounded-full px-4 py-1">↓ そして今日のこのセッションへ</div>
  </div>
</div>

<!--
その後に各地の地方カンファレンスを行脚するというサイクルが生まれました。  
その頃、k1LoWさんも積極的にカンファレンスに参加されていました。

まず、福岡での前夜祭LTでフィードバックをもらい、そのネタを元にプロポーザルとして提出しました。  
[click] そしてそれが、PHPカンファレンス沖縄での登壇につながりました  
[click] またその登壇したカンファレンスの廊下でrunnへの要望や質問をもらって、それを持ち帰って実装する。その改善がまた次の登壇ネタになっていく——。  
[click] このサイクルが、自分でも驚くほどの速度で回り始めました。そして今日ここにいます。
-->

---
transition: slide-left
---

# <mdi-book-heart-outline /> 継続発信が、技術書執筆のきっかけになった


<div class="mt-6 grid grid-cols-2 gap-8">
  <div class="space-y-4">
    <div class="rounded-xl border-2 border-blue-400/70 bg-blue-100/30 dark:bg-blue-400/10 p-5 shadow-md backdrop-blur-sm">
      <div class="font-bold text-blue-700 dark:text-blue-300 mb-3 flex items-center justify-center gap-2">
        <img src="https://unavatar.io/x/katzchum" alt="katzumi icon" class="w-6 h-6 rounded-full border border-blue-300/70" />
        <span>runnの一人アドベントカレンダー<carbon-calendar class="inline mr-2" /></span>
      </div>
      <div class="text-sm space-y-2 text-slate-800 dark:text-white">
        <div>12/1から毎日runnの記事を書き続ける</div>
        <div class="text-blue-700 dark:text-white/80">→ Zennに連載記事シリーズ</div>
      </div>
    </div>
    <div v-click="1" class="rounded-xl border-2 border-pink-400/70 bg-pink-100/30 dark:bg-pink-400/10 p-5 shadow-md backdrop-blur-sm">
      <div class="font-bold text-pink-700 dark:text-pink-300 mb-3 flex items-center justify-center gap-2">
        <img src="https://unavatar.io/x/k1LoW" alt="k1LoW icon" class="w-6 h-6 rounded-full border border-pink-300/70" />
        <span>k1LoWさんから連絡<mdi-star class="inline mr-2" /></span>
      </div>
      <div class="text-xl italic text-pink-700 dark:text-pink-200 font-bold">"本にしてみない？"</div>
      <div class="text-sm text-slate-700 dark:text-white/80 mt-3">→ 二つ返事で引き受ける</div>
    </div>
  </div>

  <div v-click="2" class="flex flex-col justify-center">
    <div class="rounded-xl border-2 border-green-400/70 bg-green-100/30 dark:bg-green-400/10 p-6 text-center shadow-md backdrop-blur-sm">
      <simple-icons-zenn class="text-5xl text-green-400 mb-4" />
      <div class="font-bold text-2xl mb-2 text-slate-900 dark:text-white">Zenn Book</div>
      <div class="text-base text-slate-800 dark:text-white">"runnチュートリアル"</div>
      <div class="mt-4 text-lg font-bold text-green-700 dark:text-green-300">
        <mdi-pen class="inline mr-2" />技術書著者 になりました
      </div>
    </div>
  </div>
</div>

<!--
継続発信のエピソードをひとつ紹介します。  

runnの一人アドベントカレンダーです。12月1日から毎日、runnに関する記事をZennに投稿していました。  
[click] すると、k1LoWさんから「本にしてみない？」と声がかかりました。  
技術書典とか書いたこともなかった自分ですが、言われるがままホイホイ引き受けました。  
[click] こうして「runnチュートリアル」というZenn Bookを書き、技術書著者にもなりました。
-->

---
transition: fade-out
layout: center
---

# <simple-icons-zenn /> Zenn Book: runnチュートリアル

<div class="mt-6 flex justify-center">
  <OgpImage url="https://zenn.dev/katzumi/books/runn-tutorial" width="960" height="504" />
</div>

<div class="mt-4 text-sm text-slate-700 dark:text-white/70 text-center">
  https://zenn.dev/katzumi/books/runn-tutorial
</div>

<!--
こちらが実際に書いたZenn Bookです。興味があればぜひよろしくお願いします。無料です！
-->

---
transition: slide-up
---

# <carbon-enterprise /> フィードバックが、OSS開発者への一歩になった

<div class="mt-6 grid grid-cols-2 gap-8">
  <div class="flex flex-col gap-4">
    <div class="rounded-xl border-2 border-amber-400/70 bg-amber-100/30 dark:bg-amber-400/10 p-5 shadow-md backdrop-blur-sm">
      <div class="font-bold text-amber-700 dark:text-amber-300 mb-3"><carbon-presentation-file class="inline mr-2" />スキーマ駆動開発フローのスライドを公開</div>
      <div class="text-sm text-slate-800 dark:text-white">登壇・公開した内容に反響があった</div>
    </div>
    <div class="text-center text-3xl text-slate-600 dark:text-white/40">↓</div>
    <div class="rounded-xl border-2 border-green-400/70 bg-green-100/30 dark:bg-green-400/10 p-5 shadow-md backdrop-blur-sm">
      <div class="font-bold text-green-700 dark:text-green-300 mb-3"><logos-github-octocat class="inline mr-2" />eg-r2 をOSS化</div>
      <div class="text-sm text-slate-800 dark:text-white">所属会社として<span class="text-green-700 dark:text-green-300 font-bold">初めて</span>のOSS化</div>
    </div>
  </div>

  <div v-click="1" class="flex flex-col justify-center">
    <div class="rounded-xl border-2 border-pink-400/70 bg-pink-100/30 dark:bg-pink-400/10 p-8 text-center shadow-md backdrop-blur-sm">
      <mdi-cached class="text-6xl mb-5 text-pink-700 dark:text-pink-300" />
      <div class="text-2xl font-bold mb-4 text-slate-900 dark:text-white">行動が変わったポイント</div>
      <div class="text-base text-slate-800 dark:text-white/80 leading-relaxed">
        外部公開によって<br />
        <span class="text-pink-700 dark:text-pink-300 font-bold">フィードバックサイクル</span>を得られると実感し<br />
        <span class="text-green-700 dark:text-green-300 font-bold">OSS活動を続ける行動</span>に変わった
      </div>
    </div>
  </div>
</div>

<!--
もうひとつ、アウトプットが成長につながったエピソードです。   
飛び込みLTでスキーマ駆動開発フローを発表したところ、イベントでフィードバックをもらえて、それがeg-r2というライブラリのOSS化につながりました。  

所属会社として初めてのOSSです。  
[click] 活動を振り返ってみての気づきですが、OSS活動も含めて外部発信は「タイパ」が良いと感じています。  

なぜなら、【発信 ➔ 社外からのフィードバック ➔ 自身の成長 ➔ 社内への認知拡大】という強力な好循環が自然とできあがるからです。  

この価値を意識してからは、OSS活動を続ける行動に自然と変わっていきました。
-->

---
transition: slide-left
layout: center
class: text-center
---

<div class="px-8 py-6 rounded-2xl bg-white/60 dark:bg-black/30 border border-slate-300/70 dark:border-white/15 shadow-md backdrop-blur-sm">
  <div class="text-8xl font-extrabold mb-8">
    <mdi-stairs-up />
  </div>
  <div class="text-5xl font-bold mb-4 text-amber-700 dark:text-amber-300">PART 4</div>
  <div class="text-3xl font-bold text-amber-700 dark:text-amber-300">
    ライフステージを味方に
  </div>
  <div class="mt-4 text-xl text-amber-700 dark:text-amber-200/90">
    3つの追い風
  </div>
</div>

<!--
パート 4  
ライフステージの変化へに向き合う話をします
-->

---
transition: slide-left
layout: center
---

# <carbon-warning-alt /> アウトプットは、いつ始めるべきか？

<div class="mt-10 text-4xl font-extrabold text-center text-red-700 dark:text-red-300 tracking-wide">
  「余裕ができてから」で、本当に間に合うのか
</div>

<div
  v-click="1"
  class="absolute inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-sm transition duration-700 ease-in-out"
  :class="$clicks < 1 ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'"
>
  <div class="semantic-overlay semantic-positive p-10 backdrop-blur-lg rounded-2xl shadow-2xl transform scale-110 transition duration-500">
    <h3 class="text-4xl font-extrabold text-white mb-6 leading-tight">
      <mdi-check-decagram class="inline mr-2 text-green-300" />「若いうちに頑張らないと手遅れ」ではない！<br/>私のケースの場合
    </h3>
    <p class="text-2xl text-green-300 font-bold tracking-wide leading-relaxed">
      <span class="text-yellow-300 font-bold">
        <mdi-account-child-outline class="inline mr-2" />40代・元地方在住・子育て世代
      </span>
      <br />
      <span class="text-white font-semibold text-xl mt-2 block tracking-normal">
        → それでも、<span class="text-amber-300 font-bold">いまが人生最高</span>のアウトプット期
      </span>
    </p>
  </div>
</div>

<!--
「若いうちに頑張らないと手遅れ」という言説があります。  
[click] でもそれは本当でしょうか？  
内発的なアウトプットは、いつからでも遅くないと考えています。  
40代・元地方在住・子育て世代の私が、人生で今が一番アウトプットできています。
-->

---
transition: slide-up
---

# <mdi-weather-windy /> 3つの追い風
40 代からアウトプットし始めた私のケース。ライフステージの変化と、環境の変化がありました

<div v-click="1" class="mt-5 grid grid-cols-3 gap-5">
  <div class="rounded-xl border-2 border-amber-400/60 bg-amber-100/30 dark:bg-amber-400/10 p-5 shadow-md backdrop-blur-sm">
    <div class="text-3xl mb-3 text-center">👨‍👩‍👦</div>
    <div class="text-base font-bold text-amber-700 dark:text-amber-300 mb-3"><mdi-numeric-1-circle class="inline mr-1" />子育てのフェーズ変化</div>
    <div class="text-sm space-y-2 text-slate-800 dark:text-white">
      <div>一番下の子が中学生に</div>
      <div>→ 部活が入り、<span class="text-amber-700 dark:text-amber-300 font-bold">親離れ</span>が進む</div>
      <div>→ 「構ってもらえなくなる」タイミングで時間が生まれる</div>
    </div>
    <div v-click="2" class="mt-4 p-3 rounded-lg bg-amber-100/60 dark:bg-amber-400/10 border border-amber-400/40 text-xs text-center text-slate-700 dark:text-white/85">
      <mdi-hand-wave-outline class="inline mr-1" />
      会場の皆さんはいかがですか？
    </div>
  </div>

  <div v-click="3" class="rounded-xl border-2 border-blue-400/60 bg-blue-100/30 dark:bg-blue-400/10 p-5 shadow-md backdrop-blur-sm">
    <div class="text-3xl mb-3 text-center">🤖</div>
    <div class="text-base font-bold text-blue-700 dark:text-blue-300 mb-3"><mdi-numeric-2-circle class="inline mr-1" />技術的障壁の低下</div>
    <div class="text-sm space-y-2 text-slate-800 dark:text-white">
      <div>k1LoWさんのリポジトリは全英語</div>
      <div>→ <span class="text-blue-700 dark:text-blue-300 font-bold">DeepL</span>で乗り越えた</div>
      <div>→ AIでコードリーディング・Issue化も</div>
      <div class="mt-2 text-blue-700/85 dark:text-blue-200 text-xs">コミュニケーションや開発も含めて<br />言語的な障壁が少なくなりました</div>
    </div>
  </div>

  <div v-click="4" class="rounded-xl border-2 border-green-400/60 bg-green-100/30 dark:bg-green-400/10 p-5 shadow-md backdrop-blur-sm">
    <div class="text-3xl mb-3 text-center">🗾</div>
    <div class="text-base font-bold text-green-700 dark:text-green-300 mb-3"><mdi-numeric-3-circle class="inline mr-1" />コミュニティの成熟</div>
    <div class="text-sm space-y-2 text-slate-800 dark:text-white">
      <div>地方カンファレンスが活発化</div>
      <div>funabashi.dev・多摩.devなど<br /><span class="text-green-700 dark:text-green-300 font-bold">マイクロコミュニティ</span>も誕生</div>
      <div class="mt-2 text-xs text-slate-700 dark:text-white/70">元地方在住だからこそ<br />積極的に地方カンファへ</div>
      <div class="mt-2 text-xs text-slate-700 dark:text-white/70">色々な人と知り合い・刺激を貰えるきっかけ</div>
    </div>
  </div>
</div>

<!--
あくまで私のケースですが、3つの追い風がありました。  
[click] 一つ目が子育てのフェーズ変化。一番下の子が中学生になり、部活が入って親離れが進みました。「構ってもらえなくなる」タイミングで、逆に自分の活動時間が生まれました。  
[click] この点はみなさんのご家庭の事情にもよると思うので、ぜひ聞いてみたいところです。  
[click] 二つ目は技術的障壁の低下。  
k1LoWさんのリポジトリは全て英語でしたが、DeepLで乗り越えました。最近ではAIでコードリーディングやIssue化もできて、コミュニケーションも開発も含めて、言語的な障壁はかなり少なくなりました。  
[click] 三つ目はコミュニティの成熟。  
地方カンファレンスが活発化し、funabashi.devや多摩.devのようなマイクロコミュニティも次々と生まれています。元地方在住だからこそ、積極的に地方カンファレンスに参加したいという気持ちになっています。  
地方カンファレンスが今、凄く熱いと感じていて、また実際に参加すると凄く良い刺激をいつも頂いています。
-->

---
transition: slide-left
layout: center
class: text-center
---

<div class="px-8 py-6 rounded-2xl bg-white/60 dark:bg-black/30 border border-slate-300/70 dark:border-white/15 shadow-md backdrop-blur-sm">
  <div class="text-8xl font-extrabold mb-8">
    <span class="inline-flex items-end gap-3">
      <span class="inline-block w-3 h-18 rounded-full bg-green-400 shadow-[0_0_14px_rgba(74,222,128,0.75)]"></span>
      <span class="inline-block w-3 h-20 rounded-full bg-yellow-300 shadow-[0_0_14px_rgba(253,224,71,0.8)]"></span>
      <span class="inline-block w-3 h-16 rounded-full bg-pink-400 shadow-[0_0_14px_rgba(244,114,182,0.8)]"></span>
      <span class="inline-block w-3 h-19 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.8)]"></span>
      <span class="inline-block w-3 h-17 rounded-full bg-purple-400 shadow-[0_0_14px_rgba(192,132,252,0.8)]"></span>
    </span>
  </div>
  <div class="text-5xl font-bold mb-4 text-rose-700 dark:text-rose-300">PART 5</div>
  <div class="text-3xl font-bold text-rose-700 dark:text-rose-300">
    推しは推せるときに推せ
  </div>
  <div class="mt-4 text-xl text-rose-700 dark:text-rose-200/90">
    波乗りの戦略
  </div>
</div>

<!--
最後
パート 5です。
-->

---
transition: slide-left
---

# <mdi-heart-broken-outline /> 一期一会：PHPカンファレンス福岡の終焉
「あの時行っておいてよかった」——動ける機会は永遠ではない

<div class="mt-6 grid grid-cols-2 gap-8">
  <div class="space-y-4">
    <div class="rounded-xl border-2 border-red-400/60 bg-red-100/30 dark:bg-red-400/10 p-5 shadow-md backdrop-blur-sm">
      <div class="font-bold text-red-700 dark:text-red-300 mb-3"><mdi-candle class="inline mr-2" />10年の節目に幕引き</div>
      <div class="text-sm space-y-2 text-slate-800 dark:text-white">
        <div>PHPカンファレンス福岡が10年目を節目に終了</div>
        <div class="text-slate-700 dark:text-white/70">実行委員長らから幕引きを宣言</div>
        <div class="mt-2 text-red-700 dark:text-red-300 font-bold">去年（2025年）が最後になってしまった</div>
        <div class="text-sm text-slate-700 dark:text-white/80 mt-1">k1LoWさんに会える身近なイベントがなくなり、凄く悲しい気持ち</div>
      </div>
    </div>
    <div v-click="1" class="rounded-xl border-2 border-amber-400/60 bg-amber-100/30 dark:bg-amber-400/10 p-5 shadow-md backdrop-blur-sm">
      <div class="font-bold text-amber-700 dark:text-amber-300 mb-2"><mdi-map-marker class="inline mr-2" />Go Conference mini in KYOTO</div>
      <div class="text-sm text-slate-800 dark:text-white">「押しかけ」で<a href="https://zenn.dev/katzumi/scraps/f00a2d3e177b77">runn開発者会議 in 鴨川</a>を開催<br />憧れの<span class="text-amber-700 dark:text-amber-300 font-bold">はてな社</span>にもお邪魔できた<br /><span class="text-xs text-slate-700 dark:text-white/80">→ あの時行っておいてよかった</span></div>
    </div>
  </div>

  <div v-click="2" class="flex flex-col justify-center">
    <div class="rounded-xl border-2 border-slate-300/70 dark:border-white/20 bg-white/70 dark:bg-white/10 p-8 text-center space-y-5 shadow-md backdrop-blur-sm">
      <div class="text-xl font-bold text-slate-800 dark:text-white/90">コミュニティも</div>
      <div class="text-xl font-bold text-slate-800 dark:text-white/90">憧れのエンジニアとの接点も</div>
      <div class="text-xl font-bold text-slate-800 dark:text-white/90">自分の「動ける状況」も</div>
      <div class="mt-4 text-4xl font-extrabold text-red-700 dark:text-red-300">永遠ではない</div>
    </div>
  </div>
</div>

<!--
PHPカンファレンス福岡が、10年目を節目に幕を閉じました。  
実行委員長らアカセさん達が幕引きを宣言されていて、去年が最後の開催になってしまいました。  
k1LoWさんに会える身近なイベントがなくなってしまい、本当に悲しい気持ちです。  
[click] Go Conference mini in KYOTOでは「押しかけ」でrunn開発者会議 in 鴨川を開催しました。  
そして憧れのはてな社にもお邪魔できました。あの時行っておいてよかったと思っています。  
[click] コミュニティも、憧れのエンジニアとの接点も、自分の「動ける状況」も——永遠ではありません。技術にも鮮度があって、旬で勢いがあるうちに乗っかるからこそ、自分自身も興味を持ち続けることができると思っています。
-->

---
transition: slide-left
glowSeed: 42
---

# <mdi-surfing /> 波乗りの戦略

<div class="mt-4 text-center text-base text-slate-700 dark:text-white/70 mb-5">
  駆け出しの頃から意識してきたこと
</div>

<div class="text-2xl font-bold text-center text-amber-700 dark:text-amber-300 mb-6">
  「1番にならなくてもいい。<br />ただ <span v-mark.underline.amber="0">時流がわかるポジション</span> でいること」
</div>

<div class="grid grid-cols-3 gap-5 max-w-3xl mx-auto">
  <div v-click="1" class="rounded-xl border-2 border-blue-400/60 bg-blue-100/30 dark:bg-blue-400/10 p-5 text-center shadow-md backdrop-blur-sm">
    <div class="text-4xl mb-3">🚣</div>
    <div class="font-bold text-blue-700 dark:text-blue-300 text-base">パドリング期</div>
    <div class="text-xs mt-2 text-slate-700 dark:text-white/70">業界・サービスをやり込む<br />興味を持ったことを試し続ける</div>
  </div>
  <div v-click="2" class="rounded-xl border-2 border-amber-400/60 bg-amber-100/30 dark:bg-amber-400/10 p-5 text-center shadow-md backdrop-blur-sm">
    <div class="text-4xl mb-3">🌊</div>
    <div class="font-bold text-amber-700 dark:text-amber-300 text-base">波を読む</div>
    <div class="text-xs mt-2 text-slate-700 dark:text-white/70">タイミングを見定める<br />波の先端に乗れるか</div>
  </div>
  <div v-click="3" class="rounded-xl border-2 border-green-400/60 bg-green-100/30 dark:bg-green-400/10 p-5 text-center shadow-md backdrop-blur-sm">
    <div class="text-4xl mb-3">🏄</div>
    <div class="font-bold text-green-700 dark:text-green-300 text-base">波に乗る</div>
    <div class="text-xs mt-2 text-slate-700 dark:text-white/70">一気に良い連鎖が<br />やってくる</div>
  </div>
</div>

<div v-click="4" class="mt-5 rounded-xl border-2 border-pink-400/60 bg-pink-100/30 dark:bg-pink-400/10 p-4 max-w-3xl mx-auto text-center text-sm text-slate-800 dark:text-white shadow-md backdrop-blur-sm">
  波は出来上がってから<span class="text-red-700 dark:text-red-400 font-bold">パドリングしても遠くまで運んでもらえない</span><br />
  推し活（パドリング）を続けながら、<span class="text-pink-700 dark:text-pink-300 font-bold">波がどこから来るかを感じ取る</span>
</div>

<!--
では、そのタイミングをどう掴むか。  
駆け出しのエンジニアになった時から意識してきたことがあります。  
「1番にならなくてもいい。ただ時流がわかるポジションでいること」  
イメージは波乗りです。  
[click] サーフィンは、波に乗っている時間は実はほんの一瞬で、大半の時間はパドリング——つまり腕で漕いで沖に出たり、波を待ったりする時間です。  
パドリングで良いポジションにいないと、いい波が来ても乗れない。  
キャリアも同じで、日頃から業界やサービスにどっぷり浸かって、興味を持ったことはまず試してみる。  
やってみないと、自分に合うか・好きか嫌いかは分からないです。  
私の場合は、自宅サーバーを作って遊ぶところから始まりました。  
[click] 次に波を読む。パドリングしながら、どこから波が来そうかを感じ取るフェーズです。  
新しい技術の盛り上がりや、まわりのコミュニティの広がり、——そういう「うねり」を察知できるのは、日頃からその界隈に浸かっているからこそです。  
[click] そして波に乗る。タイミングが合えば、一気に良い連鎖がやってくる。  
[click] 波が出来上がってからパドリングを始めても、波の先端には乗れないし、遠くまで運んでもらえない。  
推し活を続けながら、波がどこから来るかを感じ取る。  
私のケースでは、EC及びWeb業界で漂い続けたのがパドリングで、runnにPRを送ったのがターニングポイントで、OSS活動やPHPコミュニティの広がりが波に乗った感じでした。
-->

---
transition: slide-up
layout: center
class: text-center
---

# <mdi-heart /> 推しは推せるときに推せ

<Transform :scale="0.95">
<div class="mt-4 max-w-3xl mx-auto text-left">
  <div class="rounded-2xl border-2 border-white/25 bg-slate-900/55 px-6 py-5 shadow-lg backdrop-blur-sm">
    <div class="text-xs tracking-wide text-white/70 mb-3">重なるときに、連鎖が生まれる</div>
    <ul class="space-y-2 text-lg leading-relaxed text-white/90">
      <li class="flex items-start gap-3">
        <span class="shrink-0">💖</span>
        <span>推し活動ができるタイミング</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="shrink-0">⚡</span>
        <span>推して<span v-mark.underline.pink="0">プラスの連鎖</span>が発生するタイミング</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="shrink-0">🔥</span>
        <span>自分自身の<span v-mark.underline.amber="0">熱量のピーク</span></span>
      </li>
      <li class="flex items-start gap-3">
        <span class="shrink-0">🌊</span>
        <span>時流を読む力と、<span v-mark.underline.green="0">自分にとっての楽しいのシンクロ</span></span>
      </li>
    </ul>
  </div>
</div>

<div v-click="1" class="mt-4 max-w-3xl mx-auto rounded-xl border-2 border-pink-500/70 bg-pink-100/85 px-5 py-3 text-2xl font-extrabold text-pink-800 shadow-lg backdrop-blur-sm">
  すべてが揃うタイミングは、今だけかもしれない
</div>

<div v-click="2" class="mt-4 max-w-3xl mx-auto rounded-xl border-2 border-amber-500/70 bg-amber-100/90 px-5 py-3 text-xl font-bold text-amber-900 shadow-lg backdrop-blur-sm">
  あなたの「推し」は何ですか？<br />
  そのタイミング、<span v-mark.underline.amber="2">意外と今かもしれません。</span>
</div>
</Transform>

<!--
実は私自身、今年は家庭の事情でイベント参加を控えめにしています。だからこそ言えることがあります。  

推し活動ができるタイミング、プラスの連鎖が発生するタイミング、自分の熱量のピーク。  
そこに「時流や盛り上がりを読む力」と「それが自分には楽しいという内的な気づき」が重なることが大事です。  
[click] すべてが揃うタイミングは、案外、貴重だと考えています。  
[click] あなたの「推し」は何ですか？好きかもと感じているなら、少し勇気を出して発信・推してみては如何でしょうか？
-->

---
transition: slide-left
layout: center
class: text-center
---

# <mdi-sprout /> まとめ：いまから、ここから

<div class="mt-7 grid grid-cols-3 gap-5 max-w-4xl mx-auto">
  <div class="rounded-xl border-2 border-pink-400/60 bg-pink-50/90 dark:bg-pink-400/15 p-5 text-center shadow-md">
    <div class="text-5xl mb-4">💖</div>
    <div class="text-lg font-bold text-pink-700 dark:text-pink-200">推しを見つける</div>
    <div class="text-sm text-slate-700 dark:text-white/80 mt-2 leading-relaxed">特別な強みは不要<br />熱量だけあればいい</div>
  </div>
  <div class="rounded-xl border-2 border-blue-400/60 bg-blue-50/90 dark:bg-blue-400/15 p-5 text-center shadow-md">
    <div class="text-5xl mb-4"><mdi-oar class="inline" /></div>
    <div class="text-lg font-bold text-blue-700 dark:text-blue-200">パドリングを続ける</div>
    <div class="text-sm text-slate-700 dark:text-white/80 mt-2 leading-relaxed">好き・興味を発信する<br />発信が次の情報を呼び込む<br />意識してフィードバック循環へ</div>
  </div>
  <div class="rounded-xl border-2 border-green-400/60 bg-green-50/90 dark:bg-green-400/15 p-5 text-center shadow-md">
    <div class="text-5xl mb-4">🚀</div>
    <div class="text-lg font-bold text-green-700 dark:text-green-200">波が来たら全部賭ける</div>
    <div class="text-sm text-slate-700 dark:text-white/80 mt-2 leading-relaxed">フィードバックを受けて次を出す<br />深くも広くも試してみる<br />取り組みを変えて飽きずに続ける</div>
  </div>
</div>

<div v-click="1" class="mt-6 max-w-3xl mx-auto rounded-xl border-2 border-amber-400/70 bg-amber-100/85 dark:bg-amber-400/15 px-6 py-4 text-2xl font-bold text-amber-900 dark:text-amber-100 shadow-md">
  何歳からでも、どんな環境からでも<br />
  <span class="text-amber-700 dark:text-amber-200">熱量さえあれば未来は変えられる</span>
</div>

<!--
まとめです。  

推しを見つける。特別な強みは不要で、熱量だけあればいい。  
パドリングを続ける。好き・興味を発信すると、必要な情報や反応が自分のところに集まってきます。  
そのために、自分なりのフィードバックサイクルを意識して作るのが大事です。  
フィードバックが返ってきたら、次のアウトプットを出す。深くも広くも試し、取り組みを変えながら飽きずに回していく。  
やり方は人それぞれなので、自分に合う回し方を見つけるのがポイントです。  
[click] 何歳からでも、どんな環境からでも、熱量さえあれば未来は変えられる。  
「いまから、ここから」、ぜひ一歩踏み出してみてください。  
ご清聴ありがとうございました！
-->

---
layout: two-cols-header
transition: fade-out
---

# <carbon-document-export /> 参考リンク

::left::

<div class="space-y-4 mt-3">
  <div class="rounded-xl border-2 border-slate-300/70 dark:border-white/20 bg-white/85 dark:bg-slate-900/55 p-4 shadow-md backdrop-blur-sm">
    <div class="font-bold text-slate-800 dark:text-white/85 mb-3">つながる先</div>
    <div class="text-sm space-y-2">
      <div class="flex items-center gap-2 text-slate-800 dark:text-slate-100">
        <simple-icons-zenn class="text-green-500" />
        <a href="https://zenn.dev/katzumi" target="_blank" class="underline decoration-slate-400/70">zenn.dev/katzumi</a>
      </div>
      <div class="flex items-center gap-2 text-slate-800 dark:text-slate-100">
        <logos-github-octocat />
        <a href="https://github.com/k2tzumi" target="_blank" class="underline decoration-slate-400/70">github.com/k2tzumi</a>
      </div>
      <div class="flex items-center gap-2 text-slate-800 dark:text-slate-100">
        <carbon-presentation-file class="text-blue-500" />
        <a href="https://www.docswell.com/user/katzumi" target="_blank" class="underline decoration-slate-400/70">docswell.com/user/katzumi</a>
      </div>
    </div>
  </div>
  <div class="rounded-xl border-2 border-amber-300/70 dark:border-amber-300/30 bg-amber-50/85 dark:bg-amber-400/10 p-4 shadow-md backdrop-blur-sm">
    <div class="text-sm font-bold text-amber-800 dark:text-amber-200">フィードバック歓迎</div>
    <div class="mt-2 text-sm text-slate-700 dark:text-slate-100 leading-relaxed">
      感想や質問はハッシュタグでぜひ共有してください。<br />
      <span class="font-bold text-amber-700 dark:text-amber-200">#きのこ2026 #a</span>
    </div>
  </div>
</div>

::right::

<div class="mt-3 rounded-xl border-2 border-slate-300/70 dark:border-white/20 bg-white/85 dark:bg-slate-900/55 p-4 shadow-md backdrop-blur-sm">
  <div class="font-bold text-slate-800 dark:text-white/85 mb-3">本日言及した記事・登壇など</div>
  <div class="space-y-2 text-[13px] leading-snug text-slate-800 dark:text-slate-100">
    <div><a href="https://zenn.dev/katzumi/articles/api-scenario-testing-with-runn" target="_blank" class="underline decoration-slate-400/70">📝 runnとの出会い記事（Zenn）</a></div>
    <div><a href="https://zenn.dev/katzumi/articles/runn-developers-conference-in-phperkaigi2023" target="_blank" class="underline decoration-slate-400/70">📝 PHPerKaigi 2023 runn開発者会議</a></div>
    <div><a href="https://zenn.dev/katzumi/books/runn-tutorial" target="_blank" class="underline decoration-slate-400/70">📚 Zenn Book: runnチュートリアル</a></div>
    <div><a href="https://zenn.dev/litalico/articles/what-is-eg-r2" target="_blank" class="underline decoration-slate-400/70">📝 eg-r2 OSS化（Zenn）</a></div>
    <div><a href="https://zenn.dev/akase244/articles/4292dfaf05b7a2" target="_blank" class="underline decoration-slate-400/70">📝 PHPカンファレンス福岡終了の記事</a></div>
    <div><a href="https://listen.style/p/tsunagimefm/0gdrzkts" target="_blank" class="underline decoration-slate-400/70">🎙️ ツナギメエフエム Podcast</a></div>
    <div><a href="https://k1low.hatenablog.com/entry/2023/12/06/234248" target="_blank" class="underline decoration-slate-400/70">📝 Go Conference mini in 鴨川 runn開発者会議</a></div>
  </div>
</div>

<!--
参考リンクをまとめました。  
言及した記事や、普段の発信先もあわせてご覧ください。  
本日はありがとうございました！
-->

---
transition: slide-left
layout: end
---
