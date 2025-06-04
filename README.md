# Planejamento do Site de Gerenciamento de Estudos para Concurso ALEGO

## Visão Geral

O site será uma plataforma completa para gerenciamento de estudos, focada nas metodologias ativas definidas no plano de estudos. A arquitetura será baseada em uma aplicação web responsiva, permitindo acesso em diferentes dispositivos e facilitando o estudo em qualquer lugar.

## Requisitos Funcionais

### 1. Gerenciamento de Materiais
- Upload e organização de PDFs por categoria/disciplina
- Visualização integrada de documentos
- Sistema de tags e busca para localização rápida de conteúdos
- Controle de versões para atualizações de materiais

### 2. Resumos em Markdown
- Editor de Markdown com preview em tempo real
- Organização hierárquica de resumos (por disciplina, capítulo, tópico)
- Exportação para PDF
- Sistema de links internos entre resumos relacionados
- Histórico de revisões

### 3. Sistema de Flashcards
- Criação de flashcards com frente (pergunta) e verso (resposta)
- Organização por coleções temáticas
- Sistema de repetição espaçada (SRS) baseado no algoritmo SM-2
- Estatísticas de desempenho e progresso
- Modo de estudo com diferentes opções (revisão, teste, aleatório)

### 4. Simulados e Questões
- Banco de questões categorizadas por tema e dificuldade
- Criação de simulados personalizados
- Simulados cronometrados com condições similares à prova
- Análise detalhada de desempenho
- Histórico de simulados realizados

### 5. Espaço Feynman
- Área para gravação/escrita de explicações no estilo Feynman
- Templates guiados para estruturar explicações
- Sistema de avaliação da clareza e completude das explicações
- Histórico de explicações por tema

### 6. Planejamento e Progresso
- Calendário de estudos integrado
- Sistema de metas diárias, semanais e mensais
- Visualização de progresso por disciplina
- Alertas para revisões programadas
- Dashboard com métricas de desempenho

### 7. Integração de Novas Matérias
- Interface para adição de novas disciplinas
- Assistente de estruturação de conteúdo
- Importação de materiais externos
- Integração automática ao sistema de revisão espaçada

## Arquitetura Técnica

### Frontend
- **Framework**: React.js com TypeScript
- **Bibliotecas UI**: Tailwind CSS, shadcn/ui para componentes
- **Gerenciamento de Estado**: React Context API ou Redux
- **Roteamento**: React Router
- **Editores**: React Markdown para resumos, editor personalizado para flashcards

### Backend (API)
- **Framework**: Flask (Python)
- **Banco de Dados**: SQLite para desenvolvimento, MySQL para produção
- **Autenticação**: Sistema simples de login/senha
- **Armazenamento de Arquivos**: Sistema de arquivos local

### Persistência de Dados
- **Estrutura de Banco de Dados**:
  - Tabelas para usuários, materiais, resumos, flashcards, questões, simulados, explicações Feynman
  - Relacionamentos para organização hierárquica e categorização
  - Metadados para tracking de progresso e estatísticas

## Design de Interface

### Princípios de Design
- Interface limpa e focada no conteúdo
- Navegação intuitiva e consistente
- Design responsivo para todos os dispositivos
- Modo escuro/claro para conforto visual
- Feedback visual claro para ações do usuário

### Estrutura de Navegação
- **Barra Lateral**: Acesso rápido às principais seções
- **Cabeçalho**: Busca global, notificações, perfil
- **Área Principal**: Conteúdo contextual da seção atual
- **Rodapé**: Links úteis, informações de versão

### Páginas Principais
1. **Dashboard**: Visão geral do progresso, próximas revisões, atividades recentes
2. **Biblioteca**: Organização de todos os materiais de estudo
3. **Resumos**: Sistema de criação e visualização de resumos
4. **Flashcards**: Interface para estudo com flashcards
5. **Simulados**: Criação e realização de simulados
6. **Espaço Feynman**: Área para praticar explicações
7. **Planejamento**: Calendário e sistema de metas
8. **Configurações**: Personalização da plataforma

## Fluxos de Usuário

### Fluxo de Estudo Diário
1. Usuário acessa o dashboard
2. Visualiza as atividades programadas para o dia
3. Acessa o material de estudo recomendado
4. Cria resumos e flashcards durante o estudo
5. Pratica com flashcards programados para revisão
6. Registra explicações Feynman sobre o conteúdo estudado
7. Realiza questões de fixação
8. Marca atividades como concluídas

### Fluxo de Revisão Espaçada
1. Sistema notifica sobre revisões programadas
2. Usuário acessa conjunto de flashcards para revisão
3. Realiza a revisão, classificando seu desempenho
4. Sistema recalcula próximas datas de revisão
5. Usuário visualiza estatísticas de retenção

### Fluxo de Simulado
1. Usuário seleciona criar novo simulado
2. Configura parâmetros (tempo, número de questões, temas)
3. Inicia simulado cronometrado
4. Responde às questões dentro do tempo limite
5. Finaliza e visualiza resultados detalhados
6. Revisa questões incorretas
7. Sistema registra desempenho para análise de progresso

## Implementação Incremental

### Fase 1: MVP (Minimum Viable Product)
- Estrutura básica do site
- Upload e visualização de PDFs
- Editor de resumos em Markdown
- Sistema simples de flashcards
- Dashboard básico

### Fase 2: Recursos Avançados
- Sistema completo de repetição espaçada
- Simulados e banco de questões
- Espaço Feynman estruturado
- Estatísticas e análises de desempenho

### Fase 3: Refinamento e Expansão
- Melhorias de UX/UI baseadas em feedback
- Recursos avançados de personalização
- Otimizações de performance
- Expansão para novas funcionalidades

## Considerações Técnicas

### Segurança
- Proteção de dados pessoais
- Backup regular de conteúdos
- Validação de entradas de usuário

### Performance
- Carregamento otimizado de PDFs
- Paginação para grandes conjuntos de dados
- Lazy loading de componentes

### Acessibilidade
- Conformidade com WCAG 2.1
- Suporte a navegação por teclado
- Textos alternativos para imagens

## Conclusão

Este planejamento estabelece as bases para o desenvolvimento de um site completo de gerenciamento de estudos, alinhado com as metodologias ativas definidas no plano pedagógico. A implementação incremental permitirá validar funcionalidades e ajustar o desenvolvimento conforme necessário, garantindo uma plataforma eficaz para o estudo preparatório para o concurso da ALEGO.

# Plano de Estudos para o Concurso da ALEGO

## Introdução

Este plano de estudos foi desenvolvido especificamente para o concurso da Assembleia Legislativa do Estado de Goiás (ALEGO), utilizando metodologias ativas de aprendizagem para maximizar a retenção de conteúdo e otimizar o tempo de estudo. O plano integra diversas técnicas comprovadamente eficazes, como a Técnica Feynman, uso de flashcards, revisões espaçadas, simulados e imersão no conteúdo.

## Metodologias Ativas Incorporadas

### 1. Técnica Feynman
- **Objetivo**: Garantir compreensão profunda dos conceitos através da explicação simplificada
- **Aplicação**: Após estudar cada tópico, explicá-lo em linguagem simples como se estivesse ensinando a outra pessoa
- **Frequência**: Ao final de cada sessão de estudo

### 2. Flashcards
- **Objetivo**: Memorização ativa e recuperação espaçada de informações
- **Aplicação**: Criação de cartões com perguntas e respostas sobre pontos-chave
- **Frequência**: Revisão diária de conjuntos específicos de flashcards

### 3. Revisão Espaçada
- **Objetivo**: Otimizar a retenção de longo prazo através de revisões estrategicamente programadas
- **Aplicação**: Revisitar conteúdos em intervalos crescentes (1 dia, 3 dias, 7 dias, 15 dias, 30 dias)
- **Frequência**: Conforme cronograma de revisões

### 4. Simulados
- **Objetivo**: Familiarização com o formato da prova e autoavaliação
- **Aplicação**: Resolução de questões de concursos anteriores da ALEGO
- **Frequência**: Semanal (simulados temáticos) e mensal (simulados completos)

### 5. PNL (Programação Neurolinguística)
- **Objetivo**: Otimizar o estado mental para aprendizagem
- **Aplicação**: Técnicas de visualização, ancoragem e afirmações positivas
- **Frequência**: Incorporadas às sessões diárias de estudo

### 6. Imersão
- **Objetivo**: Criar familiaridade profunda com o conteúdo
- **Aplicação**: Exposição constante aos termos e conceitos através de áudios, resumos visuais e prática deliberada
- **Frequência**: Contínua, integrada à rotina diária

## Estrutura do Ciclo de Estudos

### Ciclo Diário (2-3 horas)

1. **Aquecimento** (10 minutos)
   - Revisão rápida do conteúdo do dia anterior
   - Técnica PNL de preparação mental

2. **Estudo de Novo Conteúdo** (60-90 minutos)
   - Leitura ativa com anotações
   - Identificação de conceitos-chave
   - Criação de mapas mentais ou esquemas

3. **Aplicação da Técnica Feynman** (15-20 minutos)
   - Explicação do conteúdo estudado em linguagem simples
   - Identificação de lacunas de compreensão
   - Retorno ao material para esclarecer pontos confusos

4. **Criação de Flashcards** (15 minutos)
   - Elaboração de 5-10 flashcards sobre o conteúdo do dia

5. **Prática Ativa** (30 minutos)
   - Resolução de questões relacionadas ao tema estudado
   - Análise dos erros e acertos

6. **Encerramento** (10 minutos)
   - Síntese do aprendizado do dia
   - Planejamento da próxima sessão

### Ciclo Semanal

1. **Segunda a Sexta**: Estudo de novos conteúdos seguindo o ciclo diário
2. **Sábado**: Revisão semanal e simulado temático
3. **Domingo**: Descanso ativo (leitura leve relacionada ou atividades de relaxamento)

### Ciclo Mensal

1. **Semanas 1-3**: Avanço em novos conteúdos
2. **Semana 4**: Revisão geral e simulado completo

## Cronograma de Estudos das Resoluções

### Mês 1: Resolução nº 1.073 (Regulamento Administrativo)

#### Semana 1: Organização Administrativa e Regime Jurídico
- **Dia 1-2**: Título I - Da Organização Administrativa (Disposições Preliminares)
- **Dia 3-5**: Título II - Do Regime Jurídico dos Servidores (Cargos em Comissão e Funções Especiais)
- **Dia 6**: Revisão e simulado temático

#### Semana 2: Concurso, Provimento e Vacância
- **Dia 1-2**: Título III - Capítulo I - Do Concurso
- **Dia 3-5**: Título III - Capítulo II - Do Provimento e Vacância
- **Dia 6**: Revisão e simulado temático

#### Semana 3: Continuação da Resolução nº 1.073
- **Dia 1-5**: Continuação dos capítulos relevantes
- **Dia 6**: Revisão e simulado temático

#### Semana 4: Revisão Geral da Resolução nº 1.073
- **Dia 1-3**: Revisão completa
- **Dia 4-5**: Simulado completo e correção
- **Dia 6**: Análise de desempenho e ajustes no plano

### Mês 2: Resolução nº 1.218 (Regimento Interno)

#### Semana 1: Disposições Preliminares e Estrutura
- **Dia 1-2**: Título I - Disposições Preliminares
- **Dia 3-5**: Estrutura organizacional da ALEGO
- **Dia 6**: Revisão e simulado temático

#### Semana 2-4: Continuação do Regimento Interno
- Seguir a mesma estrutura, dividindo o conteúdo em blocos semanais
- Manter o dia de revisão e simulado ao final de cada semana
- Finalizar com revisão geral e simulado completo

### Mês 3: Resolução nº 1.771 (Secretaria de Polícia Legislativa)

#### Semana 1-2: Organização, Estrutura e Competências
- **Dia 1-5**: Estudo dos capítulos relevantes
- **Dia 6**: Revisão e simulado temático

#### Semana 3-4: Continuação e Revisão Geral
- Finalizar o estudo da resolução
- Realizar revisão integrada com as resoluções anteriores
- Simulado completo abrangendo todo o conteúdo estudado

### Mês 4: Resolução nº 1.007 (Estrutura Administrativa)

#### Semana 1-4: Estudo completo seguindo a mesma estrutura
- Dividir o conteúdo em blocos semanais
- Manter os ciclos de revisão e prática
- Finalizar com revisão integrada de todas as resoluções

## Estratégias de Revisão Espaçada

### Programação de Revisões
- **Revisão 1**: 24 horas após o estudo inicial
- **Revisão 2**: 3 dias após o estudo inicial
- **Revisão 3**: 7 dias após o estudo inicial
- **Revisão 4**: 15 dias após o estudo inicial
- **Revisão 5**: 30 dias após o estudo inicial

### Implementação Prática
- Reservar 30 minutos diários para revisões programadas
- Utilizar os flashcards como ferramenta principal de revisão
- Registrar o desempenho nas revisões para ajustar o plano

## Integração de Novas Matérias

Este plano foi estruturado para permitir a inclusão de novas matérias e disciplinas:

1. **Avaliação do Volume**: Determinar a extensão do novo material
2. **Alocação de Tempo**: Ajustar o cronograma para acomodar o novo conteúdo
3. **Integração ao Ciclo**: Incorporar o material ao sistema de revisão espaçada
4. **Criação de Recursos**: Desenvolver flashcards e resumos para o novo conteúdo
5. **Atualização do Plano**: Revisar e ajustar o plano geral de estudos

## Monitoramento de Progresso

### Indicadores de Desempenho
- Percentual de acertos nos simulados
- Tempo médio por questão
- Taxa de retenção nas revisões espaçadas
- Completude dos resumos e flashcards

### Ajustes do Plano
- Análise semanal de desempenho
- Reforço em áreas com baixo desempenho
- Aceleração em áreas de domínio consolidado

## Conclusão

Este plano de estudos foi desenvolvido para otimizar o aprendizado através de metodologias ativas, garantindo não apenas a memorização, mas a compreensão profunda dos conteúdos necessários para o concurso da ALEGO. A estrutura flexível permite ajustes conforme o progresso individual e a inclusão de novas matérias, mantendo sempre o foco na aprendizagem ativa e na retenção de longo prazo.

# Resumo da Resolução nº 1.007 - Estrutura Administrativa da ALEGO

## Título I - Da Estrutura e Atribuições dos Órgãos

### Capítulo I - Estrutura Administrativa

A Resolução nº 1.007 estabelece a estrutura administrativa da Assembleia Legislativa do Estado de Goiás, organizando os órgãos e unidades que compõem a instituição. A estrutura administrativa da ALEGO é composta por:

1. Órgão Diretivo Colegiado (Mesa Diretora)
2. Órgãos de Assessoramento aos Integrantes da Mesa Diretora
3. Órgãos de Assessoramento à Presidência
4. Órgãos de Apoio Direto à Ação Parlamentar
5. Órgãos de Apoio Indireto à Ação Parlamentar

Cada um desses órgãos possui unidades organizacionais específicas, com competências e atribuições definidas nesta Resolução.

### Capítulo II - Atribuições dos Órgãos e de suas Unidades Organizacionais

#### Seção I - Órgão Diretivo Colegiado

A Mesa Diretora é o órgão diretivo colegiado da Assembleia Legislativa, composta pelo Presidente, 1º e 2º Vice-Presidentes, e 1º, 2º, 3º e 4º Secretários. Compete à Mesa Diretora:

- Dirigir os trabalhos legislativos e os serviços administrativos da Assembleia
- Propor projetos de resolução que criem, transformem ou extingam cargos dos serviços da Assembleia
- Elaborar e expedir a discriminação analítica das dotações orçamentárias da Assembleia
- Apresentar à Assembleia, na sessão de encerramento do ano legislativo, relatório dos trabalhos realizados

#### Seção II - Órgãos de Assessoramento aos Integrantes da Mesa Diretora

São órgãos de assessoramento aos integrantes da Mesa Diretora:

1. Gabinete da Presidência
2. Gabinete da 1ª Vice-Presidência
3. Gabinete da 2ª Vice-Presidência
4. Gabinete da 1ª Secretaria
5. Gabinete da 2ª Secretaria
6. Gabinete da 3ª Secretaria
7. Gabinete da 4ª Secretaria

Estes gabinetes têm por finalidade prestar assistência direta e imediata aos respectivos membros da Mesa Diretora no desempenho de suas atribuições e compromissos oficiais.

#### Seção III - Órgãos de Assessoramento à Presidência

São órgãos de assessoramento à Presidência:

1. Chefia de Gabinete da Presidência
2. Secretaria Geral da Presidência
3. Procuradoria Geral
4. Diretoria Geral
5. Controladoria Geral
6. Ouvidoria Parlamentar
7. Secretaria de Comunicação
8. Secretaria de Articulação Política

Estes órgãos têm por finalidade auxiliar a Presidência na formulação de políticas e diretrizes, na coordenação das atividades da Assembleia e no relacionamento com outros Poderes e entidades.

##### Chefia de Gabinete da Presidência
Responsável pela coordenação das atividades do Gabinete da Presidência, organização da agenda do Presidente e articulação com os demais órgãos da Assembleia.

##### Secretaria Geral da Presidência
Responsável pelo assessoramento direto ao Presidente em assuntos políticos e parlamentares, coordenação das atividades de cerimonial e relações públicas.

##### Procuradoria Geral
Órgão de consultoria e assessoramento jurídico da Assembleia, responsável pela representação judicial e extrajudicial da instituição, emissão de pareceres jurídicos e defesa dos interesses da Assembleia.

##### Diretoria Geral
Órgão central de coordenação e supervisão das atividades administrativas da Assembleia, responsável pela execução das políticas e diretrizes administrativas estabelecidas pela Mesa Diretora.

##### Controladoria Geral
Responsável pelo sistema de controle interno da Assembleia, fiscalização contábil, financeira, orçamentária, operacional e patrimonial, quanto à legalidade, legitimidade e economicidade.

##### Ouvidoria Parlamentar
Responsável pelo recebimento, exame e encaminhamento de reclamações, denúncias e sugestões de cidadãos relacionadas às atividades da Assembleia.

##### Secretaria de Comunicação
Responsável pela política de comunicação social da Assembleia, divulgação das atividades parlamentares e relacionamento com a imprensa.

##### Secretaria de Articulação Política
Responsável pela articulação política da Assembleia com os demais Poderes, entidades e organizações da sociedade civil.

#### Seção IV - Órgãos de Apoio Direto à Ação Parlamentar

São órgãos de apoio direto à ação parlamentar:

1. Diretoria Parlamentar
2. Diretoria de Assuntos Legislativos
3. Diretoria de Processo Legislativo
4. Diretoria de Comissões
5. Diretoria de Taquigrafia e Divisão de Revisão
6. Diretoria de Apoio às Bancadas e Lideranças

Estes órgãos têm por finalidade prestar apoio técnico e operacional às atividades legislativas, como elaboração de proposições, assessoramento às comissões, registro e publicação dos atos legislativos.

##### Diretoria Parlamentar
Responsável pela coordenação e supervisão das atividades de apoio ao processo legislativo, como registro de proposições, elaboração da ordem do dia e acompanhamento das sessões plenárias.

##### Diretoria de Assuntos Legislativos
Responsável pelo assessoramento técnico-legislativo aos Deputados e Comissões, elaboração de estudos e pesquisas sobre temas de interesse legislativo.

##### Diretoria de Processo Legislativo
Responsável pelo acompanhamento e controle da tramitação das proposições legislativas, elaboração de relatórios e estatísticas sobre a produção legislativa.

##### Diretoria de Comissões
Responsável pelo apoio administrativo e técnico às Comissões Permanentes e Temporárias, organização de audiências públicas e reuniões das Comissões.

##### Diretoria de Taquigrafia e Divisão de Revisão
Responsável pelo registro taquigráfico das sessões plenárias e reuniões das Comissões, revisão e publicação dos pronunciamentos e debates.

##### Diretoria de Apoio às Bancadas e Lideranças
Responsável pelo apoio administrativo e técnico às Bancadas Partidárias e Lideranças, organização de reuniões e eventos promovidos pelos partidos políticos.

#### Seção V - Órgãos de Apoio Indireto à Ação Parlamentar

São órgãos de apoio indireto à ação parlamentar:

1. Diretoria Administrativa
2. Diretoria Financeira
3. Diretoria de Recursos Humanos
4. Diretoria de Tecnologia da Informação
5. Diretoria de Segurança e Transporte
6. Diretoria de Infraestrutura e Manutenção
7. Escola do Legislativo

Estes órgãos têm por finalidade prestar apoio administrativo, financeiro, tecnológico e logístico às atividades da Assembleia, garantindo a infraestrutura necessária ao funcionamento da instituição.

##### Diretoria Administrativa
Responsável pela gestão de materiais, patrimônio, compras, licitações, contratos e serviços gerais da Assembleia.

##### Diretoria Financeira
Responsável pela gestão orçamentária, financeira e contábil da Assembleia, elaboração da proposta orçamentária e prestação de contas.

##### Diretoria de Recursos Humanos
Responsável pela gestão de pessoal, folha de pagamento, capacitação e desenvolvimento de servidores, e benefícios funcionais.

##### Diretoria de Tecnologia da Informação
Responsável pela gestão da infraestrutura tecnológica, desenvolvimento e manutenção de sistemas, suporte técnico e segurança da informação.

##### Diretoria de Segurança e Transporte
Responsável pela segurança das instalações, pessoas e bens da Assembleia, bem como pela gestão da frota de veículos e serviços de transporte.

##### Diretoria de Infraestrutura e Manutenção
Responsável pela manutenção predial, obras e reformas, gestão de espaços físicos e serviços de engenharia.

##### Escola do Legislativo
Responsável pela capacitação e desenvolvimento de servidores, parlamentares e cidadãos, promoção de cursos, seminários e eventos educativos relacionados ao Poder Legislativo.

## Título II - Das Disposições Finais e Transitórias

A Resolução estabelece que:

1. A estrutura administrativa da Assembleia Legislativa poderá ser alterada mediante proposta da Mesa Diretora, aprovada pelo Plenário
2. Os cargos em comissão e as funções de confiança serão providos por ato do Presidente da Assembleia
3. O Presidente da Assembleia poderá expedir atos complementares para a execução desta Resolução
4. As despesas decorrentes da aplicação desta Resolução correrão à conta de dotações orçamentárias próprias
5. A Resolução entra em vigor na data de sua publicação, revogadas as disposições em contrário

6. # Resumo da Resolução nº 1.771 - Secretaria de Polícia Legislativa

## Capítulo I - Das Disposições Preliminares

A Resolução nº 1.771 dispõe sobre a organização, a estrutura, as competências e as atribuições da Secretaria de Polícia Legislativa da Assembleia Legislativa do Estado de Goiás, bem como sobre a carreira, o ingresso, os direitos, os deveres e as prerrogativas do Policial Legislativo.

A Secretaria de Polícia Legislativa é o órgão de polícia da Assembleia Legislativa, subordinada diretamente à Presidência, com autonomia administrativa e operacional, e tem por finalidade:

1. Preservar a ordem e a segurança interna da Assembleia Legislativa
2. Garantir a segurança dos parlamentares, servidores e visitantes
3. Executar as tarefas de policiamento, vigilância, prevenção e combate a incêndios
4. Realizar a segurança do Presidente da Assembleia Legislativa
5. Efetuar prisões em flagrante ou por determinação judicial
6. Realizar a investigação preliminar de infrações penais ocorridas nas dependências da Assembleia

## Capítulo II - Da Estrutura Organizacional

A Secretaria de Polícia Legislativa possui a seguinte estrutura organizacional:

1. Secretário de Polícia Legislativa
2. Secretário-Adjunto de Polícia Legislativa
3. Gerência de Polícia Legislativa
   - Coordenadoria de Policiamento e Segurança
   - Coordenadoria de Inteligência e Contrainteligência
   - Coordenadoria de Credenciamento e Identificação
   - Coordenadoria de Operações Especiais

O Secretário de Polícia Legislativa é nomeado pelo Presidente da Assembleia Legislativa, devendo ser escolhido entre os integrantes da carreira de Policial Legislativo, preferencialmente entre os ocupantes da classe mais elevada.

## Capítulo III - Das Competências e Atribuições

### Seção I - Da Secretaria de Polícia Legislativa

Compete à Secretaria de Polícia Legislativa:

1. Planejar, coordenar e executar as ações de segurança na Assembleia Legislativa
2. Zelar pela segurança dos parlamentares, servidores e visitantes
3. Realizar o policiamento ostensivo nas dependências da Assembleia
4. Executar a segurança preventiva e o controle de acesso
5. Realizar a segurança das sessões plenárias e demais eventos
6. Efetuar a segurança do Presidente da Assembleia
7. Realizar investigações preliminares de infrações penais
8. Efetuar prisões em flagrante ou por determinação judicial
9. Apreender objetos e instrumentos de crimes
10. Colaborar com órgãos policiais externos quando necessário

### Seção II - Do Secretário de Polícia Legislativa

Compete ao Secretário de Polícia Legislativa:

1. Dirigir, planejar, coordenar e supervisionar as atividades da Secretaria
2. Assessorar a Presidência em assuntos de segurança
3. Propor normas e procedimentos de segurança
4. Autorizar o porte de arma de fogo pelos Policiais Legislativos
5. Determinar a realização de investigações preliminares
6. Requisitar, quando necessário, o auxílio de outras instituições policiais
7. Apresentar relatórios periódicos das atividades da Secretaria

### Seção III - Das Coordenadorias

#### Coordenadoria de Policiamento e Segurança
Responsável pelo policiamento ostensivo, controle de acesso, segurança das sessões e eventos, e pela segurança do Presidente.

#### Coordenadoria de Inteligência e Contrainteligência
Responsável pela produção de conhecimentos de inteligência, análise de riscos, contraespionagem e proteção do conhecimento sensível.

#### Coordenadoria de Credenciamento e Identificação
Responsável pelo controle de acesso, emissão de credenciais e identificação de pessoas.

#### Coordenadoria de Operações Especiais
Responsável por operações que exijam treinamento específico, como escolta de autoridades, gerenciamento de crises e controle de distúrbios.

## Capítulo IV - Da Carreira de Policial Legislativo

### Seção I - Do Ingresso

O ingresso na carreira de Policial Legislativo ocorre mediante concurso público de provas ou de provas e títulos, exigindo-se:

1. Diploma de curso superior em qualquer área
2. Carteira Nacional de Habilitação, categoria "B" ou superior
3. Aptidão física e mental
4. Idoneidade moral
5. Aprovação em curso de formação específico

O concurso inclui as seguintes fases:
- Prova objetiva
- Prova discursiva
- Teste de aptidão física
- Avaliação psicológica
- Investigação social
- Curso de formação profissional

### Seção II - Do Desenvolvimento na Carreira

A carreira de Policial Legislativo é estruturada em classes e padrões, com progressão funcional baseada em:

1. Tempo de serviço
2. Mérito profissional
3. Capacitação profissional

A promoção entre classes depende de:
- Cumprimento do interstício mínimo
- Aprovação em avaliação de desempenho
- Participação em cursos de aperfeiçoamento

### Seção III - Das Prerrogativas

São prerrogativas do Policial Legislativo:

1. Porte de arma de fogo, em serviço e fora dele
2. Livre acesso a locais sob fiscalização da Assembleia
3. Uso de distintivo e carteira de identidade funcional
4. Prioridade nos serviços de transporte e comunicação da Assembleia
5. Auxílio-risco, nos termos da legislação específica

### Seção IV - Dos Deveres e Vedações

São deveres do Policial Legislativo:

1. Exercer com zelo e dedicação as atribuições do cargo
2. Manter conduta compatível com a moralidade administrativa
3. Zelar pela preservação da ordem pública
4. Observar as normas legais e regulamentares
5. Cumprir as ordens superiores, exceto quando manifestamente ilegais
6. Guardar sigilo sobre assuntos da repartição

É vedado ao Policial Legislativo:

1. Ausentar-se do serviço durante o expediente, sem prévia autorização
2. Retirar, sem prévia autorização, qualquer documento ou objeto da repartição
3. Recusar fé a documentos públicos
4. Opor resistência injustificada ao andamento de documento ou processo
5. Exercer atividades incompatíveis com o exercício do cargo

## Capítulo V - Do Regime Disciplinar

O regime disciplinar do Policial Legislativo inclui:

1. Infrações disciplinares classificadas como leves, médias e graves
2. Penalidades de advertência, suspensão, demissão e cassação de aposentadoria
3. Processo administrativo disciplinar com ampla defesa e contraditório
4. Conselho de Disciplina para julgar infrações graves

## Capítulo VI - Das Disposições Finais e Transitórias

A Resolução estabelece que:

1. Os atuais ocupantes do cargo de Inspetor de Polícia Legislativa passam a integrar a carreira de Policial Legislativo
2. O Presidente da Assembleia pode editar atos complementares para a execução desta Resolução
3. As despesas decorrentes da aplicação desta Resolução correm à conta de dotações orçamentárias próprias
4. A Resolução entra em vigor na data de sua publicação

5. # Resumo do Regimento Interno da ALEGO - Resolução nº 1.218

## Título I - As Disposições Preliminares

### Capítulo I - Da Sede (art. 1º)
A Assembleia Legislativa do Estado de Goiás tem sua sede na capital do Estado e funciona no Palácio Alfredo Nasser. As sessões da Assembleia Legislativa são realizadas em seu edifício próprio e, por motivo de força maior ou de conveniência pública, poderão ser realizadas em outro local, por deliberação da Mesa Diretora.

### Capítulo II - Da Habilitação para a posse (art. 2º)
Para habilitar-se à posse, o Deputado diplomado deve apresentar à Mesa Diretora, pessoalmente ou por intermédio de seu partido, até o dia 31 de janeiro do primeiro ano de cada Legislatura, o diploma expedido pela Justiça Eleitoral, juntamente com seu nome parlamentar e legenda partidária.

### Capítulo III - Das Sessões Preparatórias
As sessões preparatórias são realizadas para a posse dos Deputados e eleição da Mesa Diretora. A primeira sessão preparatória, no primeiro ano da Legislatura, é presidida pelo Deputado mais idoso dentre os presentes, que convida dois outros Deputados para servirem como Secretários.

## Título II - Dos Órgãos da Assembleia

### Capítulo I - Da Mesa Diretora
A Mesa Diretora é o órgão de direção dos trabalhos legislativos e dos serviços administrativos da Assembleia. É composta por Presidente, 1º Vice-Presidente, 2º Vice-Presidente, 1º Secretário, 2º Secretário, 3º Secretário e 4º Secretário, eleitos para mandato de dois anos.

#### Seção I - Da Eleição da Mesa
A eleição da Mesa Diretora ocorre em sessão preparatória, no início da Legislatura, e para o segundo biênio, em sessão ordinária da segunda quinzena de fevereiro do segundo ano legislativo. A eleição é realizada por votação nominal, exigida maioria absoluta de votos em primeiro escrutínio e maioria simples em segundo escrutínio.

#### Seção II - Das Atribuições da Mesa
Compete à Mesa Diretora, entre outras atribuições:
- Dirigir os trabalhos legislativos e os serviços administrativos da Assembleia
- Propor projetos de resolução que criem, transformem ou extingam cargos dos serviços da Assembleia
- Elaborar e expedir, mediante Ato, a discriminação analítica das dotações orçamentárias da Assembleia
- Apresentar à Assembleia, na sessão de encerramento do ano legislativo, relatório dos trabalhos realizados

#### Seção III - Da Presidência
O Presidente é o representante da Assembleia quando ela se pronuncia coletivamente e o supervisor dos seus trabalhos e da sua ordem. Compete ao Presidente, entre outras atribuições:
- Presidir as sessões da Assembleia
- Convocar sessões extraordinárias
- Determinar a publicação de expedientes e documentos
- Assinar as resoluções e decretos legislativos promulgados pela Assembleia

#### Seção IV - Da Vice-Presidência
Os Vice-Presidentes substituem o Presidente em suas ausências ou impedimentos, na ordem de sucessão. Compete aos Vice-Presidentes, além da substituição do Presidente, desempenhar as atribuições que lhes forem delegadas pela Presidência.

#### Seção V - Dos Secretários
Compete aos Secretários, entre outras atribuições:
- Fazer a chamada dos Deputados
- Ler os expedientes recebidos e as proposições apresentadas
- Supervisionar a redação das atas das sessões
- Assinar, juntamente com o Presidente, as resoluções e decretos legislativos

### Capítulo II - Das Comissões
As Comissões são órgãos técnicos constituídos pelos membros da Assembleia, em caráter permanente ou temporário, com a finalidade de examinar matérias em tramitação, proceder a estudos sobre assuntos de natureza diversa e investigar fatos determinados.

#### Seção I - Das Comissões Permanentes
As Comissões Permanentes têm por finalidade apreciar os assuntos ou proposições submetidos ao seu exame e sobre eles emitir parecer. São Comissões Permanentes:
- Comissão de Constituição, Justiça e Redação
- Comissão de Tributação, Finanças e Orçamento
- Comissão de Agricultura, Pecuária e Cooperativismo
- Comissão de Educação, Cultura e Esporte
- Comissão de Saúde e Promoção Social
- Comissão de Direitos Humanos, Cidadania e Legislação Participativa
- Entre outras

#### Seção II - Das Comissões Temporárias
As Comissões Temporárias são criadas para fins específicos e se extinguem ao término da Legislatura ou antes dele, quando alcançado o fim a que se destinam ou expirado seu prazo de duração. São Comissões Temporárias:
- Comissões Especiais
- Comissões Parlamentares de Inquérito
- Comissões de Representação

## Título III - Dos Deputados

### Capítulo I - Do Exercício do Mandato
O Deputado deve apresentar-se à Assembleia durante a sessão legislativa ordinária ou extraordinária, para participar das sessões do Plenário e das reuniões de Comissão de que seja membro, sendo-lhe assegurado:
- Participar das discussões e deliberações do Plenário e das Comissões
- Votar e ser votado para os cargos da Mesa e das Comissões
- Apresentar proposições
- Solicitar informações sobre assuntos relacionados com a administração pública

### Capítulo II - Da Perda do Mandato e da Ausência do Deputado
Perderá o mandato o Deputado:
- Que infringir qualquer das proibições estabelecidas na Constituição Federal e na Constituição Estadual
- Cujo procedimento for declarado incompatível com o decoro parlamentar
- Que deixar de comparecer, em cada sessão legislativa, à terça parte das sessões ordinárias, salvo licença ou missão autorizada
- Que perder ou tiver suspensos os direitos políticos
- Quando o decretar a Justiça Eleitoral

### Capítulo III - Das Licenças
O Deputado poderá obter licença para:
- Desempenhar missão temporária de caráter diplomático ou cultural
- Tratamento de saúde
- Tratar de interesse particular, sem remuneração, por prazo não superior a 120 dias por sessão legislativa

### Capítulo IV - Da Convocação de Suplente
A Mesa convocará o Suplente de Deputado nos casos de:
- Ocorrência de vaga
- Investidura do titular em funções de Ministro de Estado, Secretário de Estado ou Prefeito da Capital
- Licença para tratamento de saúde do titular por prazo superior a 120 dias

## Título IV - Das Sessões

### Capítulo I - Disposições Gerais
As sessões da Assembleia são:
- Preparatórias
- Ordinárias
- Extraordinárias
- Solenes
- Especiais

As sessões ordinárias têm duração de quatro horas, com início às 15 horas, nos dias úteis, de terça a quinta-feira. As sessões extraordinárias podem ser convocadas pelo Presidente, de ofício, ou por deliberação do Plenário, a requerimento de qualquer Deputado.

### Capítulo II - Das Sessões Públicas
As sessões públicas são realizadas com a presença de, no mínimo, um quarto dos membros da Assembleia. A sessão ordinária compõe-se de:
- Pequeno Expediente
- Grande Expediente
- Ordem do Dia
- Explicação Pessoal

### Capítulo III - Das Sessões Secretas
A Assembleia poderá realizar sessão secreta, por deliberação do Plenário, a requerimento de um terço de seus membros ou de Líderes que representem este número, para tratar de assunto de sua economia interna ou quando o sigilo for necessário à preservação do decoro parlamentar.

## Título V - Das Proposições

### Capítulo I - Disposições Gerais
Proposição é toda matéria sujeita à deliberação da Assembleia. As proposições podem consistir em:
- Proposta de emenda à Constituição
- Projeto de lei complementar
- Projeto de lei ordinária
- Projeto de decreto legislativo
- Projeto de resolução
- Emenda
- Requerimento
- Recurso
- Parecer

### Capítulo II - Dos Projetos
Os projetos de lei, de decreto legislativo e de resolução devem ser redigidos em artigos concisos, numerados e assinados por seu autor ou autores. Nenhum projeto poderá conter duas ou mais matérias diversas.

### Capítulo III - Das Emendas
Emenda é a proposição apresentada como acessória de outra. As emendas podem ser:
- Supressivas
- Substitutivas
- Aditivas
- Modificativas

### Capítulo IV - Dos Requerimentos
Requerimento é todo pedido dirigido ao Presidente da Assembleia sobre objeto de expediente ou de ordem, por qualquer Deputado ou Comissão. Os requerimentos podem ser verbais ou escritos, dependendo da matéria a que se referem.

## Título VI - Da Apreciação das Proposições

### Capítulo I - Da Tramitação
As proposições, salvo os requerimentos, são submetidas aos seguintes regimes de tramitação:
- Urgência
- Prioridade
- Ordinária

### Capítulo II - Do Recebimento e da Distribuição das Proposições
As proposições recebidas pela Mesa são numeradas, datadas e despachadas às Comissões competentes, para estudo da matéria e oferecimento de parecer.

### Capítulo III - Da Discussão
Discussão é a fase dos trabalhos destinada ao debate em Plenário. A discussão será feita sobre o conjunto da proposição, emendas e substitutivos apresentados.

### Capítulo IV - Da Votação
A votação completa o julgamento das proposições. As deliberações do Plenário são tomadas por maioria de votos, presente a maioria absoluta dos membros da Assembleia, salvo disposição constitucional em contrário.

## Título VII - Da Elaboração Legislativa Especial

### Capítulo I - Do Orçamento
Os projetos de lei do plano plurianual, das diretrizes orçamentárias e do orçamento anual são enviados pelo Governador do Estado à Assembleia, nos prazos fixados em lei complementar federal.

### Capítulo II - Das Codificações
Os projetos de código são examinados por Comissão Especial, constituída para esse fim.

## Título VIII - Da Participação da Sociedade Civil

### Capítulo I - Da Iniciativa Popular de Lei
A iniciativa popular pode ser exercida pela apresentação à Assembleia Legislativa de projeto de lei subscrito por, no mínimo, um por cento do eleitorado estadual, distribuído pelo menos por vinte municípios, com não menos de meio por cento dos eleitores de cada um deles.

### Capítulo II - Das Petições e Representações
As petições, reclamações ou representações de qualquer pessoa física ou jurídica contra ato ou omissão das autoridades e entidades públicas, ou imputados a membros da Assembleia, serão recebidas e examinadas pelas Comissões ou pela Mesa.

### Capítulo III - Da Audiência Pública
Cada Comissão pode realizar reunião de audiência pública com entidade da sociedade civil para instruir matéria legislativa em trâmite, bem como para tratar de assuntos de interesse público relevante, atinentes à sua área de atuação.

## Título IX - Da Administração e da Economia Interna

### Capítulo I - Dos Serviços Administrativos
Os serviços administrativos da Assembleia são executados por seus órgãos, sob a direção da Mesa, e regem-se por regulamentos especiais, aprovados pelo Plenário.

### Capítulo II - Da Polícia da Assembleia
A Mesa fará manter a ordem e a disciplina no edifício da Assembleia e suas adjacências. O policiamento do edifício da Assembleia e de suas dependências externas compete, privativamente, à Mesa, sob a suprema direção do Presidente, sem intervenção de qualquer outro Poder.

## Título X - Das Disposições Finais
O Regimento Interno da Assembleia poderá ser modificado ou reformado por meio de projeto de resolução de iniciativa da Mesa, de Comissão Permanente ou de um terço dos membros da Assembleia.

# Flashcards - Resolução nº 1.007 (Estrutura Administrativa)

## Estrutura Administrativa Geral

1. **Pergunta**: Quais são os principais grupos de órgãos que compõem a estrutura administrativa da ALEGO?
   **Resposta**: 1) Órgão Diretivo Colegiado (Mesa Diretora); 2) Órgãos de Assessoramento aos Integrantes da Mesa Diretora; 3) Órgãos de Assessoramento à Presidência; 4) Órgãos de Apoio Direto à Ação Parlamentar; 5) Órgãos de Apoio Indireto à Ação Parlamentar.

2. **Pergunta**: Como é composta a Mesa Diretora da ALEGO?
   **Resposta**: A Mesa Diretora é composta pelo Presidente, 1º e 2º Vice-Presidentes, e 1º, 2º, 3º e 4º Secretários.

3. **Pergunta**: Cite três competências da Mesa Diretora.
   **Resposta**: Dirigir os trabalhos legislativos e os serviços administrativos da Assembleia; propor projetos de resolução que criem, transformem ou extingam cargos dos serviços da Assembleia; elaborar e expedir a discriminação analítica das dotações orçamentárias da Assembleia.

4. **Pergunta**: Quais são os órgãos de assessoramento aos integrantes da Mesa Diretora?
   **Resposta**: Gabinete da Presidência, Gabinete da 1ª Vice-Presidência, Gabinete da 2ª Vice-Presidência, Gabinete da 1ª Secretaria, Gabinete da 2ª Secretaria, Gabinete da 3ª Secretaria e Gabinete da 4ª Secretaria.

## Órgãos de Assessoramento à Presidência

5. **Pergunta**: Cite quatro órgãos de assessoramento à Presidência da ALEGO.
   **Resposta**: Chefia de Gabinete da Presidência, Secretaria Geral da Presidência, Procuradoria Geral, Diretoria Geral, Controladoria Geral, Ouvidoria Parlamentar, Secretaria de Comunicação, Secretaria de Articulação Política (qualquer quatro destes).

6. **Pergunta**: Qual é a função da Chefia de Gabinete da Presidência?
   **Resposta**: É responsável pela coordenação das atividades do Gabinete da Presidência, organização da agenda do Presidente e articulação com os demais órgãos da Assembleia.

7. **Pergunta**: Qual é a responsabilidade da Procuradoria Geral?
   **Resposta**: É o órgão de consultoria e assessoramento jurídico da Assembleia, responsável pela representação judicial e extrajudicial da instituição, emissão de pareceres jurídicos e defesa dos interesses da Assembleia.

8. **Pergunta**: Qual é a função da Controladoria Geral?
   **Resposta**: É responsável pelo sistema de controle interno da Assembleia, fiscalização contábil, financeira, orçamentária, operacional e patrimonial, quanto à legalidade, legitimidade e economicidade.

9. **Pergunta**: O que faz a Ouvidoria Parlamentar?
   **Resposta**: É responsável pelo recebimento, exame e encaminhamento de reclamações, denúncias e sugestões de cidadãos relacionadas às atividades da Assembleia.

10. **Pergunta**: Qual é a função da Secretaria de Comunicação?
    **Resposta**: É responsável pela política de comunicação social da Assembleia, divulgação das atividades parlamentares e relacionamento com a imprensa.

## Órgãos de Apoio Direto à Ação Parlamentar

11. **Pergunta**: Cite três órgãos de apoio direto à ação parlamentar.
    **Resposta**: Diretoria Parlamentar, Diretoria de Assuntos Legislativos, Diretoria de Processo Legislativo, Diretoria de Comissões, Diretoria de Taquigrafia e Divisão de Revisão, Diretoria de Apoio às Bancadas e Lideranças (qualquer três destes).

12. **Pergunta**: Qual é a função da Diretoria Parlamentar?
    **Resposta**: É responsável pela coordenação e supervisão das atividades de apoio ao processo legislativo, como registro de proposições, elaboração da ordem do dia e acompanhamento das sessões plenárias.

13. **Pergunta**: O que faz a Diretoria de Assuntos Legislativos?
    **Resposta**: É responsável pelo assessoramento técnico-legislativo aos Deputados e Comissões, elaboração de estudos e pesquisas sobre temas de interesse legislativo.

14. **Pergunta**: Qual é a responsabilidade da Diretoria de Comissões?
    **Resposta**: É responsável pelo apoio administrativo e técnico às Comissões Permanentes e Temporárias, organização de audiências públicas e reuniões das Comissões.

15. **Pergunta**: O que faz a Diretoria de Taquigrafia e Divisão de Revisão?
    **Resposta**: É responsável pelo registro taquigráfico das sessões plenárias e reuniões das Comissões, revisão e publicação dos pronunciamentos e debates.

## Órgãos de Apoio Indireto à Ação Parlamentar

16. **Pergunta**: Cite quatro órgãos de apoio indireto à ação parlamentar.
    **Resposta**: Diretoria Administrativa, Diretoria Financeira, Diretoria de Recursos Humanos, Diretoria de Tecnologia da Informação, Diretoria de Segurança e Transporte, Diretoria de Infraestrutura e Manutenção, Escola do Legislativo (qualquer quatro destes).

17. **Pergunta**: Qual é a função da Diretoria Administrativa?
    **Resposta**: É responsável pela gestão de materiais, patrimônio, compras, licitações, contratos e serviços gerais da Assembleia.

18. **Pergunta**: O que faz a Diretoria de Recursos Humanos?
    **Resposta**: É responsável pela gestão de pessoal, folha de pagamento, capacitação e desenvolvimento de servidores, e benefícios funcionais.

19. **Pergunta**: Qual é a responsabilidade da Diretoria de Tecnologia da Informação?
    **Resposta**: É responsável pela gestão da infraestrutura tecnológica, desenvolvimento e manutenção de sistemas, suporte técnico e segurança da informação.

20. **Pergunta**: O que faz a Escola do Legislativo?
    **Resposta**: É responsável pela capacitação e desenvolvimento de servidores, parlamentares e cidadãos, promoção de cursos, seminários e eventos educativos relacionados ao Poder Legislativo.

## Disposições Finais

21. **Pergunta**: Como pode ser alterada a estrutura administrativa da Assembleia Legislativa?
    **Resposta**: A estrutura administrativa da Assembleia Legislativa poderá ser alterada mediante proposta da Mesa Diretora, aprovada pelo Plenário.

22. **Pergunta**: Quem é responsável pelo provimento dos cargos em comissão e funções de confiança?
    **Resposta**: Os cargos em comissão e as funções de confiança serão providos por ato do Presidente da Assembleia.

23. **Pergunta**: Quem pode expedir atos complementares para a execução da Resolução nº 1.007?
    **Resposta**: O Presidente da Assembleia poderá expedir atos complementares para a execução desta Resolução.

24. **Pergunta**: À conta de quais dotações correm as despesas decorrentes da aplicação da Resolução nº 1.007?
    **Resposta**: As despesas decorrentes da aplicação desta Resolução correrão à conta de dotações orçamentárias próprias.

25. **Pergunta**: Quando a Resolução nº 1.007 entra em vigor?
    **Resposta**: A Resolução entra em vigor na data de sua publicação, revogadas as disposições em contrário.

    # Flashcards - Regimento Interno da ALEGO (Resolução nº 1.218)

## Disposições Preliminares e Estrutura

1. **Pergunta**: Onde fica a sede da Assembleia Legislativa do Estado de Goiás?
   **Resposta**: A sede fica na capital do Estado e funciona no Palácio Alfredo Nasser.

2. **Pergunta**: O que o Deputado diplomado deve apresentar para habilitar-se à posse?
   **Resposta**: Deve apresentar à Mesa Diretora, até o dia 31 de janeiro do primeiro ano de cada Legislatura, o diploma expedido pela Justiça Eleitoral, juntamente com seu nome parlamentar e legenda partidária.

3. **Pergunta**: Quem preside a primeira sessão preparatória no primeiro ano da Legislatura?
   **Resposta**: A primeira sessão preparatória é presidida pelo Deputado mais idoso dentre os presentes.

## Mesa Diretora

4. **Pergunta**: Como é composta a Mesa Diretora da ALEGO?
   **Resposta**: É composta por Presidente, 1º Vice-Presidente, 2º Vice-Presidente, 1º Secretário, 2º Secretário, 3º Secretário e 4º Secretário.

5. **Pergunta**: Qual é a duração do mandato da Mesa Diretora?
   **Resposta**: O mandato da Mesa Diretora é de dois anos.

6. **Pergunta**: Quando ocorre a eleição da Mesa Diretora para o segundo biênio?
   **Resposta**: A eleição para o segundo biênio ocorre em sessão ordinária da segunda quinzena de fevereiro do segundo ano legislativo.

7. **Pergunta**: Cite três atribuições da Mesa Diretora.
   **Resposta**: Dirigir os trabalhos legislativos e os serviços administrativos da Assembleia; propor projetos de resolução que criem, transformem ou extingam cargos dos serviços da Assembleia; elaborar e expedir a discriminação analítica das dotações orçamentárias da Assembleia.

8. **Pergunta**: Qual é o papel do Presidente da Assembleia?
   **Resposta**: O Presidente é o representante da Assembleia quando ela se pronuncia coletivamente e o supervisor dos seus trabalhos e da sua ordem.

## Comissões

9. **Pergunta**: Qual é a finalidade das Comissões Permanentes?
   **Resposta**: As Comissões Permanentes têm por finalidade apreciar os assuntos ou proposições submetidos ao seu exame e sobre eles emitir parecer.

10. **Pergunta**: Cite três exemplos de Comissões Permanentes da ALEGO.
    **Resposta**: Comissão de Constituição, Justiça e Redação; Comissão de Tributação, Finanças e Orçamento; Comissão de Educação, Cultura e Esporte.

11. **Pergunta**: Quais são os tipos de Comissões Temporárias?
    **Resposta**: Comissões Especiais, Comissões Parlamentares de Inquérito e Comissões de Representação.

12. **Pergunta**: Quando se extinguem as Comissões Temporárias?
    **Resposta**: Extinguem-se ao término da Legislatura ou antes dele, quando alcançado o fim a que se destinam ou expirado seu prazo de duração.

## Deputados

13. **Pergunta**: Cite três direitos assegurados ao Deputado no exercício do mandato.
    **Resposta**: Participar das discussões e deliberações do Plenário e das Comissões; votar e ser votado para os cargos da Mesa e das Comissões; apresentar proposições.

14. **Pergunta**: Em quais situações um Deputado pode perder o mandato?
    **Resposta**: Quando infringir proibições constitucionais; quando seu procedimento for declarado incompatível com o decoro parlamentar; quando deixar de comparecer à terça parte das sessões ordinárias; quando perder ou tiver suspensos os direitos políticos; quando a Justiça Eleitoral o decretar.

15. **Pergunta**: Para quais finalidades um Deputado pode obter licença?
    **Resposta**: Para desempenhar missão temporária de caráter diplomático ou cultural; para tratamento de saúde; para tratar de interesse particular, sem remuneração, por prazo não superior a 120 dias por sessão legislativa.

16. **Pergunta**: Em quais casos a Mesa convoca o Suplente de Deputado?
    **Resposta**: Nos casos de ocorrência de vaga; investidura do titular em funções de Ministro de Estado, Secretário de Estado ou Prefeito da Capital; licença para tratamento de saúde do titular por prazo superior a 120 dias.

## Sessões

17. **Pergunta**: Quais são os tipos de sessões da Assembleia Legislativa?
    **Resposta**: Preparatórias, ordinárias, extraordinárias, solenes e especiais.

18. **Pergunta**: Qual é a duração e o horário das sessões ordinárias?
    **Resposta**: As sessões ordinárias têm duração de quatro horas, com início às 15 horas, nos dias úteis, de terça a quinta-feira.

19. **Pergunta**: Quais são as partes que compõem uma sessão ordinária?
    **Resposta**: Pequeno Expediente, Grande Expediente, Ordem do Dia e Explicação Pessoal.

20. **Pergunta**: Quando pode ser realizada uma sessão secreta?
    **Resposta**: Por deliberação do Plenário, a requerimento de um terço de seus membros ou de Líderes que representem este número, para tratar de assunto de sua economia interna ou quando o sigilo for necessário à preservação do decoro parlamentar.

## Proposições

21. **Pergunta**: O que são proposições na ALEGO?
    **Resposta**: Proposição é toda matéria sujeita à deliberação da Assembleia.

22. **Pergunta**: Cite cinco tipos de proposições.
    **Resposta**: Proposta de emenda à Constituição, projeto de lei complementar, projeto de lei ordinária, projeto de decreto legislativo, projeto de resolução.

23. **Pergunta**: Quais são os tipos de emendas?
    **Resposta**: Supressivas, substitutivas, aditivas e modificativas.

24. **Pergunta**: O que é um requerimento?
    **Resposta**: Requerimento é todo pedido dirigido ao Presidente da Assembleia sobre objeto de expediente ou de ordem, por qualquer Deputado ou Comissão.

## Tramitação e Votação

25. **Pergunta**: Quais são os regimes de tramitação das proposições?
    **Resposta**: Urgência, prioridade e ordinária.

26. **Pergunta**: O que acontece com as proposições recebidas pela Mesa?
    **Resposta**: São numeradas, datadas e despachadas às Comissões competentes, para estudo da matéria e oferecimento de parecer.

27. **Pergunta**: O que é a fase de discussão?
    **Resposta**: É a fase dos trabalhos destinada ao debate em Plenário.

28. **Pergunta**: Como são tomadas as deliberações do Plenário?
    **Resposta**: Por maioria de votos, presente a maioria absoluta dos membros da Assembleia, salvo disposição constitucional em contrário.

## Participação da Sociedade Civil

29. **Pergunta**: Como pode ser exercida a iniciativa popular de lei?
    **Resposta**: Pela apresentação à Assembleia Legislativa de projeto de lei subscrito por, no mínimo, um por cento do eleitorado estadual, distribuído pelo menos por vinte municípios, com não menos de meio por cento dos eleitores de cada um deles.

30. **Pergunta**: O que são audiências públicas?
    **Resposta**: São reuniões que cada Comissão pode realizar com entidades da sociedade civil para instruir matéria legislativa em trâmite, bem como para tratar de assuntos de interesse público relevante, atinentes à sua área de atuação.

    # Flashcards - Resolução nº 1.771 (Secretaria de Polícia Legislativa)

## Disposições Preliminares e Estrutura

1. **Pergunta**: Qual é a finalidade da Secretaria de Polícia Legislativa da ALEGO?
   **Resposta**: Preservar a ordem e a segurança interna da Assembleia Legislativa; garantir a segurança dos parlamentares, servidores e visitantes; executar tarefas de policiamento, vigilância e prevenção; realizar a segurança do Presidente; efetuar prisões em flagrante ou por determinação judicial; e realizar investigações preliminares de infrações penais nas dependências da Assembleia.

2. **Pergunta**: A quem a Secretaria de Polícia Legislativa está subordinada?
   **Resposta**: A Secretaria de Polícia Legislativa está subordinada diretamente à Presidência da Assembleia Legislativa.

3. **Pergunta**: Qual é a estrutura organizacional da Secretaria de Polícia Legislativa?
   **Resposta**: Secretário de Polícia Legislativa; Secretário-Adjunto de Polícia Legislativa; Gerência de Polícia Legislativa (com as Coordenadorias de Policiamento e Segurança, de Inteligência e Contrainteligência, de Credenciamento e Identificação, e de Operações Especiais).

4. **Pergunta**: Como é escolhido o Secretário de Polícia Legislativa?
   **Resposta**: É nomeado pelo Presidente da Assembleia Legislativa, devendo ser escolhido entre os integrantes da carreira de Policial Legislativo, preferencialmente entre os ocupantes da classe mais elevada.

## Competências e Atribuições

5. **Pergunta**: Cite três competências da Secretaria de Polícia Legislativa.
   **Resposta**: Planejar, coordenar e executar as ações de segurança na Assembleia Legislativa; zelar pela segurança dos parlamentares, servidores e visitantes; realizar o policiamento ostensivo nas dependências da Assembleia.

6. **Pergunta**: Quais são as atribuições do Secretário de Polícia Legislativa?
   **Resposta**: Dirigir, planejar, coordenar e supervisionar as atividades da Secretaria; assessorar a Presidência em assuntos de segurança; propor normas e procedimentos de segurança; autorizar o porte de arma de fogo pelos Policiais Legislativos; determinar investigações preliminares; requisitar auxílio de outras instituições policiais quando necessário.

7. **Pergunta**: Qual é a responsabilidade da Coordenadoria de Policiamento e Segurança?
   **Resposta**: É responsável pelo policiamento ostensivo, controle de acesso, segurança das sessões e eventos, e pela segurança do Presidente.

8. **Pergunta**: Qual é a função da Coordenadoria de Inteligência e Contrainteligência?
   **Resposta**: É responsável pela produção de conhecimentos de inteligência, análise de riscos, contraespionagem e proteção do conhecimento sensível.

## Carreira de Policial Legislativo

9. **Pergunta**: Quais são os requisitos para ingresso na carreira de Policial Legislativo?
   **Resposta**: Diploma de curso superior em qualquer área; Carteira Nacional de Habilitação, categoria "B" ou superior; aptidão física e mental; idoneidade moral; e aprovação em curso de formação específico.

10. **Pergunta**: Quais são as fases do concurso para Policial Legislativo?
    **Resposta**: Prova objetiva; prova discursiva; teste de aptidão física; avaliação psicológica; investigação social; e curso de formação profissional.

11. **Pergunta**: Em que se baseia a progressão funcional na carreira de Policial Legislativo?
    **Resposta**: Tempo de serviço; mérito profissional; e capacitação profissional.

12. **Pergunta**: Do que depende a promoção entre classes na carreira de Policial Legislativo?
    **Resposta**: Cumprimento do interstício mínimo; aprovação em avaliação de desempenho; e participação em cursos de aperfeiçoamento.

## Prerrogativas, Deveres e Vedações

13. **Pergunta**: Cite três prerrogativas do Policial Legislativo.
    **Resposta**: Porte de arma de fogo, em serviço e fora dele; livre acesso a locais sob fiscalização da Assembleia; uso de distintivo e carteira de identidade funcional.

14. **Pergunta**: Quais são os deveres do Policial Legislativo?
    **Resposta**: Exercer com zelo e dedicação as atribuições do cargo; manter conduta compatível com a moralidade administrativa; zelar pela preservação da ordem pública; observar as normas legais e regulamentares; cumprir as ordens superiores, exceto quando manifestamente ilegais; guardar sigilo sobre assuntos da repartição.

15. **Pergunta**: O que é vedado ao Policial Legislativo?
    **Resposta**: Ausentar-se do serviço durante o expediente sem autorização; retirar documentos ou objetos da repartição sem autorização; recusar fé a documentos públicos; opor resistência injustificada ao andamento de documento ou processo; exercer atividades incompatíveis com o cargo.

## Regime Disciplinar e Disposições Finais

16. **Pergunta**: Como são classificadas as infrações disciplinares do Policial Legislativo?
    **Resposta**: São classificadas como leves, médias e graves.

17. **Pergunta**: Quais são as penalidades previstas no regime disciplinar do Policial Legislativo?
    **Resposta**: Advertência, suspensão, demissão e cassação de aposentadoria.

18. **Pergunta**: O que estabelece a Resolução sobre os atuais ocupantes do cargo de Inspetor de Polícia Legislativa?
    **Resposta**: Estabelece que os atuais ocupantes do cargo de Inspetor de Polícia Legislativa passam a integrar a carreira de Policial Legislativo.

19. **Pergunta**: Quem pode editar atos complementares para a execução da Resolução nº 1.771?
    **Resposta**: O Presidente da Assembleia Legislativa.

20. **Pergunta**: À conta de quais dotações correm as despesas decorrentes da aplicação da Resolução nº 1.771?
    **Resposta**: As despesas correm à conta de dotações orçamentárias próprias.

    
