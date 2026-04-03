programa
{
	inclua biblioteca Texto --> tx // 1. Incluir a biblioteca Texto
	
	funcao inicio()
	{
		cadeia prompt
    real total_caracteres
    inteiro tokens

    escreva("Digite seu promp:")
      leia(prompt)

    total_caracteres = tx.numero_caracteres(prompt)

    tokens = total_caracteres * 5 + 5


    escreva("Sua mensagem vai custar: " + tokens + " tokens!")




	}
}
