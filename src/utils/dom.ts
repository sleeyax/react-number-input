import { Booleanish, EventKeys } from './types'

export const cx = (...classNames: any[]) => classNames.filter(Boolean).join(" ")
export const dataAttr = (condition: boolean | undefined) =>
  (condition ? "" : undefined) as Booleanish

export const ariaAttr = (condition: boolean | undefined) =>
  condition ? true : undefined

export function isElement(el: any): el is Element {
  return (
    el != null &&
    typeof el == "object" &&
    "nodeType" in el &&
    el.nodeType === Node.ELEMENT_NODE
  )
}

export function getOwnerDocument(node?: Element | null): Document {
  return isElement(node) ? node.ownerDocument ?? document : document
}

export function getOwnerWindow(node?: Element | null): typeof globalThis {
  return isElement(node)
    ? getOwnerDocument(node)?.defaultView ?? window
    : window
}

export function canUseDOM(): boolean {
  return !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  )
}

export const isBrowser = canUseDOM()

export function isHTMLElement(el: any): el is HTMLElement {
  if (!isElement(el)) {
    return false
  }

  const win = el.ownerDocument.defaultView ?? window
  return el instanceof win.HTMLElement
}


/**
 * Get the normalized event key across all browsers
 * @param event keyboard event
 */
 export function normalizeEventKey(
  event: Pick<KeyboardEvent, "key" | "keyCode">,
) {
  const { key, keyCode } = event

  const isArrowKey =
    keyCode >= 37 && keyCode <= 40 && key.indexOf("Arrow") !== 0

  const eventKey = isArrowKey ? `Arrow${key}` : key

  return eventKey as EventKeys
}
