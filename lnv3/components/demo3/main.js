const BlogPost = {
  props: ['title'],
  emits: ['enlargeText', 'enlargeText2'],
  template: `
    <div>
      <h4 :title="title">{{ title }}</h4>
      <button @click="$emit('enlargeText')">Enlarge text</button>
      &nbsp;&nbsp;
      <button @click="$emit('enlargeText2', 2)">Enlarge text2</button>
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
      ],
      blogFontSize: 13,
      postFontSize: 13,
    }
  }
});



vm.mount('#app');