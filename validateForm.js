function validateForm() {
    var productName = document.getElementById('productName').value;
    var productPrice = document.getElementById('productPrice').value;
    var productDescription = document.getElementById('productDescription').value;

    // Validación básica
    if (productName === '' || productPrice === '' || productDescription === '') {
        alert('Todos los campos son obligatorios');
        return false;
    }

    // Validación de precio (por ejemplo, asegurarse de que sea un número positivo)
    if (isNaN(productPrice) || productPrice <= 0) {
        alert('Por favor, ingrese un precio válido');
        return false;
    }
    // Puedes agregar más validaciones según tus necesidades

    // Si todas las validaciones pasan, puedes enviar el formulario
    // Aquí puedes agregar lógica adicional, como enviar los datos mediante AJAX o simplemente dejar que el formulario se envíe normalmente.
    return true;
}