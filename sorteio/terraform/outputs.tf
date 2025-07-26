output "lambda_function_name" {
  value = aws_lambda_function.prize.function_name
}

output "api_invoke_url" {
  description = "URL para chamar sua API"
  value       = "${aws_api_gateway_deployment.deployment.invoke_url}"
}
