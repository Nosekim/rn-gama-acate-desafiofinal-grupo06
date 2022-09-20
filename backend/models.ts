interface Perfil {
  id: string;
  name: string;
  email: string;
  photo: string;
  category: string[];
  state: string;
  description: string;
  stack: { title: string; xp: number }[];
}
