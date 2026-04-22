const base = (id: string, w = 1400, q = 80) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&auto=format&fit=crop`;

export const images = {
  heroStudio: base("1717500251741-cdbc93342d5a", 2200),
  heroReformer: base("1591258370814-01609b341790", 1600),
  studioInterior: base("1717500251997-80b234166d00", 2200),
  studioEquipment: base("1761971975047-6426232852ed", 1600),
  studioReformers: base("1717500251825-b397c67692a3", 2200),
  servicePilates: base("1717500252573-d31d4bf5ddf1", 1200),
  serviceRestore: base("1717500252297-b09508db7ceb", 1200),
  servicePrenatal: base("1747240549807-fc3962949818", 1200),
};

const avatar = (seed: string) => `https://i.pravatar.cc/800?u=${seed}`;

export const portraits = [
  avatar("emma-pilates-studio17-founder"),
];
