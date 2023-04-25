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

	port := os.Getenv("PORT")
	if port == "" {
		port = "8888"
	}

	router.Run(":" + port)
}
