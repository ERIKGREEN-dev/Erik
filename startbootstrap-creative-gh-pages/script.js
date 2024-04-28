<script>
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        // Evita que el formulario se envíe automáticamente
        event.preventDefault();
        
        // Obtén el formulario
        var form = document.getElementById("contactForm");
        
        // Abre la página en una nueva ventana
        window.open(form.action, "_blank");
    });
</script>
