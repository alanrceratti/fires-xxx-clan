export type Locale = "pt-BR";

export type NavItem = {
  label: string;
  href: string;
};

export type Dictionary = {
  brand: {
    name: string;
    tagline: string;
  };
  navigation: NavItem[];
  header: {
    ctaLabel: string;
    ctaHref: string;
    mobileLabel: string;
  };
  footer: {
    quickLinksLabel: string;
    legalLinksLabel: string;
    legalLinks: NavItem[];
    archiveLinksLabel: string;
    signature: string;
  };
  common: {
    watchVideo: string;
    openLink: string;
    backToTop: string;
  };
  home: {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
      primaryCta: string;
      primaryHref: string;
      secondaryCta: string;
      secondaryHref: string;
    };
    sections: {
      statsTitle: string;
      timelineTitle: string;
      timelineDescription: string;
      videosTitle: string;
      videosDescription: string;
      membersTitle: string;
      membersDescription: string;
      archiveTitle: string;
      archiveDescription: string;
      finalTitle: string;
      finalDescription: string;
      finalCta: string;
      finalHref: string;
    };
  };
  videosPage: {
    title: string;
    description: string;
    searchLabel: string;
    searchPlaceholder: string;
    loading: string;
    error: string;
    empty: string;
    filterAll: string;
    channelLabel: string;
  };
  membersPage: {
    title: string;
    description: string;
    roleLabel: string;
    countryLabel: string;
    noteLabel: string;
  };
  historyPage: {
    title: string;
    description: string;
    observedFactsTitle: string;
    inferredSignalsTitle: string;
  };
  contactPage: {
    title: string;
    description: string;
    supportTitle: string;
    supportDescription: string;
    supportCta: string;
    supportHref: string;
    formTitle: string;
    formDescription: string;
    fields: {
      name: string;
      email: string;
      message: string;
      submit: string;
      submitting: string;
    };
    validation: {
      required: string;
      invalidEmail: string;
      shortMessage: string;
    };
    status: {
      successTitle: string;
      successMessage: string;
      errorTitle: string;
      errorMessage: string;
    };
    toast: {
      success: string;
      error: string;
    };
  };
  legal: {
    terms: {
      title: string;
      intro: string;
      items: string[];
    };
    privacy: {
      title: string;
      intro: string;
      items: string[];
    };
    dataDeletion: {
      title: string;
      intro: string;
      items: string[];
    };
  };
  cookieBanner: {
    title: string;
    description: string;
    accept: string;
    reject: string;
    acceptedToast: string;
    rejectedToast: string;
  };
};

const ptBRDictionary: Dictionary = {
  brand: {
    name: "FiReS-xXx",
    tagline: "Arquivo histórico do clã no Worms 4 Mayhem",
  },
  navigation: [
    { label: "Início", href: "/" },
    { label: "História", href: "/historia" },
    { label: "Vídeos", href: "/videos" },
    { label: "Membros", href: "/membros" },
    { label: "Contato", href: "/contato" },
  ],
  header: {
    ctaLabel: "Ver canal alanrc2008",
    ctaHref: "https://www.youtube.com/@alanrc2008",
    mobileLabel: "Abrir menu",
  },
  footer: {
    quickLinksLabel: "Navegação rápida",
    legalLinksLabel: "Páginas legais",
    legalLinks: [
      { label: "Termos", href: "/termos" },
      { label: "Privacidade", href: "/privacidade" },
      { label: "Exclusão de dados", href: "/exclusao-de-dados" },
    ],
    archiveLinksLabel: "Arquivo base",
    signature:
      "Projeto de preservação da memória do clã {FiReS-xXx} e da cena Worms Mayhem.",
  },
  common: {
    watchVideo: "Assistir no YouTube",
    openLink: "Abrir link",
    backToTop: "Voltar ao topo",
  },
  home: {
    hero: {
      eyebrow: "Clã clássico da cena 2008-2010",
      title: "FiReS-xXx Clan",
      description:
        "Uma vitrine dedicada aos vídeos, membros e registros que marcaram a fase competitiva do Worms 4 Mayhem. Tudo reunido em um só lugar para quem viveu a era dos ropers.",
      primaryCta: "Explorar vídeos históricos",
      primaryHref: "/videos",
      secondaryCta: "Ver linha do tempo",
      secondaryHref: "/historia",
    },
    sections: {
      statsTitle: "Resumo rápido",
      timelineTitle: "Linha do tempo",
      timelineDescription:
        "Eventos públicos mapeados em canais, páginas arquivadas e vídeos do próprio clã.",
      videosTitle: "Vídeos em destaque",
      videosDescription:
        "Clipes e montagens que ajudaram a consolidar a identidade do FiReS-xXx.",
      membersTitle: "Núcleo de membros conhecidos",
      membersDescription:
        "Nomes levantados a partir das páginas arquivadas e créditos dos vídeos.",
      archiveTitle: "Fontes do acervo",
      archiveDescription:
        "Links utilizados para preservar a memória e validar a história do clã.",
      finalTitle: "Quer contribuir com mais material?",
      finalDescription:
        "Se você tem prints, vídeos ou mapas antigos, envie para enriquecer este arquivo.",
      finalCta: "Enviar material",
      finalHref: "/contato",
    },
  },
  videosPage: {
    title: "Vídeos do clã",
    description:
      "Catálogo com os vídeos mais conhecidos ligados ao FiReS-xXx e seus integrantes.",
    searchLabel: "Buscar vídeo",
    searchPlaceholder: "Digite título, canal ou ano",
    loading: "Carregando resultado...",
    error: "Não foi possível carregar a lista agora. Tente novamente em instantes.",
    empty: "Nenhum vídeo encontrado para o filtro aplicado.",
    filterAll: "Todos os canais",
    channelLabel: "Canal",
  },
  membersPage: {
    title: "Membros e tags",
    description:
      "Relação de integrantes citados no site arquivado do clã e nos vídeos históricos.",
    roleLabel: "Papel conhecido",
    countryLabel: "Base",
    noteLabel: "Observação",
  },
  historyPage: {
    title: "História do FiReS-xXx",
    description:
      "Cronologia com fatos observados e sinais da cultura roper no período ativo do clã.",
    observedFactsTitle: "Fatos observados",
    inferredSignalsTitle: "Inferências consistentes",
  },
  contactPage: {
    title: "Contato e contribuição",
    description:
      "Use o formulário para enviar links, correções ou mídia antiga do clã.",
    supportTitle: "Canal oficial da época",
    supportDescription:
      "O canal alanrc2008 permanece como principal referência dos uploads originais.",
    supportCta: "Abrir canal",
    supportHref: "https://www.youtube.com/@alanrc2008",
    formTitle: "Envie uma mensagem",
    formDescription:
      "Mínimo de 15 caracteres para registrar informações úteis ao arquivo.",
    fields: {
      name: "Nome",
      email: "E-mail",
      message: "Mensagem",
      submit: "Enviar contribuição",
      submitting: "Enviando...",
    },
    validation: {
      required: "Preencha nome, e-mail e mensagem.",
      invalidEmail: "Digite um e-mail válido.",
      shortMessage: "A mensagem precisa ter ao menos 15 caracteres.",
    },
    status: {
      successTitle: "Recebido com sucesso",
      successMessage:
        "Obrigado por contribuir. Seu conteúdo pode ajudar a preservar a história do clã.",
      errorTitle: "Não foi possível enviar",
      errorMessage:
        "Revise os campos e tente novamente. Se persistir, envie direto no canal do YouTube.",
    },
    toast: {
      success: "Mensagem enviada com sucesso.",
      error: "Falha ao enviar. Revise os dados e tente novamente.",
    },
  },
  legal: {
    terms: {
      title: "Termos de uso",
      intro:
        "Este site é um arquivo histórico não oficial, criado para preservação de memória comunitária.",
      items: [
        "Os vídeos e marcas citados pertencem aos seus respectivos autores.",
        "Conteúdo enviado por terceiros pode ser revisado antes de publicação.",
        "Solicitações de remoção de conteúdo serão avaliadas com prioridade.",
      ],
    },
    privacy: {
      title: "Política de privacidade",
      intro:
        "Coletamos somente os dados necessários para responder mensagens enviadas no formulário.",
      items: [
        "Nome, e-mail e mensagem são usados apenas para retorno sobre o acervo.",
        "Não comercializamos nem compartilhamos dados pessoais com terceiros.",
        "Você pode solicitar atualização ou remoção dos dados a qualquer momento.",
      ],
    },
    dataDeletion: {
      title: "Exclusão de dados",
      intro:
        "Para remover seus dados deste site, envie uma solicitação pelo formulário de contato.",
      items: [
        "Informe o mesmo e-mail utilizado no envio anterior.",
        "Descreva o conteúdo que deve ser removido.",
        "A remoção será concluída em até 7 dias úteis.",
      ],
    },
  },
  cookieBanner: {
    title: "Uso de cookies",
    description:
      "Este site usa cookies locais para guardar preferências de navegação e consentimento.",
    accept: "Aceitar",
    reject: "Recusar",
    acceptedToast: "Preferência de cookies salva.",
    rejectedToast: "Cookies opcionais desativados.",
  },
};

const dictionaries: Record<Locale, Dictionary> = {
  "pt-BR": ptBRDictionary,
};

export function getDictionary(locale: Locale = "pt-BR"): Dictionary {
  return dictionaries[locale];
}
