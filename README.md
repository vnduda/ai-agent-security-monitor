# AI Agent Security Monitor

Projeto educacional do CodebyDuda: um agente OpenClaw que analisa dependências Node.js, registra resultados e compara verificações.

> Atenção: as versões antigas são intencionais. Não use em produção, não execute a aplicação e não exponha serviços vulneráveis. A demonstração precisa apenas dos manifests e da auditoria.

## 1. Primeiro cenário

Com Node.js e npm disponíveis:

```bash
cd demo-project
npm install --package-lock-only --ignore-scripts --no-audit --no-fund
npm audit --json
```

O lockfile inicial foi montado a partir das versões exatas (ambas as bibliotecas não possuem dependências de runtime). O comando acima permite ao npm confirmar/completar os metadados do registro. Não foi possível validar o registro npm durante a preparação deste ZIP. Confirme o resultado real antes de gravar. A auditoria pode retornar código 1 quando encontra vulnerabilidades; confira também erros de rede e o JSON retornado.

## 2. OpenClaw no Easypanel

Configure o modelo e a autenticação pela interface do seu ambiente. Não publique chaves ou tokens. Disponibilize uma cópia de demo-project dentro do container do OpenClaw, por exemplo em /opt/security-demo, com montagem somente leitura. Confirme o caminho, a disponibilidade de npm e o acesso do usuário do agente. Não exponha o socket Docker nem conceda acesso privilegiado ao agente.

Copie o conteúdo de agent/ para o workspace configurado do agente (preserve instruções existentes importantes). A pasta reports/ deve ser gravável e persistente. Garanta que os volumes do OpenClaw persistam após redeploy. Restrinja a execução a uma ferramenta ou comando de auditoria autorizado; não libere npm genericamente. As instruções Markdown não são uma barreira de segurança. Teste que a escrita no projeto realmente falha no contexto de execução do agente.

## 3. Segundo cenário

Em uma cópia de preparação, substitua package.json e package-lock.json pelos arquivos de scenarios/second-scan e repita a geração do lockfile e a auditoria. Depois disponibilize a nova versão ao agente pelo mesmo caminho, mantendo acesso somente leitura. Não peça ao agente para alterar o projeto. Guarde os dois relatórios em reports/ e compare em uma nova sessão.

## 4. Agendamento

No OpenClaw, configure uma tarefa isolada para executar a skill verificar-dependencias e salvar um novo relatório. Expressão cron: `0 9 * * 1-5`, fuso `America/Sao_Paulo`. Use os controles de execução da sua versão e valide uma execução realmente automática antes da gravação. Consulte os logs. A API do modelo pode gerar custos.

