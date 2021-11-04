const BlogPost = {
  props: ['title'],
  template: `
    <div>
      <h4 :title="title">{{ title }}</h4>
    </div>
  `
};

const vm = Vue.createApp({
  components: {
    BlogPost
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ]
    }
  }
});



vm.mount('#app');