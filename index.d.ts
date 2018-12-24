
declare namespace DevTools {
  export default function devToolsMiddleware(store: any): (next: () => void) => (action: string, payload: any[]) => void
}

export = DevTools