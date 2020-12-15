import React, { Component } from 'react';

class Inicio extends React.Component {
    render() {
      return (
        <div class="container">
            <h1 class="text-center">Pago con Visa</h1>
            
            <h3>Información del pago</h3>
            <b>Importe a pagar: </b> $ 1 <br />
            <b>Número de pedido: </b>  <br />
            <b>Concepto: </b> Detalle de pago <br />
            <b>Fecha: </b> 12/12/2020 <br />
            
            
            <input type="checkbox" name="ckbTerms" id="ckbTerms" onclick="visaNetEc3()" /> <label for="ckbTerms">Acepto los <a href="#" target="_blank">Términos y condiciones</a></label>
            <form id="frmVisaNet" action="http://localhost:8082/PagoWebPhp/finalizar.php?amount=1&purchaseNumber=1">
                <script src="https://static-content-qas.vnforapps.com/v2/js/checkout.js?qa=true" 
                    data-sessiontoken="84182eb6d9a65acbdbccd26913462a054a8c4ee084a6ae3feb39d589cf016892"
                    data-channel="web"
                    data-merchantid="750000004"
                    data-merchantlogo="http://localhost:8082/PagoWebPhp/assets/img/logo.png"
                    data-purchasenumber="3412312300"
                    data-amount="1"
                    data-expirationminutes="5"
                    data-timeouturl="http://localhost:8082/PagoWebPhp/"
                ></script>
            </form>
        </div>
      );
    }
}

export default Inicio;
