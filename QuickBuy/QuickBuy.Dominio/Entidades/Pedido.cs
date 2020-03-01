using System;
using System.Collections.Generic;
using System.Linq;
using QuickBuy.Dominio.ObjetoDeValor;

namespace QuickBuy.Dominio.Entidades
{
    public class Pedido : Entidade
    {
        public int Id { get; set; }
        public DateTime DataPedido { get; set; }
        public int UsuarioId { get; set; }
        public virtual Usuario Usuario { get; set; }
        public DateTime DataPrevisaoEntrega { get; set; }
        public string CEP { get; set; }
        public string Estado { get; set; }
        public string Cidade { get; set; }
        public string EnderecoCompleto { get; set; }
        public int NumeroEndereco { get; set; }
        public int FormaPagamentoId { get; set; }
        public virtual FormaPagamento FormaPagamento { get; set; }
        /// <summary>
        /// Pedido deve ter pelo menos um item
        /// </summary>
        public virtual ICollection<ItemPedido> ItensPedidos { get; set; }
        public override void Validate()
        {
            LimparMensagensValidacao();

            if (!ItensPedidos.Any())
                mensagemValidacao.Add("Crítica: Pedido não pode ficar sem itens.");

            if (string.IsNullOrEmpty(CEP))
                mensagemValidacao.Add("Crítica: Infome o CEP.");

            if (FormaPagamentoId == 0)
                mensagemValidacao.Add("Crítica: Não foi informada a forma de pagamento.");
        }
    }
}
