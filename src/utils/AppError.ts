// Classe usada para criar erros personalizados na aplicação
class AppError {
    // Declara que toda instância terá uma mensagem e um código de status
    message: string
    statusCode: number

    // Construtor recebe a mensagem do erro e um código de status opcional
    constructor(message: string, statusCode: number = 400) {
        // Define a mensagem do erro
        this.message = message

        // Define o código de status HTTP (padrão = 400 Bad Request)
        this.statusCode = statusCode
    }
}

// Exporta a classe para ser usada em outras partes do projeto
export { AppError }
