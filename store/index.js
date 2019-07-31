import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
              {
                id: '1',
                title: 'First post',
                previewText: 'This is our first post',
                thumbnail:
                  'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg',
                text: 'just some text'
              },
              {
                id: '2',
                title: 'Second post',
                previewText: 'This is our second post',
                thumbnail:
                  'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg',
                text: 'just some text'
              },
              {
                id: '3',
                title: 'Third post',
                previewText: 'This is our third post',
                thumbnail:
                  'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg',
                text: 'just some text'
              }
            ]);
            resolve();
          }, 1000);
        });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
