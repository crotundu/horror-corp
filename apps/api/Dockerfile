# Build the backend container
FROM golang:1.17-alpine as backend-builder
WORKDIR /app
ENV PORT=8888
RUN apk --no-cache add git
COPY apps/api/go.mod apps/api/go.sum ./
RUN go mod download
COPY apps/api/* ./
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o api .

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /app
COPY --from=backend-builder /app/api /app/shop.json ./
EXPOSE ${PORT}
CMD ["./api"]