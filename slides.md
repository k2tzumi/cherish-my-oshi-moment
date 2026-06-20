---
# You can also start simply with 'default'
theme: seriph
# TODO: 背景画像を変更する（現在はデフォルト）
# background: https://cover.sli.dev
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
    - from: "k1LoW"
      to: "けーいちろー"  
    - from: "PR"
      to: "Pull Request"  
    - from: "PHPerKaigi"
      to: "ペチパー会議"  
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
  <img src="./kinoko-conf-character.png" class="h-100 w-auto" alt="公式ロゴ" />
</div>


<!--
本日は「推しは推せるときに推せ！ライフステージ変化に向き合う」というタイトルで、お話しさせていただきます。  
どうぞよろしくお願いいたします。
-->

---
transition: fade-out
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
transition: fade-out
---

# <carbon-information /> お願い 🙏

写真撮影、SNS での実況について

登壇者の励みになるので是非ともご意見やご感想など、フィードバック頂けると助かります mm  
スライドの内容は、すでに以下の場所で公開されていますので、ぜひお手元でご覧ください

* [forteeのプロポーザルページ](https://fortee.jp/kinoko-2026/proposal/9fcb212e-f5d8-4f7f-94ad-cda8478712b8)
* または <fa6-brands-square-x-twitter /> の投稿

::left::

<Transform :scale="2.5">
　　　🙆‍♀📷<ph-projector-screen-chart-light /><br />
　　　🙅‍♂📹💸<br />
　　　🙅📸👨‍👦‍👦<br />
</Transform>

::right::

<br />
<Transform :scale="2">
<fa6-brands-square-x-twitter />
</Transform>
<br />
<a href="https://x.com/search?q=%23%E3%81%8D%E3%81%AE%E3%81%932026%20%23a&f=live">#きのこ2026 #a</a>

<!--
まずはじめにお願いです。写真撮影、SNSでの実況、大歓迎です。スライドも公開済みですので、ぜひハッシュタグをつけて、ご意見やご感想をフィードバックいただけると励みになります。
-->

---

# <carbon-presentation-file /> 本日のお話すること
推し駆動で人生が変わった話

<div class="mt-6 grid grid-cols-5 gap-3">
  <div class="rounded-xl border-2 border-slate-300/70 bg-slate-100/10 px-3 py-4 flex flex-col shadow-lg">
    <div class="text-xs text-slate-200/90 tracking-widest">🔇 PART 1</div>
    <div class="mt-3 text-base leading-snug font-bold">沈黙の数年間</div>
    <div class="mt-3 text-xs text-white/80 leading-relaxed">対外アウトプット・ゼロの日々</div>
  </div>
  <div class="rounded-xl border-2 border-pink-300/70 bg-pink-100/10 px-3 py-4 flex flex-col shadow-lg">
    <div class="text-xs text-pink-200/90 tracking-widest">⚡ PART 2</div>
    <div class="mt-3 text-base leading-snug font-bold">運命の出会い</div>
    <div class="mt-3 text-xs text-white/80 leading-relaxed">OSSと推しとの出会い</div>
  </div>
  <div class="rounded-xl border-2 border-green-300/70 bg-green-100/10 px-3 py-4 flex flex-col shadow-lg">
    <div class="text-xs text-green-200/90 tracking-widest">🔄 PART 3</div>
    <div class="mt-3 text-base leading-snug font-bold">推し駆動<br />サイクル</div>
    <div class="mt-3 text-xs text-white/80 leading-relaxed">フィードバックの連鎖</div>
  </div>
  <div class="rounded-xl border-2 border-amber-300/70 bg-amber-100/10 px-3 py-4 flex flex-col shadow-lg">
    <div class="text-xs text-amber-200/90 tracking-widest">🌊 PART 4</div>
    <div class="mt-3 text-base leading-snug font-bold">ライフステージ<br />を味方に</div>
    <div class="mt-3 text-xs text-white/80 leading-relaxed">3つの追い風</div>
  </div>
  <div class="rounded-xl border-2 border-rose-300/70 bg-rose-100/10 px-3 py-4 flex flex-col shadow-lg">
    <div class="text-xs text-rose-200/90 tracking-widest">🏄 PART 5</div>
    <div class="mt-3 text-base leading-snug font-bold">推しは推せる<br />ときに推せ</div>
    <div class="mt-3 text-xs text-white/80 leading-relaxed">波乗りの戦略</div>
  </div>
</div>

<!--
本日は5つのパートでお話しします。  
私自身が40代前半まで「何者でもなかった」状態から、推し活動を通してどのように変化していったのか？  
その実体験を通して、「何かを始めるのに遅すぎることはないんだ」と、みなさんに少しでも勇気をお届けできれば幸いです。
-->

---
layout: center
transition: fade-out
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
  <div>37歳：ゲーム会社に買われる。Naver本社に呼ばれてサービスを説明。単身赴任へ切替</div>
  <div>38歳：前職のリファラルでVGへ。ポイントメディアの中の人に</div>
  <div>39歳：前職部下を協力会社として召喚し各種ポイント・アイテム交換の繋ぎこみ。大手とも連携</div>
  <div>40歳：航空大手A社モールをローンチ。所属部署が統合される</div>
  <div class="text-amber-300 font-bold">41歳：転職。そしてコロナ禍へ——</div>
</div>

<div v-click="1" class="mt-6 text-3xl font-extrabold text-center text-red-300">
  対外的なアウトプット、ゼロでした。
</div>

<!--
まず、自己紹介がてら40代になるまでの私を振り返ってみます。  
キャリアの初期は、地方のSES会社を経てベンチャー企業などに所属して、ずっとEC畑で大小様々なECサイトやモールなどの開発・運用に泥臭くやってきました。
そこから色々あって、旧VOYAGE　GROUPへ転職するなど、怒涛の10年でした。  
従事していた業務内容としては技術営業っぽい動きだったり、プロジェクトリーダーやらバックエンドエンジニア、SREなど、今どきのカッコつけた言い方をするとフルスタック・フルサイクル的なムーブをしていました。でも実態としては何でも屋でした。ポジション・ポジションで、やれることはやってきたつもりでした。  
しかし、です。
[click] これだけ多くのプロダクトの裏側にいながら、当時の私は『完全なる社内弁慶』でした。  
技術コミュニティに出向くこともなければ、OSSにコントリビュートしたこともない。世の中の『キラキラした有名エンジニア』の活動を、ただ遠くから『すごいなぁ』と眺めているだけの、外の世界からは一切見えない、文字通り『何者でもないエンジニア』でした。　　

そんな私が、40代になってからなぜ、どうやって外の世界に飛び出すことになったのか。次からのパート以降でお話ししていきます
-->

---
transition: fade-out
---

# <mdi-trending-up /> After: 2023年以降の私

<div class="mt-6 grid grid-cols-3 gap-6">
  <div class="rounded-xl border-2 border-green-400/70 bg-green-400/10 p-5 flex flex-col items-center shadow-lg">
    <simple-icons-zenn class="text-5xl text-green-400 mb-3" />
    <div class="text-lg font-bold mb-2">Zenn</div>
    <a href="https://zenn.dev/katzumi" target="_blank" class="text-sm text-green-300">zenn.dev/katzumi</a>
    <div class="mt-3 text-sm text-white/80 text-center">65記事・Zenn Book著者<br />トータル1,328Likes</div>
  </div>
  <div class="rounded-xl border-2 border-slate-400/70 bg-slate-400/10 p-5 flex flex-col items-center shadow-lg">
    <logos-github-octocat class="text-5xl mb-3" />
    <div class="text-lg font-bold mb-2">GitHub</div>
    <a href="https://github.com/k2tzumi" target="_blank" class="text-sm text-slate-300">github.com/k2tzumi</a>
    <div class="mt-3 text-sm text-white/80 text-center">OSS貢献を拡大中<br /><a href="https://github.com/k1LoW/runn/issues?q=is%3Apr%20author%3Ak2tzumi%20sort%3Acreated-asc">runn 77PR</a>・他OSSにも貢献<br />自身のOSSも公開・開発</div>
  </div>
  <div class="rounded-xl border-2 border-blue-400/70 bg-blue-400/10 p-5 flex flex-col items-center shadow-lg">
    <carbon-presentation-file class="text-5xl text-blue-400 mb-3" />
    <div class="text-lg font-bold mb-2">Docswell</div>
    <a href="https://www.docswell.com/user/katzumi" target="_blank" class="text-sm text-blue-300">docswell.com/user/katzumi</a>
    <div class="mt-3 text-sm text-white/80 text-center">カンファレンス登壇多数<br />公開スライド21本</div>
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
      同じ人間です
    </h3>
    <p class="text-2xl text-green-300 font-bold tracking-wide leading-relaxed">
      <span class="text-yellow-300 font-bold">
        <mdi-calendar-star class="inline mr-2" />40代から、本格始動しました
      </span>
    </p>
  </div>
</div>

<!--
まずアウトプットゼロの状態からどれくらい変わったのか？についてですが、現在ではこんな感じになっています。  
Zennでの記事執筆、GitHubへのOSS貢献、各地のカンファレンスでの登壇。  
おかげさまで記事がバズったり、登壇の機会を頂いたりしています。  
今回もこの場で発表させて頂いているわけですが、30代の自分からは想像できませんでした。  
[click] 遅咲きではありますが、40代から急に駆け出した格好です。 　
次のスライドから私がどう変化していったか？お話していきます。
-->

---
layout: center
class: text-center
---

<div class="text-8xl font-extrabold mb-8">
  🔇
</div>
<div class="text-5xl font-bold mb-4">PART 1</div>
<div class="text-3xl font-bold text-slate-300">
  沈黙の十数年間
</div>
<div class="mt-4 text-xl text-white/80">
  対外アウトプット・ゼロの日々
</div>

<!--
PART 1。  
まず対外的なアウトプットがなかった期間についてお話します。
-->

---
transition: fade-out
layout: center
---

# <mdi-comment-question-outline /> 「自分には特別な強みなんてない」

<div class="mt-8 text-2xl font-bold text-center text-white/90">
  この気持ち、ありませんか？
</div>

<div class="mt-8 grid grid-cols-2 gap-6 max-w-3xl mx-auto">
  <div v-click="1" class="rounded-xl border-2 border-white/20 bg-white/10 p-5 text-center">
    <div class="text-4xl mb-3">😔</div>
    <div class="text-base">"対外的に活躍するエンジニアは<br />特別な人たちだ"</div>
  </div>
  <div v-click="2" class="rounded-xl border-2 border-white/20 bg-white/10 p-5 text-center">
    <div class="text-4xl mb-3">⏳</div>
    <div class="text-base">"年齢的にも今さら<br />始めても遅い気がする"</div>
  </div>
  <div v-click="3" class="rounded-xl border-2 border-white/20 bg-white/10 p-5 text-center">
    <div class="text-4xl mb-3">🏠</div>
    <div class="text-base">"子育て・家庭があって<br />時間が取れない"</div>
  </div>
  <div v-click="4" class="rounded-xl border-2 border-white/20 bg-white/10 p-5 text-center">
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
本セッションは、そういう気持ちを抱えているすべての方に向けてお話しします。
-->

---
transition: fade-out
---

# <carbon-building /> 前職にはあったもの：技術力評価会

<div class="mt-6 grid grid-cols-2 gap-6">
  <div class="rounded-xl border-2 border-blue-400/50 bg-blue-400/10 p-6">
    <div class="text-lg font-bold text-blue-300 mb-4"><carbon-group class="inline mr-2" />Voyage Group（現 CARTA HOLDINGS）時代</div>
    <ul class="space-y-3 text-base">
      <li>周りはつよつよエンジニアのタレント集団</li>
      <li>半期ごとに技術的アウトプットを<br />発表する文化（技術力評価会）</li>
      <li>評価会は正直、<span class="text-blue-300 font-bold">プレッシャーもあり辛かった…</span></li>
    </ul>
  </div>
  <div class="rounded-xl border-2 border-amber-400/50 bg-amber-400/10 p-6">
    <div class="text-lg font-bold text-amber-300 mb-4"><mdi-thought-bubble-outline class="inline mr-2" />心の中では</div>
    <ul class="space-y-3 text-base">
      <li>アウトプットはしていたが<span class="text-amber-300 font-bold">自発的</span>ではなかった</li>
      <li>「評価されるために義務感でやっている」感が自分にはなじまなかった</li>
      <li>でも社外発表している人への<br /><span class="text-amber-300 font-bold">憧れ</span>はずっとあった</li>
    </ul>
  </div>
</div>

<!--
前職の企業には「技術力評価会」という文化がありました。  
つよつよエンジニアのタレント集団の中で、半期ごとにアウトプットを発表する場があったんです。  
評価会は正直、プレッシャーもあって辛い側面もありました。 
業務としての成果やアウトプットは出してはいたものの、どこか「評価されるために義務感でやっている」という感覚が拭えず、自分の中で今ひとつしっくりきていませんでした。  
でも、社外で発表しているエンジニアへの憧れは、ずっと心の中にありました。
-->

---
transition: fade-out
---

# <mdi-weather-lightning-rainy /> 転職＋コロナ禍＝アウトプットの場が消えた

<div class="mt-8 flex flex-col items-center gap-6">
  <div class="flex items-center gap-6 text-xl">
    <div class="rounded-xl border-2 border-blue-400/50 bg-blue-400/10 px-6 py-4 text-center">
      <div class="text-3xl mb-2">🏢</div>
      <div class="font-bold">事業会社へ転職</div>
      <div class="text-sm text-white/70 mt-1">Web系ではない</div>
    </div>
    <div class="text-3xl text-white/70">＋</div>
    <div class="rounded-xl border-2 border-red-400/50 bg-red-400/10 px-6 py-4 text-center">
      <div class="text-3xl mb-2">😷</div>
      <div class="font-bold">コロナ禍</div>
      <div class="text-sm text-white/70 mt-1">転職直後に直撃</div>
    </div>
    <div class="text-3xl text-white/70">＝</div>
    <div class="rounded-xl border-2 border-gray-400/50 bg-gray-400/10 px-6 py-4 text-center">
      <div class="text-3xl mb-2">🔇</div>
      <div class="font-bold">アウトプットの場</div>
      <div class="text-sm text-white/70 mt-1">すべてゼロに</div>
    </div>
  </div>

  <div v-click="1" class="mt-4 max-w-2xl w-full space-y-3">
    <div class="rounded-lg border border-white/20 bg-white/10 px-6 py-3 flex items-center">
      <carbon-close-filled class="mr-3 text-red-400 shrink-0" />技術力評価会 → <span class="text-red-400 ml-2">事業会社なので存在しない</span>
    </div>
    <div class="rounded-lg border border-white/20 bg-white/10 px-6 py-3 flex items-center">
      <carbon-close-filled class="mr-3 text-red-400 shrink-0" />社内LT会 → <span class="text-red-400 ml-2">コロナでなくなった</span>
    </div>
    <div class="rounded-lg border border-white/20 bg-white/10 px-6 py-3 flex items-center">
      <carbon-close-filled class="mr-3 text-red-400 shrink-0" />勉強会・カンファレンス → <span class="text-red-400 ml-2">全滅</span>
    </div>
  </div>
</div>

<!--
転職した直後に、すぐコロナ禍になってしまいました。  
[click] 前職にあった技術力評価会は、事業会社への転職でなくなりました。  
唯一あった社内LT会もコロナでなくなり、世の中的にも勉強会やカンファレンスも全滅した時期でした。  
外の世界への接点が、完全にゼロになってしまいました。
-->

---
transition: fade-out
---

# <mdi-robot-outline /> Slack Bot Officer を自称する様になるものの

<div class="mt-6 grid grid-cols-2 gap-8">
  <div class="space-y-4">
    <div class="rounded-xl border-2 border-green-400/50 bg-green-400/10 p-6">
      <div class="text-lg font-bold text-green-300 mb-4"><mdi-lightbulb-outline class="inline mr-2" />きっかけ</div>
      <ul class="space-y-3 text-base">
        <li>社内Slackのworkspaceが<br />少し寂しかった</li>
        <li>前職のworkspaceには<br />bot職人がいてその雰囲気が好きだった</li>
        <li>ちょうどTypeScriptを学びたい時期だった</li>
      </ul>
    </div>
    <div v-click="1" class="rounded-xl border-2 border-amber-400/50 bg-amber-400/10 p-6">
      <div class="text-lg font-bold text-amber-300 mb-3"><mdi-emoticon-wink-outline class="inline mr-2" />正直な動機</div>
      <div class="text-base">「部門を超えてエンジニアからのフィードバックを得るには、bot開発は良いムーブだ」という<span class="text-amber-300 font-bold">想い</span>がありました</div>
    </div>
  </div>

  <div v-click="2" class="rounded-xl border-2 border-red-400/50 bg-red-400/10 p-6 flex flex-col justify-center">
    <div class="text-lg font-bold text-red-300 mb-4"><carbon-warning-filled class="inline mr-2" />でも結局</div>
    <ul class="space-y-3 text-base">
      <li><mdi-check class="inline mr-2 text-green-400" />会社の中では良い名刺代わりに</li>
      <li><carbon-close-filled class="inline mr-2 text-red-400" />ただフィードバックループはない</li>
      <li><carbon-close-filled class="inline mr-2 text-red-400" />一緒にbot作る仲間はいない</li>
      <li><carbon-close-filled class="inline mr-2 text-red-400" />スポットな認知に留まる</li>
    </ul>
    <div class="mt-5 p-3 rounded-lg bg-red-400/10 border border-red-400/30 text-sm text-center text-white/80">
      外の世界への接点は<br />何も変わらなかった
    </div>
  </div>
</div>

<!--
そんな中、転職先のSlackが以前の環境に比べてどこか静かで寂しく感じ、まずは自分でいくつかBotを生やし始めました。　　
前職にいた「Bot職人」への憧れもありましたし、ちょうど新しい技術をインプットしたい時期でもありました。

その活動を続けるうちに、いつしか社内で「Slack Bot Officer」を自称するようになりました。

[click] 正直に白状すると、「部門を超えて社内のエンジニアからフィードバックを得るには、Bot開発は良いムーブだ」という、想いがありました。

[click] でも結局、社内での良い名刺代わりにはなったものの、そこから先への広がりはありませんでした。
フィードバックが返ってくるわけでもなく、一緒にBotを作る仲間が増えるわけでもない。当然、外の世界への接点も何も変わらないままでした。

ここまでが「沈黙の数十年間」でした。
-->

---
layout: center
class: text-center
---

<div class="text-8xl font-extrabold mb-8">
  ⚡
</div>
<div class="text-5xl font-bold mb-4">PART 2</div>
<div class="text-3xl font-bold text-pink-300">
  運命の出会い
</div>
<div class="mt-4 text-xl text-white/80">
  OSSと推しとの出会い
</div>

<!--
ではPART 2。運命の出会いについてお話しします。
-->

---
transition: fade-out
---

# <carbon-api /> 転機：レセプトBaaSという業務課題

<div class="mt-6 grid grid-cols-2 gap-8">
  <div class="rounded-xl border-2 border-blue-400/50 bg-blue-400/10 p-6">
    <div class="text-lg font-bold text-blue-300 mb-4"><carbon-api class="inline mr-2" />課題</div>
    <ul class="space-y-3 text-base">
      <li>APIのみのサービス（BaaS）を開発</li>
      <li>QA部隊でのポチポチテストは不可</li>
      <li>コアドメインなので<br /><span class="text-blue-300 font-bold">早く品質を確保したい</span></li>
      <li>I/Fとして正しいことを<br /><span class="text-blue-300 font-bold">早く保証したい</span></li>
    </ul>
  </div>

  <div class="rounded-xl border-2 border-green-400/50 bg-green-400/10 p-6">
    <div class="text-lg font-bold text-green-300 mb-4"><carbon-search class="inline mr-2" />探していたもの</div>
    <div class="text-base">シナリオベースで<br />APIテストができるツール</div>
    <div class="text-sm text-white/70 mt-2">当時、そういうツールが少なかった</div>
  </div>
</div>

<!--
転機は、新しいシステム開発における技術的な課題から始まりました。
障害福祉サービスの請求に関わる『レセプト業務』を共通基盤を構築しようとしていました。  
画面を持たないAPI（BaaS）をスキーマ駆動開発することになりました。

ここで大きな問題に直面しました。画面がないため、QA（品質保証）部隊がこれまですすめてきた「画面をポチポチ操作するテスト」が物理的にできません。

しかし、請求システムのコアドメインだからこそ、いち早く品質を担保して、インターフェースとして正しいことを保証する必要がありました。

複数のAPIをまたぐ『シナリオベース』で自動テストができるツールを必死に探しましたが、当時はその要求を満たせる選択肢はほとんどありませんでした。
そんな切実な状況の中、とある技術ブログが目に止まりました。
-->

---
transition: fade-out
layout: center
---

# <carbon-document /> 衝撃的なrunnとの出会い

<div class="mt-6 flex justify-center">
  <OgpImage url="https://tech.pepabo.com/2022/06/07/scenario-testing-in-go/" width="960" height="504" />
</div>

<div class="mt-4 text-sm text-white/70 text-center">
  作者のk1LoWさんの記事でrunnを知る
</div>

<!--
その記事がこちらのk1LoWさんのブログで、runnというAPIシナリオテストツールの存在を始めてしりました。    
「これだ！」と思って、すぐ試し始めたのが最初の一歩でした。
-->

---
transition: fade-out
---

# <logos-github-octocat /> 勇気を出して、最初のPRを送った日

<div class="mt-6 grid grid-cols-2 gap-8">
  <div class="space-y-4">
    <div class="rounded-xl border-2 border-amber-400/50 bg-amber-400/10 p-5">
      <div class="text-lg font-bold text-amber-300 mb-3"><mdi-timeline-text-outline class="inline mr-2" />最初はうまく動かなかった</div>
      <div class="space-y-2 text-base">
        <div>コードを読んでみると…</div>
        <div class="pl-4 border-l-2 border-amber-400/50 space-y-1">
          <div>✅ Goがシンプル</div>
          <div>✅ 初期段階でコード量が少ない</div>
          <div>✅ ちょうどGoを勉強中だった</div>
        </div>
        <div class="mt-3 text-amber-300 font-bold text-lg">「自分でも分かるかも！」</div>
      </div>
    </div>
  </div>

  <div class="space-y-4">
    <div class="rounded-xl border-2 border-green-400/50 bg-green-400/10 p-5">
      <div class="text-lg font-bold text-green-300 mb-3"><carbon-send-filled class="inline mr-2" />PR → マージ → 喜び → 繰り返す</div>
      <div class="space-y-2 text-base">
        <div>すぐマージしてもらえた！</div>
        <div class="text-green-300">サービスが成長するたびに、<br />新しい課題が現れる</div>
        <div class="text-white/80 text-sm">Issueで機能を提案・検討し、PRで改善を積み上げる</div>
        <div class="text-4xl font-extrabold text-center mt-3 text-green-300 tracking-wide">77 PR</div>
        <div class="text-sm text-white/80 text-center leading-relaxed">
          <span class="text-amber-300 font-bold">小さな改善</span>を積み上げた結果、<br />現場の課題と一緒にrunnも育っていった
        </div>
        <div class="text-[10px] text-white/45 text-center mt-1">※ 累計コントリビュートPR数</div>
      </div>
    </div>
  </div>
</div>

<!--
さっそく試してみたのですが、最初はうまく動きませんでした。　　

ですが、コードを開いてみると非常にシンプルで、当時Go言語を勉強していた自分でも読めそうなボリュームだったんです。「自分にも直せるかもしれない」と思い、バグを特定して初めてのPRを送ってみました。

それがすぐにマージされた嬉しさと、「もっと良くしたい！」という思いからIssueとPRを積極的に送るようになりました。  

サービスの成長とあわせてrunnの改善したいポイントがどんどん湧き出てきて、気づけば、送ったPRの数が現時点までに77件となりました。
-->

---
transition: fade-out
---

# <carbon-email /> 9PRの頃、届いた一通の招待

<div class="mt-6 max-w-4xl mx-auto space-y-5">
  <div class="rounded-xl border-2 border-amber-400/50 bg-amber-400/10 p-5 text-left">
    <div class="text-base text-amber-200 mb-2">k1LoWさんに会う前、まだ <span class="text-amber-300 font-bold">9PR</span> くらいの時期</div>
    <div class="text-sm text-white/80">継続して改善提案していたところ、リポジトリ招待が届いた</div>
  </div>

  <div class="rounded-xl border-2 border-blue-400/50 bg-blue-400/10 p-5 text-left">
    <div class="text-sm text-blue-200 mb-2">title</div>
    <div class="font-bold text-lg text-white">k1LoW invited you to k1LoW/runn</div>
    <div class="text-sm text-blue-200 mt-4 mb-2">description</div>
    <div class="text-sm text-white/90">@k1LoW has invited you to collaborate on the k1LoW/runn repository</div>
  </div>

  <div class="rounded-xl border border-green-400/40 bg-green-400/10 p-4 text-center text-sm text-white/90">
    「改善を積み上げると、信頼が返ってくる」
  </div>
</div>

<!--
まだリアルで対面すらしていない、送ったPRも10件に満たない頃でした。
突然リポジトリへ招待され、公式のコミッター権限を頂きました。

1ユーザーである自分の小さい改善や提案を、k1LoWさんは受け入れてくれ、また、議論にも積極的に答えてくれていた中でした。  
信頼してくれたことも嬉しかったのですが、提案内容から裏にあったコンセプトを汲み取ってくれて感動したのを覚えています。
-->

---
transition: fade-out
---

# <carbon-star /> 学んだことと、昔の憧れがつながった

<div class="mt-6 grid grid-cols-2 gap-8">
  <div class="rounded-xl border-2 border-blue-400/50 bg-blue-400/10 p-5">
    <div class="text-lg font-bold text-blue-300 mb-3"><mdi-school-outline class="inline mr-2" />runnで学んだこと</div>
    <ul class="space-y-2 text-sm">
      <li>開発者フレンドリーなツール設計（runn本体・tagprによるリリースプロセス）</li>
      <li>Documentation as Code の考え方</li>
      <li>CLIでもインタフェース設計が重要になるということ</li>
      <li>テスティングライブラリとCLIツールのバランス設計</li>
      <li>Golangのモダンな開発スタイル</li>
    </ul>
  </div>

  <div class="rounded-xl border-2 border-amber-400/50 bg-amber-400/10 p-5">
    <div class="text-lg font-bold text-amber-300 mb-3"><mdi-handshake-outline class="inline mr-2" />OSSで共同開発する楽しさ</div>
    <ul class="space-y-2 text-sm">
      <li>対話しながら機能を育てる、共創の面白さ</li>
      <li>発展的な機能拡張は、議論が難しいぶんワクワクする</li>
      <li>提案が形になり、ユーザー価値へつながる手応え</li>
    </ul>
  </div>
</div>

<div class="mt-6 rounded-xl border-2 border-green-400/50 bg-green-400/10 p-4 text-center text-sm">
  学びと共創の楽しさが重なったとき、<span class="text-green-300 font-bold">runnへの改善</span>は継続できる推進力になった
</div>

<!--
この流れの中で、runn開発から多くを学びました。  
開発者フレンドリーな設計、Documentation as Code、CLIのインタフェース設計、ライブラリとCLIのバランス、そしてGolangのモダンな開発スタイル。  
さらにOSS共同開発では、発展的な機能拡張の議論に難しさがありつつ、その分ワクワクも大きい。  
この学びと共創の楽しさが、改善を続ける推進力になっていきました。
-->

---
transition: fade-out
---

# <mdi-account-group-outline /> 伏線：ちゃまほりさんがつないでくれた縁

<div class="mt-6 text-center">
  <div class="text-lg mb-8 text-white/80">同僚の <span class="text-pink-300 font-bold">ちゃまほり（@tyamahori）</span>さんが動いてくれた</div>

  <div class="flex items-center justify-center gap-4 flex-wrap">
    <div class="rounded-xl border-2 border-pink-400/50 bg-pink-400/10 p-5 text-center w-36">
      <div class="text-3xl mb-2">👨‍💻</div>
      <div class="font-bold text-sm">katzumi</div>
      <div class="text-xs text-white/80 mt-2">runnをドッグフーディング<br />改善提案を継続</div>
    </div>
    <div class="text-2xl text-white/70">→</div>
    <div class="rounded-xl border-2 border-blue-400/50 bg-blue-400/10 p-5 text-center w-36">
      <div class="text-3xl mb-2">🤝</div>
      <div class="font-bold text-sm">ちゃまほり</div>
      <div class="text-xs text-white/80 mt-2">PHPerRoomで<br />k1LoW氏と繋がる</div>
    </div>
    <div class="text-2xl text-white/70">→</div>
    <div class="rounded-xl border-2 border-green-400/50 bg-green-400/10 p-5 text-center w-36">
      <div class="text-3xl mb-2">⭐</div>
      <div class="font-bold text-sm">k1LoW氏</div>
      <div class="text-xs text-white/80 mt-2">runnの作者</div>
    </div>
    <div class="text-2xl text-white/70">＋</div>
    <div class="rounded-xl border-2 border-amber-400/50 bg-amber-400/10 p-5 text-center w-36">
      <div class="text-3xl mb-2">🎙️</div>
      <div class="font-bold text-sm">赤瀬さん</div>
      <div class="text-xs text-white/80 mt-2">ツナギメエフエム</div>
    </div>
  </div>

  <div v-click="1" class="mt-8 text-2xl text-amber-300 font-bold">
    <mdi-calendar-heart class="inline mr-2" />
    PHPerKaigi 2023 で初めてお会いする機会が訪れた
  </div>
</div>

<!--
実際にk1LoW氏にリアルでお会いするきっかけを作ってくれたのは、同僚のちゃまほりさんでした。  
自分のrunnの取り組みをちゃまほりさんに伝えていて、彼がPHPerRoomというオンラインの場でk1LoW氏と繋がってくれたんです。  
ツナギメエフエムの赤瀬さんも一緒に繋がりができました。  
[click] そしてPHPerKaigi 2023で、初めてリアルでお会いする機会が訪れました。
-->

---
transition: fade-out
---

# <mdi-balloon /> PHPerKaigi 2023：廊下という魔法

<div class="mt-4 grid grid-cols-2 gap-5">
  <div class="space-y-4">
    <div class="rounded-xl border-2 border-blue-400/50 bg-blue-400/10 p-4">
      <div class="font-bold text-blue-300 mb-2"><carbon-presentation-file class="inline mr-1" />k1LoW氏のセッションを客席で聴く</div>
      <div class="text-sm">"Win Testing Trophy Easily"<br />runnが生まれた動機が語られる</div>
    </div>
    <div v-click="1" class="rounded-xl border-2 border-pink-400/50 bg-pink-400/10 p-4">
      <div class="font-bold text-pink-300 mb-2"><mdi-microphone class="inline mr-1" />登壇中のサプライズ言及</div>
      <div class="text-sm italic">"データ駆動テストの拡張をしてくれたコントリビューターが<span class="text-pink-300 font-bold">本日会場に来てくれていると思います（ニヤリ）</span>"</div>
      <div class="text-xs text-white/80 mt-2">→ 想定外のタイミングで名指しされて驚く</div>
    </div>
  </div>

  <div class="space-y-4">
    <div v-click="2" class="rounded-xl border-2 border-green-400/50 bg-green-400/10 p-4">
      <div class="font-bold text-green-300 mb-2"><mdi-glass-mug-variant class="inline mr-1" />池袋Night → Day2ホワイトボード</div>
      <div class="text-sm">IssueやPRでの英語コミュニケーションとは全然違う。<br /><span class="text-green-300">対面で日本語で話すと、解像度が一気に上がる。</span><br />ハッカソン的にその場でコーディング。</div>
    </div>
    <div v-click="3" class="rounded-xl border-2 border-amber-400/50 bg-amber-400/10 p-4">
      <div class="font-bold text-amber-300 mb-2"><mdi-map-marker class="inline mr-1" />運命のひとこと</div>
      <div class="text-sm">"福岡でPHPカンファレンスやりますよ"<br /><span class="text-amber-300 font-bold text-base">「絶対参加しよう！」</span><br /><span class="text-xs text-white/80">（k1LoWさん・赤瀬さんは福岡在住）</span></div>
    </div>
  </div>
</div>

<!--
PHPerKaigi 2023で、初めてk1LoW氏とリアルで会いました。  
k1LoW氏のセッション「Win Testing Trophy Easily」を客席で聴いていました。  
[click] まさかのサプライズは登壇中に来ました。「データ駆動テストの拡張をしてくれたコントリビューターが本日会場に来てくれていると思います」と大勢の前で言及されて、かなり驚きました。  
[click] その後、Ask the Speakerでようやく「はじめまして」ができました。  
[click] 池袋Nightでは内容が濃すぎて「Podcastにしたら面白そう」と思うほど。普段はIssueやPRで英語コミュニケーションですが、対面で日本語で会話できると解像度が一気に上がる感覚がありました。Day2はホワイトボードでアイデアをぶつけ合い、お酒を飲みながらコーディングも。カンファレンスの廊下という特別なシチュエーションの魔力にあてられました。  
[click] そして「福岡でPHPカンファレンスやりますよ」という話を聞いて、「絶対参加しよう！」という気持ちになりました。
-->

---
layout: center
class: text-center
---

<div class="text-8xl font-extrabold mb-8">
  🔄
</div>
<div class="text-5xl font-bold mb-4">PART 3</div>
<div class="text-3xl font-bold text-green-300">
  推し駆動サイクル
</div>
<div class="mt-4 text-xl text-white/80">
  フィードバックの連鎖
</div>

<!--
PART 3。推し駆動サイクルについてお話しします。
-->

---
transition: fade-out
---

# <mdi-fire /> 5本のプロポーザル——推し駆動の気合

<div class="mt-6 text-center">
  <div class="text-xl mb-8 text-white/80">
    「推しに会いに行く」という動機で<br />
    <span class="text-orange-300 font-bold text-2xl">PHPカンファレンス福岡2023にプロポーザル5本提出</span>
  </div>

  <div class="flex items-center justify-center gap-10">
    <div class="rounded-xl border-2 border-orange-400/50 bg-orange-400/10 p-8 text-center">
      <div class="text-7xl font-extrabold text-orange-300">5</div>
      <div class="text-lg mt-2">本のプロポーザル</div>
      <div class="text-sm text-white/80 mt-1">LT含む</div>
    </div>
    <div class="text-4xl text-white/70">→</div>
    <div class="rounded-xl border-2 border-green-400/50 bg-green-400/10 p-8 text-center">
      <div class="text-7xl">🎉</div>
      <div class="text-lg mt-2">採択！</div>
      <div class="text-sm text-white/80 mt-1">前夜祭LTで初登壇</div>
    </div>
  </div>

  <div v-click="1" class="mt-8 rounded-xl border-2 border-white/20 bg-white/10 p-4 max-w-lg mx-auto">
    <mdi-comment-quote-outline class="inline mr-2 text-white/80" />
    <span class="text-white/80 italic">"プロポーザルが落ちても行くつもりでいた"</span>
  </div>
</div>

<!--
PHPカンファレンス福岡2023に、プロポーザルを5本提出しました。  
「推しに会いに行く！」という気合で。  
[click] 正直に言うと、プロポーザルが落ちても行くつもりでいました。  
でも幸い採択されて、前夜祭LTで初めての対外登壇を果たしました。
-->

---
transition: fade-out
---

# <mdi-cached /> サイクルが回り始めた

<div class="mt-6 max-w-3xl mx-auto">
  <div class="flex flex-col items-center gap-2">
    <div class="rounded-xl border-2 border-blue-400/50 bg-blue-400/10 px-8 py-3 w-full text-center font-bold">
      前夜祭LT「クリーンアーキテクチャのアンチパターン」
    </div>
    <div class="text-center text-white/70 text-sm">↓ フィードバックをもらう</div>
    <div v-click="1" class="rounded-xl border-2 border-green-400/50 bg-green-400/10 px-8 py-3 w-full text-center font-bold">
      PHPカンファレンス沖縄「ActiveRecordパターンの呪縛を学びほぐす」
    </div>
    <div v-click="1" class="text-center text-white/70 text-sm">↓ 廊下でrunnへの要望・質問を受ける → 実装する</div>
    <div v-click="2" class="rounded-xl border-2 border-amber-400/50 bg-amber-400/10 px-8 py-3 w-full text-center font-bold">
      各地のカンファレンス「APIカバレッジ計測」「モブワーク事例」など
    </div>
    <div v-click="2" class="text-center text-white/70 text-sm">↓ 改善内容がOSS化 → 次の登壇ネタに</div>
    <div v-click="3" class="rounded-xl border-2 border-pink-400/50 bg-pink-400/10 px-8 py-3 w-full text-center font-bold">
      PHPカンファレンス福岡2025「アーキテクチャレベルの依存性逆転」（前回登壇）
    </div>
    <div v-click="3" class="text-center text-white/70 text-sm">↓ そして今日のこのセッションへ</div>
  </div>
</div>

<!--
前夜祭LTでフィードバックをもらい、それを次の登壇につなげました。  
[click] PHPカンファレンス沖縄でも登壇。  
[click] カンファレンスの廊下でrunnへの要望や質問を受け、実装してOSS改善し、それが次の登壇ネタになる——。  
[click] このサイクルが、自分でも驚くほどの速度で回り始めました。そして今日ここにいます。
-->

---
transition: fade-out
---

# <mdi-book-heart-outline /> 一人アドベントカレンダー → 「本にしてみない？」

<div class="mt-6 grid grid-cols-2 gap-8">
  <div class="space-y-4">
    <div class="rounded-xl border-2 border-blue-400/50 bg-blue-400/10 p-5">
      <div class="font-bold text-blue-300 mb-3"><carbon-calendar class="inline mr-2" />runnの一人アドベントカレンダー</div>
      <div class="text-sm space-y-2">
        <div>12/1から毎日runnの記事を書き続ける</div>
        <div class="text-white/80">→ Zennに連載記事シリーズ</div>
      </div>
    </div>
    <div v-click="1" class="rounded-xl border-2 border-pink-400/50 bg-pink-400/10 p-5">
      <div class="font-bold text-pink-300 mb-3"><mdi-star class="inline mr-2" />k1LoW氏から連絡</div>
      <div class="text-xl italic text-pink-200 font-bold">"本にしてみない？"</div>
      <div class="text-sm text-white/80 mt-3">推しから直接声をかけてもらえた瞬間</div>
    </div>
  </div>

  <div v-click="2" class="flex flex-col justify-center">
    <div class="rounded-xl border-2 border-green-400/50 bg-green-400/10 p-6 text-center">
      <simple-icons-zenn class="text-5xl text-green-400 mb-4" />
      <div class="font-bold text-2xl mb-2">Zenn Book</div>
      <div class="text-base">"runnチュートリアル"</div>
      <div class="mt-4 text-lg font-bold text-green-300">
        <mdi-pen class="inline mr-2" />技術書著者 になりました
      </div>
    </div>
  </div>
</div>

<!--
runnの一人アドベントカレンダーを書き始めました。12月1日から毎日、runnに関する記事をZennに投稿していたんです。  
[click] すると、k1LoW氏から「本にしてみない？」と声がかかりました。  
推しから直接声をかけてもらえたこの瞬間は、本当に忘れられません。  
[click] こうして「runnチュートリアル」というZenn Bookを書き、技術書著者になりました。
-->

---
transition: fade-out
layout: center
---

# <simple-icons-zenn /> Zenn Book: runnチュートリアル

<div class="mt-6 flex justify-center">
  <OgpImage url="https://zenn.dev/katzumi/books/runn-tutorial" width="960" height="504" />
</div>

<div class="mt-4 text-sm text-white/70 text-center">
  https://zenn.dev/katzumi/books/runn-tutorial
</div>

<!--
こちらが、runnチュートリアルのZenn Bookです。  
アドベントカレンダーで積み上げた内容を体系化して、初学者でも追える形にまとめました。  
「小さく続けたアウトプットが、技術書という形になる」ことを実感した一冊です。
-->

---
transition: fade-out
---

# <carbon-enterprise /> 個人の推し活が、対外的なアウトプットになった

<div class="mt-6 grid grid-cols-2 gap-8">
  <div class="flex flex-col gap-4">
    <div class="rounded-xl border-2 border-amber-400/50 bg-amber-400/10 p-5">
      <div class="font-bold text-amber-300 mb-3"><carbon-presentation-file class="inline mr-2" />スキーマ駆動開発フローのスライドを公開</div>
      <div class="text-sm">登壇・公開した内容に反響があった</div>
    </div>
    <div class="text-center text-3xl text-white/40">↓</div>
    <div class="rounded-xl border-2 border-green-400/50 bg-green-400/10 p-5">
      <div class="font-bold text-green-300 mb-3"><logos-github-octocat class="inline mr-2" />eg-r2 をOSS化</div>
      <div class="text-sm">LITALICOとして<span class="text-green-300 font-bold">初めて</span>のOSS化</div>
    </div>
  </div>

  <div v-click="1" class="flex flex-col justify-center">
    <div class="rounded-xl border-2 border-pink-400/50 bg-pink-400/10 p-8 text-center">
      <div class="text-6xl mb-5">🌊</div>
      <div class="text-2xl font-bold mb-4">行動が変わったポイント</div>
      <div class="text-base text-white/80 leading-relaxed">
        外部公開によって<br />
        <span class="text-pink-300 font-bold">フィードバックサイクル</span>を得られると実感し<br />
        <span class="text-green-300 font-bold">OSS活動を続ける行動</span>に変わった
      </div>
    </div>
  </div>
</div>

<!--
個人の推し活が、対外的なアウトプットとして形になりました。  
スキーマ駆動開発フローを発表したスライドへの反響をもとに、eg-r2というライブラリをLITALICOとして初めてOSS化することができました。  
[click] 外部公開することでフィードバックサイクルを得られる、OSS活動の尊さを実感しました。  
その実感が、その後もOSS活動を継続する行動変容につながったと感じています。
-->

---
layout: center
class: text-center
---

<div class="text-8xl font-extrabold mb-8">
  🌊
</div>
<div class="text-5xl font-bold mb-4">PART 4</div>
<div class="text-3xl font-bold text-amber-300">
  ライフステージを味方に
</div>
<div class="mt-4 text-xl text-white/80">
  3つの追い風
</div>

<!--
PART 4。ライフステージを味方にする話をします。
-->

---
transition: fade-out
layout: center
---

# <carbon-warning-alt /> 「若いうちに頑張らないと手遅れ」？

<div class="mt-10 text-4xl font-bold text-center text-red-300">
  それ、本当ですか？
</div>

<div
  v-click="1"
  class="absolute inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-sm transition duration-700 ease-in-out"
  :class="$clicks < 1 ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'"
>
  <div class="semantic-overlay semantic-positive p-10 backdrop-blur-lg rounded-2xl shadow-2xl transform scale-110 transition duration-500">
    <h3 class="text-4xl font-extrabold text-white mb-6">
      <mdi-check-decagram class="inline mr-2 text-green-300" />私のデータが反証します
    </h3>
    <p class="text-2xl text-green-300 font-bold tracking-wide leading-relaxed">
      <span class="text-yellow-300 font-bold">
        <mdi-account-child-outline class="inline mr-2" />40代・元地方在住・子育て世代
      </span>
      <br />
      <span class="text-white font-semibold text-xl mt-2 block">
        → 人生で<span class="text-amber-300 font-bold">今が一番</span>アウトプットできている
      </span>
    </p>
  </div>
</div>

<!--
「若いうちに頑張らないと手遅れ」という言説があります。  
[click] でもそれは本当でしょうか？  
私のデータが反証します。40代・元地方在住・子育て世代の私が、人生で今が一番アウトプットできています。  
その理由を3つの追い風として説明します。
-->

---
transition: fade-out
---

# <mdi-weather-windy /> 3つの追い風

<div class="mt-5 grid grid-cols-3 gap-5">
  <div class="rounded-xl border-2 border-amber-400/50 bg-amber-400/10 p-5">
    <div class="text-3xl mb-3 text-center">👨‍👩‍👦</div>
    <div class="text-base font-bold text-amber-300 mb-3">① 子育てのフェーズ変化</div>
    <div class="text-sm space-y-2">
      <div>一番下の子が中学生に</div>
      <div>→ 部活が入り、<span class="text-amber-300">親離れ</span>が進む</div>
      <div>→ 「構ってもらえなくなる」タイミングで時間が生まれる</div>
    </div>
    <div v-click="1" class="mt-4 p-3 rounded-lg bg-amber-400/10 border border-amber-400/30 text-xs text-center">
      <mdi-hand-wave-outline class="inline mr-1" />
      会場の皆さんはいかがですか？
    </div>
  </div>

  <div v-click="2" class="rounded-xl border-2 border-blue-400/50 bg-blue-400/10 p-5">
    <div class="text-3xl mb-3 text-center">🤖</div>
    <div class="text-base font-bold text-blue-300 mb-3">② 技術的障壁の低下</div>
    <div class="text-sm space-y-2">
      <div>k1LoW氏のリポジトリは全英語</div>
      <div>→ <span class="text-blue-300 font-bold">DeepL</span>で乗り越えた</div>
      <div>→ AIでコードリーディング・Issue化も</div>
      <div class="mt-2 text-blue-200 text-xs">「以前は限られた人しかできなかった<br />OSS活動が民主化されている」</div>
    </div>
  </div>

  <div v-click="3" class="rounded-xl border-2 border-green-400/50 bg-green-400/10 p-5">
    <div class="text-3xl mb-3 text-center">🗾</div>
    <div class="text-base font-bold text-green-300 mb-3">③ コミュニティの成熟</div>
    <div class="text-sm space-y-2">
      <div>地方カンファレンスが活発化</div>
      <div>funabashi.dev・多摩.devなど<br /><span class="text-green-300">マイクロコミュニティ</span>も誕生</div>
      <div class="mt-2 text-xs text-white/70">元地方在住だからこそ<br />積極的に地方カンファへ</div>
    </div>
  </div>
</div>

<!--
3つの追い風があります。  
一つ目が子育てのフェーズ変化。一番下の子が中学生になり、部活が入って親離れが進みました。「構ってもらえなくなる」タイミングで、逆に自分の活動時間が生まれたんです。  
[click] この点はみなさんの家庭の事情にもよると思うので、ぜひ聞いてみたいところです。  
[click] 二つ目は技術的障壁の低下。k1LoW氏のリポジトリは全て英語でしたが、DeepLで乗り越えました。最近ではAIでコードリーディングやIssue化もできて、以前は限られた人しかできなかったOSS活動が民主化されていると感じています。  
[click] 三つ目はコミュニティの成熟。地方カンファレンスが活発化し、funabashi.devや多摩.devのようなマイクロコミュニティも次々と生まれています。元地方在住だからこそ、積極的に地方カンファに参加したいという気持ちになっています。
-->

---
layout: center
class: text-center
---

<div class="text-8xl font-extrabold mb-8">
  🏄
</div>
<div class="text-5xl font-bold mb-4">PART 5</div>
<div class="text-3xl font-bold text-rose-300">
  推しは推せるときに推せ
</div>
<div class="mt-4 text-xl text-white/80">
  波乗りの戦略
</div>

<!--
最後のPART 5です。
-->

---
transition: fade-out
---

# <mdi-heart-broken-outline /> 一期一会：PHPカンファレンス福岡の終焉

<div class="mt-6 grid grid-cols-2 gap-8">
  <div class="space-y-4">
    <div class="rounded-xl border-2 border-red-400/50 bg-red-400/10 p-5">
      <div class="font-bold text-red-300 mb-3"><mdi-candle class="inline mr-2" />10年の節目に幕引き</div>
      <div class="text-sm space-y-2">
        <div>PHPカンファレンス福岡が10年目を節目に終了</div>
        <div class="text-white/70">赤瀬さんが幕引きを宣言</div>
        <div class="mt-2 text-red-300 font-bold">去年（2025年）が最後になってしまった</div>
        <div class="text-sm text-white/80 mt-1">k1LoW氏の足元のイベントがなくなり、凄く悲しい気持ち</div>
      </div>
    </div>
    <div class="rounded-xl border-2 border-amber-400/50 bg-amber-400/10 p-5">
      <div class="font-bold text-amber-300 mb-2"><mdi-map-marker class="inline mr-2" />Go Conference mini in 鴨川</div>
      <div class="text-sm">「押しかけ」でrunn開発者会議を開催<br />憧れの<span class="text-amber-300 font-bold">はてな社</span>にもお邪魔できた<br /><span class="text-xs text-white/80">→ あの時行っておいてよかった</span></div>
    </div>
  </div>

  <div v-click="1" class="flex flex-col justify-center">
    <div class="rounded-xl border-2 border-white/20 bg-white/10 p-8 text-center space-y-5">
      <div class="text-xl font-bold text-white/90">コミュニティも</div>
      <div class="text-xl font-bold text-white/90">憧れのエンジニアとの接点も</div>
      <div class="text-xl font-bold text-white/90">自分の「動ける状況」も</div>
      <div class="mt-4 text-4xl font-extrabold text-red-300">永遠ではない</div>
    </div>
  </div>
</div>

<!--
PHPカンファレンス福岡が、10年目を節目に幕を閉じました。  
赤瀬さんが幕引きを宣言されていて、去年が最後の開催になってしまいました。  
k1LoW氏の足元のイベントがなくなってしまい、本当に悲しい気持ちです。  
Go Conference mini in 鴨川では「押しかけ」でrunn開発者会議を開催して、憧れのはてな社にもお邪魔できました。あの時行っておいてよかったと思っています。  
[click] コミュニティも、憧れのエンジニアとの接点も、自分の「動ける状況」も——永遠ではありません。
-->

---
transition: fade-out
glowSeed: 42
---

# <mdi-surfing /> 波乗りの戦略

<div class="mt-4 text-center text-base text-white/70 mb-5">
  駆け出しの頃から意識してきたこと
</div>

<div class="text-2xl font-bold text-center text-amber-300 mb-6">
  「1番にならなくてもいい。<br />ただ <span v-mark.underline.amber="0">時流がわかるポジション</span> でいること」
</div>

<div class="grid grid-cols-3 gap-5 max-w-3xl mx-auto">
  <div v-click="1" class="rounded-xl border-2 border-blue-400/50 bg-blue-400/10 p-5 text-center">
    <div class="text-4xl mb-3">🏄</div>
    <div class="font-bold text-blue-300 text-base">パドリング期</div>
    <div class="text-xs mt-2 text-white/70">業界・サービスをやり込む<br />興味を持ったことを試し続ける</div>
  </div>
  <div v-click="2" class="rounded-xl border-2 border-amber-400/50 bg-amber-400/10 p-5 text-center">
    <div class="text-4xl mb-3">🌊</div>
    <div class="font-bold text-amber-300 text-base">波を読む</div>
    <div class="text-xs mt-2 text-white/70">タイミングを見定める<br />波の先端に乗れるか</div>
  </div>
  <div v-click="3" class="rounded-xl border-2 border-green-400/50 bg-green-400/10 p-5 text-center">
    <div class="text-4xl mb-3">🚀</div>
    <div class="font-bold text-green-300 text-base">波に乗る</div>
    <div class="text-xs mt-2 text-white/70">一気に良い連鎖が<br />やってくる</div>
  </div>
</div>

<div v-click="4" class="mt-5 rounded-xl border-2 border-pink-400/50 bg-pink-400/10 p-4 max-w-3xl mx-auto text-center text-sm">
  波は出来上がってから<span class="text-red-400 font-bold">パドリングしては間に合わない</span><br />
  推し活（パドリング）を続けながら、<span class="text-pink-300 font-bold">波がどこから来るかを感じ取る</span>
</div>

<!--
駆け出しのエンジニアになった時から意識してきたことがあります。  
「1番にならなくてもいい。ただ時流がわかるポジションでいること」  
イメージは波乗り（サーフィン）です。  
[click] パドリング期：OSSに限らず、自分の身を置く業界やサービスを必死にやり込む。  
 興味を持ったことはまず試す。やってみないと、自分に合うか・好きかは分からない。  
 私の場合は、自宅サーバーを作って遊ぶところから始まりました。  
[click] 波を読む：どのタイミングで、どの方向に波が来るかを感じ取る。  
[click] 波に乗る：タイミングが合えば、一気に良い連鎖がやってくる。  
[click] 波は出来上がってからパドリングしては間に合わない。  
推し活（パドリング）を続けながら、波がどこから来るかを感じ取る。  
今回の話で言えば、runnという推しへの活動がパドリングで、PHPerKaigi 2023が波のタイミングでした。
-->

---
layout: center
class: text-center
---

# <mdi-heart /> 推しは推せるときに推せ

<div class="mt-8 text-xl text-white/80 max-w-2xl mx-auto leading-loose">
  推し活動ができるタイミング<br />
  推して<span class="text-pink-300 font-bold">プラスの連鎖</span>が発生するタイミング<br />
  自分自身の<span class="text-amber-300 font-bold">熱量のピーク</span><br />
  時流を読む力と、<span class="text-green-300 font-bold">自分にとっての楽しいのシンクロ</span>
</div>

<div v-click="1" class="mt-8 text-3xl font-extrabold text-pink-300">
  すべてが揃うタイミングは、今だけかもしれない
</div>

<div v-click="2" class="mt-10 text-2xl font-bold text-amber-300">
  あなたの「推し」は何ですか？<br />
  そのタイミング、<span v-mark.underline.amber="2">今じゃないですか？</span>
</div>

<!--
今年は家庭の事情でイベント参加を控えめにしています。だからこそ言えることがあります。  
推し活動ができるタイミング、プラスの連鎖が発生するタイミング、自分の熱量のピーク。  
そこに「時流や盛り上がりを読む力」と「それが自分には楽しいという内的な気づき」が重なることが大事です。  
[click] すべてが揃うタイミングは、今だけかもしれない。  
[click] あなたの「推し」は何ですか？そのタイミング、今じゃないですか？
-->

---
layout: center
class: text-center
---

# <mdi-sprout /> まとめ：いまから、ここから

<div class="mt-8 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
  <div class="rounded-xl border-2 border-pink-400/50 bg-pink-400/10 p-6 text-center">
    <div class="text-5xl mb-4">💖</div>
    <div class="text-lg font-bold text-pink-300">推しを見つける</div>
    <div class="text-sm text-white/70 mt-3 leading-relaxed">特別な強みは不要<br />熱量だけあればいい</div>
  </div>
  <div class="rounded-xl border-2 border-blue-400/50 bg-blue-400/10 p-6 text-center">
    <div class="text-5xl mb-4">🏄</div>
    <div class="text-lg font-bold text-blue-300">パドリングを続ける</div>
    <div class="text-sm text-white/70 mt-3 leading-relaxed">好き・興味を発信する<br />発信が次の情報を呼び込む<br />意識してフィードバック循環へ</div>
  </div>
  <div class="rounded-xl border-2 border-green-400/50 bg-green-400/10 p-6 text-center">
    <div class="text-5xl mb-4">🚀</div>
    <div class="text-lg font-bold text-green-300">波が来たら全部賭ける</div>
    <div class="text-sm text-white/70 mt-3 leading-relaxed">フィードバックを受けて次を出す<br />深くも広くも試してみる<br />取り組みを変えて飽きずに続ける</div>
  </div>
</div>

<div v-click="1" class="mt-8 text-2xl font-bold text-white/90">
  何歳からでも、どんな環境からでも<br />
  <span class="text-amber-300">熱量さえあれば未来は変えられる</span>
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

<div class="space-y-4 mt-4">
  <div>
    <div class="text-sm text-white/80 mb-2">このスライド・プロポーザル</div>
    <QRCode value="https://fortee.jp/kinoko-2026/proposal/9fcb212e-f5d8-4f7f-94ad-cda8478712b8" class="w-28 h-28" />
  </div>
  <div class="text-sm space-y-2 mt-4">
    <div><simple-icons-zenn class="inline mr-2 text-green-400" /><a href="https://zenn.dev/katzumi" target="_blank">zenn.dev/katzumi</a></div>
    <div><logos-github-octocat class="inline mr-2" /><a href="https://github.com/k2tzumi" target="_blank">github.com/k2tzumi</a></div>
    <div><carbon-presentation-file class="inline mr-2 text-blue-400" /><a href="https://www.docswell.com/user/katzumi" target="_blank">docswell.com/user/katzumi</a></div>
  </div>
</div>

::right::

<div class="space-y-2 mt-4 text-sm">
  <div class="font-bold text-white/80 mb-3">本日言及した記事・登壇など</div>
  <div><a href="https://zenn.dev/katzumi/articles/api-scenario-testing-with-runn" target="_blank">📝 runnとの出会い記事（Zenn）</a></div>
  <div><a href="https://zenn.dev/katzumi/articles/runn-developers-conference-in-phperkaigi2023" target="_blank">📝 PHPerKaigi 2023 runn開発者会議</a></div>
  <div><a href="https://zenn.dev/katzumi/books/runn-tutorial" target="_blank">📚 Zenn Book: runnチュートリアル</a></div>
  <div><a href="https://zenn.dev/litalico/articles/what-is-eg-r2" target="_blank">📝 eg-r2 OSS化（Zenn）</a></div>
  <div><a href="https://zenn.dev/akase244/articles/4292dfaf05b7a2" target="_blank">📝 PHPカンファレンス福岡終了の記事</a></div>
  <div><a href="https://listen.style/p/tsunagimefm/0gdrzkts" target="_blank">🎙️ ツナギメエフエム Podcast</a></div>
  <div><a href="https://k1low.hatenablog.com/entry/2023/12/06/234248" target="_blank">📝 Go Conference mini in 鴨川 runn開発者会議</a></div>
</div>

<!--
参考リンクをまとめました。  
ぜひQRコードからプロポーザルページやスライドをご覧ください。  
本日は「推しは推せるときに推せ！」をお聞きいただき、ありがとうございました！
-->
