/* The AskAILab mark: a conical flask holding a question mark.
 *
 * The flask is the method — everything on this site is an experiment with a
 * measured result — and the question mark is what the experiment starts from:
 * you ask, the lab answers. Drawn as strokes in currentColor so one file
 * serves the blue-on-white header, the white-on-blue landing badge and
 * anything else, with no per-context variants.
 *
 * Two stroke widths on purpose: the glassware is line work, the question mark
 * is the statement, so it stays legible when the mark is rendered at 20px.
 */
export function Mark({ className = 'h-5 w-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* rim, neck, shoulders and base as one continuous outline */}
      <path
        strokeWidth={1.7}
        d="M9.2 2.9h5.6M10.3 2.9v6.2L5.1 18.4a1.4 1.4 0 0 0 1.2 2.1h11.4a1.4 1.4 0 0 0 1.2-2.1L13.7 9.1V2.9"
      />
      {/* the contents: a question mark where the liquid line would sit */}
      <path strokeWidth={1.8} d="M10.1 14a1.9 1.9 0 1 1 3 1.4c-.6.25-1.1.45-1.1.7" />
      {/* the dot, as a zero-length stroke rounded into a circle by the linecap */}
      <path strokeWidth={1.8} d="M12 18.3h.01" />
    </svg>
  )
}
