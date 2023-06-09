package main

import (
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	router.GET("/health", func(ctx *gin.Context) {
		ctx.Header("Access-Control-Allow-Origin", "*");
		ctx.JSON(http.StatusOK, gin.H{
			"message": "ok",
		})
	})
	// generate api route called /shop that serves a local json file
	router.GET("/shop", func(ctx *gin.Context) {
		ctx.Header("Access-Control-Allow-Origin", "*");
		ctx.File("./shop.json")
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "8888"
	}

	router.Run(":" + port)
}
