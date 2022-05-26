package main

import (
	"context"
	"fmt"
	"github.com/tencentyun/scf-go-lib/cloudevents/scf"
	"github.com/tencentyun/scf-go-lib/cloudfunction"
)

func hello(ctx context.Context, req scf.APIGatewayProxyRequest) (string, error) {
	fmt.Println("Context:", ctx)
	fmt.Println("APIGateway Response:", req)
	return fmt.Sprintf("Hello %s!", ctx), nil
}

func main() {
	// Make the handler available for Remote Procedure Call by Cloud Function
	cloudfunction.Start(hello)
}
