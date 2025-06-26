export function startErrorTimer(setError, duration = 5000) {
	if (typeof setError !== "function") return;

	if (startErrorTimer._timer) clearTimeout(startErrorTimer._timer);
	startErrorTimer._timer = setTimeout(() => setError(""), duration);
}
