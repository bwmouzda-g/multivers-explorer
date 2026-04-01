// src/services/characterApi.ts
import type { ApiResponse, Character } from "../types/character";

const BASE = "https://rickandmortyapi.com/api";

export async function fetchCharacters(url: string): Promise<ApiResponse> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Erreur ${res.status}`);
  return res.json();
}

export async function fetchCharacter(id: string): Promise<Character> {
  const res = await fetch(`${BASE}/character/${id}`);
  if (!res.ok) throw new Error("Personnage introuvable");
  return res.json();
}

export const FIRST_PAGE = `${BASE}/character`;
