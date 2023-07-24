<template>
  <div class="home-blog">
    <div class="hero" :style="{ ...bgImageStyle }">
      <div>
        <ModuleTransition>
          <img class="hero-img" v-if="recoShowModule && $frontmatter.heroImage" :style="heroImageStyle || {}" :src="$withBase($frontmatter.heroImage)"
            alt="hero" />
        </ModuleTransition>
        <ModuleTransition delay="0.04">
          <span id="description"></span>
        </ModuleTransition>

        <!-- <ModuleTransition delay="0.08">
          <p v-if="recoShowModule && $frontmatter.tagline !== null" class="description">
            {{ $frontmatter.tagline || $description || 'Welcome to your vuePress-theme-reco site' }}
          </p>
        </ModuleTransition> -->
      </div>
      <component v-if="bubbles" :is="bubbles"></component>
    </div>

    <ModuleTransition delay="0.16">
      <div v-show="recoShowModule" class="home-blog-wrapper">
        <div class="blog-list">
          <!-- 博客列表 -->
          <note-abstract :data="$recoPosts" @paginationChange="paginationChange" />
        </div>
        <div class="info-wrapper">
          <PersonalInfo />
          <h4>
            <reco-icon icon="reco-category" /> {{$recoLocales.category}}
          </h4>
          <ul class="category-wrapper">
            <li class="category-item" v-for="(item, index) in this.$categories.list" :key="index">
              <router-link :to="item.path">
                <span class="category-name">{{ item.name }}</span>
                <span class="post-num" :style="{ 'backgroundColor': getOneColor() }">{{ item.pages.length }}</span>
              </router-link>
            </li>
          </ul>
          <hr>
          <h4 v-if="$tags.list.length !== 0">
            <reco-icon icon="reco-tag" /> {{$recoLocales.tag}}
          </h4>
          <TagList @getCurrentTag="getPagesByTags" />
          <h4 v-if="$themeConfig.friendLink && $themeConfig.friendLink.length !== 0">
            <reco-icon icon="reco-friend" /> {{$recoLocales.friendLink}}
          </h4>
          <FriendLink />
        </div>
      </div>
    </ModuleTransition>

    <ModuleTransition delay="0.24">
      <Content v-show="recoShowModule" class="home-center" custom />
    </ModuleTransition>
  </div>
</template>

<script>
  import Typed from 'typed.js'
  import { defineComponent, toRefs, reactive, computed, onMounted } from 'vue-demi'
  import TagList from '@theme/components/TagList'
  import FriendLink from '@theme/components/FriendLink'
  import NoteAbstract from '@theme/components/NoteAbstract'
  import { ModuleTransition, RecoIcon } from '@vuepress-reco/core/lib/components'
  import PersonalInfo from '@theme/components/PersonalInfo'
  import { getOneColor } from '@theme/helpers/other'
  import { useInstance } from '@theme/helpers/composable'

  export default defineComponent({
    components: { NoteAbstract, TagList, FriendLink, ModuleTransition, PersonalInfo, RecoIcon },
    data() {
      return {
        recoShow: false,
        currentPage: 1,
        tags: [],
        bubbles: null,
        typedObj: null,
        options: {
          strings: [
            '那些杀不死你的，终将使你变得更强大',
            "小时候是词不达意，长大后是言不由衷。",
            "我想把天空大海给你，把大江大河给你，没办法，好的东西就是想慷慨地给你。",
            '不积硅步，无以至千里',
            '悲观是远见，客观是智慧',
            '人生会难一阵子，人生不会难一辈子',
            '君子和而不同，小人同而不和',
            '不要去羡慕别人的生活，你只是失去了感知美好的能力',
            "未经他人苦，莫劝他人善",
            "隔却山海，且寄南山",
            "己所不欲勿施于人"
          ],
          startDelay: 200,
          backDelay: 2000,
          typeSpeed: 100,
          loop: true,
          backSpeed: 100
        }
      }
    },
    setup(props, ctx) {
      const instance = useInstance()

      const state = reactive({
        recoShow: false,
        heroHeight: 0
      })

      const recoShowModule = computed(() => instance && instance.$parent.recoShowModule)

      const heroImageStyle = computed(() => instance.$frontmatter.heroImageStyle || {})
      let num = Math.floor(Math.random() * (21 - 1 + 1)) + 1;
      const bgImageStyle = computed(() => {
        const url = `https://www.niceleo.cn/blogsImg/${num}.jpg`
        const initBgImageStyle = {
          textAlign: 'center',
          overflow: 'hidden',
          background: `url(${url}) center/cover no-repeat`
        }

        const { bgImageStyle } = instance.$frontmatter

        return bgImageStyle ? { ...initBgImageStyle, ...bgImageStyle } : initBgImageStyle
      })

      onMounted(() => {
        state.heroHeight = document.querySelector('.hero').clientHeight
        state.recoShow = true

      })

      return { recoShowModule, heroImageStyle, bgImageStyle, ...toRefs(state), getOneColor }

    },
    mounted() {
      import('vue-canvas-effect/src/components/bubbles').then(module => {
        this.bubbles = module.default
      })
      this.recoShow = true
      //   this._setPage(this._getStoragePage())
      this.typedObj = new Typed('#description', this.options)
    },
    methods: {
      paginationChange(page) {
        setTimeout(() => {
          window.scrollTo(0, this.heroHeight)
        }, 100)
      },
      getPagesByTags(tagInfo) {
        this.$router.push({ path: tagInfo.path })
      }

    },
    destroyed() {
      this.typedObj.destroy()
    },
  })
</script>

<style lang="stylus">
  .home-blog {
    padding: 0;
    margin: 0px auto;

    .hero {
      margin: $navbarHeight auto 0;
      position: relative;
      box-sizing: border-box;
      padding: 0 20px;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;

      .hero-img {
        max-width: 300px;
        margin: 0 auto 1.5rem;
      }

      h1 {
        display: block;
        margin: 0 auto 1.8rem;
        font-size: 2.5rem;
      }

      .description {
        margin: 1.8rem auto;
        font-size: 1.6rem;
        line-height: 1.3;
      }

      #description {
        font-size: 1.6rem;
        font-family: Long Cang, cursive;
      }

      .typed-cursor {
        font-size: 1.6rem;
        color: #000;
        opacity: 1;
      }
    }

    .home-blog-wrapper {
      display: flex;
      align-items: flex-start;
      margin: 20px auto 0;
      padding: 0 20px;
      max-width: $homePageWidth;

      .blog-list {
        flex: auto;
        width: 0;

        .abstract-wrapper {
          .abstract-item:last-child {
            margin-bottom: 0px;
          }
        }
      }

      .info-wrapper {
        position: -webkit-sticky;
        position: sticky;
        top: 70px;
        overflow: hidden;
        transition: all 0.3s;
        margin-left: 15px;
        flex: 0 0 300px;
        height: auto;
        box-shadow: var(--box-shadow);
        border-radius: $borderRadius;
        box-sizing: border-box;
        padding: 0 15px;
        background: var(--background-color);

        &:hover {
          box-shadow: var(--box-shadow-hover);
        }

        h4 {
          color: var(--text-color);
        }

        .category-wrapper {
          list-style: none;
          padding-left: 0;

          .category-item {
            margin-bottom: 0.4rem;
            padding: 0.4rem 0.8rem;
            transition: all 0.5s;
            border-radius: $borderRadius;
            box-shadow: var(--box-shadow);
            background-color: var(--background-color);

            &:hover {
              transform: scale(1.04);

              a {
                color: $accentColor;
              }
            }

            a {
              display: flex;
              justify-content: space-between;
              align-items: center;
              color: var(--text-color);

              .post-num {
                width: 1.6rem;
                height: 1.6rem;
                text-align: center;
                line-height: 1.6rem;
                border-radius: $borderRadius;
                background: #eee;
                font-size: 13px;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: $MQMobile) {
    .home-blog {
      .hero {
        height: 450px;

        img {
          max-height: 210px;
          margin: 2rem auto 1.2rem;
        }

        h1 {
          margin: 0 auto 1.8rem;
          font-size: 2rem;
        }

        .description {
          font-size: 1.2rem;
        }

        .action-button {
          font-size: 1rem;
          padding: 0.6rem 1.2rem;
        }
      }

      .home-blog-wrapper {
        display: block !important;

        .blog-list {
          width: auto;
        }

        .info-wrapper {
          // display none!important
          margin-left: 0;

          .personal-info-wrapper {
            display: none;
          }
        }
      }
    }
  }

  @media (max-width: $MQMobileNarrow) {
    .home-blog {
      .hero {
        height: 450px;

        img {
          max-height: 210px;
          margin: 2rem auto 1.2rem;
        }

        h1 {
          margin: 0 auto 1.8rem;
          font-size: 2rem;
        }

        h1, .description, .action {
          // margin: 1.2rem auto;
        }

        .description {
          font-size: 1.2rem;
        }

        .action-button {
          font-size: 1rem;
          padding: 0.6rem 1.2rem;
        }
      }

      .home-blog-wrapper {
        display: block !important;

        .blog-list {
          width: auto;
        }

        .info-wrapper {
          // display none!important
          margin-left: 0;

          .personal-info-wrapper {
            display: none;
          }
        }
      }
    }
  }
</style>
