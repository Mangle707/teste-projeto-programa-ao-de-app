import "./CardProd.css"
function CardProd({produto}){

    return(
        <>
        <div class="container">

<div class="card">
  <h3>X-Salada</h3>
  <p>Pão, hambúrguer, queijo, alface, tomate e maionese.</p>
  <div class="price">R$ 18,00</div>
</div>

<div class="card">
  <h3>X-Bacon</h3>
  <p>Hambúrguer, bacon crocante, queijo e molho especial.</p>
  <div class="price">R$ 22,00</div>
</div>

<div class="card">
  <h3>X-Tudo</h3>
  <p>Hambúrguer duplo, bacon, ovo, queijo, presunto e salada.</p>
  <div class="price">R$ 28,00</div>
</div>

<div class="card">
  <h3>Batata Frita</h3>
  <p>Porção de batatas crocantes e salgadas.</p>
  <div class="price">R$ 12,00</div>
</div>

<div class="card">
  <h3>Hot Dog</h3>
  <p>Pão, salsicha, milho, batata palha e molho.</p>
  <div class="price">R$ 10,00</div>
</div>

</div>

        </>
    )
    
}
export default CardProd