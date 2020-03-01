namespace QuickBuy.Dominio.Entidades
{
    public class Produto : Entidade
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public decimal Preco { get; set; }
        public string NomeArquivo { get; set; }

        public override void Validate()
        {
            LimparMensagensValidacao();

            if (string.IsNullOrEmpty(Nome))
                mensagemValidacao.Add("Nome do produto não foi informado");

            if (string.IsNullOrEmpty(Descricao))
                mensagemValidacao.Add("Descrição do produto não foi informada");

            if (Preco == 0)
                mensagemValidacao.Add("Preço do produto não foi informado");
        }
    }
}
