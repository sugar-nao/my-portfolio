<template>
  <div class="about-me">
    <h1 class="title">About Me</h1>
    <div class="wrapper">
      <img alt="profile" src="@/assets/logo.svg" class="image" />
      <div class="content">
        <div class="description">
          こんにちは！satonaoと申します。
          <br />東京でフロントエンドエンジニアとして働いています。<br />
          映画が大好きなので、いつか映画に関係するサービスを作るのが夢です。
        </div>
        <ul class="list">
          <li class="item">趣味：映画鑑賞・旅行・競馬</li>
          <li class="item">好きな食べ物：梅干し</li>
          <li class="item">嫌いな食べ物：なし</li>
          <li class="item">好きなお酒：ビール・日本酒・マッコリ</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/general';

.about-me {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .wrapper {
    align-items: center;
    display: flex;
    margin-top: 2rem;
  }

  > .wrapper > .image {
    width: 15rem;
    height: 15rem;
  }

  > .wrapper > .content {
    margin-left: 2rem;
  }

  > .wrapper > .content > .list {
    list-style-type: none;
    margin-top: 1rem;
  }
}
</style>
