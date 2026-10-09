# Adicionar somente animações ao Spazio Vitta Bella

## Preservação integral
- Não alterar textos, cores, fontes, imagens, tamanhos, layout, espaçamentos, ordem das seções ou links. Não remover conteúdo.
- Preservar menu, rodapé, WhatsApp, card Dermaplaning, bloco da Tatiana e acompanhamento de visitas.
- Não alterar SEO nem publicar automaticamente.

## Animações solicitadas
1. **Entrada das seis seções:** O Espaço, Tratamentos, Pilates, Experiência, Depoimentos e Visite terão fade suave com deslocamento inicial de 24px para baixo, chegando à posição atual em 0,8s, com easing suave. Cada entrada acontecerá somente uma vez.
2. **Cards em sequência:** aplicar o mesmo efeito aos 3 pilares, 10 tratamentos, 4 benefícios do Pilates, 4 etapas da Experiência e 3 depoimentos, com intervalo de 0,1s entre os itens. Em telas pequenas, iniciar a sequência dos itens que entrarem na tela, evitando que cards fora da tela concluam a animação antes de serem vistos.
3. **Contagem dos números:** animar de 0 até +8 e +460 quando os respectivos números aparecerem, uma única vez. Preservar o sinal “+”, a tipografia e o espaço ocupado pelos valores finais, sem deslocar elementos durante a contagem.
4. **Experiência, etapas 1 → 4:** revelar progressivamente a sequência já existente dos círculos 01 a 04 conforme a rolagem avança. Usar a sequência, sem acrescentar uma linha ou outros elementos que mudariam o visual aprovado.
5. **Parallax leve:** aplicar à imagem inicial, às três fotos do Pilates, à lótus e à foto da área final Visite. Limitar o deslocamento absoluto a 40px, movendo mais devagar que a rolagem. Manter dimensões, enquadramento e molduras; não ampliar nem recortar as imagens para compensar o movimento. Reduzir o deslocamento quando necessário para evitar bordas vazias.
6. **Menu:** adicionar rolagem suave aos destinos atuais, sem modificar nenhum link. Manter o fechamento do menu no celular e garantir que os títulos não fiquem encobertos pelo cabeçalho fixo.

## Segurança e acessibilidade
- Todo o conteúdo começa visível, com os números finais presentes no HTML; nenhum conteúdo depende do JavaScript para aparecer.
- Ativar os efeitos somente após a inicialização bem-sucedida. Usar animações que retornem naturalmente ao estado visível, com restauração em caso de erro, sem classes que possam manter conteúdo oculto indefinidamente.
- Respeitar a preferência por movimento reduzido: mostrar tudo no estado final e desativar parallax, contagem e rolagem animada.

## Detalhes técnicos
- Usar IntersectionObserver e animações nativas do navegador, sem instalar framer-motion.
- Isolar a lógica de animações em um hook, adicionando apenas identificadores de animação aos elementos existentes e regras específicas de movimento ao CSS.
- Usar requestAnimationFrame e eventos de rolagem passivos para contagem, sequência e parallax; remover observadores e eventos ao sair da página.
- Aplicar as entradas ao conteúdo interno das seções para manter os fundos e a geometria da página estáveis.

## Conferência antes de concluir
- Conferir no navegador entradas únicas, sequência dos cards, contagens finais +8 e +460, progressão das etapas, limite do parallax e todos os destinos do menu.
- Comparar a página antes e depois, no celular e no computador, com as animações concluídas: conteúdo, dimensões, links e imagens devem permanecer iguais.
- Testar com JavaScript desativado e movimento reduzido, garantindo conteúdo visível e navegação funcional.
- Adicionar e executar testes pequenos para os valores solicitados: 24px, 0,8s, 0,1s, +8, +460, limite de 40px e execução única.