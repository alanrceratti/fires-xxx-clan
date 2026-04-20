export type ClanVideo = {
  id: string;
  title: string;
  channel: string;
  publishedAt: string;
  description: string;
  link: string;
};

export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};

export type ClanMember = {
  name: string;
  tag: string;
  role: string;
  country: string;
  note: string;
  videoId: string;
};

export type ArchiveLink = {
  label: string;
  description: string;
  href: string;
};

export const overviewStats = [
  { label: "Vídeos mapeados", value: "12" },
  { label: "Período ativo", value: "2008-2010" },
  { label: "Canais relacionados", value: "5+" },
  { label: "Países citados", value: "Brasil / Colômbia / Argentina" },
];

export const videos: ClanVideo[] = [
  {
    id: "xv6y2nW2Z6k",
    title: "Worms 4 Mayhem PRO {FiReS-xXx}",
    channel: "alanrc2008",
    publishedAt: "2008-08-18",
    description:
      "Primeiro vídeo do clã, apresentado como gameplay PRO de Worms 4 Mayhem.",
    link: "https://www.youtube.com/watch?v=xv6y2nW2Z6k",
  },
  {
    id: "qXGU-LcYm1o",
    title: "{FiReS-xXx} Leaders (part 1)",
    channel: "FilipeDiDiOAlan",
    publishedAt: "2009-01-18",
    description: "Primeira parte dos líderes, com foco no estilo competitivo.",
    link: "https://www.youtube.com/watch?v=qXGU-LcYm1o",
  },
  {
    id: "69DHyivMAWM",
    title: "{FiReS-xXx} Leaders (part 2)",
    channel: "FilipeDiDiOAlan",
    publishedAt: "2009-01-18",
    description: "Continuação da edição de líderes do clã.",
    link: "https://www.youtube.com/watch?v=69DHyivMAWM",
  },
  {
    id: "-kpGQE6at2g",
    title: "The Wormatrix",
    channel: "FilipeDiDiOAlan",
    publishedAt: "2009-02-19",
    description:
      "Vídeo descrito como gameplay de alto nível no Worms 4 Mayhem.",
    link: "https://www.youtube.com/watch?v=-kpGQE6at2g",
  },
  {
    id: "sD24RUSGhVE",
    title: "{FiReS } SAW - Worms 4 Mayhem",
    channel: "alanrc2008",
    publishedAt: "2009-06-28",
    description: "Trailer temático inspirado em SAW dentro de Worms 4 Mayhem.",
    link: "https://www.youtube.com/watch?v=sD24RUSGhVE",
  },
  {
    id: "ohn4riPoFH8",
    title: "{FiReS-xXx} Intro HD 720p 'Breaking the Ice'",
    channel: "FilipeDiDiOAlan",
    publishedAt: "2009-07-10",
    description: "Nova intro do clã com identidade visual oficial da época.",
    link: "https://www.youtube.com/watch?v=ohn4riPoFH8",
  },
  {
    id: "oanUo89f9mg",
    title: "{FiReS} Didio's BUG",
    channel: "alanrc2008",
    publishedAt: "2009-11-12",
    description:
      "Clipping de bug em partida com Didio, publicado no canal alanrc2008.",
    link: "https://www.youtube.com/watch?v=oanUo89f9mg",
  },
  {
    id: "vctkNYeF2_4",
    title: "{FiReS-xXx}ATON|D|R|",
    channel: "Natanael01ATON",
    publishedAt: "2009",
    description: "Gameplay individual associado ao clã.",
    link: "https://www.youtube.com/watch?v=vctkNYeF2_4",
  },
  {
    id: "qf2E78-DAnI",
    title: "{FiReS-xXx}AdeS{ShArKeRs}[3L]",
    channel: "Juan Espinosa V",
    publishedAt: "2009",
    description: "Vídeo de AdeS com foco em jogadas de fly.",
    link: "https://www.youtube.com/watch?v=qf2E78-DAnI",
  },
  {
    id: "tHmHS_D3_q8",
    title: "{FiReS-xXx}-ElReNgO-88-[W] 1ra parte",
    channel: "elrengomosk88",
    publishedAt: "2009",
    description: "Primeira parte de gameplay ligado ao clã.",
    link: "https://www.youtube.com/watch?v=tHmHS_D3_q8",
  },
  {
    id: "vgfB-CJbi9c",
    title: "{FiReS-xXx}-ElReNgO-88-[W] 2da parte",
    channel: "elrengomosk88",
    publishedAt: "2009",
    description: "Segunda parte de gameplay publicado na mesma série.",
    link: "https://www.youtube.com/watch?v=vgfB-CJbi9c",
  },
  {
    id: "AFdxeVuagyw",
    title: "Nubizera se fudendo - parte 2",
    channel: "alanrc2008",
    publishedAt: "2010-05-11",
    description:
      "Upload tardio no canal, usado como marco de fim do ciclo público do clã.",
    link: "https://www.youtube.com/watch?v=AFdxeVuagyw",
  },
];

export const timeline: TimelineEvent[] = [
  {
    year: "2008",
    title: "Primeiro vídeo publicado",
    description:
      "Em 18/08/2008, o clã publica o vídeo 'Worms 4 Mayhem PRO {FiReS-xXx}'.",
  },
  {
    year: "2009",
    title: "Fase de expansão",
    description:
      "Surgem vídeos de líderes, intro HD, Wormatrix e clipes de membros em canais parceiros.",
  },
  {
    year: "2009",
    title: "Site oficial em Webnode",
    description:
      "O domínio fires-xxxclan.webnode.com mantém páginas de membros, vídeos e downloads.",
  },
  {
    year: "2009",
    title: "Relação com cena competitiva",
    description:
      "Página de links do clã cita clans e liga de Worms 4, reforçando contexto competitivo.",
  },
  {
    year: "2010",
    title: "Últimos uploads públicos",
    description:
      "Canal alanrc2008 recebe últimos vídeos em maio de 2010, encerrando o período mais ativo.",
  },
];

export const observedFacts = [
  "Existem vídeos do clã em canais diferentes, com autoria cruzada entre membros.",
  "As descrições dos vídeos antigos citam diretamente os domínios oficiais do clã.",
  "O site arquivado lista membros, links para outros clãs e downloads de modificações.",
  "Há conteúdo em português e espanhol, indicando colaboração internacional.",
];

export const inferredSignals = [
  "Palavras-chave como 'rope' e descrições com foco em fly indicam alinhamento ao estilo roper.",
  "Os vídeos de líderes e de gameplay individual sugerem rotina de treino competitivo.",
  "A presença em liga e páginas de clãs parceiros reforça posicionamento na cena W4M da época.",
];

export const members: ClanMember[] = [
  {
    name: "Alan Rogério Ceratti",
    tag: "{FiReS-xXx}_ALAN_|L|",
    role: "Cofundador",
    country: "Brasil / Criciúma",
    note: "Identificado no roster arquivado de 2009.",
    videoId: "xv6y2nW2Z6k",
  },
  {
    name: "Giovanni Ceratti",
    tag: "___{FiReS-xXx-L}__{-DiDiO-]___",
    role: "Cofundador",
    country: "Brasil / Criciúma",
    note: "Crédito recorrente nos vídeos de líderes.",
    videoId: "oanUo89f9mg",
  },
  {
    name: "Filipe",
    tag: "_|_ThE_|_{FiReS-xXx}L}FiLipE",
    role: "Editor e player",
    country: "Não informado",
    note: "Canal com vídeos Leaders, Wormatrix e Intro HD.",
    videoId: "-kpGQE6at2g",
  },
  {
    name: "Juan Felipe Espinosa Villamil",
    tag: "{FiReS-xXx}AdeS",
    role: "Integrante",
    country: "Colômbia / Bogotá",
    note: "Listagem confirmada no site antigo do clã.",
    videoId: "qf2E78-DAnI",
  },
  {
    name: "Andrés Fernando Santos Gueto",
    tag: "{FiReS-xXx}Ferchoo",
    role: "Integrante",
    country: "Colômbia / Cartagena",
    note: "Listagem confirmada no roster arquivado.",
    videoId: "69DHyivMAWM",
  },
  {
    name: "David Natanel Romano",
    tag: "{FiReS-xXx}_Aton_[D][R]",
    role: "Integrante",
    country: "Argentina / Buenos Aires",
    note: "Vídeo próprio associado ao clã no YouTube.",
    videoId: "vctkNYeF2_4",
  },
  {
    name: "Deivid",
    tag: "{FiReS-xXx}Deivid",
    role: "Integrante histórico",
    country: "Não informado",
    note: "Aparece no roster e em mensagens do site antigo.",
    videoId: "sD24RUSGhVE",
  },
  {
    name: "Danilo",
    tag: "{FiReS-xXx}Danilo",
    role: "Integrante histórico",
    country: "Não informado",
    note: "Citado na lista de membros arquivada.",
    videoId: "ohn4riPoFH8",
  },
];

export const archiveLinks: ArchiveLink[] = [
  {
    label: "Canal alanrc2008",
    description: "Principal base de vídeos com uploads de 2008 a 2010.",
    href: "https://www.youtube.com/@alanrc2008",
  },
  {
    label: "Canal FilipeDiDiOAlan",
    description: "Intro HD, Leaders e Wormatrix com assinatura do clã.",
    href: "https://www.youtube.com/@FilipeDiDiOAlan",
  },
  {
    label: "Site Webnode (Wayback)",
    description: "Página oficial do clã com seções de membros, vídeos e downloads.",
    href: "https://web.archive.org/web/20090926222211/http://fires-xxxclan.webnode.com/",
  },
  {
    label: "Página de vídeos (Wayback)",
    description: "Lista dos vídeos oficiais do clã em 2009.",
    href: "https://web.archive.org/web/20090926222244/http://fires-xxxclan.webnode.com/videos/",
  },
  {
    label: "Membros (Wayback)",
    description: "Roster com tags, nacionalidades e notas de atividade.",
    href: "https://web.archive.org/web/20090927160358/http://fires-xxxclan.webnode.com/membros/",
  },
  {
    label: "Site anterior mindenkilapja (Wayback)",
    description: "Registro do período inicial com palavras-chave do clã e rope.",
    href: "https://web.archive.org/web/20090603032706/http://fires-xxx.mindenkilapja.hu/",
  },
];
