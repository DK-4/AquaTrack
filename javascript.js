<!-- Bootstrap JS and custom JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        // JavaScript for Add to Cart Modal
        document.getElementById("addToCart").addEventListener("click", function () {
            var myModal = new bootstrap.Modal(document.getElementById('cartModal'), {
                keyboard: false
            });
            myModal.show();
        });
    </script>