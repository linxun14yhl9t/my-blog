<template>
  <div class="abstract-item" @click="$router.push(item.path)">
    <!-- {{item.excerpt.replace('<p>','')}} -->
    <!-- <div class="abstract" v-html="item.excerpt" v-show="item.excerpt"></div> -->
    <div class="cover-wrap" v-show="item.excerpt">

      <div class="cover" v-html="item.excerpt">
      </div>
    </div>
    <reco-icon v-if="item.frontmatter.sticky" icon="reco-sticky" />
    <div class="title">
      <reco-icon v-if="item.frontmatter.keys" icon="reco-lock" />
      <router-link :to="item.path">{{item.title}}</router-link>
      <PageInfo :pageInfo="item" :currentTag="currentTag">
      </PageInfo>
    </div>

  </div>
</template>

<script>
  import { defineComponent } from 'vue-demi'
  import { RecoIcon } from '@vuepress-reco/core/lib/components'
  import PageInfo from './PageInfo'
  export default defineComponent({
    components: { PageInfo, RecoIcon },
    props: ['item', 'currentPage', 'currentTag']

  })
</script>

<style lang="stylus" scoped>
  .abstract-item {
    position: relative;
    margin: 0 auto 20px;
    padding: 16px 20px;
    width: 100%;
    overflow: hidden;
    border-radius: 0.25rem;
    box-shadow: var(--box-shadow);
    box-sizing: border-box;
    transition: all 0.3s;
    background-color: var(--background-color);
    cursor: pointer;
    display: flex;

    // border: 1px solid #03A9F3;
    &::before, &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border: 2px solid transparent;
    }

    &::before {
      top: 0px;
      left: 0px;
    }

    &::after {
      right: 0px;
      bottom: 0px;
    }

    &:hover::before {
      width: 100%;
      height: 100%;
      border-top-color: #03A9F3;
      border-left-color: #03A9F3;
      transition: width 0.2s ease-out, height 0.2s ease-out 0.25s;
    }

    &:hover::after {
      width: 100%;
      height: 100%;
      border-bottom-color: #03A9F3;
      border-right-color: #03A9F3;
      transition: width 0.2s ease-out, height 0.2s ease-out 0.25s;
    }

    > * {
      pointer-events: auto;
    }

    .cover-wrap {
      width: 100%;
      flex: 1;
      transition: 1s ease-out;
      border-radius: 0.5rem;
      overflow: hidden;
      height: 200px;
      position: relative;

      .cover {
        width: 100%;
        height: 100%;
        transition: transform 0.5s;
        transform: scale(1.1);

        /deep/p {
          width: 100%;
          height: 100%;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .abstract {
      flex: 1;
      display: flex;
      max-height: 150px;
      align-items: center;

      /deep/p {
        width: 100%;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .reco-sticky {
      position: absolute;
      top: 0;
      left: 0;
      display: inline-block;
      color: $accentColor;
      font-size: 2.4rem;
    }

    &:hover {
      box-shadow: var(--box-shadow-hover);
      color: $accentColor;

      & .title {
        & a {
          color: $accentColor;
        }
      }
    }

    .title {
      margin: 0 1rem;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      display: flex;
      transition: all 0.3s;

      a {
        color: var(--text-color);
      }

      .reco-lock {
        font-size: 1.28rem;
        color: $accentColor;
      }

      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: $accentColor;
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        transition: 0.3s ease-in-out;
      }
    }

    .tags {
      .tag-item {
        &.active {
          color: $accentColor;
        }

        &:hover {
          color: $accentColor;
        }
      }
    }
  }

  @media (max-width: $MQMobile) {
    .tags {
      display: block;
      margin-top: 1rem;
      margin-left: 0 !important;
    }

    .abstract-item {
      display: block;

      .cover-wrap {
        width: 100%;
        display: block;
        height: 180px;
      }
    }
  }
</style>
