import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'

const VSL_SCRIPT = 'https://vsl.niuvixtool.com/embed/vsl-engine.js'

interface VslPlayerProps {
  dataId: string
  className?: string
  style?: CSSProperties
}

/**
 * VslPlayer — monta el <vsl-player> solo DESPUES de que
 * el script externo cargue, evitando el problema de timing
 * que deja el custom element vacio en React.
 */
export function VslPlayer({ dataId, className, style }: VslPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const mountPlayer = () => {
      container.innerHTML = ''
      const el = document.createElement('vsl-player')
      el.setAttribute('data-id', dataId)
      container.appendChild(el)
    }

    if (customElements.get('vsl-player')) {
      mountPlayer()
      return
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="' + VSL_SCRIPT + '"]'
    )

    if (existingScript) {
      customElements.whenDefined('vsl-player').then(mountPlayer)
      return
    }

    const script = document.createElement('script')
    script.src = VSL_SCRIPT
    script.async = true
    script.onload = () => {
      customElements.whenDefined('vsl-player').then(mountPlayer)
    }
    document.head.appendChild(script)
  }, [dataId])

  return <div ref={containerRef} className={className} style={style} />
}
