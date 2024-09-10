class apiError extends Error{
    constructor(satusCode,
         message="something went wrong",
        errors=[],
    stack=""){
        super(message)
        this.statuCode = satusCode,
        this.data= null,
        this.message=message,
        this.success = false
        this.errors=errors


        if(stack){
                this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}
export  default apiError