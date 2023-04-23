# Build the backend container
FROM golang:1.17-alpine as backend-builder
ENV PORT=8888
RUN apk --no-cache add git
WORKDIR /app
COPY ./go.mod ./go.sum ./
RUN go mod download
COPY ./* ./
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o api .

EXPOSE ${PORT}
HEALTHCHECK CMD wget --no-verbose --tries=1 --spider http://localhost:${PORT}/health || exit 1
CMD ["./api"]