variable "region" {
  description = "Região AWS"
  type        = string
  default     = "us-east-1"
}

variable "function_name" {
  description = "Aula Jogo"
  type        = string
  default     = "demo_prize_function"
}

variable "runtime" {
  description = "Runtime da Lambda"
  type        = string
  default     = "nodejs18.x"
}

variable "handler" {
  description = "Ponto de entrada da Lambda"
  type        = string
  default     = "handler.handler"
}
