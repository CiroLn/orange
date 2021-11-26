<template>
  <input type="file" multiple id="fileInput" />
</template>

<script >
export default {
  mounted() {
    const fileInput = document.getElementById('fileInput');
    fileInput.addEventListener('change', function (event) {
      // files is a FileList object (simliar to NodeList)
      const files = event.target.files;
      console.log('files: ', files);
      for (let i = 0; i < files.length; i++) {
        const date = new Date(files[i].lastModified);
        alert(files[i].name + ' has a last modified date of ' + date);
      }
    });
  }
}
</script>