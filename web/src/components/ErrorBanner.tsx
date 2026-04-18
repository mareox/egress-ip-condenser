interface ErrorBannerProps {
  message: string
  onDismiss?: () => void
}

export default function ErrorBanner({ message, onDismiss }: ErrorBannerProps) {
  return (
    <div
      role="alert"
      className="flex items-start gap-2 rounded border border-gtm-unit42Red/30 bg-gtm-unit42Red/10
                 px-3 py-2 text-sm text-gtm-unit42Red
                 dark:border-gtm-unit42Red/20 dark:bg-gtm-unit42Red/10 dark:text-[#e05535]"
    >
      <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      </svg>
      <span className="flex-1">{message}</span>
      {onDismiss && (
        <button
          onClick={onDismiss}
          aria-label="Dismiss"
          className="ml-2 text-gtm-unit42Red/70 hover:text-gtm-unit42Red transition-colors"
        >
          ×
        </button>
      )}
    </div>
  )
}
