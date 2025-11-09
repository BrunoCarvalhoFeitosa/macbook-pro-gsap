import { create } from "zustand"

interface MacbookState {
  color: string
  setColor: (color: string) => void
  scale: number
  setScale: (scale: number) => void
  reset: () => void
}

export const useMacbookStore = create<MacbookState>((set) => ({
  color: "#adb5bd",
  setColor: (color) => set({ color }),
  scale: 0.085,
  setScale: (scale) => set({ scale }),
  reset: () => set({ color: "#adb5bd", scale: 0.085 })
}))