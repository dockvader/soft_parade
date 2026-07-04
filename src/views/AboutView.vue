<script setup>
import { site } from '../data/site'
</script>

<template>
  <div class="min-h-screen pt-32 md:pt-40 pb-24">
    <div class="max-w-3xl mx-auto px-5 md:px-8">
      <header class="mb-14">
        <p class="text-xs uppercase tracking-[0.38em] text-[var(--color-gold)] mb-4">About</p>
        <h1 class="font-heading text-4xl md:text-7xl leading-[1.05]">{{ site.aboutTitle || '關於本站' }}</h1>
      </header>

      <p class="text-white/72 leading-9 text-lg">
        {{ site.aboutBody }}
      </p>

      <div class="editorial-card rounded-[28px] p-6 md:p-8 mt-10">
        <p class="text-xs uppercase tracking-[0.35em] text-white/45 mb-4">Contact</p>
        <p class="text-white/65 leading-8">
          留言、勘誤或合作，寫信到
          <a :href="`mailto:${site.contactEmail}`" class="text-[var(--color-gold)] border-b border-[rgba(201,169,107,0.4)] hover:text-white hover:border-white transition-colors">{{ site.contactEmail }}</a>
          都收得到。
        </p>
      </div>

      <section id="privacy" class="mt-20">
        <p class="text-xs uppercase tracking-[0.38em] text-[var(--color-gold)] mb-4">Privacy Policy</p>
        <h2 class="font-heading text-3xl md:text-5xl leading-tight">隱私權政策</h2>

        <div class="space-y-8 mt-10 text-white/68 leading-8">
          <div>
            <h3 class="text-white/90 text-lg mb-3">我們收集什麼</h3>
            <p>
              本站是靜態網站，本身不設會員系統、不主動收集你的個人資料。你透過聯絡表單寄信時，郵件內容會直接送到站長信箱，僅用於回覆你的來信。
            </p>
          </div>

          <div>
            <h3 class="text-white/90 text-lg mb-3">Cookie 與第三方服務</h3>
            <p>
              本站託管於 Cloudflare Pages，Cloudflare 可能基於安全與效能目的記錄匿名化的技術性資訊（如 IP、瀏覽器類型）。
              日後本站若刊登 Google AdSense 廣告，Google 及其合作夥伴會使用 Cookie 依據你造訪本站與其他網站的紀錄提供個人化廣告；你可以到
              <a href="https://adssettings.google.com" target="_blank" rel="noopener" class="text-[var(--color-gold)] border-b border-[rgba(201,169,107,0.4)] hover:text-white hover:border-white transition-colors">Google 廣告設定</a>
              停用個人化廣告，或參閱
              <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener" class="text-[var(--color-gold)] border-b border-[rgba(201,169,107,0.4)] hover:text-white hover:border-white transition-colors">Google 廣告技術說明</a>。
            </p>
          </div>

          <div>
            <h3 class="text-white/90 text-lg mb-3">資料的使用與分享</h3>
            <p>
              除上述第三方服務的必要運作外，本站不會出售、交換或以任何形式向第三方提供你的個人資料。
            </p>
          </div>

          <div>
            <h3 class="text-white/90 text-lg mb-3">政策更新</h3>
            <p>
              本政策若有變更會直接更新於本頁。對本政策有任何疑問，歡迎來信
              <a :href="`mailto:${site.contactEmail}`" class="text-[var(--color-gold)] border-b border-[rgba(201,169,107,0.4)] hover:text-white hover:border-white transition-colors">{{ site.contactEmail }}</a>。
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
