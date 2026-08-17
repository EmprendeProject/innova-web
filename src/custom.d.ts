/// <reference types="vite/client" />

// PNG en mayúsculas (archivos legacy del proyecto)
declare module '*.PNG' {
  const src: string
  export default src
}

// VSL Premium Player — web component externo
declare namespace React {
  namespace JSX {
    interface IntrinsicElements {
      'vsl-player': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { 'data-id'?: string },
        HTMLElement
      >
    }
  }
}
