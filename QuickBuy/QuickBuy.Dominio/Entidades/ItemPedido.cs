using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Dominio.Entidades
{
    public class ItemPedido : Entidade
    {
        public int Id { get; set; }
        public int ProdutoId { get; set; }
        public int Quantidade { get; set; }

        public override void Validate()
        {
            LimparMensagensValidacao();

            if (ProdutoId == 0)
                MensagemValidacao.Add("Crítica: Não foi identificado qual a referencia do produto.");
            
            if (Quantidade == 0)
                MensagemValidacao.Add("Crítica: Não foi informada a quantidade do produto.");
        }
    }
}
