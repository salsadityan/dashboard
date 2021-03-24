 <script>
  // Prevent forms from submitting.
  const btnKirim = document.querySelector('.btn-kirim');
  const btnLoading = document.querySelector('.-btn-loading');
  const myAlert = document.querySelector('.-my-alert');
  
  function preventFormSubmit() {
    var forms = document.querySelectorAll('form');
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener('submit', function(event) {
      event.preventDefault();
      //ketika tombol submit di klik
      //tampilkan tombol loading.hilangkan tombol kirim
      
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      //tampilkan tombol kirim, hilangkan tombol loading
      fetch(scriptURL,{ method: 'POST', body:new FormData(form)})
      .then((response) => {
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      //tampilkan alert
      myAlert.classList.toggle('d-none');
      console.log('Success!', response)
      })
      .catch((error) => console.error('Error!',error.message))
      });
    }
  }
  window.addEventListener('load', preventFormSubmit);    
      
      
  function handleFormSubmit(formObject) {
    google.script.run.processForm(formObject);
    document.getElementById("myForm").reset();
  }
</script>