class FetchError extends Error {
  constructor(response = null, rawBody = "") {
    super("FetchError");
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FetchError);
    }
    console.log("response", response);
    this.name = "FetchError";
    this.status = response.status || null;
    this.statusText = response.statusText || null;
    this.type = response.type || null;
    this.url = response.url || null;
    this.rawBody = rawBody || null;
    this.message = `[${this.type}]${this.url} : ${response.status}`;
    this.response = response;
  }
}

export default FetchError;
