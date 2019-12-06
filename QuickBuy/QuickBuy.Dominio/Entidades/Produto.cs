namespace QuickBuy.Dominio.Entidades
{
    public class Produto : Entidade
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public decimal Preco { get; set; }

        public override void Validate()
        {
            LimparMensagensValidacao();

            if (Id == 0)
                MensagemValidacao.Add("Crítica: Não foi informado o referencia do produto.");

            if (string.IsNullOrEmpty(Nome))
                MensagemValidacao.Add("Crítica: Não foi informado o nome do produto.");

            if (string.IsNullOrEmpty(Descricao))
                MensagemValidacao.Add("Crítica: Não foi informado a descrição do produto.");

            if (Preco == 0)
                MensagemValidacao.Add("Crítica: Não foi informado o preço do produto.");
        }
    }
}
