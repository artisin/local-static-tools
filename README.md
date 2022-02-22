# README

Local dev app/tools - cuz flaky damned internetz

Just throw it in `sites/` and serve

---

source: [`https://github.com/kevinpollet/serve`](https://github.com/kevinpollet/serve)

- HTTP/2 and TLS support.
- Custom Error pages.
- Basic HTTP authentication.
- Hide dot files by default.
- Directory listing is disabled by default.
- Encoding negotiation with support of [gzip](https://www.gzip.org/), [Deflate](https://en.wikipedia.org/wiki/DEFLATE)
  and [Brotli](https://en.wikipedia.org/wiki/Brotli) compression algorithms.


```shell
Usage: serve [options]

Options:
-addr       Sets the server address. Default is "127.0.0.1:8080".
-auth       Sets the basic auth credentials (password must be hashed with bcrypt and escaped with '').
-auth-file  Sets the basic auth credentials following the ".htpasswd" format.
-dir        Sets the directory containing the files to serve. Default is ".".
-cert       Sets the TLS certificate.
-key        Sets the TLS private key.
-help       Prints this text.
```
