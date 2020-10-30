import path from "path";

export const rootResolve = (...segments: string[]) => path.resolve(process.cwd(), ...segments);