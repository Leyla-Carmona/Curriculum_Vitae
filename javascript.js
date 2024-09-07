function navigateToPage() {
    var select = document.getElementById("languages");
    var url = select.value;
    if (url) { // Si se ha seleccionado una opción
      window.location.href = url; // Redirige a la URL seleccionada
    }
  }