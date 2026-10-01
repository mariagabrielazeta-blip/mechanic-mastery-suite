export type Lang = "pt" | "es" | "en";

export const LANGS: { code: Lang; label: string; htmlLang: string; name: string }[] = [
  { code: "pt", label: "PT", htmlLang: "pt-BR", name: "Português" },
  { code: "es", label: "ES", htmlLang: "es", name: "Español" },
  { code: "en", label: "EN", htmlLang: "en", name: "English" },
];

const pt = {
  whatsappText: "Olá, quero falar com um especialista sobre o Super Fast.",
  meta: {
    title: "Super Fast | ERP para oficinas de reparação automotiva",
  },
  nav: {
    capacity: "Gestão Inteligente",
    testimonials: "Depoimentos",
    implementation: "Implantação",
    demo: "Demonstração",
    login: "Login SF",
  },
  header: {
    specialist: "Fale com um especialista",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    language: "Idioma",
  },
  floating: {
    aria: "Falar com um especialista pelo WhatsApp",
    tooltip: "Fale com um especialista",
  },
  hero: {
    kicker: "Sistema para empresas automotivas",
    title: "Inteligência que coloca sua operação em",
    titleHighlight: "alta performance.",
    text: "Um sistema desenvolvido para empresas automotivas que buscam controle absoluto, decisões rápidas e crescimento sustentável.",
    cta: "Conhecer plataforma",
  },
  testimonials: {
    kicker: "Depoimentos",
    title: "Oficinas de reparação automotiva que já sentem a diferença.",
    intro:
      "Depoimentos reais de oficinas que trocaram planilhas e retrabalho por um ERP feito para o dia a dia da oficina.",
    videoWatch: "Assistir vídeo de depoimentos Super Fast",
    videoDialog: "Vídeo de depoimentos Super Fast",
    videoClose: "Fechar vídeo",
    videoTitle: "Oficinas que confiam no Super Fast",
    drag: "Arraste para ver mais",
    hover: "Passe o mouse para ler",
    tap: "Toque para ler",
    cta: "Quero os mesmos resultados",
    items: [
      {
        company: "Oficina Fleschcar",
        quote:
          "Aprendemos que é uma construção conjunta, pois, o melhor sistema de gestão, não funciona sozinho, sem a participação do dono da oficina. A SFAST, sempre trouxe inovação para o negócio, organizou os processos, amarrando as etapas do trabalho, onde cada profissional participa, contribuindo para que, através dos indicadores fornecidos pelo sistema, os resultados sejam alcançados.",
      },
      {
        company: "Oficina PEPE",
        quote:
          "É um software de gestão indispensável para o dia a dia do negócio. Integração, confiança da informação e fácil utilização. Mas mais do que isso, não se trata apenas de um sistema de gestão, pois a equipe de retaguarda está sempre pronta para atender eventuais dúvidas e ajudar o que for necessário para melhorarmos juntos.",
      },
      {
        company: "Oficina Sapão",
        quote:
          "Já conhecíamos o sistema Sfast há alguns anos por amigos que sempre elogiavam, mas achávamos que não era prioritário para nossa empresa. Depois de conhecer o Rui pessoalmente e conversamos sobre gestão de oficinas, sentimos a expertise da Sfast e resolvemos arriscar. Hoje, após três anos, não conseguimos enxergar nossa oficina operando sem o sistema. Posso afirmar que mais do que clientes, viramos amigos e claro, fãs!",
      },
    ],
  },
  conversion: {
    kicker: "Demonstração gratuita",
    title: "Veja seu novo sistema na prática.",
    text: "Agende uma demonstração gratuita e veja como o Super Fast conecta atendimento, ordens de serviço, estoque e financeiro em um único sistema de gestão para oficinas.",
    benefits: [
      "Demonstração personalizada para a rotina da sua oficina",
      "Diagnóstico dos gargalos que travam sua operação",
      "Plano de implantação claro, sem enrolação",
    ],
    whatsapp: "Prefiro falar agora no WhatsApp",
  },
  footer: {
    privacy: "Política de Privacidade",
    startNow: "Comece hoje mesmo",
    developedBy: "Desenvolvido pela",
    city: "Porto Alegre/RS",
  },
  carousel: {
    kicker: "Gestão Inteligente",
    title: "Tudo o que sua oficina precisa em um único sistema.",
    text: "Do primeiro atendimento à entrega do veículo, do atendimento ao pós venda, conectamos pessoas, processos e informações para sua operação funcionar de forma organizada e previsível.",
    region: "Carrossel de módulos do sistema",
    prev: "Módulo anterior",
    next: "Próximo módulo",
    select: "Selecionar módulo",
    view: "Ver módulo",
    active: "Módulo ativo",
    cta: "Agendar demonstração",
    modules: [
      {
        name: "Clientes",
        desc: "Cadastro completo, diversos endereços e contatos, armazenamento e gestão de documentos, classificação de clientes, histórico unificado, controle de crédito, integração com outros setores e módulos.",
        chips: ["Agilidade no Atendimento", "Visão 360 Graus", "Segurança de Dados"],
      },
      {
        name: "Veículos",
        desc: "Registro de placa com identificação automática, RENAVAM, chassi, marca, modelo, ano, quilometragem e combustível, controle de documentos, vinculação ao proprietário, histórico de manutenção, dados de frota e técnicos e imagens.",
        chips: ["Facilidade de Cadastro", "Dados Corretos para Compras de Peças", "Organização Total"],
      },
      {
        name: "Produto/Peças",
        desc: "Dados cadastrais completos e especializados, dados fiscais, diversos códigos de identificação, modelos de veículos de aplicação, código de barras, grupos e categoria, imagens e anexos, e controle de preços, margens e reajustes.",
        chips: ["Agilidade de Pesquisa", "Precisão Tributária e Estoque", "Visão Completa"],
      },
      {
        name: "Serviços",
        desc: "Catálogo de serviços prestados, dados fiscais, tempário, valores por hora e/ou serviço, limites de descontos, e serviços de terceiros.",
        chips: ["Agilidade no Faturamento", "Organização das Vendas", "Padronização de Tempos e Custos"],
      },
      {
        name: "Cotação de Compras",
        desc: "Geração automática de requisições de compra, envio para fornecedores, comparativo inteligente, histórico de preços, controle de aprovação.",
        chips: ["Redução de Custos", "Agilidade de Compra", "Transparência e Controle"],
      },
      {
        name: "Compras",
        desc: "Cadastro de fornecedores, solicitação de compra, cotação, comparação e ordem de compra, aprovação por níveis, identificação e importação automática de notas.",
        chips: ["Controle Total", "Redução de Erros", "Conformidade Fiscal"],
      },
      {
        name: "Estoque",
        desc: "Entrada e saída, localização, histórico de movimentações, inventário, curva ABC.",
        chips: ["Redução de Rupturas", "Diminui Mercadorias Paradas", "Relatórios Precisos"],
      },
      {
        name: "Orçamentação",
        desc: "Criação rápida de orçamentos, importação de orçamentos, versões de orçamentos, funil de vendas, aprovação de orçamentos, envios e mensageria automática.",
        chips: ["Controle de status", "Menor Tempo de Aprovação", "Repescagem"],
      },
      {
        name: "Ordens de Serviço",
        desc: "Acompanhamento dos serviços, painel oficina inteligente, controle de peças e serviços, apontamento de horas, histórico completo, venda agregada.",
        chips: ["Redução de Custos", "Gestão a Vista", "Menos Tempo Parado"],
      },
      {
        name: "Pedidos de Venda",
        desc: "Registro rápido de produtos, quantidades, preços e condições de pagamento, consulta de estoque, aprovação de crédito, integração fiscal e faturamento e rastreabilidade do status do pedido.",
        chips: ["Agilidade de digitação", "Controle Gerencial", "Maior Faturamento"],
      },
      {
        name: "Controle de Produção",
        desc: "Visão em tempo real de cada OS, alocação de recursos e distribuição de serviços com IA, apontamento, gestão de insumos, indicadores de desempenho, eficiência, custo de mão de obra.",
        chips: ["Redução de Prazos", "Controle de Custos", "Organização"],
      },
      {
        name: "Gestão Financeira",
        desc: "Pagar e receber, fluxo de caixa, controle de vencimentos, previsões e projeções, conciliação bancária integrada, DRE, relatórios e gráficos gerenciais.",
        chips: ["Menos Trabalho", "Segurança", "Visão Completa"],
      },
      {
        name: "Faturamento e NFs",
        desc: "NF-e, NFS-e e NFC-e, regras de negócio, envio automatizado, cancelamento e carta de correção, e painel de monitoramento.",
        chips: ["Automação e Agilidade Total", "Zero Erros", "Maior Segurança Fiscal"],
      },
      {
        name: "Mobile",
        desc: "Atendimento e vendas externas, controle de produção, gestão de estoque, ordens de serviço e aprovações rápidas.",
        chips: ["Agilidade", "Mobilidade", "Conforto"],
      },
      {
        name: "Manutenção Preventiva",
        desc: "Cronograma de manutenções automático, controle de insumos, planos personalizados, alertas e notificações, predição e prevenção, e fidelização do cliente.",
        chips: ["Segurança e Conforto do Cliente", "Faturamento Constante", "Fidelização"],
      },
      {
        name: "Check List",
        desc: "Digitaliza e agiliza a inspeção veicular, elimina o uso de papel, padroniza as vistorias e identifica falhas, formulários personalizados, acesso mobile, fotos e vídeos e assinatura digital.",
        chips: ["Agilidade", "Segurança da Operação", "Zero Papel"],
      },
      {
        name: "Agendamento",
        desc: "Centraliza e organiza o atendimento, elimina conflitos de reservas, otimiza a produção, visão em tempo real das disponibilidades, e lembretes automáticos.",
        chips: ["Reserva Simplificada", "Alertas e Lembretes", "Planejamento"],
      },
      {
        name: "CRM",
        desc: "Centraliza e organiza todo o histórico de interações com os clientes e potenciais compradores (leads). Ele integra o setor comercial ao restante da empresa, ajudando a equipe a vender mais, fechar negócios mais rápido e fidelizar clientes.",
        chips: ["Funil de vendas visual", "Gestão de leads e conversões", "Aumento de vendas"],
      },
      {
        name: "Painéis e Gestão Visual",
        desc: "Centraliza as informações importantes, indicadores em tempo real, telas personalizáveis, gráficos interativos, acompanhamento de metas, alertas visuais, identificação de gargalos e falhas, e detecção de custos elevados.",
        chips: ["Decisões Estratégicas", "Economia de Tempo", "Visão 360 Graus"],
      },
    ],
  },
  universo: {
    kicker: "Universo Superfast",
    title: "Acompanhe o dia a dia da Super Fast no Instagram.",
    text: "Bastidores, dicas de gestão e histórias de oficinas direto dos nossos perfis oficiais.",
    follow: "Seguir",
    iframeTitle: "Posts do Instagram",
  },
  implementation: {
    kicker: "Implantação",
    title: "Implante o novo sistema da sua oficina de reparação automotiva, sem parar a operação.",
    cta: "Quero começar minha implantação",
    steps: [
      { title: "Diagnóstico", text: "Mapeamos a rotina e os gargalos da sua oficina mecânica." },
      { title: "Configuração", text: "O ERP é ajustado ao fluxo real da sua operação." },
      { title: "Treinamento", text: "Equipe treinada no ritmo da oficina, com suporte próximo." },
      { title: "Implantação", text: "Entrada em operação acompanhada em cada etapa." },
      { title: "Importação", text: "Importe dados do sistema antigo." },
      { title: "Operação", text: "Sua oficina roda com controle e evolução contínua." },
    ],
  },
  form: {
    eyebrow: "Solicite sua demonstração gratuita",
    intro: "Poucos dados. Uma conversa rápida sobre a rotina da sua oficina mecânica.",
    name: "Nome",
    company: "Empresa",
    whatsapp: "WhatsApp",
    city: "Cidade",
    error: "Preencha os campos para solicitar a demonstração.",
    submit: "Agendar demonstração",
    sending: "Enviando...",
    sentTitle: "Solicitação enviada.",
    sentText:
      "Abrimos seu e-mail com a solicitação preenchida. Basta confirmar o envio para nossa equipe entrar em contato.",
    mailSubject: "Solicitação de demonstração",
  },
  cookie: {
    aria: "Aviso de cookies",
    before: "Usamos cookies para melhorar sua experiência no site. Ao continuar navegando, você concorda com nossa",
    link: "Política de Privacidade",
    after: ".",
    reject: "Recusar",
    accept: "Aceitar",
  },
  privacy: {
    metaTitle: "Política de Privacidade | Super Fast",
    metaDescription:
      "Política de Privacidade da Super Fast: como coletamos, usamos e protegemos seus dados.",
    title: "Política de Privacidade",
    back: "Voltar ao site",
    disclaimer:
      "Este documento é um modelo geral e deve ser revisado por um profissional jurídico antes de sua adoção definitiva, garantindo que reflita com precisão as práticas reais de tratamento de dados da Super Fast.",
    sections: [
      {
        title: "1. Quem somos",
        body: "A Super Fast é um sistema de gestão (ERP) desenvolvido para oficinas de reparação automotiva. Esta política explica como tratamos os dados pessoais coletados através do nosso site institucional, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).",
      },
      {
        title: "2. Dados que coletamos",
        body: "Podemos coletar dados fornecidos voluntariamente por você em formulários de contato e solicitação de demonstração (nome, empresa, telefone/WhatsApp e cidade), além de dados de navegação coletados por cookies, como páginas visitadas e preferências de uso do site.",
      },
      {
        title: "3. Cookies",
        body: "Utilizamos cookies para lembrar suas preferências e melhorar sua experiência de navegação. Você pode aceitar ou recusar o uso de cookies não essenciais através do banner exibido no site. Cookies essenciais ao funcionamento do site podem ser mantidos independentemente da sua escolha.",
      },
      {
        title: "4. Finalidade do tratamento",
        body: "Os dados coletados são usados para responder a solicitações de contato e demonstração, agendar atendimentos comerciais, melhorar nosso site e conteúdo, e cumprir obrigações legais quando aplicável.",
      },
      {
        title: "5. Compartilhamento de dados",
        body: "Não vendemos nem compartilhamos seus dados pessoais com terceiros para fins de marketing sem o seu consentimento. Dados podem ser compartilhados com prestadores de serviço que apoiam nossa operação (como ferramentas de e-mail e agendamento), sempre sob obrigações de confidencialidade.",
      },
      {
        title: "6. Seus direitos",
        body: "Conforme a LGPD, você tem direito a confirmar a existência de tratamento, acessar, corrigir, solicitar a exclusão ou portabilidade dos seus dados, além de revogar consentimentos previamente concedidos. Para exercer esses direitos, entre em contato pelos canais abaixo.",
      },
      {
        title: "7. Contato",
        body: "Em caso de dúvidas sobre esta política ou sobre o tratamento dos seus dados, entre em contato pelo e-mail contato@sfast.com.br.",
      },
    ],
  },
};

export type Dict = typeof pt;

const es: Dict = {
  whatsappText: "Hola, quiero hablar con un especialista sobre Super Fast.",
  meta: {
    title: "Super Fast | ERP para talleres de reparación automotriz",
  },
  nav: {
    capacity: "Gestión Inteligente",
    testimonials: "Testimonios",
    implementation: "Implementación",
    demo: "Demostración",
    login: "Login SF",
  },
  header: {
    specialist: "Hable con un especialista",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    language: "Idioma",
  },
  floating: {
    aria: "Hablar con un especialista por WhatsApp",
    tooltip: "Hable con un especialista",
  },
  hero: {
    kicker: "Sistema para empresas automotrices",
    title: "Inteligencia que pone su operación en",
    titleHighlight: "alto rendimiento.",
    text: "Un sistema desarrollado para empresas automotrices que buscan control absoluto, decisiones rápidas y crecimiento sostenible.",
    cta: "Conocer la plataforma",
  },
  testimonials: {
    kicker: "Testimonios",
    title: "Talleres de reparación automotriz que ya sienten la diferencia.",
    intro:
      "Testimonios reales de talleres que cambiaron las planillas y el retrabajo por un ERP hecho para el día a día del taller.",
    videoWatch: "Ver video de testimonios de Super Fast",
    videoDialog: "Video de testimonios de Super Fast",
    videoClose: "Cerrar video",
    videoTitle: "Talleres que confían en Super Fast",
    drag: "Arrastre para ver más",
    hover: "Pase el mouse para leer",
    tap: "Toque para leer",
    cta: "Quiero los mismos resultados",
    items: [
      {
        company: "Taller Fleschcar",
        quote:
          "Aprendimos que es una construcción conjunta, porque el mejor sistema de gestión no funciona solo, sin la participación del dueño del taller. SFAST siempre aportó innovación al negocio y organizó los procesos, conectando las etapas del trabajo, donde cada profesional participa, contribuyendo para que, a través de los indicadores que entrega el sistema, se alcancen los resultados.",
      },
      {
        company: "Taller PEPE",
        quote:
          "Es un software de gestión indispensable para el día a día del negocio. Integración, confiabilidad de la información y facilidad de uso. Pero más que eso, no se trata solo de un sistema de gestión, ya que el equipo de soporte siempre está listo para resolver cualquier duda y ayudar en lo que sea necesario para mejorar juntos.",
      },
      {
        company: "Taller Sapão",
        quote:
          "Conocíamos el sistema Sfast desde hace algunos años por amigos que siempre lo elogiaban, pero pensábamos que no era una prioridad para nuestra empresa. Después de conocer a Rui personalmente y conversar sobre gestión de talleres, sentimos la experiencia de Sfast y decidimos arriesgarnos. Hoy, después de tres años, no podemos imaginar nuestro taller operando sin el sistema. Puedo afirmar que más que clientes, nos volvimos amigos y, claro, ¡fans!",
      },
    ],
  },
  conversion: {
    kicker: "Demostración gratuita",
    title: "Vea su nuevo sistema en la práctica.",
    text: "Agende una demostración gratuita y vea cómo Super Fast conecta atención, órdenes de servicio, inventario y finanzas en un único sistema de gestión para talleres.",
    benefits: [
      "Demostración personalizada para la rutina de su taller",
      "Diagnóstico de los cuellos de botella que frenan su operación",
      "Plan de implementación claro, sin rodeos",
    ],
    whatsapp: "Prefiero hablar ahora por WhatsApp",
  },
  footer: {
    privacy: "Política de Privacidad",
    startNow: "Comience hoy mismo",
    developedBy: "Desarrollado por",
    city: "Porto Alegre/RS",
  },
  carousel: {
    kicker: "Gestión Inteligente",
    title: "Todo lo que su taller necesita en un único sistema.",
    text: "Desde la primera atención hasta la entrega del vehículo, de la atención a la posventa, conectamos personas, procesos e información para que su operación funcione de forma organizada y previsible.",
    region: "Carrusel de módulos del sistema",
    prev: "Módulo anterior",
    next: "Siguiente módulo",
    select: "Seleccionar módulo",
    view: "Ver módulo",
    active: "Módulo activo",
    cta: "Agendar demostración",
    modules: [
      {
        name: "Clientes",
        desc: "Registro completo, múltiples direcciones y contactos, almacenamiento y gestión de documentos, clasificación de clientes, historial unificado, control de crédito, integración con otros sectores y módulos.",
        chips: ["Agilidad en la Atención", "Visión 360 Grados", "Seguridad de Datos"],
      },
      {
        name: "Vehículos",
        desc: "Registro de placa con identificación automática, RENAVAM, chasis, marca, modelo, año, kilometraje y combustible, control de documentos, vinculación al propietario, historial de mantenimiento, datos de flota y técnicos e imágenes.",
        chips: ["Facilidad de Registro", "Datos Correctos para Compra de Repuestos", "Organización Total"],
      },
      {
        name: "Productos/Repuestos",
        desc: "Datos de registro completos y especializados, datos fiscales, diversos códigos de identificación, modelos de vehículos de aplicación, código de barras, grupos y categorías, imágenes y archivos adjuntos, y control de precios, márgenes y reajustes.",
        chips: ["Agilidad de Búsqueda", "Precisión Tributaria y de Inventario", "Visión Completa"],
      },
      {
        name: "Servicios",
        desc: "Catálogo de servicios prestados, datos fiscales, tiempos estándar, valores por hora y/o servicio, límites de descuento y servicios de terceros.",
        chips: ["Agilidad en la Facturación", "Organización de las Ventas", "Estandarización de Tiempos y Costos"],
      },
      {
        name: "Cotización de Compras",
        desc: "Generación automática de solicitudes de compra, envío a proveedores, comparativo inteligente, historial de precios, control de aprobación.",
        chips: ["Reducción de Costos", "Agilidad de Compra", "Transparencia y Control"],
      },
      {
        name: "Compras",
        desc: "Registro de proveedores, solicitud de compra, cotización, comparación y orden de compra, aprobación por niveles, identificación e importación automática de facturas.",
        chips: ["Control Total", "Reducción de Errores", "Cumplimiento Fiscal"],
      },
      {
        name: "Inventario",
        desc: "Entrada y salida, ubicación, historial de movimientos, inventario físico, curva ABC.",
        chips: ["Reducción de Faltantes", "Menos Mercadería Parada", "Informes Precisos"],
      },
      {
        name: "Presupuestos",
        desc: "Creación rápida de presupuestos, importación de presupuestos, versiones de presupuestos, embudo de ventas, aprobación de presupuestos, envíos y mensajería automática.",
        chips: ["Control de estado", "Menor Tiempo de Aprobación", "Recuperación de Presupuestos"],
      },
      {
        name: "Órdenes de Servicio",
        desc: "Seguimiento de los servicios, panel de taller inteligente, control de repuestos y servicios, registro de horas, historial completo, venta adicional.",
        chips: ["Reducción de Costos", "Gestión Visual", "Menos Tiempo Parado"],
      },
      {
        name: "Pedidos de Venta",
        desc: "Registro rápido de productos, cantidades, precios y condiciones de pago, consulta de inventario, aprobación de crédito, integración fiscal y facturación, y trazabilidad del estado del pedido.",
        chips: ["Agilidad de digitación", "Control Gerencial", "Mayor Facturación"],
      },
      {
        name: "Control de Producción",
        desc: "Visión en tiempo real de cada OS, asignación de recursos y distribución de servicios con IA, registro de actividades, gestión de insumos, indicadores de desempeño, eficiencia, costo de mano de obra.",
        chips: ["Reducción de Plazos", "Control de Costos", "Organización"],
      },
      {
        name: "Gestión Financiera",
        desc: "Cuentas por pagar y cobrar, flujo de caja, control de vencimientos, previsiones y proyecciones, conciliación bancaria integrada, estado de resultados, informes y gráficos gerenciales.",
        chips: ["Menos Trabajo", "Seguridad", "Visión Completa"],
      },
      {
        name: "Facturación y Notas Fiscales",
        desc: "NF-e, NFS-e y NFC-e, reglas de negocio, envío automatizado, cancelación y carta de corrección, y panel de monitoreo.",
        chips: ["Automatización y Agilidad Total", "Cero Errores", "Mayor Seguridad Fiscal"],
      },
      {
        name: "Mobile",
        desc: "Atención y ventas externas, control de producción, gestión de inventario, órdenes de servicio y aprobaciones rápidas.",
        chips: ["Agilidad", "Movilidad", "Comodidad"],
      },
      {
        name: "Mantenimiento Preventivo",
        desc: "Cronograma de mantenimientos automático, control de insumos, planes personalizados, alertas y notificaciones, predicción y prevención, y fidelización del cliente.",
        chips: ["Seguridad y Confort del Cliente", "Facturación Constante", "Fidelización"],
      },
      {
        name: "Checklist",
        desc: "Digitaliza y agiliza la inspección vehicular, elimina el uso de papel, estandariza las revisiones e identifica fallas, formularios personalizados, acceso móvil, fotos y videos y firma digital.",
        chips: ["Agilidad", "Seguridad de la Operación", "Cero Papel"],
      },
      {
        name: "Agenda",
        desc: "Centraliza y organiza la atención, elimina conflictos de reservas, optimiza la producción, visión en tiempo real de la disponibilidad y recordatorios automáticos.",
        chips: ["Reserva Simplificada", "Alertas y Recordatorios", "Planificación"],
      },
      {
        name: "CRM",
        desc: "Centraliza y organiza todo el historial de interacciones con los clientes y potenciales compradores (leads). Integra el área comercial con el resto de la empresa, ayudando al equipo a vender más, cerrar negocios más rápido y fidelizar clientes.",
        chips: ["Embudo de ventas visual", "Gestión de leads y conversiones", "Aumento de ventas"],
      },
      {
        name: "Paneles y Gestión Visual",
        desc: "Centraliza la información importante, indicadores en tiempo real, pantallas personalizables, gráficos interactivos, seguimiento de metas, alertas visuales, identificación de cuellos de botella y fallas, y detección de costos elevados.",
        chips: ["Decisiones Estratégicas", "Ahorro de Tiempo", "Visión 360 Grados"],
      },
    ],
  },
  universo: {
    kicker: "Universo Superfast",
    title: "Siga el día a día de Super Fast en Instagram.",
    text: "Detrás de escena, consejos de gestión e historias de talleres directamente desde nuestros perfiles oficiales.",
    follow: "Seguir",
    iframeTitle: "Publicaciones de Instagram",
  },
  implementation: {
    kicker: "Implementación",
    title: "Implemente el nuevo sistema de su taller de reparación automotriz, sin detener la operación.",
    cta: "Quiero comenzar mi implementación",
    steps: [
      { title: "Diagnóstico", text: "Mapeamos la rutina y los cuellos de botella de su taller mecánico." },
      { title: "Configuración", text: "El ERP se ajusta al flujo real de su operación." },
      { title: "Capacitación", text: "Equipo capacitado al ritmo del taller, con soporte cercano." },
      { title: "Implementación", text: "Puesta en marcha acompañada en cada etapa." },
      { title: "Importación", text: "Importe los datos del sistema anterior." },
      { title: "Operación", text: "Su taller funciona con control y evolución continua." },
    ],
  },
  form: {
    eyebrow: "Solicite su demostración gratuita",
    intro: "Pocos datos. Una conversación rápida sobre la rutina de su taller mecánico.",
    name: "Nombre",
    company: "Empresa",
    whatsapp: "WhatsApp",
    city: "Ciudad",
    error: "Complete los campos para solicitar la demostración.",
    submit: "Agendar demostración",
    sending: "Enviando...",
    sentTitle: "Solicitud enviada.",
    sentText:
      "Abrimos su correo con la solicitud completada. Solo confirme el envío para que nuestro equipo se ponga en contacto.",
    mailSubject: "Solicitud de demostración",
  },
  cookie: {
    aria: "Aviso de cookies",
    before: "Usamos cookies para mejorar su experiencia en el sitio. Al continuar navegando, usted acepta nuestra",
    link: "Política de Privacidad",
    after: ".",
    reject: "Rechazar",
    accept: "Aceptar",
  },
  privacy: {
    metaTitle: "Política de Privacidad | Super Fast",
    metaDescription:
      "Política de Privacidad de Super Fast: cómo recopilamos, usamos y protegemos sus datos.",
    title: "Política de Privacidad",
    back: "Volver al sitio",
    disclaimer:
      "Este documento es un modelo general y debe ser revisado por un profesional jurídico antes de su adopción definitiva, para garantizar que refleje con precisión las prácticas reales de tratamiento de datos de Super Fast.",
    sections: [
      {
        title: "1. Quiénes somos",
        body: "Super Fast es un sistema de gestión (ERP) desarrollado para talleres de reparación automotriz. Esta política explica cómo tratamos los datos personales recopilados a través de nuestro sitio institucional, de conformidad con la Ley General de Protección de Datos de Brasil (Ley n.º 13.709/2018 — LGPD).",
      },
      {
        title: "2. Datos que recopilamos",
        body: "Podemos recopilar datos proporcionados voluntariamente por usted en formularios de contacto y solicitud de demostración (nombre, empresa, teléfono/WhatsApp y ciudad), además de datos de navegación recopilados mediante cookies, como páginas visitadas y preferencias de uso del sitio.",
      },
      {
        title: "3. Cookies",
        body: "Utilizamos cookies para recordar sus preferencias y mejorar su experiencia de navegación. Usted puede aceptar o rechazar el uso de cookies no esenciales mediante el banner que se muestra en el sitio. Las cookies esenciales para el funcionamiento del sitio pueden mantenerse independientemente de su elección.",
      },
      {
        title: "4. Finalidad del tratamiento",
        body: "Los datos recopilados se utilizan para responder a solicitudes de contacto y demostración, agendar atenciones comerciales, mejorar nuestro sitio y contenido, y cumplir obligaciones legales cuando corresponda.",
      },
      {
        title: "5. Compartición de datos",
        body: "No vendemos ni compartimos sus datos personales con terceros con fines de marketing sin su consentimiento. Los datos pueden compartirse con proveedores de servicios que apoyan nuestra operación (como herramientas de correo electrónico y agenda), siempre bajo obligaciones de confidencialidad.",
      },
      {
        title: "6. Sus derechos",
        body: "Conforme a la LGPD, usted tiene derecho a confirmar la existencia de tratamiento, acceder, corregir, solicitar la eliminación o portabilidad de sus datos, además de revocar consentimientos otorgados previamente. Para ejercer estos derechos, comuníquese por los canales indicados a continuación.",
      },
      {
        title: "7. Contacto",
        body: "Si tiene dudas sobre esta política o sobre el tratamiento de sus datos, escriba al correo contato@sfast.com.br.",
      },
    ],
  },
};

const en: Dict = {
  whatsappText: "Hello, I'd like to talk to a specialist about Super Fast.",
  meta: {
    title: "Super Fast | ERP for auto repair shops",
  },
  nav: {
    capacity: "Smart Management",
    testimonials: "Testimonials",
    implementation: "Implementation",
    demo: "Demo",
    login: "SF Login",
  },
  header: {
    specialist: "Talk to a specialist",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },
  floating: {
    aria: "Talk to a specialist on WhatsApp",
    tooltip: "Talk to a specialist",
  },
  hero: {
    kicker: "Software for automotive businesses",
    title: "Intelligence that puts your operation at",
    titleHighlight: "peak performance.",
    text: "A system built for automotive businesses that want absolute control, fast decisions and sustainable growth.",
    cta: "Explore the platform",
  },
  testimonials: {
    kicker: "Testimonials",
    title: "Auto repair shops that already feel the difference.",
    intro:
      "Real testimonials from shops that traded spreadsheets and rework for an ERP built for the daily routine of a workshop.",
    videoWatch: "Watch the Super Fast testimonials video",
    videoDialog: "Super Fast testimonials video",
    videoClose: "Close video",
    videoTitle: "Shops that trust Super Fast",
    drag: "Drag to see more",
    hover: "Hover to read",
    tap: "Tap to read",
    cta: "I want the same results",
    items: [
      {
        company: "Fleschcar Auto Shop",
        quote:
          "We learned that it is a joint effort, because even the best management system does not work on its own, without the involvement of the shop owner. SFAST has always brought innovation to the business and organized our processes, tying the stages of work together, with every professional taking part, so that, through the indicators the system provides, results are achieved.",
      },
      {
        company: "PEPE Auto Shop",
        quote:
          "It is management software that is indispensable for the daily running of the business. Integration, reliable information and ease of use. But more than that, it is not just a management system, because the support team is always ready to answer any questions and help with whatever is needed so we can improve together.",
      },
      {
        company: "Sapão Auto Shop",
        quote:
          "We had known the Sfast system for a few years through friends who always praised it, but we didn't think it was a priority for our company. After meeting Rui in person and talking about workshop management, we felt Sfast's expertise and decided to take the chance. Today, three years later, we can't picture our shop running without the system. I can say that more than customers, we became friends and, of course, fans!",
      },
    ],
  },
  conversion: {
    kicker: "Free demo",
    title: "See your new system in action.",
    text: "Book a free demo and see how Super Fast connects customer service, work orders, inventory and finance in a single management system for auto repair shops.",
    benefits: [
      "A demo tailored to your shop's routine",
      "Diagnosis of the bottlenecks holding your operation back",
      "A clear implementation plan, no fluff",
    ],
    whatsapp: "I'd rather talk now on WhatsApp",
  },
  footer: {
    privacy: "Privacy Policy",
    startNow: "Get started today",
    developedBy: "Developed by",
    city: "Porto Alegre, Brazil",
  },
  carousel: {
    kicker: "Smart Management",
    title: "Everything your shop needs in a single system.",
    text: "From the first customer contact to vehicle delivery, from service to after-sales, we connect people, processes and information so your operation runs in an organized and predictable way.",
    region: "System modules carousel",
    prev: "Previous module",
    next: "Next module",
    select: "Select module",
    view: "View module",
    active: "Active module",
    cta: "Book a demo",
    modules: [
      {
        name: "Customers",
        desc: "Complete records, multiple addresses and contacts, document storage and management, customer classification, unified history, credit control, integration with other departments and modules.",
        chips: ["Faster Service", "360° View", "Data Security"],
      },
      {
        name: "Vehicles",
        desc: "License plate lookup with automatic identification, RENAVAM, chassis, make, model, year, mileage and fuel, document control, owner linking, maintenance history, fleet and technician data and images.",
        chips: ["Easy Registration", "Accurate Data for Parts Purchasing", "Total Organization"],
      },
      {
        name: "Products/Parts",
        desc: "Complete and specialized product records, tax data, multiple identification codes, compatible vehicle models, barcodes, groups and categories, images and attachments, and control of prices, margins and adjustments.",
        chips: ["Fast Search", "Tax and Stock Accuracy", "Complete Overview"],
      },
      {
        name: "Services",
        desc: "Catalog of services provided, tax data, standard labor times, hourly and/or per-service rates, discount limits, and third-party services.",
        chips: ["Faster Invoicing", "Organized Sales", "Standardized Times and Costs"],
      },
      {
        name: "Purchase Quotes",
        desc: "Automatic generation of purchase requests, sending to suppliers, smart comparison, price history, approval control.",
        chips: ["Lower Costs", "Faster Purchasing", "Transparency and Control"],
      },
      {
        name: "Purchasing",
        desc: "Supplier records, purchase requests, quotes, comparison and purchase orders, multi-level approval, automatic invoice identification and import.",
        chips: ["Total Control", "Fewer Errors", "Tax Compliance"],
      },
      {
        name: "Inventory",
        desc: "Stock in and out, locations, movement history, stocktaking, ABC curve.",
        chips: ["Fewer Stockouts", "Less Idle Stock", "Accurate Reports"],
      },
      {
        name: "Estimates",
        desc: "Quick estimate creation, estimate import, estimate versions, sales funnel, estimate approval, automatic sending and messaging.",
        chips: ["Status Control", "Faster Approval", "Follow-up on Lost Quotes"],
      },
      {
        name: "Work Orders",
        desc: "Service tracking, smart shop dashboard, parts and services control, time logging, complete history, add-on sales.",
        chips: ["Lower Costs", "At-a-Glance Management", "Less Downtime"],
      },
      {
        name: "Sales Orders",
        desc: "Quick entry of products, quantities, prices and payment terms, stock lookup, credit approval, tax integration and invoicing, and order status traceability.",
        chips: ["Fast Data Entry", "Managerial Control", "Higher Revenue"],
      },
      {
        name: "Production Control",
        desc: "Real-time view of every work order, AI-assisted resource allocation and service distribution, time logging, supplies management, performance indicators, efficiency, labor cost.",
        chips: ["Shorter Lead Times", "Cost Control", "Organization"],
      },
      {
        name: "Financial Management",
        desc: "Payables and receivables, cash flow, due date control, forecasts and projections, integrated bank reconciliation, income statement, management reports and charts.",
        chips: ["Less Work", "Security", "Complete Overview"],
      },
      {
        name: "Billing and Invoices",
        desc: "NF-e, NFS-e and NFC-e (Brazilian electronic invoices), business rules, automated sending, cancellation and correction letters, and a monitoring dashboard.",
        chips: ["Full Automation and Speed", "Zero Errors", "Greater Tax Security"],
      },
      {
        name: "Mobile",
        desc: "On-the-go service and sales, production control, inventory management, work orders and quick approvals.",
        chips: ["Speed", "Mobility", "Comfort"],
      },
      {
        name: "Preventive Maintenance",
        desc: "Automatic maintenance schedule, supplies control, custom plans, alerts and notifications, prediction and prevention, and customer loyalty.",
        chips: ["Customer Safety and Comfort", "Steady Revenue", "Loyalty"],
      },
      {
        name: "Checklist",
        desc: "Digitizes and speeds up vehicle inspection, eliminates paper, standardizes inspections and flags faults, custom forms, mobile access, photos and videos and digital signature.",
        chips: ["Speed", "Operational Safety", "Paperless"],
      },
      {
        name: "Scheduling",
        desc: "Centralizes and organizes customer service, eliminates booking conflicts, optimizes production, real-time view of availability, and automatic reminders.",
        chips: ["Simple Booking", "Alerts and Reminders", "Planning"],
      },
      {
        name: "CRM",
        desc: "Centralizes and organizes the entire history of interactions with customers and potential buyers (leads). It connects the sales team to the rest of the company, helping them sell more, close deals faster and retain customers.",
        chips: ["Visual sales funnel", "Lead and conversion management", "Sales growth"],
      },
      {
        name: "Dashboards and Visual Management",
        desc: "Centralizes key information, real-time indicators, customizable screens, interactive charts, goal tracking, visual alerts, bottleneck and failure identification, and detection of high costs.",
        chips: ["Strategic Decisions", "Time Savings", "360° View"],
      },
    ],
  },
  universo: {
    kicker: "Superfast Universe",
    title: "Follow Super Fast's day-to-day on Instagram.",
    text: "Behind the scenes, management tips and stories from auto shops, straight from our official profiles.",
    follow: "Follow",
    iframeTitle: "Instagram posts",
  },
  implementation: {
    kicker: "Implementation",
    title: "Implement the new system in your auto repair shop without stopping operations.",
    cta: "I want to start my implementation",
    steps: [
      { title: "Diagnosis", text: "We map your auto shop's routine and bottlenecks." },
      { title: "Setup", text: "The ERP is tailored to the real flow of your operation." },
      { title: "Training", text: "Your team is trained at the pace of the shop, with close support." },
      { title: "Go-live", text: "Start of operation, supported at every stage." },
      { title: "Import", text: "Import data from your old system." },
      { title: "Operation", text: "Your shop runs with control and continuous improvement." },
    ],
  },
  form: {
    eyebrow: "Request your free demo",
    intro: "Just a few details. A quick conversation about your auto shop's routine.",
    name: "Name",
    company: "Company",
    whatsapp: "WhatsApp",
    city: "City",
    error: "Please fill in all fields to request the demo.",
    submit: "Book a demo",
    sending: "Sending...",
    sentTitle: "Request sent.",
    sentText:
      "We opened your email app with the request filled in. Just confirm sending so our team can get in touch.",
    mailSubject: "Demo request",
  },
  cookie: {
    aria: "Cookie notice",
    before: "We use cookies to improve your experience on the site. By continuing to browse, you agree to our",
    link: "Privacy Policy",
    after: ".",
    reject: "Decline",
    accept: "Accept",
  },
  privacy: {
    metaTitle: "Privacy Policy | Super Fast",
    metaDescription:
      "Super Fast Privacy Policy: how we collect, use and protect your data.",
    title: "Privacy Policy",
    back: "Back to site",
    disclaimer:
      "This document is a general template and should be reviewed by a legal professional before final adoption, to ensure it accurately reflects Super Fast's actual data processing practices.",
    sections: [
      {
        title: "1. Who we are",
        body: "Super Fast is a management system (ERP) developed for auto repair shops. This policy explains how we handle personal data collected through our corporate website, in compliance with Brazil's General Data Protection Law (Law No. 13,709/2018 — LGPD).",
      },
      {
        title: "2. Data we collect",
        body: "We may collect data you voluntarily provide in contact and demo request forms (name, company, phone/WhatsApp and city), as well as browsing data collected through cookies, such as pages visited and site usage preferences.",
      },
      {
        title: "3. Cookies",
        body: "We use cookies to remember your preferences and improve your browsing experience. You can accept or decline non-essential cookies through the banner shown on the site. Cookies essential to the operation of the site may be kept regardless of your choice.",
      },
      {
        title: "4. Purpose of processing",
        body: "The data collected is used to respond to contact and demo requests, schedule sales meetings, improve our site and content, and comply with legal obligations where applicable.",
      },
      {
        title: "5. Data sharing",
        body: "We do not sell or share your personal data with third parties for marketing purposes without your consent. Data may be shared with service providers that support our operation (such as email and scheduling tools), always under confidentiality obligations.",
      },
      {
        title: "6. Your rights",
        body: "Under the LGPD, you have the right to confirm the existence of processing, access, correct, request deletion or portability of your data, and withdraw previously given consent. To exercise these rights, contact us through the channels below.",
      },
      {
        title: "7. Contact",
        body: "If you have questions about this policy or the processing of your data, please contact us at contato@sfast.com.br.",
      },
    ],
  },
};

export const dictionaries: Record<Lang, Dict> = { pt, es, en };
