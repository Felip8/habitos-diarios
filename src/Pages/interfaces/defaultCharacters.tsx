import Cavalo from "../../assets/cavalo.jpg";
import Geometry from "../../assets/geometry.png";
import Guts from "../../assets/guts.png";
import Griffith from "../../assets/griffith.png";

export interface IDefaultCharacters {
  id: number;
  foto: string;
}

export const listaDePersonagensPadrao: IDefaultCharacters[] = [
  {
    id: 1,
    foto: Cavalo,
  },

  {
    id: 2,
    foto: Geometry,
  },

  {
    id: 3,
    foto: Guts,
  },

  {
    id: 4,
    foto: Griffith,
  },
];
