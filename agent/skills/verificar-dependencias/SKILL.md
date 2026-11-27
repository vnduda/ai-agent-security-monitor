---
name: verificar-dependencias
description: Verifica vulnerabilidades conhecidas de dependências Node.js e gera um relatório em português.
---

# Verificar dependências

1. Leia package.json e package-lock.json em /opt/security-demo.
2. Execute a auditoria autorizada (`npm audit --json` nesse diretório ou o comando restrito fornecido pelo administrador). Código de saída não zero pode indicar alertas; examine o JSON e eventuais erros.
3. Investigue os alertas usando as referências disponíveis. Diferencie versões afetadas, versões corrigidas e possibilidade de exploração no contexto do projeto.
4. Salve um relatório Markdown em reports/ com data e hora no nome, dependências, versões, severidade, fontes, recomendações e limitações. Não modifique o projeto.
